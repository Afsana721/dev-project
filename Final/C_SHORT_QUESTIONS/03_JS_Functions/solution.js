// Write a JavaScript function that checks how similar are two strings, which are passed in to this function as arguments.

// See example below ...

// ```
//     This is a string
//     There was string
//       ^^^^^^^          <-- 7 differences
// ```


//Create a function that calculate the similar two Strings. 
function calString(str1, str2) {
    //checking using if condition- the length of both strings are equal
    if (str1.length !== str2.length) {
        //not match both string then throw Error instance
        throw new Error("Strings are not same length.");
    }

    //Initialize a variable to count the diffeences between both strings, now value is 0. 
    let diffeences = 0;

    //Create a for loop to count and compare the characters at the current position
    for (let i = 0; i < str1.length; i++) {
        //make a condition to compare
        if (str1[i] !== str2[i]) {

            //if characters are different, incrment the difference counter and stored
            diffeences++;
        }
    }

    //add message variable based on the number of differences
    let message = " There are ";
    //add if condtion for the differences
    if (diffeences === 1) {
        message += "1 difference";
    } else {
        message += `${diffeences} differences`;
    }
    //Return message variable
    return message;
};

//Crearte example strings texts
const string1 = "This is a string";
const string2 = "There was string";

//create similarity variable and calculate similarity and console log the results
const messageOfSimilarity = calString(string1, string2);
//console.log(`Similarity: ${string1}\n${string2}\n${" ".repeat(similarity)}<-- ${similarity} differences`);
console.log(`In these Strings: ${string1}\n${string2}\n : ${messageOfSimilarity}`);