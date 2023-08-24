// var text = {
//     name : "today",
//     data :"Aug2023"
// };

// var newtext = text;
// text.data= "Set2023";
// console.log(newtext);

// function printDoggyHorse(){
//     for (let i = 5; i < 101; i++) {
//         //console.log(i);
//         if (i % 5 == 0 && i % 7 == 0) {
//             console.log("Doggy Horse");
//         } else if (i % 7 == 0) {
//             console.log("Horse")
//         } else if (i % 5 == 0) {
//             console.log("Doggy")
//         } else {
//             return (i)
//         }
//     }
// }

// console.log(printDoggyHorse())





// Define a function that prints numbers with specific conditions
function printNumbersWithConditions() {
    // Initialize an empty string to store the result
    let result = '';

    // Loop through numbers from 5 to 100
    for (let i = 5; i <= 100; i++) {
        // Check if the number is a multiple of both 5 and 7
        if (i % 5 === 0 && i % 7 === 0) {
            result += 'Doggy Horse'; // Append 'Doggy Horse' to the result
        } else if (i % 5 === 0) {
            result += 'Doggy'; // Append 'Doggy' to the result
        } else if (i % 7 === 0) {
            result += 'Horse'; // Append 'Horse' to the result
        } else {
            result += i; // Append the current number to the result
        }

        // Add a space between each result for better readability
        result += ' ';
    }

    // Return the final result
    return result;
}

// Call the function and print the result
console.log(printNumbersWithConditions());


