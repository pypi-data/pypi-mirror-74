import argparse
import os
import pickle
from numbers import Number
from typing import Optional

import numpy as np
import torch
from torch.optim.optimizer import Optimizer
from tqdm import tqdm

import boilr.data
from boilr.nn.utils import print_num_params
from boilr.options import get_option
from boilr.utils.meta import ObjectWithArgparsedArgs
from boilr.utils.summarize import SummarizerCollection
from boilr.utils.viz import save_image_grid, save_image_grid_reconstructions


class BaseExperimentManager(ObjectWithArgparsedArgs):
    """Base class for experiment manager.

    If `args` is not given, all config parameters are set based on experiment
    defaults and user input, using `argparse`.

    Args:
        args (argparse.Namespace, optional): Experiment configuration.
    """

    def __init__(self, args: Optional[argparse.Namespace] = None):
        super(BaseExperimentManager, self).__init__(args=args)

        self._dataloaders = None
        self._model = None
        self._optimizer = None
        self._device = None
        self._run_description = self._make_run_description(self.args)

    @classmethod
    def _define_args_defaults(cls) -> dict:
        defaults = super(BaseExperimentManager, cls)._define_args_defaults()
        defaults.update(
            batch_size=None,
            test_batch_size=None,
            lr=None,
            max_grad_norm=None,
            max_epochs=10000000,
            max_steps=10000000000,
            seed=54321,
            train_log_every=1000,
            test_log_every=1000,
            checkpoint_every=10000,
            keep_checkpoint_max=3,
            resume="",
        )
        return defaults

    def _add_args(self, parser: argparse.ArgumentParser) -> None:

        super(BaseExperimentManager, self)._add_args(parser)

        parser.add_argument('--batch-size',
                            type=int,
                            default=self._default_args['batch_size'],
                            metavar='N',
                            dest='batch_size',
                            help='training batch size')

        parser.add_argument('--test-batch-size',
                            type=int,
                            default=self._default_args['test_batch_size'],
                            metavar='N',
                            dest='test_batch_size',
                            help='test batch size')

        parser.add_argument('--lr',
                            type=float,
                            default=self._default_args['lr'],
                            metavar='LR',
                            dest='lr',
                            help='learning rate')

        parser.add_argument('--max-grad-norm',
                            type=float,
                            default=self._default_args['max_grad_norm'],
                            metavar='NORM',
                            dest='max_grad_norm',
                            help='maximum global norm of the gradient '
                            '(clipped if larger)')

        parser.add_argument('--seed',
                            type=int,
                            default=self._default_args['seed'],
                            metavar='N',
                            dest='seed',
                            help='random seed')

        parser.add_argument('--tr-log-every',
                            type=int,
                            default=self._default_args['train_log_every'],
                            metavar='N',
                            dest='train_log_every',
                            help='log training metrics every this number of '
                            'training steps')

        parser.add_argument('--ts-log-every',
                            type=int,
                            default=self._default_args['test_log_every'],
                            metavar='N',
                            dest='test_log_every',
                            help="log test metrics every this number of "
                            "training steps. It must be a multiple of "
                            "'--tr-log-every'")

        parser.add_argument('--ts-img-every',
                            type=int,
                            metavar='N',
                            dest='test_imgs_every',
                            help="save test images every this number of "
                            "training steps. It must be a multiple of "
                            "'--ts-log-every'. Default: same as "
                            "'--ts-log-every'")

        parser.add_argument('--checkpoint-every',
                            type=int,
                            default=self._default_args['checkpoint_every'],
                            metavar='N',
                            dest='checkpoint_every',
                            help='save model checkpoint every this number of '
                            'training steps')

        parser.add_argument('--keep-checkpoint-max',
                            type=int,
                            default=self._default_args['keep_checkpoint_max'],
                            metavar='N',
                            dest='keep_checkpoint_max',
                            help='keep at most this number of most recent '
                            'model checkpoints')

        parser.add_argument('--max-steps',
                            type=int,
                            default=self._default_args['max_steps'],
                            metavar='N',
                            dest='max_steps',
                            help='max number of training steps')

        parser.add_argument('--max-epochs',
                            type=int,
                            default=self._default_args['max_epochs'],
                            metavar='N',
                            dest='max_epochs',
                            help='max number of training epochs')

        parser.add_argument('--nocuda',
                            action='store_true',
                            dest='no_cuda',
                            help='do not use cuda')

        parser.add_argument('--descr',
                            type=str,
                            default='',
                            metavar='STR',
                            dest='additional_descr',
                            help='additional description for experiment name')

        parser.add_argument('--dry-run',
                            action='store_true',
                            dest='dry_run',
                            help='do not save anything to disk')

        parser.add_argument('--resume',
                            type=str,
                            metavar='NAME',
                            default=self._default_args['resume'],
                            dest='resume',
                            help="load the run with this name and "
                            "resume training")

    @classmethod
    def _check_args(cls, args: argparse.Namespace) -> argparse.Namespace:
        args = super(BaseExperimentManager, cls)._check_args(args)

        # Default: save images at each test
        if args.test_imgs_every is None:
            args.test_imgs_every = args.test_log_every

        if args.test_imgs_every % args.test_log_every != 0:
            msg = ("'test_imgs_every' must be a multiple of 'test_log_every',"
                   " but current values are {img} and {log}")
            msg = msg.format(img=args.test_imgs_every, log=args.test_log_every)
            raise ValueError(msg)

        # This is not necessary but there's no reason not to have it like this,
        # and it usually looks horrible otherwise.
        if args.test_log_every % args.train_log_every != 0:
            msg = ("'test_log_every' must be a multiple of 'train_log_every',"
                   " but current values are {tr} and {ts}")
            msg = msg.format(tr=args.test_log_every, ts=args.train_log_every)
            raise ValueError(msg)

        if args.max_grad_norm is not None:
            assert args.max_grad_norm > 0.0

        return args

    @staticmethod
    def _make_run_description(args: argparse.Namespace) -> str:
        """Creates a string description of the run.

        It is used in the names of the logging folders. By default it returns
        the empty string.

        Args:
            args (argparse.Namespace): Experiment configuration.

        Returns:
            (str): The run description.
        """
        return ""

    def _make_datamanager(self) -> boilr.data.BaseDatasetManager:
        """Creates a dataset manager to wrap data loaders.

        The dataset manager should subclass `boilr.data.BaseDatasetManager`.

        Returns:
            dataset_manager (boilr.data.BaseDatasetManager)
        """
        raise NotImplementedError

    def _make_model(self) -> torch.nn.Module:
        """Creates a model."""
        raise NotImplementedError

    def _make_optimizer(self) -> Optimizer:
        """Creates the optimizer."""
        raise NotImplementedError

    def setup(self,
              device: torch.device,
              checkpoint_folder: Optional[str] = None) -> None:
        """Sets up the experiment.

        Loads the dataset, creates the model, loads the model weights if a
        checkpoint folder is provided, and creates the optimizer.

        Args:
            device (torch.device)
            checkpoint_folder (str, optional)
        """

        self._device = device

        # If checkpoint folder is given, load model from there to resume
        resume = checkpoint_folder is not None

        # Dataset
        print("Getting dataset ready...")
        self._dataloaders = self._make_datamanager()
        print("Data shape: {}".format(self.dataloaders.data_shape))
        print("Train/test set size: {}/{}".format(
            len(self.dataloaders.train.dataset),
            len(self.dataloaders.test.dataset),
        ))

        # Model
        print("Creating model...")
        self._model = self._make_model().to(self.device)

        # Print model overview
        print_num_params(self.model)

        # Load weights if resuming training
        if resume:
            self.load_model(checkpoint_folder, step=None)

        # Optimizer
        self._optimizer = self._make_optimizer()

    def load_args_from_pickle(self, config_pickle_path: str) -> None:
        """Loads experiment config from file when resuming training.

        Args:
            config_pickle_path (str)
        """
        with open(config_pickle_path, 'rb') as file:
            args = pickle.load(file)
        assert not args.dry_run  # this would not make sense
        self._args = args

    def load_model(self,
                   checkpoint_folder: str,
                   step: Optional[int] = None) -> None:
        """Loads model weights from a checkpoint in the specified folder.

        If step is given, it attempts to load the checkpoint at that step.
        The weights are loaded with `map_location=device`, where device is the
        current device of this experiment.

        Args:
            checkpoint_folder (str)
            step (int, optional)
        """
        self.model.load(checkpoint_folder, self.device, step=step)

    def forward_pass(self,
                     x: torch.Tensor,
                     y: Optional[torch.Tensor] = None) -> dict:
        """Simple single-pass model evaluation.

        It consists of a forward pass and computation of all necessary losses
        and metrics.

        Args:
            x (torch.Tensor): data
            y (torch.Tensor, optional): labels

        Returns:
            metrics (dict)
        """
        raise NotImplementedError

    def post_backward_callback(self) -> None:
        """Callback method, called after backward pass and before step."""
        pass

    @classmethod
    def get_metrics_dict(cls, results: dict) -> dict:
        """Returns metrics given a dictionary of results.

        Given a dict of results, returns a dict of metrics to be given to
        summarizers. Keys are also used as names for tensorboard logging.

        In the base implementation, keys are simply copied and used as names
        for tensorboard.

        Only scalars accepted, non-scalars are discarded. Actually, anything
        that either is a scalar or has the method `item()`. That should include
        Python scalars, numpy scalars, torch scalars, numpy and torch
        arrays/tensors with one element.

        Override to customize translation from results to dictionary of
        scalar metrics.

        Args:
            results (dict)

        Returns:
            metrics_dict (dict)
        """
        metrics_dict = {}
        for k in results:
            x = results[k]
            if isinstance(x, Number):
                metrics_dict[k] = x
                continue
            try:
                metrics_dict[k] = x.item()
            except (AttributeError, ValueError):  # is this enough?
                pass
        return metrics_dict

    @classmethod
    def train_log_str(cls,
                      summaries: dict,
                      step: int,
                      epoch: Optional[int] = None) -> str:
        """Returns log string for training metrics."""
        if get_option('show_progress_bar'):
            s = "       "
        else:
            s = "train: "
        s += "[step {}]".format(step)
        for k in summaries:
            s += "  {key}={value:.5g}".format(key=k, value=summaries[k])
        return s

    @classmethod
    def test_log_str(cls,
                     summaries: dict,
                     step: int,
                     epoch: Optional[int] = None) -> str:
        """Returns log string for test metrics."""
        if get_option('show_progress_bar'):
            s = "       "
        else:
            s = "test : "
        if epoch is not None:
            s += "[step {}, epoch {}]".format(step, epoch)
        for k in summaries:
            s += "  {key}={value:.5g}".format(key=k, value=summaries[k])
        return s

    def test_procedure(self, **kwargs) -> dict:
        """Executes the experiment's test procedure and returns results.

        This typically includes collecting metrics on the test set using
        forward_pass(). For example in variational inference we might be
        interested in repeating this many times to derive the importance-
        weighted ELBO.

        The returned summaries are:
        - passed to test_log_str() to get the string that will be printed to
          output (by default all summaries are printed)
        - saved to the history of test metrics, which is saved to disk
        - logged to tensorboard (with 'validation_' prepended to the key)

        Returns:
            summaries (dict)
        """
        raise NotImplementedError

    def save_images(self, img_folder: str) -> None:
        """Saves test images.

        For example, in VAEs, input and reconstruction pairs, or sample from
        the model prior. Images are meant to be saved to the image folder
        that is automatically created by the Trainer.

        By default, do nothing.

        Args:
            img_folder (str): Folder to store images
        """
        pass

    @property
    def run_description(self) -> str:
        """String description of the run, used e.g. for the log folder."""
        return self._run_description

    @property
    def dataloaders(self) -> boilr.data.BaseDatasetManager:
        """Wrapper for train and test data loaders."""
        return self._dataloaders

    @property
    def model(self) -> torch.nn.Module:
        """Model."""
        return self._model

    @property
    def optimizer(self) -> Optimizer:
        """Optimizer."""
        return self._optimizer

    @property
    def device(self) -> torch.device:
        return self._device


