
// create a variable and store specific node using document object with it's method getElementById() to handle specific node by id & querySelector methods.
//querySelector method returns first select element & querySelectorAll() returns all selecting elements and to select individual from them use index theory 
// the html tag & dom node: <h1 id="food">Donuts</h1>

// var theFood = document.getElementById("#food");
// var theFood2 = document.querySelector("#food");
// var theFood3 = document.querySelector("li");
// var theFood4 = document.querySelectorAll("li");
// var theFood5 = document.getElementsByClassName("snack");

// // text retrieve from html property
// var theText = document.getElementById("h1").textContent;
// console.log(theText);

// // Update text content in html webpage on the DOM

// var theText2 = document.getElementById("#food").textContent = " The Delicious Pastries";

// //Select html inner text & update text on DOM

// var theHTML = document.getElementsByTagName('li')[1].innerHTML;
// console.log(theHTML);

// document.getElementsByTagName("li")[2].textContent = "red <strong>Mango</strong>";

// Event Handle on the DOM Elemement / node

// create a function to handdle pop up notification alert with text when user click the button
// use document.ready()
 function popup() {
    alert("I am the button to click by onClick notification");
 };

 // alert function handing from js script using document element with function
 // when the user click the button, the function will executed. and it's maintainable and reusable, we can store it. 

 document.getElementById("btnjs").onclick = function() {
    alert("Notification alert handling by js script function");
 };

 //Event handle by event lister function

 document.getElementById("btnjs1").addEventListener("click", function() {
    alert("alert event handle by addEventListener js function");
 })