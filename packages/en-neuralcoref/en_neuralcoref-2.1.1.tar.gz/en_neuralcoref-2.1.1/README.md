# neural coref spaCy model

This spaCy model annotates and resolves coreference clusters using a neural network.
Note: as of now the model is only available in English. 

### Installation

Before using the neural coref model, make sure spaCy English model is installed. 

```sh
$ python -m spacy download en_core_web_sm
```
Now the neural coref spaCy model can be installed. 

```sh
$ pip install en-neuralcoref
```


### Usage

```python
# Import spacy and load the en_neuralcoref model
import spacy
nlp = spacy.load('en_neuralcoref')

# You're done. You can now use NeuralCoref as you usually manipulate a SpaCy document annotations.
doc = nlp(u'My sister has a dog. She loves him.')

doc._.has_coref
doc._.coref_clusters
doc._.coref_resolved
```

License
----

MIT
