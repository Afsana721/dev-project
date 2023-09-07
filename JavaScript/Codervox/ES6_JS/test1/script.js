console.clear();
//check var & let variable declare
var phone = "iPhone";

if(phone === 'iPhone') {
    //const myPhone = "I'm really enjoying my new phone"; // allow block scope
    
    let myPhone = "I'm really enjoying my new phone";
    
    //var myPhone = "I'm really enjoying my new phone";  //allow access outside of block.
    //console.log(myPhone);       //it will work, because logging inside the block
}

//console.log(myPhone);        //it doesn't show because inside the code block if{}, no access
//console.log(phone);

//let not possible redeclare variable

let dinner = 'salad';
console.log(dinner);
//let dinner = 'lobster'  //not possible to redeclare 
dinner = 'lobser';         // but reassign possible
console.log(dinner);

//var possible to redeclar
var time = 'today';
var time = 'yesterday';  //redeclare possible using var
console.log(time);

time ='tomorrow';       //reassign possible using var
console.log(time);


//const keyword variable -> const is block scope and not redeclare & reassign possible
console.log("Here const variable scope");

for(i=0; i <5; i++){
    const coffee = "I drink coffee with lots of sugar and cream";
    //coffee = 'Hello';         //not allows reassign
    //const coffee = "hi";      //not allows redeclare
    console.log(coffee);        //have access inside of the block
}

//console.log(coffee);   //no access outside of the block

//object
const lunch = {dessert: "chocolate chip muffin"};   //not allow change object properties
console.log(lunch.dessert);
lunch.dessert = "Oatmeal raisin cookie";  //we can reasign object properites value. 
console.log(lunch.dessert);

//array 
const brackfast = ['eggs', 'toast', 'hot sauce'];   //not allow array variable change
console.log(brackfast[2]);
brackfast[2] = "really hot sauce";      // allow variable index value but reference is same array variable -breakfast same memory location. 
console.log(brackfast[2]);
console.log(brackfast);