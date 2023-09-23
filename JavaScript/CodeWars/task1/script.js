//the sentence is : "How can mirrors be real if our eyes aren't real"
// task is : Capitalize the first letter of each word of the sentence

/* Store the sentence as a String, then split the String to make separated each 
    word with the word gap */

/* create a function who can take string parameter and split string */

function toCapitalizeSentence(str) {
/*create a const variable who can split string, using as the delimiter(gap) and imput
    string into an array of words */
    const words = str.split(' ');
    console.log("after spliting : "+ words);

/* Capitalizing the first words for Array - use map function to iterate over each word in the words
    array and use for each loop to capitalize first letter using charAt(0) - first character and concatenate
    with the rest of the words from the second character using slice(1) */
    
    const CapitalizeWordsArray = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    console.log("after capitalizing and slicing word :" + CapitalizeWordsArray);

    /* now joining  all the words as a sentence*/
    const wordsJoin = CapitalizeWordsArray.join(' ');
    console.log("after joing words :" + wordsJoin);

    return wordsJoin;
};

// now use this function 
const inputString = "How can mirrors to real if our eyes aren't real";
const CapitalizeWordsAsSentence = toCapitalizeSentence(inputString);
console.log("now the result is : " + CapitalizeWordsAsSentence);

