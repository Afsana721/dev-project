
//create user choice variable, & store it in a variable. So, choice variable can compare user inout and send right output to user.
var userChoice = prompt("You have two choice, coffee or tea. Which would you like?")

// make a if condition depends on user choice

if(userChoice == "coffee"){
    document.write("Great Choice. Would you like cream and sugar?");
} else if(userChoice == "tea"){
    document.write("Excellent chooice. Would you like milk and sugar?")
} else{
    document.write("Sorry, I don't know what that is.");
}


