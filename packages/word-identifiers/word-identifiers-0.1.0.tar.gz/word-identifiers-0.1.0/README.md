
# word_identifiers

This is a bijection between non-negative integers and lists of words, in English. This is useful to quickly make urls or tokens.

## Usage

```python
>>> from word_identifiers import words_to_id, id_to_words
>>> word_to_id(["hi", "bye", "world"])
148
```

## Wordlist

The wordlist used is [this public domain wordlist](https://raw.githubusercontent.com/MichaelWehar/Public-Domain-Word-Lists/master/5000-more-common.txt), compiled by [Michael Wehar](https://github.com/MichaelWehar/Public-Domain-Word-Lists).
