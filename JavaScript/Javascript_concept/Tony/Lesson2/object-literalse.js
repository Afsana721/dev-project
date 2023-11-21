//var person = new Object();
//console.log(person);    //return {}

var person = {
    firstname: 'Asef',
    lastname: 'Khan',
    address: {
        city: 'Austin',
        state: 'Texas',
        street: '120 main St'
    }
};
//console.log(person);   


function greet(person){
    console.log("hi " + person.firstname)
}

greet(person);
//can add new properties values
greet({ firstname: 'Masud', lastname: 'Khan' });

//create new properties in existing object
person.address2 = {
    stret: 'main 111 st',
    city: 'Houston'

}
console.log(person.address2)