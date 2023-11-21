var person =  new Object();

//add properties to the person Object
//add [] - the computed member access operator
person["firstname"] = "Asef";
person["lastname"] = "Khan";

var firstNameProperty = "firstname";

console.log(person);
console.log(person[firstNameProperty]);
console.log(person.firstname);

person.address = new Object();
person.address.street = "120 Main St.";
person.address.city = "Austin";
person.address.state = "Texas";
console.log(person.address);
console.log(person["address"]["state"]);