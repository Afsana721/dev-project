//var, let, const variable
//var x;      //declaration
//x=10;       //initilization

//var y = 20;     //declaration & initilization at the same time.

//single statement with multiple variables.
//var z =15, n=20, m=11;
//console.log(x + z + n+ m);

// let data variable
// let p;
// p="Welcome";
// p="Hello";
// let k=50, h=40;
// console.log(p);
// console.log(k)


// difference between var & let variable scipe

// console.log(x);
// var x = 100;
// console.log(x);

//the result is : first one undefined and last console is 100;
// var is a function scope, so we can access it before the declation, but showing undefine becacuse
// it was not define the data type. 

// console.log(y);
// let y =200;
// console.log(y);

// it will give error- because we are trying to access the variable before the declaration, 
// in the let keyword it is not possible, because it has only block scope, after declation then
// it will work. 


// const keyword for varaible 
const x = 100;
console.log(x);
//x=200;
//console.log(x);
// console.log(typeof(x));

// let flag = null;
// console.log(typeof(flag ));

// let value;
// console.log(value)

var Jordan = "How can mirrors be real if our eyes aren't real";
 var total_words = Jordan.split(' ');
 console.log(total_words);