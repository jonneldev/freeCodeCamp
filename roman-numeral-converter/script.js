const number = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const arabicToRoman = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
};

const numberToRomanNumeral = (input) => {
  if (input === 0) return '';
  
  // Values are sorted in descending order
  const values = Object.keys(arabicToRoman).reverse().map(Number);
  for (const value of values) {
    if (input >= value) {
      return arabicToRoman[value] + numberToRomanNumeral(input - value);
    }
  }
  
  return ''; // Base case: when input is zero or less, return an empty string
};


const checkInput = () => {
  const numInput = parseInt(number.value, 10);

  // Check if input is a valid number
  if (isNaN(numInput)) {
    output.textContent = "Please enter a valid number";
    return;
  }

  // Check if input is within the acceptable range
  if (numInput < 1) {
    output.textContent = "Please enter a number greater than or equal to 1";
  } else if (numInput > 3999) {
    output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    output.textContent = numberToRomanNumeral(numInput); // Convert number to Roman numeral
  }
};

convertBtn.addEventListener("click", checkInput);
