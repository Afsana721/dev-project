
/* include a module, used the require() method to allow access everything
the module offered.*/
// here, onlinerjoke is an object, so we can use method-getRandom.Joke()
//'one-liner-joke' package
const oneLinerJoke = require("one-liner-joke");  

//  Get a random joke
const getRandomJoke = oneLinerJoke.getRandomJoke();

// Print the joke body to the console
console.log(getRandomJoke.body);




