// Get references to DOM elements
const inputText = document.getElementById("inputText");
const checkButton = document.getElementById("checkButton");
const resultDiv = document.getElementById("result");

// Function to check if a word is a palindrome
function isPalindrome(word) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    // Reverse the cleaned word and compare it to the original
    const reversedWord = cleanedWord.split("").reverse().join("");
    return cleanedWord === reversedWord;
}

// Event listener for the check button
checkButton.addEventListener("click", () => {
    const userInput = inputText.value.trim(); // Get user input and remove extra spaces

    if (userInput === "") {
        // Show error if input is empty
        resultDiv.textContent = "Please enter a word to check.";
        resultDiv.style.color = "red";
    } else {
        // Check if the input is a palindrome and display the result
        if (isPalindrome(userInput)) {
            resultDiv.textContent = `"${userInput}" is a palindrome!`;
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = `"${userInput}" is not a palindrome.`;
            resultDiv.style.color = "red";
        }
    }

    // Add fade-in animation class to the result
    resultDiv.classList.add("fadeIn");

    // Remove the fade-in class after the animation completes to allow re-triggering
    setTimeout(() => {
        resultDiv.classList.remove("fadeIn");
    }, 500); // Matches the animation duration in CSS
});
