

// create Function to prompt the user for a number and handle invalid inputs recursively

function getValidNumber(promptMessage) {
    const input = prompt(promptMessage);
    const number = parseFloat(input);

    if (isNaN(number)) {
        // If the input is not a valid number, recursively call the function again to prompt for a valid number.
        return getValidNumber(promptMessage);
    }

    return number;
}

// action function to execute the functionality
function action() {
    const numbers = [];

    // Loop three times to prompt the user for three numbers
    for (let i = 0; i < 3; i++) {
        // Ask the user to enter a number and store it in the 'numbers' array
        const number = getValidNumber(`Give number ${i + 1}:`);
        numbers.push(number);
    }

    // Calculate the sum of all the numbers using a 'for' loop
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    // Display an alert with the calculated sum
    alert(`The sum of all of your numbers is ${sum}.`);
}

// Call the action function to start the process

action();
