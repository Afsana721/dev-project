//a value is 100 or b value is 100 or a+b = 100
const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a+b) === 100;

    console.log(isEqualTo100(100, 90));
    console.log(isEqualTo100(80, 20));

//to get extention of a file name
const getFileExt = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExt("index.html"));
console.log(getFileExt("webpack.config.js"));

/*write a JavaScript program to replace every character in a given string with the character 
following it in the alphabet*/

