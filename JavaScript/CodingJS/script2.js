/* Write a JavaScript program to get the extension of a filename */

//create a function
const getFileExtension = (filename) =>filename.slice(filename.lastIndexOf('.'));
console.log(getFileExtension("Afsana.css"));
console.log(getFileExtension("script.js"));
console.log(getFileExtension("webpack.script.js")); //it will show js - because lastIndexOf