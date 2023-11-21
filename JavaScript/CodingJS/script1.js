/* Write a JavaScript program to check two numbrs and return true if one of 
the number is 100 or if the sum of the two numbers is 100.*/

//create a function to check two numbers

const isEqualTo100 = (a, b) => a === 100 || b === 100 || (a+b) === 100;
console.log(isEqualTo100(100,1))
console.log(isEqualTo100(100,100));
console.log(isEqualTo100(90,10));
console.log(isEqualTo100(10+80));