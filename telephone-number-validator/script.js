const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validatePhoneNumber = (input) => {
    // Regular expression to match valid US phone number formats
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;


    // Test the input against the regex pattern
    return regex.test(input);
};

const validateInput = () => {
    const phoneNumber = userInput.value.trim();

    // Check for empty input
    if (phoneNumber === "") {
        alert("Please provide a phone number");
        return;
    }

    // Validate the phone number
    if (validatePhoneNumber(phoneNumber)) {
        resultsDiv.innerHTML += `<p style="color: green;">Valid US number: ${phoneNumber}</p>`;
    } else {
        resultsDiv.innerHTML += `<p style="color: red;">Invalid US number: ${phoneNumber}</p>`;
    }

    // Clear the input field
    userInput.value = "";
};

checkBtn.addEventListener("click", validateInput);
clearBtn.addEventListener("click", () => {
    resultsDiv.innerHTML = "";
    userInput.value = ""; // Clear the input field
});
