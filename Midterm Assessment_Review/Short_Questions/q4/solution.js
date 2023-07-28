
/* Consider an array/list of booleans we need to count all the times true exists. 

For example,
```
Example 1: 
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

Example 2:
  [true, false, true, false, false]
```
The correct answer for example1 above would be 17.
The correct answer for example2 above would be 2.

Hint: Don't forget to check for bad values like null/undefined */


//create a function to count boolean true value
function countTrue(arr) {
// check input is a valid array 
    if(!Array.isArray(arr)) {
        throw new Error("invalid input array.");
    }


//initialize a variable to record the count of true  values.
    let count = 0;


//loop through the array values 
    for(const item of arr ) {   
//check the current item is a boolean vlaue    
    if(typeof item === "boolean") {
// if the item is true, increment the count
        if(item === true) {
            count++;
        }
    } else {
//if item is not boolean value, throw error for bad value
        throw new Error("Invalid item in the array, only boolean value");
    }
    }

// return final count
    return count;

} 


const Array1 = [false, true, false, true,false, true, true, false, false, true];
const trueCount = countTrue(Array1);
console.log("Array count of true value", trueCount);