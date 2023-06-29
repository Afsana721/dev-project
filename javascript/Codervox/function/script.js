
/*function message() {
//display on the webpage by document.write
    document.write(" I got your message. Tell me what to do.");

    // display from the console
    console.log("I am form console")
}
//call the function() to see on the webpage or console.
//message();
 var message ="";
 var i=1;
 while(i <= 10) {
    message = "<p>I am number" + i + "!</p>";
    document.write(message);
    i++;
 }

console.log("Do you like cheese?");*/

// function takes parameters


/*function customer(name) {
    document.write("It's good to see you again, " +name+ ".");
}
// call the function as many time as we want
customer("Afsana");
customer("Asef");*/

// more than one parameter

/*function restaurants(place1, place2) {
    console.log("I love eating at " + place1 + " and " + place2);
}

restaurants("In-N-Out" , "McDonalds");*/

// three parameters
/*function theMultiplier(number1, number2, number3) {
    document.write(number1 * number2 * number3);
    console.log(number1 * number2 * number3);
}

theMultiplier(35, 24, 18); */

//Exericise
// conmapre with the ( ===	equal value and equal type ) operator

/*function theCat(name) {
    
    if(name === "Garfield") {
        document.write("Jon, where is my lasagna?");
    } else if(name === "Odie") {
        document.write("Bark!");
    } else {
        document.write("Garfield, look at what you've done");
    }
}

theCat();*/

/*function theNumber(x, y, z) {

    if(x + y >10) {
        document.write("Chicken Sausage & Bacon Biscuit");
    } else if(z - y < 10) {
        document.write("Double-Smoked Bacon, Cheddar & Egg Sandwich");
    } else {
        document.write("Bacon, Gouda & Egg Breawkfast Sandwich");
    }
};

theNumber(3, 6, 9);*/

// returning values in function

function stuff() {
    return "What?";
// after returning value what string, then the function is ended.
    var question ="Why?";
    return question;
};