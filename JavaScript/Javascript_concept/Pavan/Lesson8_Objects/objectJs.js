//Javascript Object
let person = {
    firstname: "abc",
    lastname: 'def',
    age: 25,
    weight: 60
}

//access the object properties.
console.log(person.firstname);
console.log(person['age']);

//create new data object using Object constractor.
const data = new Object();
console.log(data);

// add new property to the existing object person

person["height"] = 5.5;
person.city = "Austin";
console.log(person);

//update person properties

person.firstname = "Asef";
person.lastname = "Khan";
console.log(person);

// remove object properties
delete person.age;
delete person["weight"];
console.log(person);

// access properties from the object using ' for in ' loop JS : only objects properties name
console.log("for ** in *** looping *** object")
for(let x in person)
{
    //console.log(x);
    //console.log("*** person's properties name with values")
    console.log(x+ ": "+person[x]);
};


