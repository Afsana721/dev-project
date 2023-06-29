
const yesNoWords = ["yes", "no"];  // Define an array containing "yes" and "no" words

for (let i = 0; i < 5; i++) {  // Loop five times
  const randomIndex = Math.floor(Math.random() * yesNoWords.length);  // Generate a random index within the range of the array length
  const randomWord = yesNoWords[randomIndex];  // Retrieve a random word from the array based on the generated index
  console.log(randomWord);  // Output the random word to the console
}

