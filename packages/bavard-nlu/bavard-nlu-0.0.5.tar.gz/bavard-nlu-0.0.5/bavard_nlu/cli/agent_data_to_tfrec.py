import os

import click
import tensorflow_hub as hub
import json
from official.nlp.bert import tokenization

from bavard_nlu.data_preprocessing.data_preprocessor import DataPreprocessor


@click.command()
@click.option('--json-path', type=click.Path(exists=True), required=True)
@click.argument('output-path', type=click.Path())
def agent_data_to_tfrecord(json_path: str, output_path: str):
    albert_layer = hub.KerasLayer("https://tfhub.dev/tensorflow/albert_en_base/1", trainable=False)
    sp_model_file = albert_layer.resolved_object.sp_model_file.asset_path.numpy()
    tokenizer = tokenization.FullSentencePieceTokenizer(sp_model_file)

    print("Processing JSON Data.")

    with open(json_path) as f:
        data = json.load(f)
        processed_data = DataPreprocessor.preprocess(agent_data=data, tokenizer=tokenizer)

    print(f'Writing TF records to {os.path.basename(output_path)}')
    processed_data.write_tfrecord(filename=output_path, max_seq_len=200)

