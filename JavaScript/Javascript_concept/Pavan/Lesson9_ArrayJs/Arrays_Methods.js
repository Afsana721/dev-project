//create an Array
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);
//toString & join methods
//toString convert array as string, only comma separated
let fruitsString = fruits.toString(); 
console.log(fruitsString);

//Join method convert array as string, only comma separated, but in join method has opportunity
// to separated array value by special character- " *" 

//let fruitsJoin = fruits.join();
//let fruitsJoin = fruits.join("*");
let fruitsJoin = fruits.join(". ");
console.log("use join method : " +fruitsJoin);

//pop() method - pop() will remove and return the last element from the Array. So previous
// Array will be new values without last element.

let fruitsPop = fruits.pop();
console.log(fruitsPop);
console.log(fruits);

//push() method - add new element into the Array at the end and return lenght of the new adding Array. 

let fruitsPush = fruits.push('Watermelon');
console.log(fruitsPush);
console.log(fruits);        // [ 'Banana', 'Orange', 'Apple', 'Watermelon' ]

//shift() method- it will remove the first array element and shift all other elements to the lower index.
// return remove element.
let fruits2 = ['Apple', 'pineapple', 'pear', 'pomegranate'];
console.log(fruits2);

console.log(fruits2.shift());
console.log(fruits2);

// unshift() method will do - add a new element at the first place in the array and rest of 
// the elements will be moved to the higher index right and return the length of the new 
// added elements length;

console.log(fruits2.unshift('Banana'));
console.log(fruits2);

//Delete the element from the Array using delete method
// it will delete the element but memory loaction will be allocated for till remains here.

let fruits3 = [ 'Banana', 'Apple', 'pineapple', 'pear', 'pomegranate' ];
delete fruits3[2];
console.log(fruits3); // now fruits3 array data is: [ 'Banana', 'Apple', <1 empty item>, 'pear', 'pomegranate' ]

//Array conact() method - joining / merging 2 or more arrays

let num1 = [ 10, 20];
let num2 = [ 'Asef', 40, 'Masud'];

//num1.concat(num2);
console.log(num1.concat(num2));         // console display : [ 10, 20, 'Asef', 40, 'Masud' ]

let num3 = [ true, 10.50, 'Khan', 41];
//let num4 = num1.concat(num2).concat(num3);

//console.log(num4);
console.log(num1.concat(num2, num3));

//slice() method: create a new Array, When we use slice() method, we select the array index number
// like: employee.slice(2);, so, it will return after 2 index- that means create a new array
// to include from index 3 and rest of them as a new array.

let employee = ['emp1', 'emp2', 'emp3','emp4','emp5'];
//console.log("from silce :" +employee.slice());
console.log(employee);
let afterSlice = employee.slice;
console.log("after implemented slice method : " + afterSlice);

let afterSlicingArray = employee.slice(2);      // it is a new Array.
console.log("After slicing array for 2 index : " + afterSlicingArray);
console.log("first Array is : " + employee);


// sort() method for Array JS. sort() will sort the element from the array. 
// To sort the elements in an array without mutating the original array, use toSorted().
//The toSorted() method of Array instances is the copying version of the sort() method. 
//It returns a new array with the elements sorted in ascending order.

let fruits4 = ['Banana', 'Apple', 'Lemon', 'Mango', 'Orange'];
let toSortedFruites4 = fruits4.toSorted();
console.log("Original Array is : " + fruits4);
console.log("not muted original array : " + toSortedFruites4)

//let afterSortTheArray = fruits4.sort();
console.log("First Array is : " + fruits4);
//console.log("After apply sort method : " + afterSortTheArray);

let numbers = [10,8,6,7,5,2,3,1,4, 9];
console.log(numbers);
//let afterUsedSort = numbers.sort();
//console.log("sort array : " + afterUsedSort);  //sort array : 1,10,2,3,4,5,6,7,8,9
//console.log("Original Array : " + numbers);     //Original Array : 1,10,2,3,4,5,6,7,8,9

let toSortedArray = numbers.toSorted();
console.log("After toSorted() : " + toSortedArray);
console.log("Original Array is : "+ numbers);


//reverse() for JS Array
let stringArray = ["Asef", "Masud", "Minu", "Haleel"];
let reverseArray = stringArray.reverse();
console.log("after reverse : " + reverseArray);     //after reverse : Haleel,Minu,Masud,Asef
console.log("Original Array is now : " + stringArray);  //Original Array is now : Haleel,Minu,Masud,Asef

let stringArray2 = ["Hello", "Hi", "Hihi", "Kuku"];
let reverseArray2 = stringArray2.toReversed();

console.log("after reverse : " + reverseArray2);     //after reverse : Kuku,Hihi,Hi,Hello
console.log("Original Array is now : " + stringArray2);  //Original Array is now : Hello,Hi,Hihi,Kuku