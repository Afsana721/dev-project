/*var food = ['donuts', 'coffee', 'ice-cream', 'lobster'];

console.log(food)
console.log(food.length)
console.log(food[food.length-1]);
console.log(food[3]);

//check to see if an array contains a certain element by includes() & join arrays concat()

var bakery = ["Banana Nut Bread", "Blueberry Muffin", "Butter Croissant"];
console.log(bakery.includes("Blueberry Muffin"));
var bakery2 = ["Banana muffin", "Butter bread", "Croissant Nut"];
var newArray = bakery.concat(bakery2);
console.log(newArray);*/

//reverse() - reverse the index order - last one will be first and first one will be last one.
//reverse() reversed the original array, not creating new memory, make change original array.
/*var food = ["pizza", "burgers", "fires", "tacos","burgers"];
var foodReverse = food.reverse();
console.log(foodReverse);
console.log(food);*/

//push(); add new item to original array, not create new memory, change happens in the
// previous memory location. 
/*var food = ["pizza", "burgers", "fires", "tacos","burgers"];
console.log(food);
food.push('cheeseburger');
console.log(food);*/

//pop() method - remove the last element form an array and returns the item that was popped. 
//change the original array in the same previous memory.
/*var food = ["pizza", "burgers", "fires", "tacos","burgers"];
console.log(food);
var popItem =food.pop();
console.log(food);
console.log(popItem);*/

//indexOf() method -> searches an array for a specified item, and returns the index position. 
//It returns -1 if item is not found
/* var food = ["pizza", "burgers", "fires", "tacos","burgers"];
console.log(food);
var indexItem = food.indexOf("tacoss");
console.log(indexItem);
console.log(food.indexOf("burgers", 3)); */

//unshift() -> inserts a new element to teh start of an array. and change original array.
/*var lunch = ["chicken salad", "pasta", "protein shake"];
console.log(lunch);
var unshifting = lunch.unshift("donuts");
console.log(unshifting);
var unshifting1 = lunch.unshift("donuts","chocolate");
console.log(unshifting1);
console.log(lunch);*/

//shift() -> first element of an array is removed
// return : the remove item
/* 
var lunch = ["donuts","chicken salad", "pasta", "protein shake"];
console.log(lunch);
var shifting = lunch.shift();
console.log(shifting);
console.log(lunch);*/

//slice(): Copies selected elements into a new array. But not changing original array.
// creating new memory space with the new slicing array form the original array. 

/*
var brunch = ["scrambled eggs", "toast", "smoked salmon", "yougurt"];
console.log(brunch);
var slicing = brunch.slice(0,3);
console.log("Slicing Array is : " + slicing);
console.log(brunch);
*/

//map() -> calls a funciton on every element in an array, and 
//makes a new array with the results. return new array, not changing original array.

    /*
    var people = ["kim", "jim", "tim"];
    console.log(people);
    function letters(letter){
        return letter.toUpperCase();
    };

    var newPeople = people.map(letters);
    console.log(newPeople);
    console.log(people);

    var num = [1,2, 3, 4, 5];
    console.log(num);
    function add(number){
        return number *2;
    };

    var newNum = num.map(add);
    console.log(newNum);
    console.log(num);
    */

    //filter() -> returns an array made from elements that pass a test performed on another  array. 
    //(This does no cange the original array.)
    /*
    var nums = [1, 10, 13, 37];
    console.log(nums);
    function over14(num){
        return num > 12;
    };

    var check = nums.filter(over14);
    console.log(check);
    console.log(nums);
    */

    // Iterating over arrays: Iteration means accessing each element of an array, and then doing something with the data.
    // there are several ways of iterating over an array in Javascript. 
    // we could access oiur array, but what if we had hundreds or thousands of items in our array.

   /*
    var coffee = ["Americano", "Caffe Latte", "Flat white"];
    // document.write(coffee[0]);
    // document.write(coffee[1]);
    // document.write(coffee[2]);


    for(var i =0; i < coffee.length; i++){
      //document.write("<br>"+coffee[i]);
      document.write("<div>" + coffee[i] + "</div>");
        console.log(coffee[i]);
    }
    */

    // We can use the forEach method to loop over an array. It calls the provided function once for every
    // element in teh array. 

    /*
    var coffee = ["Americano", "Caffe Latte", "Flat white"];
    
    function theDrink(drink){
        document.write("<div>" + drink + "</div>");
    }
    coffee.forEach(theDrink);
    */

//another way: instead of creating a separate function, we can pass an anonymous 
//function as the argument. 

var coffee = ["Americano", "Caffe Latte", "Flat white"];
coffee.forEach((drink) => {
    document.write("<div>" + drink + "</div>");
})
