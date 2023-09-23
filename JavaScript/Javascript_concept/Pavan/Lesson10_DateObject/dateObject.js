//create a Date Object instance using new Keyword in JS & use all the methods which is 
// available for Date Object in JS.

let dateDemo = new Date();
console.log(dateDemo);      //current date: 2023-09-18T09:48:21.874Z
// Use console.dir() to display properties and their values
console.dir(Date());

// getDate(), getMonth(), getYear()
console.log(dateDemo.getDate());
console.log(dateDemo.getMonth());
console.log(dateDemo.getFullYear());

// hours, minutes & seconds
console.log(dateDemo.getHours()+" "+dateDemo.getMinutes() +" "+dateDemo.getSeconds());