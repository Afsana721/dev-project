
//select /grab element from DOM / browser window object
var theFood = document.getElementById("food");
var theFood2 = document.querySelector("#food");
var theFood3 = document.querySelectorAll(".snack");
var theFood4 = document.getElementsByTagName("li");
console.log(theFood4);
var theFood5 = document.getElementsByClassName(".snack");
var theFood6 = document.getElementsByName("hello");

//manipulate html text through DOM manipulation. 
// textContent property allows us to ge / update the text in an element. 

var theText = document.getElementById("food").textContent = "Pizza dish";
var theText2 = document.getElementById("food").textContent = "The Delicious Pastries";
var theHTML = document.getElementsByTagName("li")[1].innerHTML;
var theHTML2 = document.getElementsByTagName("li")[2].innerHTML = "Vanila <strong>Frosted</strong>";

//All CSS properties can be changed using JavaScript, to accomplish this, we use the style property.
