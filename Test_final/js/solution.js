//Create a function that calculate the similar two Strings. 
function calculateStringSim(str1, str2){
    //check if the length of both stdrings are equal
    if(str1.length !== str2.length) {
        throw new Error("Strings should have the same length.");
    }

    //Initialize a variable to count the diffeences between two strings
    let diffeences = 0;

    //Create a for loop to compare the characters at the current position
    for(let i =0; i <str1.length; i++){
        //make a condition to compare
        if(str1[i] !== str2[i]){
        
        //if characters are different, incrment the difference counter
            diffeences ++;
        }
    }
    //Return the total number of differences
    return diffeences;
};

//Example strings
const string1 = "This is a string";
const string2 = "There was string";

//calculate similarity and print the results
const similarity = calculateStringSim(string1, string2);
console.log(`Similarity: ${string1}\n${string2}\n${" ".repeat(similarity)}<-- ${similarity} differences`);
