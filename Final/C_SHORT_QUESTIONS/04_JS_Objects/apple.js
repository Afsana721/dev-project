// Consider the following code.  Why is apple type reported incorrectly as "Clementine"?

// What would you change to address this issue whereby the apple.type is reported as it was set originally i.e. "Granny Smith". In other words, how would you make a true copy of the apple object?

// ```js
//     const apple = {
//         type: 'Granny Smith',
//         weight:  4
//     }

//     var orange = apple

//     orange.type = 'Clementine'

//     console.log('Apple type is ', apple.type)
// ```



//Explanation of JS_Object

/*creat a JS object - apple is a js object and organized relaed data using key & value pairs. Objecct are
    reference types, that means when we assign an object to a variable or pass it as an argument that time
    we are actually working with a reference to the object in memory */ 

/* here const apple who has properties - type and weight with their value.*/
    const apple = {
             type: 'Granny Smith',
             weight:  4
         };
    console.log("I am apple object"+" :" + apple.type);

/*Create a var orange and assign it the same reference that  apple holds. Means both apple & orange point to the same
    object in the memory. Then we modify the type porperty from the copy object as var orange. So we are actually modifying 
    the same object apple reference, both using same memory. So any changes made througn one variable will be reflected when
     accessing the objec through the orange variable. Objects are mutable, they are address by reference not by value*/
    
     var orange = apple              //refer same apple object
    
    console.log("I am a reference orange object of apple object" +" :" + apple.type);

    orange.type = 'Clementine'      //if assign apple also refer as same
    console.log("I am orange object & change my type valeu" +" :" + orange.type);

    console.log('Apple type is ', apple.type)  // refer new value because memory alocation same. 
    
    console.log("I am orange reference object orange & my type value is :" +" :" + orange.type);



/*What would you change to address this issue whereby the apple.type is reported as it was set originally i.e. 
"Granny Smith". In other words, how would you make a true copy of the apple object?*/

/*  To get apple value as original, that time  need to create orange true copy object, so not sharing as reference of memoroy
    So, we can create several ways to achieve true copy of object: Object.assign(), */
    console.log("----------From true copy------------------------------------------")
    //create apple1 object variable
    const apple1 = {
        type : 'Granny Smith',
        weight: 4
    };
    console.log("I am from apple1 object "+": " +apple1.type);

    //create orange1 as a true copy of apple1 object
    var orange1 = { ... apple};              // copy object using spread operator
    console.log("I am a true copy of orange1 object "+ ": "+orange1.type);

    //assign type value for orange1 object
    orange1.type = 'Clementine' ;
    console.log("Orange1 type value now "+ ": "+orange1.type );
    console.log("Apple1 type value now "+": "+ apple1.type);
