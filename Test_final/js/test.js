function calculateStringSim(str1, str2) {
    // Check if either input is missing or empty
    if (!str1 || !str2) {
        return "Both strings should be provided.";
    }

    // Check if the length of both strings are equal
    if (str1.length !== str2.length) {
        return "Strings should have the same length.";
    }

    // Initialize a variable to count the differences between two strings
    let differences = 0;

    // Iterate over each character in the strings
    for (let i = 0; i < str1.length; i++) {
        // Compare characters and count differences
        if (str1[i] !== str2[i]) {
            differences++;
        }
    }

    // Create the dynamic message based on the number of differences
    let message = "There ";
    if (differences === 0) {
        message += "are no differences";
    } else if (differences === 1) {
        message += "is 1 difference";
    } else {
        message += `are ${differences} differences`;
    }

    // Return the message
    return message;
}

// Example strings
const string1 = "This is a string";
const string2 = "There was string";

// Calculate similarity and print the results
const similarityMessage = calculateStringSim(string1, string2);
console.log(similarityMessage);

// Handle edge cases
const emptyString = "";
const undefinedString = undefined;

const emptyResult = calculateStringSim(string1, emptyString);
console.log(emptyResult); // "Both strings should be provided."

const undefinedResult = calculateStringSim(undefinedString, string2);
console.log(undefinedResult); // "Both strings should be provided."