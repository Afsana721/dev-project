//change the h1 text color uisng DOM manipulation method from JS file
document.getElementById("coffee").style.color = "green";
document.getElementById("coffee").style.color = "red";
document.getElementById("coffee").style.background = "lightblue";

var theDrinks = document.getElementsByClassName("drink");
for(var i =0; i<theDrinks.length; i++){
    
    theDrinks[i].style.background = "orange";
};

//Attributes manipulate DOM using JS
document.querySelector('a').hasAttribute('href');       //boolean value -> true / false
document.querySelector('a').getAttribute('href');
document.querySelector('a').removeAttribute('href');
document.querySelector('a').setAttribute('href', 'http://www.dunkindonuts.com');