//Create an object, an object can hold more properties with its values. 
 let person = {
    firstName: "John",
    lastName: "Kenedy",
    age:50,
     weight:60
}

//Accessing the Object property: use Object with specify the property.
 console.log(person.firstName);
 console.log(person.age);

 //Add new property to the existing object
 person["height"] = 5.5;
 person.job = "Teacher";
 console.log(person);

//Update existing property
 person["weight"] = 70;
 console.log(person)

//Remove the property from the object
delete person["age"];
console.log(person.age);

//for in loop to read object properties
    for(let x in person) 
    {
        console.log(x);         //print object properties name with values
        console.log(person.x);  //print object properties values only
        console.log(x  +"   "+ person[x]);
    }


