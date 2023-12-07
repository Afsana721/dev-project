// var a = 3+4;
// console.log(a);

// var b = "hello"+4;
// console.log(b);

// var c = "1 "+ 4;     //concate 14
// console.log(c);

// var d = false + 4;     
// console.log(d);

// var e ="Hello " + "World";     
// console.log(e);

// console.log(1 < 2 < 3);
// console.log(3 < 2 < 1); // associativity execution from left, 3 <2 = false
//                         //false <1 =true. 
// console.log(false < 1);
// console.log(Number(false));
// console.log(Number(1 < 3));

// var a = 0;
// var b = false;

// if( a == b){
//     console.log("both are equal")   //retrun will be 'both are equal' because of the COERCION
// }else {                             // when a coercion it is 0 and false alos 0, so both are equal
//     console.log("both are not eaual")
// };

// if(a === b){
//     console.log("both are equal")   //return 'both are not equal' for the '===' equal operator
// }else {
//     console.log("both are not equal");
// }

//Boolean built in Function of JS

// console.log(Boolean(undefined));
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(""));

// var a = 0;
// // gost to the internet and looks for a value

// if(a || a === 0){
//     console.log("something is there.")
// }


// function greet(name) {
// //set default value for name variable
//     name = name || '<Your name here>';      //default value set
//     console.log(name);
//     console.log("hello " +name);
// };

//greet('asef');
//greet();

console.log( true || false);
console.log(undefined || 'hello');  //return hello
console.log(Boolean("hello")); // true