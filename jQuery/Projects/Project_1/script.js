//check jquery working fine 

/*$(document).ready(() => {
    alert("I am working fine");
})*/

//create a function to make a alert to display h1 tag contain, use backtick
$(function() {
    const h1Content = $("h1").text();
    alert(`The content of my h1 tag is:  ${h1Content}`);
})

// set the content of the h1 tag with your name text by creaeing variable with jQuery function
const yourName = "Student";
$("h1").text(`This is ${yourName} header.`)

// change the content of the list of element with id canine to lion
$("#canine").text("lion");

//change the content of the second list only with class feline - cat to leapard. Second & third same class name, so use eq() method return specified index num.
$(".feline:eq(1)").text("leopard");

//set image to show in the browser using attribute(.attr), create varible using jquery with attr("src")
//inject the attribute's url



$("img").attr("src", "https://s3.amazonaws.com/accsoftwarebootcamp.com/garfield-1.jpg");
$("#imageSrc").text($("img").attr("src"));

// Add a colorpicker type to the input tag using the attribute method
$("input").attr("type", "color");

// Get the value from the text input using .val()
const inputValue = $("input[type='text']").val();

$("input[type='text']").val("Horse");

// Now we can get the value
const inputValueUpdated = $("input[type='text']").val();
$("#inputValue").text(inputValueUpdated);

// To get the selected value from the dropdown list, use the following command:
const selectedValue = $("#dropdownList").val();
console.log(selectedValue);

// Add the class "box" to all list elements
$("li").addClass("box");

// Add the class "imageBox" to the image
$("img").addClass("imageBox");

// Change the first list item to use the "imageBox" class
$("li:first").removeClass("box").addClass("imageBox");

// Remove the class from the third list element
$("li:last").removeClass();

//from dev tool 
// Use the toggleClass() method to add/remove the "box" class to the text input
$("input[type='text']").toggleClass("box");

// Use the fadeOut() method on the image
$("img").fadeOut();

// Use the fadeIn() method on the image after a delay of 2 seconds
setTimeout(() => {
  $("img").fadeIn();
}, 2000);
