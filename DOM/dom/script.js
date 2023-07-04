
var theCoffee = document.getElementById("coffee").textContent="Hello, Hi";

var theDrink =document.getElementsByClassName("drink");

for(var i=0; i<theDrink.length; i++) {
    theDrink[i].style.backgroundColor = "yellow";
}
console.log(theDrink);

var url ="http://www.google.com";

var theLink = document.querySelector("a").setAttribute("href","url");


