/*const name = "Asef";

//function - here is arrow function
const greet = () => 'hello';
let resultOne = greet();
console.log(resultOne);

//method invoke
let result = name.toUpperCase();
console.log(result);    //Asef.*/

//call back function
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// people.forEach(function(person) {
//     console.log(person);
// });

//arrow function
    /*people.forEach((people, index) => console.log(index, people));*/

//same function using callback

let logPeople = (people, index) => {
    console.log(`${index} - hello ${people}`);

}

people.forEach(logPeople);

