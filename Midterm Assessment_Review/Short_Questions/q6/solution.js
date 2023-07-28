
/* Write a function that takes a string and counts the vowels in the string, and returns the count.

For example

Input            Output

"Hello there." => 4

"Good Morning" => 4

"Vader is a very good doggo" => 9 */


//Create a function to count vowels

function vowelsCount(str) {
    // find count of vowels using match method with a regex
    const count = (str.match(/[aeiou]/gi) || []).length;                   
// here used regular expression patten '/[aeiou']/gi
//|| - if the expression is truthy in array, will return whole expression, number of vowel
    return count;                                                          
}

// take user input and return vowel count
const userString = prompt("enter a string: ");
const result = vowelsCount(userString);
console.log(result);