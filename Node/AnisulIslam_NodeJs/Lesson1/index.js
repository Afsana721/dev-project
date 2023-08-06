
//check node is working on console
//console.log("hello");

//import student functions from student js file
//s1 variable can get access exported getName function, return the return value

    // const s1 = require("./student");
    // console.log(s1.getName());
    // console.log(s1.getAge());
    // console.log(s1.cgpa);

//use only specify function to access 
    const {getName, getItem} = require("./student");
   
  
    console.log(getName());
    console.log(getItem);