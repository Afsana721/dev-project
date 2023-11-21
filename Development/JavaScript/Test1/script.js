//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/*function createHelloWorld() {
    return function() {
        return "Hello world";
    }
}
const helloWorld = createHelloWorld();
console.log(helloWorld());*/


/* Given an integer n, return a counter function. This counter function initially 
returns n and then returns 1 more than the previous value every subsequent time 
it is called (n, n + 1, n + 2, etc).*/

// function createCounter(n){
//     return function(){
//         return n++;
//     }
// }
// const x = createCounter(0);
// console.log(x());
// console.log(x());
// console.log(x());


// var createCounter = function(n) {
    
//     return function() {
//         return n++;
//     };
// };

 
//   const counter = createCounter(10)
//   console.log(counter()) // 10
//   console.log(counter())
//   console.log(counter())

// var counters = function createCounter(n){
//     return function(){
//         return n++;
//     }
// };
// const counting = counters(1)
// console.log(counting())
// console.log(counting())
// console.log(counting())

/*
var expect = function(actualVal) {
    return {
        toBe: function(expectVal){
            if(actualVal === expectVal){
                return true;
            } else{
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expectVal){
            if(actualVal !== expectVal){
                return true;
            } else{
                throw Error("Equal");
            }
        }
    };
};

try{
    expect(5).toBe(5); // true
    console.log("Test pass: 5 is equal 5")
    expect(5).notToBe(10);
    console.log("Test passed: 5 is not equal to 10");
}catch(error){
    console.log(error)

}
    
 expect(5).notToBe(5); // throws "Equal" */

 
 var createCounter = function(init) {
    // Use a variable to store the current value
    let currentValue = init;

    return {
        increment() {
            // Increment the current value by 1
            currentValue = currentValue + 1;
            // Return the updated value
            return currentValue;
        },
        decrement() {
            // Decrement the current value by 1
            currentValue = currentValue - 1;
            // Return the updated value
            return currentValue;
        },
        reset() {
            // Set the current value back to the initial value
            currentValue = init;
            // Return the updated value
            return currentValue;
        }
    };
};

// Create a counter with an initial value of 5
const counter = createCounter(5);

// Test the functions
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
