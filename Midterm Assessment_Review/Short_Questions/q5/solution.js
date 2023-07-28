

/* Write a function that takes an array of words but finds the word "hay"

After your function finds the word it should return a message (as a string) that says:

"found the word at position " plus the index it found the word, so:

If the word occurs more than once return the first occurence.

Example: 
```
findWord(['hay', 'junk', 'hay', 'something', 'nothing'])

should return "found the word at position 0"  */



// create a function that takes an wordArray as input, and contains a list of words
    
function wordFinder(wordArray) {

//use for loop throught each work in the wordArray variable
        for(let i =0; i < wordArray.length; i++) {

//check the current world is equal 'hay' by if condition.
            if(wordArray[i] === 'hay') {

//if 'hay' is found, return the meassage with index postion;
                return "fount the word at position "+ i;
            }
        }

//if 'hay' is not found then return a meassage 
        return "Word 'hay' is not in the array.";
    };


//create a word array
    const wordArray = ['hay', 'junk', 'hay', 'somthing', 'nothing'];
//create a variable to store retrun result
    const result = wordFinder(wordArray);
    console.log(result);
