let numbers = [];

function getNumbers() {
  numbers = []; // Reset the numbers array for each iteration
  let promptMessage;
  for (let i = 1; i <= 3; i++) {
    if (i === 1) {
      promptMessage = "Enter a number:";
    } else if (i === 2) {
      promptMessage = "Enter another number:";
    } else {
      promptMessage = "Enter the final number:";
    }

    const number = prompt(promptMessage);
    if (number === null) {
      alert("Operation canceled. Please enter all three numbers.");
      return;
    }

    const parsedNumber = parseFloat(number);
    if (isNaN(parsedNumber)) {
      alert('Invalid input. Please enter a valid number.');
      return;
    }

    numbers.push(parsedNumber);
  }

  displayNumbers();
  calculateSum();
}

function displayNumbers() {
  const numbersList = document.getElementById('numbersList');
  numbersList.innerHTML = '';
  for (const num of numbers) {
    const listItem = document.createElement('li');
    listItem.textContent = num;
    numbersList.appendChild(listItem);
  }
}

function calculateSum() {
  const sum = numbers.reduce((acc, val) => acc + val, 0);
  const sumResult = document.getElementById('sumResult');
  sumResult.textContent = `The sum of all the numbers is ${sum}.`;
}
