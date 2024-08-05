const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

// Function to normalize input by removing non-alphanumeric characters and converting to lowercase
const normalizeString = str => {
  return str
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9]/g, ""); // Remove non-alphanumeric characters
}

// Function to reverse a string
const reverseString = str => {
  return str.split("").reverse().join("");
}

// Function to check if the input is a palindrome
const checkIfPalindrome = () => {
  const input = textInput.value;
  
  if (input.trim() === "") {
    alert("Please input a value");
    return;
  }
  
  // Normalize the input
  const normalizedInput = normalizeString(input);
  
  if (normalizedInput === reverseString(normalizedInput)) {
    resultDiv.innerHTML = `<strong>${input}</strong> is a palindrome.`;
  } else {
    resultDiv.innerHTML = `<strong>${input}</strong> is not a palindrome.`;
  }
}

// Add event listener to the button
checkBtn.addEventListener("click", checkIfPalindrome);
