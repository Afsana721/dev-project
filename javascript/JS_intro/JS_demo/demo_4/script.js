function getName() {
    let name = prompt("Tell me your name:");
    if (name === null || name.trim() === "") {
      throw new Error("Name not provided. Please enter your name.");
    }
    return name.trim();
  }
  
  function getNumber(promptText) {
    let input;
    do {
      input = prompt(promptText);
      if (input === null) {
        throw new Error("Operation canceled.");
      }
      input = parseFloat(input);
    } while (isNaN(input));
  
    return input;
  }
  
  function getSumMessage(number1, number2) {
    const sum = number1 + number2;
    return `By the way, the sum of your numbers is ${sum}.`;
  }
  
  function displayMessage(message) {
    const sumResult = document.getElementById('sumResult');
    sumResult.textContent = message;
  }
  
  function getNumbers() {
    try {
      const name = getName();
      const number1 = getNumber("Give me a number:");
      const number2 = getNumber("Give me another number:");
  
      const wonderfulDayMessage = `You are going to have a wonderful day, ${name}.`;
      const sumMessage = getSumMessage(number1, number2);
  
      alert(wonderfulDayMessage);
      displayMessage(sumMessage);
    } catch (error) {
      alert(error.message);
    }
  }
  