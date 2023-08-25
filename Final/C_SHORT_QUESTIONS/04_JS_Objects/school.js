
// Why does this comparison return false?  Please explain.

// ```js    
//     var school_a = {name: 'UTexas', place: 'Austin'};
//     var school_b = {name: 'UTexas', place: 'Austin'};

//     console.log(school_a == school_b);   // returns false, why?
// ```

/* here school_a and school_b both are object that has been declared but their value assign same to compare 
    key & value */

var school_a = {name: 'UTexas', place: 'Austin'};
     var school_b = {name: 'UTexas', place: 'Austin'};

//both shows same value because assign same value to them.
     console.log('school_a', school_a);
     console.log('school_b', school_b);

/*here using comparison operator but JS object are complex data structures, when we compare two objects using
    the equality operator '==', we are actually comparing their references in memory, not their content*/
/* school_a has its own properties same as school_b, they are distinct objects in memory. 
    So, to compare school_a & school_b evaluate to : false, becaue school_a and school_b are two separate objects
    with its own memory reference*/
    
    console.log(school_a == school_b);          //false
    