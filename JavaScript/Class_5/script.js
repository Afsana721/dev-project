
/*if(true) {
    //const x = "Ryan";
    //x="Zen";
    let x = "Ryan";
    x = "Zen";
    alert(x);
}*/


// let fname = "Ryan";
// let lname = "D";
// let age = prompt("Guess Ryan's age ..");

// //Old way

// // let result = fname + " " +lname+" "+age+" years old";
// // alert(result);

// //Template String: new way

// let result =`${fname} ${lname} ${age} yars old`;
// alert(result);


//default function 

/*function welcome(user, message) {
    alert(`Hello ${user}, ${message}`);
}

welcome("Ryan", "Good morning!");
*/

function welcome(user="Mystery person", message="Goodday"){
    alert(`Hello ${user}, ${message}`);
}
welcome();


