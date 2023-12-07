//  b();   //called b!
//  console.log(a);    //undefine


//  var a = "hello world";
//  var b = undefined;
//  function b() {
//     console.log("Called b!")
//     //b();
//  };

//  console.log(a);    //hello world
//  console.log(b);


// function b() {
//     console.log("Called b!");
// };

// b();    //called b!

// console.log(a); //undefined
// var a = 'Hello World';
// console.log(a); //Hello World

// function b(){       // memory b -creation phase

// };

// function a(){       //memory a -creation phase.
//     b();
// };

// a();



// function b(){       //creation phase b
//     var myVar;
//     console.log("from b " + myVar);     //undefined
// };

// function a(){       //creation phase a
//     var myVar = 2;
//     console.log("from a "+myVar); //2
//     b();
// };

// var myVar =1;       //creation phase myvar =1
// console.log("from global " + myVar);     //1
// a();                //invoke a function execution phase

/*
    execution context create - global object, this variable and create memory of 
    myVar with the value 2. 
    then b function is invoke, new execution context is created with global object &
    this variable and myVar placed the memory with undefine but not undefine because 
    it refere the Global myVar variable value 1,
*/

// function b(){
//     console.log(myVar); //1
// };

// function a(){
//     var myVar = 2; //2
//     b();
// };

// var myVar = 1;
// a();

//console will be: 1 display

//change the lexical envirionment

function a() {
    function b(){
        console.log(myVar);     //2
    };
    var myVar = 2;
    b();
};

var myVar = 1;

a(); // a is invoke - so, a has global object and this variable and outer environment is global 
    // when a is invoke - its create global execution context where memory for function b, and myVar 2 variable
    // then call b() function where its ourter environ is a global variable myVar = 2, 

//b(); // b() is not available on the global lixcal environment, so not scope to call it from 
        // globally. 