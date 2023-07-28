
/* Write a function that given an integer or a floating-point number, find its opposite.

Examples:
```
1: -1
14: -14
-34: 34 */



//create a function to find the opsite of a number

function getOppositeNum(num) {

// use negative sigh(-) to recive the oppsite
//when number is positive, number will be switched to negative. But if number is negative it will be switched to positive.
   
    return -num;

};

// user given number
console.log(getOppositeNum( 5));
console.log(getOppositeNum( -8));
console.log(getOppositeNum( 9.5));
console.log(getOppositeNum( -7.5));
console.log(getOppositeNum( 0));