class VAEExperimentManager(BaseExperimentManager):
    """Subclass of experiment manager for variational autoencoders.

    This version:
    - implements a default test_procedure for VAEs,
    - defines command line arguments and specified defaults (which can be
      overridden by subclasses),
    - implements default methods for saving model samples (assuming the model
      is a generative model) and for saving pairs of input-reconstruction
      images (assuming it is an autoencoder).

    See the superclass docs for more details.
    """

    def test_procedure(self, iw_samples: Optional[int] = None):
        """Executes the experiment's test procedure and returns results.

        Collects variational inference metrics on the test set using
        forward_pass(), and repeat to derive the importance-weighted ELBO.

        Args:
            iw_samples (int, optional): number of samples for the importance-
                weighted ELBO. The other metrics are also averaged over all
                these samples, yielding a more accurate estimate.

        Returns:
            summaries (dict)
        """

        # Shorthand
        test_loader = self.dataloaders.test
        step = self.model.global_step
        args = self.args
        n_test = len(test_loader.dataset)

        # If it's time to estimate log likelihood, use many samples.
        # If given, use the given number.
        if iw_samples is None:
            iw_samples = 1
            if step % args.loglikelihood_every == 0 and step > 0:
                iw_samples = args.loglikelihood_samples

        # Setup
        summarizers = SummarizerCollection(mode='sum')
        show_progress = get_option('show_progress_bar')
        if show_progress:
            progress = tqdm(total=len(test_loader) * iw_samples, desc='test ')
        all_elbo_sep = torch.zeros(n_test, iw_samples)

        # Do test
        for batch_idx, (x, y) in enumerate(test_loader):
            for i in range(iw_samples):
                outputs = self.forward_pass(x, y)

                # elbo_sep shape (batch size,)
                i_start = batch_idx * args.test_batch_size
                i_end = (batch_idx + 1) * args.test_batch_size
                all_elbo_sep[i_start:i_end, i] = outputs['elbo_sep'].detach()

                metrics_dict = self.get_metrics_dict(outputs)
                multiplier = (x.size(0) / n_test) / iw_samples
                for k in metrics_dict:
                    metrics_dict[k] *= multiplier
                summarizers.add(metrics_dict)

                if show_progress:
                    progress.update()

        if show_progress:
            progress.close()

        if iw_samples > 1:
            # Shape (test set size,)
            elbo_iw = torch.logsumexp(all_elbo_sep, dim=1)
            elbo_iw = elbo_iw - np.log(iw_samples)

            # Mean over test set (scalar)
            elbo_iw = elbo_iw.mean().item()
            key = 'elbo/elbo_IW_{}'.format(iw_samples)
            summarizers.add({key: elbo_iw})

        summaries = summarizers.get_all(reset=True)
        return summaries

    @classmethod
    def _define_args_defaults(cls) -> dict:
        defaults = super(VAEExperimentManager, cls)._define_args_defaults()
        defaults.update(
            loglikelihood_every=50000,
            loglikelihood_samples=100,
        )
        return defaults

    def _add_args(self, parser: argparse.ArgumentParser) -> None:

        super(VAEExperimentManager, self)._add_args(parser)

        parser.add_argument('--ll-every',
                            type=int,
                            default=self._default_args['loglikelihood_every'],
                            metavar='N',
                            dest='loglikelihood_every',
                            help='evaluate log likelihood every this number '
                            'of training steps')

        parser.add_argument('--ll-samples',
                            type=int,
                            default=self._default_args['loglikelihood_samples'],
                            metavar='N',
                            dest='loglikelihood_samples',
                            help='number of importance-weighted samples to '
                            'evaluate log likelihood')

    @classmethod
    def _check_args(cls, args: argparse.Namespace) -> argparse.Namespace:

        args = super(VAEExperimentManager, cls)._check_args(args)

        if args.loglikelihood_every % args.test_log_every != 0:
            msg = ("'loglikelihood_every' must be a multiple of "
                   "'test_log_every', but current values are {ll} and {log}")
            msg = msg.format(ll=args.loglikelihood_every,
                             log=args.test_log_every)
            raise ValueError(msg)

        return args

    def generate_and_save_samples(self,
                                  filename: str,
                                  nrows: Optional[int] = 8) -> None:
        """Default method to generate and save model samples.

        Args:
            filename (str): file name.
            nrows (int, optional): number of rows (and columns) of images.
        """
        samples = self.model.sample_prior(nrows**2)
        save_image_grid(samples, filename, nrows=nrows)

    def generate_and_save_reconstructions(self,
                                          x: torch.Tensor,
                                          filename: str,
                                          nrows: Optional[int] = 8) -> None:
        """Default method to generate and save input/reconstruction pairs.

        Args:
            x (torch.Tensor): a Tensor of input images (N, channels, H, W)
            filename (str): file name.
            nrows (int, optional): number of rows (and columns) of images.
        """
        n_img = nrows**2 // 2
        if x.shape[0] < n_img:
            msg = ("{} data points required, but given batch has size {}. "
                   "Please use a larger batch.".format(n_img, x.shape[0]))
            raise RuntimeError(msg)
        x = x.to(self.device)
        outputs = self.forward_pass(x)

        # Try to get reconstruction from different sources in order
        recons = None
        possible_recons_names = ['out_recons', 'out_mean', 'out_sample']
        for key in possible_recons_names:
            try:
                recons = outputs[key]
                if recons is not None:
                    break  # if we found it and it's not None
            except KeyError:
                pass
        if recons is None:
            msg = ("Couldn't find reconstruction in the output dictionary. "
                   "Tried keys: {}".format(possible_recons_names))
            raise RuntimeError(msg)

        # Pick required number of images
        x = x[:n_img]
        recons = recons[:n_img]

        # Save inputs and reconstructions in a grid
        save_image_grid_reconstructions(x, recons, filename)

    def save_images(self, img_folder: str, nrows: Optional[int] = 8) -> None:
        """
        Default method to save test images for VAE-type models.

        Saves samples from the generative model, and input/reconstruction
        pairs from the test set.

        Args:
            img_folder (str): Folder to store images
            nrows (int, optional): number of rows (and columns) of images. Total
                number of sub-images in each grid will be nrows**2.
        """

        step = self.model.global_step

        # Save model samples
        fname = os.path.join(img_folder, 'sample_' + str(step) + '.png')
        self.generate_and_save_samples(fname, nrows)

        # Get first test batch
        (x, _) = next(iter(self.dataloaders.test))

        # Save model original/reconstructions
        fname = os.path.join(img_folder, 'reconstruction_' + str(step) + '.png')

        self.generate_and_save_reconstructions(x, fname, nrows)
