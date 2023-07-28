
/* In this simple assignment you are given a number and have to make it negative. Take into account a positive or a negative number can be passed into the function. 

Examples
```
returnNegative(1);     // return -1
returnNegative(-10);   // return -10
returnNegative(0);     // return 0
returnNegative(0.33);  // return -0.33
```

Notes
The number can be negative already, in which case no change is required.
If the value is zero just return 0 */


//create a function that return Negative value: using Math object & abs() method which returns the number's absolute value
function getNagative(num) {
// use if condition to chect if the num is greater than 0
    
    if(num > 0) {                            //if num is opsitive convert to negative value using Math.abs(), then convert to negative with: -Math.abs()
                                                
    return -Math.abs(num);
    } else {
        return num;                             //if num is already negative / '0' - return as is. 
    }
}


// test the numbers : num

    console.log(getNagative(2));
    console.log(getNagative(-10));
    console.log(getNagative(0));
    console.log(getNagative(0.55));
