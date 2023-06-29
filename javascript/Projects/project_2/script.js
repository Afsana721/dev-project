
/* create three variables, they are holding prompt function. function takes a string argument & returns user input 
as a string*/

var name = prompt("Tell me your name.");
var num1  = prompt("Give ma number.");
var num2 = prompt("Give me another number.");

//create function takes askName variable and return a sentence that says" You are going to have a wonderful day.

function createGreeting(name) {
    return "You are going to have a wonderful day" +name + ".";

}

function calculateSum(num1, num2) {
    // parse the user input as number
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(isNaN(num1) || isNaN(num2)) {
        return "Error: Enter valid numbers."
    } 

    var sum = num1 + num2;
    return "By the way, the sum of your numbers is " + sum + ".";
}

