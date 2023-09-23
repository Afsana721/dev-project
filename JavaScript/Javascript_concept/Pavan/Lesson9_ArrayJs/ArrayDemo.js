//create an Array 
let cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

console.log("******use predefine Array contractor to create a new Array***********")
//create an Array using JS predefine object
let cars1 = new Array("car1", "car2", "car3");
console.log(cars1);

//access Array property
//console.log(cars[1]);

//add value in Array
cars[1]="Toyota";
//console.log(cars);
//console.log(cars[1]);

//array with different types of data
let myarray = [100, "Welcome", 10.15, true];
//console.log(myarray);

//Object in the Array

let person1 = {
    name : "Asef",
    age : 12,
    job: "student",
};

let person2 = {
    name : "Masud",
    age : 50,
    job : "work"
}

let newArray = [person1, person2];
//console.log(newArray);
//console.log(newArray[0]);
//console.log(newArray[0].job);

//how many element in the array -> length of the array
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
let total =fruits.length;
//console.log(total);

//read data to the Array using for loop;
//or use: for(let i =0; i <= fruits.length-1; i++)

/*for(let i =0; i <fruits.length; i++){
   
    console.log(fruits[i]);

}*/


//read the Array by using ' for of ' loop in JS

    for(arr of fruits) {
        console.log("Array value is : " +arr);
    };

    //how to recognize an array using - typeod
    console.log(typeof(fruits));
    console.log(Array.isArray(fruits));