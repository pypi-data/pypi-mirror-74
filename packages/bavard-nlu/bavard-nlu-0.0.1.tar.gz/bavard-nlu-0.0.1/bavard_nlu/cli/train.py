import json

import click

from bavard_nlu.model import NLUModel


@click.command()
@click.option('--train-file', type=click.Path(exists=True), help="Path to the tf-record file")
@click.option('--agent-data-file', type=click.Path(exists=True), help="Agent data file")
@click.option('--saved-model-dir', type=click.Path(exists=False), help="Directory in which to save model checkpoints")
@click.option('--batch-size', type=int, default=4)
@click.option('--steps-per-epoch', type=int, default=300)
@click.option('--epochs', type=int, default=1)
def train(train_file: str,
          agent_data_file: str,
          saved_model_dir: str,
          batch_size: int,
          steps_per_epoch: int,
          epochs: int):

    with open(agent_data_file) as f:
        agent_data = json.load(f)
    intents = []
    for x in agent_data['intents']:
        intents.append(x['intent'])
    tag_types = agent_data['tagTypes']

    model = NLUModel(intents=intents,
                     tag_types=tag_types,
                     max_seq_len=200,
                     saved_model_dir=saved_model_dir)
    model.build_and_compile_model()
    model.train(training_path=train_file, batch_size=batch_size, steps_per_epoch=steps_per_epoch, epochs=epochs)
