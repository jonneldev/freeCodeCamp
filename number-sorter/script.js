// Select the "sort" button element from the DOM
const sortButton = document.getElementById("sort");

// Function to handle sorting when the button is clicked
const sortInputArray = (event) => {
  event.preventDefault(); // Prevent the default form submission or button behavior

  // Get all dropdown elements, convert them to an array, and extract their numeric values
  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  // Sort the array using JavaScript's built-in sort method (ascending order)
  const sortedValues = inputValues.sort((a, b) => a - b);

  // Update the UI to display the sorted values
  updateUI(sortedValues);
}

// Function to update the UI with the sorted array
const updateUI = (array = []) => {
  // Iterate over the sorted array
  array.forEach((num, i) => {
    // Get the DOM element where the sorted number should be displayed
    const outputValueNode = document.getElementById(`output-value-${i}`);
    // Set the text content of the element to the current number
    outputValueNode.innerText = num;
  });
}

// Function to perform Bubble Sort on an array
const bubbleSort = (array) => {
  // Iterate over the entire array
  for (let i = 0; i < array.length; i++) {
    // Compare each pair of adjacent elements
    for (let j = 0; j < array.length - 1; j++) {
      // Swap elements if they are in the wrong order
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  // Return the sorted array
  return array;
}

// Function to perform Selection Sort on an array
const selectionSort = (array) => {
  // Iterate over the array
  for (let i = 0; i < array.length; i++) {
    let minIndex = i; // Assume the current index is the smallest

    // Find the index of the smallest element in the unsorted part
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the smallest element found with the element at the current index
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  // Return the sorted array
  return array;
}

// Function to perform Insertion Sort on an array
const insertionSort = (array) => {
  // Iterate from the second element to the end of the array
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i]; // The value to be inserted into the sorted part
    let j = i - 1;

    // Shift elements of the sorted part to the right as long as they are greater than the current value
    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    // Insert the current value into its correct position
    array[j + 1] = currValue;
  }
  // Return the sorted array
  return array;
}

// Add a click event listener to the "sort" button that triggers the sorting function
sortButton.addEventListener("click", sortInputArray);
