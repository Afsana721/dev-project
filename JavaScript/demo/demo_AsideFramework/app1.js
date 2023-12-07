//var person = new Object();
//console.log(person);

//adding object properties. Use []- which called computed member access operator
//person["fristname"] = "Tony";
//console.log(person.firstname);
//person["lastname"] = "Alicea";

// var firstNameProperty = "fristname";
// var lastNameProperty = "lastname";
// console.log(person);
// console.log(person[firstNameProperty]);

//console.log(person.fristname);

//person.address = new Object();
// person.address = new Object({
//     street: "111 main st",
//     zip: "4256",
//     city: "Austin",
//     state: 'Texas'
// });
//person.address.street = "202 Main street USA";
//console.log(person.address);
//console.log(person.address.state);

// var food = {

// };

// console.log(food);

// var food = {
//     name : "primary",
//     items: {
//         name: 'rice',
//         price: 'high',
//         quantity: 'as well',
//         place: 'usa'
//     },
//     value: {
//         regular: true,
//         asking: false,
//         total: "100kg"
//     }
// };

// console.log(food);
// // console.log(food.value.asking)
// food.place = "USA";
// console.log(food);

var Tony = {
    fristname: "Tony",
    lastname: "Alicea",
    address: {
        street:"202 main st",
        city: "Austin",
        state: "Texas"
    }
};

function greet(person){

    console.log("Hi "+ person.fristname);
};

greet(Tony);
greet({
    fristname: "Asef",
    lastname: "Khan"
});
