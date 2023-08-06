## Natural Language Text Preprocessor (nltp)

A simplified package for automating text preprocessing activities such as lemmatization, tokenization, removal of stop words, removal of certain pattern from text using regular expression. Working under the hood, this package makes use of the NLTK library for its text cleaning activities. 

## Installation

Requirements:

- Python 3.7 or higher
- NLTK

Install latest release:

```
pip install nltp
```

Install from source:

```
git clone https://github.com/izzyx6/nltp.git
cd nltp
pip install .
```


## Usage: the basics

Here's how to perform text cleaning with nltp

First, we pass text in a list to the instantiated Preprocessor object as it takes an argument text.

This lines of code returns a tokenized version of the text passed on instantiating the text Preprocessor .

```python
from nltp import Preprocessor

text = ["I like eat delicious food", "That's I'm cooking food myself, case '10 Best Foods' helps lot, also 'Best Before (Shelf Life)'"]

output = Preprocessor(text)
output.token()

```
You can retrive the text with their index (default set to 0):

```python
output.token(1)

```


Next, you can get the cleaned version of the text passed in a list with lemmatization, stop word and unwanted patterns in text removed.

Available parameters to modify are `stop_words` and `patterns`.

```python
output = Preprocessor(text,stop_words = [USER DEFINED], pattern = [USER DEFINED])
```

**Note:** the purpose of having these parameters are to by pass the defualt parameters that remove non alphabets, repeted sequence of words, and users name (identified with the @User).

```python
output = Preprocessor(text)
output.text_cleaner()
```
**Note:** Using the output. you can get the default stop word, patterns, and text passed

```python
output = Preprocessor(text)
output.patterns
output.stop_words
output.text
```

## Citation

BibTex entry:
```bibtex
@misc{omalley2019kerastuner,
	title        = {Natural Language Text Preprocessor {nltp}},
	author       = { Ufumaka Isreal},
	year         = 2020,
	howpublished = {\url{https://github.com/izzyx6/nltp}}
}
```

