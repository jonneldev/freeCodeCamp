// Function to calculate the mean of an array
const getMean = (array) => 
    array.reduce((acc, el) => acc + el, 0) / array.length;
  
  // Function to calculate the median of an array
  const getMedian = (array) => {
    // Sort the array in ascending order
    const sorted = array.toSorted((a, b) => a - b);
    
    // Calculate the median based on even or odd length of the array
    const median =
      sorted.length % 2 === 0
        ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
        : sorted[Math.floor(sorted.length / 2)];
    
    return median;
  }
  
  // Function to calculate the mode of an array
  const getMode = (array) => {
    const counts = {};
    
    // Count the occurrences of each element in the array
    array.forEach((el) => {
      counts[el] = (counts[el] || 0) + 1;
    });
  
    // Check if all values have the same frequency (no mode)
    if (new Set(Object.values(counts)).size === 1) {
      return null;
    }
    
    // Find the element(s) with the highest frequency
    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];
    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
    
    // Return mode(s) as a comma-separated string
    return mode.join(", ");
  }
  
  // Function to calculate the range of an array
  const getRange = (array) => 
    Math.max(...array) - Math.min(...array);
  
  // Function to calculate the variance of an array
  const getVariance = (array) => {
    const mean = getMean(array);
    
    // Calculate variance using the formula
    const variance = array.reduce((acc, el) => {
      const difference = el - mean; // Find the difference from the mean
      const squared = difference ** 2; // Square the difference
      return acc + squared; // Accumulate the squared differences
    }, 0) / array.length; // Divide by the number of elements
    
    return variance;
  }
  
  // Function to calculate the standard deviation of an array
  const getStandardDeviation = (array) => {
    const variance = getVariance(array); // Get the variance
    const standardDeviation = Math.sqrt(variance); // Take the square root of variance
    return standardDeviation;
  }
  
  // Main function to calculate statistics and update the UI
  const calculate = () => {
    const value = document.querySelector("#numbers").value; // Get input value
    const array = value.split(/,\s*/g); // Split input into an array
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el)); // Convert to numbers and filter out NaN
    
    // Calculate statistics
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);
  
    // Update the UI with calculated values
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
  }
  