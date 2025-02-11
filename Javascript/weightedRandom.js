// weightedRandom.js

function weightedRandomIndex(probabilities) {
  let r = Math.random(); // r is in [0, 1)
  let sum = 0;
  for (let i = 0; i < probabilities.length; i++) {
    sum += probabilities[i];
    if (r < sum) {
      return i;
    }
  }
  return probabilities.length - 1;
}

function updateDistribution(probabilities, selectedIndex, theta) {
  const n = probabilities.length;
  if (probabilities[selectedIndex] < theta) {
    theta = probabilities[selectedIndex];
  }
  probabilities[selectedIndex] -= theta;
  const addition = theta / (n - 1);
  for (let i = 0; i < n; i++) {
    if (i !== selectedIndex) {
      probabilities[i] += addition;
    }
  }
}

module.exports = { weightedRandomIndex, updateDistribution };

