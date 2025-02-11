# Documentation

This file contains some usefull advice to better understand the content of this directory.

## Table of contents
- [Documentation](#documentation)
  - [Table of contents](#table-of-contents)
  - [probability.js](#probabilityjs)
    - [How It Works](#how-it-works)
    - [`weightedRandomIndex(probabilities)`](#weightedrandomindexprobabilities)
    - [`updateDistribution(probabilities, selectedIndex, theta)`](#updatedistributionprobabilities-selectedindex-theta)
  - [weightedRandom.js](#weightedrandomjs)



## probability.js

This JavaScript file selects an element from an array based on a weighted probability and updates the probabilities dynamically after each selection.
This file has been created only for **educational purpose**.


###  How It Works
1. **Start with equal probabilities** for all elements.
2. **Select an element** based on the current probability distribution.
3. **Update probabilities** after each selection to make future picks more dynamic.

### `weightedRandomIndex(probabilities)`
- Selects an index based on given probabilities.
- Uses a random number to determine the selection fairly.

### `updateDistribution(probabilities, selectedIndex, theta)`
- Reduces the probability of the selected element by `theta`.
- Redistributes the reduced probability equally among the other elements.


## weightedRandom.js

The raw version of [probability.js](#probability.js)





