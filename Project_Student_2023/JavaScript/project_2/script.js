
// Function to prompt the user name
function askForName() {
    return prompt("Tell me your name:");
}

// Function to prompt the user for a number and handle invalid inputs using parseFloat & not a num function

function getValidNumber(promptMessage) {
    const input = prompt(promptMessage);
    const number = parseFloat(input);

    if (isNaN(number)) {
        return getValidNumber(promptMessage);
    }

    return number;
}

// Function to prompt the user for two numbers and return the sum
function getSumOfNumbers() {
    const num1 = getValidNumber("Give me a number:");
    const num2 = getValidNumber("Give me another number:");

    return num1 + num2;
}

// action function to execute the functionality

function action() {
    const name = askForName();
    if (name) {
        const greeting = `You are going to have a wonderful day, ${name}.`;
        alert(greeting);
    } else {
        alert("You didn't provide a valid name.");
        return;
    }

    const sum = getSumOfNumbers();
    if (!isNaN(sum)) {
        const sumSentence = `By the way, the sum of your numbers is ${sum}.`;
        alert(sumSentence);
    } else {
        alert("Invalid numbers provided. Please enter valid numbers.");
    }
}

// Call the action function to start the process
action();
