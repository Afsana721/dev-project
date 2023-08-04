
// //create a variable who is allocated some memory, declaration & initilization
// var x;
// x = 10;
// var x = 100, y = 10; z = 20;  // multiple variable at time declaration & initilization. 


// to see the variable value after declaration using webpage or console- using document or console object

//document.write(x);
//console.log(x);

//let- var is function sciped and let is block scoped
/*let n;
n = "Welcome";
let m ="hello", p=10;
console.log(n);
console.log(m +" and "+p);*/

// const num =50;
// console.log(num);
// //num =200;             // we cann't change the value, num is constant, not possible to change value
// //console.log(num);

//Data Type js: Number, String, boolean, null, undevined- primitive & Object, Array, Function, Date, Regx- non Primitive data

// var id = 10;  //number
// var name = "String_John";
// var action = true;

// let x =100;
// console.log("data type is : "+ typeof(x));

// let price = 10.24;
// console.log(typeof(price));

// let studentName = "Jon";
// console.log(typeof(studentName));

// let flag = true;
// console.log(typeof(flag));

// let state = null;
// console.log(typeof(state));  // null is a object type data type in JS.

// let value;
// console.log(typeof(value));   // undefined

//function JS: 
/*function add(a, b) {
  console.log("Number is : " +(a+b));
}

add(2, 2);*/

function add1(a, b) {
  return (a+b);
}
//call the function take agrument and assign to the variable.
  let result = add1(2,6);
  console.log("Value is : "+result);

// function not taking argument
  // function greetings() {
  //   console.log("Hey Good Morning");
  // }

  // greetings();
//create function without argument
  function greetings() {
    return ("hello, good morning!")
  }

 let msg = greetings();
 console.log(msg);
