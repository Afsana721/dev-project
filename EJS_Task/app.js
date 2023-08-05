//create main server file

//Create main server file
//create variable to bring function from the module using require method.

var onLinerJoke = require('one-liner-joke');
var getRandomJoke = onLinerJoke.getRandomJoke();
console.log(getRandomJoke);