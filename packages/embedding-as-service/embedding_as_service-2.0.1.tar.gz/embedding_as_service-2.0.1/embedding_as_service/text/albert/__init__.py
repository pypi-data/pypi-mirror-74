from typing import List, Dict, Tuple, Optional, Union
import numpy as np

from embedding_as_service.text import Embedding
import tensorflow as tf
import tensorflow_hub as hub
from tqdm import tqdm
from .tokenization import FullTokenizer

from embedding_as_service.utils import POOL_FUNC_MAP


class Embeddings(object):

    EMBEDDING_MODELS: List[Embedding] = [
                        Embedding(name='albert_base',
                                  dimensions=768,
                                  corpus_size='3300M',
                                  vocabulary_size='30522(sub-word)',
                                  download_url='https://tfhub.dev/google/albert_base/1?tf-hub-format=compressed',
                                  format='tar.gz',
                                  architecture='Transformer, Layers=12, Hidden = 768, heads = 12',
                                  trained_data='BooksCorpus(800M) English Wikipedia (2500M) words',
                                  language='en'),

                        Embedding(name='albert_large',
                                  dimensions=1024,
                                  corpus_size='3300M',
                                  vocabulary_size='30522(sub-word)',
                                  download_url='https://tfhub.dev/google/albert_large/1?tf-hub-format=compressed',
                                  format='tar.gz',
                                  architecture='Transformer Layers=24, Hidden = 1024, heads = 12',
                                  trained_data='BooksCorpus(800M) English Wikipedia (2500M) words',
                                  language='en'),

                        Embedding(name='albert_xlarge',
                                  dimensions=2048,
                                  corpus_size='3300M',
                                  vocabulary_size='30522 (sub-word)',
                                  download_url='https://tfhub.dev/google/albert_xlarge/1?tf-hub-format=compressed',
                                  format='tar.gz',
                                  architecture='Transformer Layers=24, Hidden = 2048, heads = 12',
                                  trained_data='BooksCorpus(800M) English Wikipedia (2500M) words',
                                  language='en'),

                        Embedding(name='albert_xxlarge',
                                  dimensions=4096,
                                  corpus_size='3300M',
                                  vocabulary_size='30522 (sub-word)',
                                  download_url='https://tfhub.dev/google/albert_xxlarge/1?tf-hub-format=compressed',
                                  format='tar.gz',
                                  architecture='Transformer Layers=12, Hidden = 4096, heads = 16',
                                  trained_data='BooksCorpus(800M) English Wikipedia (2500M) words',
                                  language='en')
                        ]

    EMBEDDING_MODELS: Dict[str, Embedding] = {embedding.name: embedding for embedding in EMBEDDING_MODELS}

    tokenizer: FullTokenizer = None

    def __init__(self):
        self.sess = tf.Session()
        self.albert_outputs = None
        self.model_name = None
        self.max_seq_length = None

        # placeholder definition
        self.input_ids = None
        self.input_masks = None
        self.segment_ids = None

    def create_tokenizer_from_hub_module(self):
        """Get the vocab file and casing info from the Hub module."""
        tokenization_info = self.albert_outputs(signature="tokenization_info", as_dict=True)

        sentence_piece_file, do_lower_case = self.sess.run([tokenization_info["vocab_file"],
                                                   tokenization_info["do_lower_case"]])

        Embeddings.tokenizer = FullTokenizer(
            vocab_file=None, do_lower_case=do_lower_case,
            spm_model_file=sentence_piece_file)

    @classmethod
    def tokenize(cls, text):
        return cls.tokenizer.tokenize(text)

    def _model_single_input(self, text: Union[str, List[str]], is_tokenized: bool = False
                            ) -> Tuple[List[int], List[int], List[int]]:
        max_seq_length = self.max_seq_length
        tokens_a = text
        if not is_tokenized:
            tokens_a = Embeddings.tokenize(text)
            if len(tokens_a) > max_seq_length - 2:
                tokens_a = tokens_a[0: (max_seq_length - 2)]

        tokens = []
        segment_ids = []
        tokens.append("[CLS]")
        segment_ids.append(0)
        for token in tokens_a:
            tokens.append(token)
            segment_ids.append(0)
        tokens.append("[SEP]")
        segment_ids.append(0)

        input_ids = Embeddings.tokenizer.convert_tokens_to_ids(tokens)

        # The mask has 1 for real tokens and 0 for padding tokens. Only real
        # tokens are attended to.
        input_mask = [1] * len(input_ids)

        # Zero-pad up to the sequence length.
        while len(input_ids) < max_seq_length:
            input_ids.append(0)
            input_mask.append(0)
            segment_ids.append(0)

        assert len(input_ids) == max_seq_length
        assert len(input_mask) == max_seq_length
        assert len(segment_ids) == max_seq_length

        return input_ids, input_mask, segment_ids

    def load_model(self, model: str, model_path: str, max_seq_length: int):
        g = tf.Graph()
        with g.as_default():
            self.input_ids = tf.placeholder(dtype=tf.int32, shape=[None, max_seq_length])
            self.input_masks = tf.placeholder(dtype=tf.int32, shape=[None, max_seq_length])
            self.segment_ids = tf.placeholder(dtype=tf.int32, shape=[None, max_seq_length])

            hub_module = hub.Module(model_path)
            albert_inputs = dict(
                input_ids=self.input_ids,
                input_mask=self.input_masks,
                segment_ids=self.segment_ids
            )
            self.albert_outputs = hub_module(albert_inputs, signature="tokens", as_dict=True)
            tokenization_info = hub_module(signature="tokenization_info", as_dict=True)
            init_op = tf.group([tf.global_variables_initializer(), tf.tables_initializer()])
        g.finalize()
        self.sess = tf.Session(graph=g)
        self.sess.run(init_op)
        sentence_piece_file, do_lower_case = self.sess.run(
            [tokenization_info["vocab_file"], tokenization_info["do_lower_case"]]
        )
        Embeddings.tokenizer = FullTokenizer(vocab_file=None,
                                             do_lower_case=do_lower_case,
                                             spm_model_file=sentence_piece_file)
        self.max_seq_length = max_seq_length
        self.model_name = model
        print("Model loaded Successfully !")

    def encode(self, texts: Union[List[str], List[List[str]]],
               pooling: str,
               is_tokenized: bool = False,
               **kwargs
               ) -> Optional[np.array]:
        input_ids, input_masks, segment_ids = [], [], []
        for text in tqdm(texts, desc="Converting texts to features"):
            input_id, input_mask, segment_id = self._model_single_input(text,  is_tokenized)
            input_ids.append(input_id)
            input_masks.append(input_mask)
            segment_ids.append(segment_id)

        albert_inputs = {
            self.input_ids: np.array(input_ids),
            self.input_masks: np.array(input_masks),
            self.segment_ids: np.array(segment_ids)
        }

        token_embeddings = self.sess.run(self.albert_outputs, feed_dict=albert_inputs)["sequence_output"]

        if not pooling:
            return token_embeddings
        else:
            if pooling not in POOL_FUNC_MAP.keys():
                print(f"Pooling method \"{pooling}\" not implemented")
                return None
            pooling_func = POOL_FUNC_MAP[pooling]
            pooled = pooling_func(token_embeddings, axis=1)
            return pooled
