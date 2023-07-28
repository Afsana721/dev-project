/*## [Question One]

Write a function that takes an array of numbers, and returns the sum of all of the positives ones.

Example [1,-2, 3, 5] => 1 + 3 + 5 = 9

Example [-1,-2,-5] => 0
Note: if there is nothing to sum, the sum is default to 0.*/



// create a function and add argument, as an array variable
function sumOfPositiveNum (num) {
    
// create sum varilable & initialize it
    let sum =0;

  
//create a for loop to iterate through the array's length & check the number is possitive
for(let i =0; i < num.length; i++) {
    if(num[i] >0) {
        sum += num[i];
    }
}
// get retuns of positive num
    return sum;
}

// take a array and use sumOfPositivenum function

    const numArray = [1, -2, 3, 5,-6];
    const sum1 = sumOfPositiveNum(numArray);
    console.log(sum1);


