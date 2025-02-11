// --- Weighted Random Selection ---

/**
 * Returns an index selected based on the provided probability distribution.
 * @param {number[]} probabilities - An array of probabilities that sum to 1.
 * @returns {number} The selected index.
 */
function weightedRandomIndex(probabilities) {
    let r = Math.random(); // r is in [0, 1)
    let sum = 0;
    for (let i = 0; i < probabilities.length; i++) {
      sum += probabilities[i];
      if (r < sum) {
        return i;
      }
    }
    // Fallback: due to floating-point issues, return last index.
    return probabilities.length - 1;
  }
  
  // --- Update Distribution After Extraction ---
  
  /**
   * Updates the probability distribution after an element is extracted.
   * The selected element's probability is decreased by theta and that amount
   * is equally added to all the other elements.
   *
   * @param {number[]} probabilities - The current probability distribution.
   * @param {number} selectedIndex - The index of the element that was selected.
   * @param {number} theta - The amount to decrease from the selected element.
   */
  function updateDistribution(probabilities, selectedIndex, theta) {
    const n = probabilities.length;
  
    // Check if the selected element has enough probability to decrease.
    // (If not, you might want to handle the case differently.)
    if (probabilities[selectedIndex] < theta) {
      // For this example, we simply adjust theta to the available probability.
      theta = probabilities[selectedIndex];
    }
  
    // Decrease the selected element's probability.
    probabilities[selectedIndex] -= theta;
  
    // Distribute the removed probability equally among the other elements.
    const addition = theta / (n - 1);
    for (let i = 0; i < n; i++) {
      if (i !== selectedIndex) {
        probabilities[i] += addition;
      }
    }
  }
  
  // --- Example Usage ---
  
    const n = 5; // Size of the array
    // Create an array of items (for example, numbers 1 through n)
    let items = Array.from({ length: n }, (_, i) => i + 1);
  
    // Create an initial uniform probability distribution.
    let probabilities = new Array(n).fill(1 / n);
  
    // Define theta: the amount by which the probability of a selected element decreases.
    // Ensure that theta is <= 1/n (here, 1/5 = 0.2), otherwise the selected probability may become negative.
    const theta = 0.05;
  
    console.log("Initial probabilities:", probabilities);
  
    // Perform several extractions and update the distribution after each one.
    for (let round = 1; round <= 10; round++) {
      // Select an element index based on the current distribution.
      let selectedIndex = weightedRandomIndex(probabilities);
      console.log(`Round ${round}: Selected item ${items[selectedIndex]} (index ${selectedIndex}).`);
  
      // Optionally, print probabilities before the update.
      console.log("Before update:", probabilities.map(p => p.toFixed(3)));
  
      // Update the distribution: subtract theta from the selected element and add to others.
      updateDistribution(probabilities, selectedIndex, theta);
  
      // Print the new probability distribution.
      console.log("After update: ", probabilities.map(p => p.toFixed(3)));
      console.log('----------------------');
    }
  