//JSON Data
let text = '{ "employees" : [' + 
'{ "firstName": "John", "lastName": "Doe" },' +
'{"firstName": "Anna", "lastName": "Smith"},' +
'{"firstName":"Peter", "lastName": "Jones"} ] }';

let JSObject = JSON.parse(text);
console.log(JSObject.employees[1].firstName);
console.log(JSObject.employees[1].lastName);