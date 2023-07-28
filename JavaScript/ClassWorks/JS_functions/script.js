
// declaring a function & print something inside fuction.

/*function message() {
    document.write('I am a function, I am follow javascript function roles.  ');
};

// call the function to execute

message();
message();*/

// passing data inside function parameter

/*var name = " ";
function customer(name) { // name variable is parameter
    document.write("It's good to see you again, " +name);
}

customer("Asef.    "); // passing data depends on variable value is argument.
customer("Masud");*/

//passing multiple parameters in side function

/*function restaurants (place1, place2) {
    document.write("I love eating at " +place1+ " and  " +place2 +" .");
};

restaurants("McDonalds", "In-N-Out ");*/

// making a function, that can do some math functions.

function themath(num1, num2,num3) {
    document.write(" firstNumber = "+num1+ num2+ num3 + " and  ");
    document.write("secondNumber ="+num1* num2* num3);
}

//themath(2, 4, 6);

/*var totalSum =themath(2, 4, 6);
totalSum;*/

//themath(35, 24, 18);


// function & following some if else condition

/*function theCat(name) {
    if(name === "Garfield") {
        document.write("Jon, where is my lasagna?");
    } else if(name === "Odie") {
        document.write("Bark");
    } else {
        document.write("Garfield, look at what you've done");
    }
};

theCat("Odie"); */

// function with parameters & arguments--.

/*function theNum( x, y, z) {

    if(x + y > 10) {
        document.write("Chicken Sasuage & Bacon Biscuit");
    } else if(z -y <10) {
        document.write("Double-Smoked Bacon. Cheddar & Egg Sandwich");
    } else{
        document.write("Bacon, Gouda & Egg Breakfast Sandwich");
    }
};

theNum(3, 6, 9); */

// function always return value or undefined- undefined is also a data type- When program not recognize return data type.

// this program is not sure what data type it will return here.
//document.write(stuff());

/*function stuff() {
    //document.write("What? ");
    //console.log("Where");
    return "I am ok now."   // now program can return the String data Type.

}*/



/*function stuff() {
    return "What?";
    var question = "Why?"; //after returning value of -What?, stuff() function has no execution point, program is out side of the function.
    return question;

};

document.write(stuff());*/




// loacal & global variable, inside function and outside function

/*var frozenCoffee1 = " Frence Vanilla";
var frozenCoffee2 = "Hazelnut";
var frozenCoffee3 =" Caramel";

function customer(flavor) {
    var frozenCoffee1 = "Hazelnut";  // global variable frozen Coffee 1 reassigned its value inside customer function as a local variable and scope  only inside the function. 
    console.log(frozenCoffee1);
    return flavor;

}

customer();


var theOrder = customer(frozenCoffee1); // theOrder variable took value from global frozenCoffee1- global variable with the value "Frence Vanilla"
document.write(theOrder); */

// local, global, & reassign value
// three global variables

var frozenCoffee1 = " Frence Vanilla";
var frozenCoffee2 = "Hazelnut";
var frozenCoffee3 =" Caramel";

// creating a function-1
/*function customer1(flavor) {
    var frozenCoffee1 ="Hazelnut";  // now frozenCoffee1 reassinged it's value
    return flavor;
}

 document.write(customer1(frozenCoffee1));

 var theOrder = customer1(frozenCoffee1);
 document.write(theOrder);

 function customer2() {
    var theOrder ="Hazelnut";
    var frozenCoffee2 ="Mocha";
    console.log("I need a "+ theOrder+ "  and an order of  "+frozenCoffee2 + ", please");
    console.log("Also, can I get a " +frozenCoffee3+ "?")
}

 customer2();
 console.log(theOrder);*/

 // call back function- function has the abililty to take function as a argument. 
// call back function is run after another function has finished runing.

/*function theHello(name, question) {
    alert("Hello" + name + "!");
    question();
}

function help() {
    alert("How can I assist you?");
}

theHello("Garfield", help());*/


//Anonymous functions are functions without a name. They are typically used as arguments in other funcions.
// not setting any name for the anonymous function. 

/*setTimeout(anything);

function anything() {
    alert("I love chocolate chip cookies!");
}*/

// declaring function without set name, it will reduce the code.

setTimeout( function() {
    alert("I love chocolate chip cookies!")
}, 100);



