
// check script js file is working

//$(document).ready(() => 
//alert("I am working!"));


/*$(document).ready(function() {
    alert("I am working fine!");
});*/

//creates a function to click the button
//$ is the selector to access img1 in html element. like document.getElementById("ima1")- same
// fadeToggle is a function comes from jQuery library.

function func1() {
   // $("#img1").fadeToggle();
   $("#img1").fadeToggle(3000);
}

function func2() {
    // jquery - $(element name).action()
    // javascript - document.getElementByTagName(element name), here we can also use html id attribute to make a action
// both the div tag elements
   // $("div").css('background-color', 'orange');

//use id attribute to make action by jQuery but Id will be unique for each element. Use class for more elements
//document.getElementById(elementname) 
   // $('#p1').css('font-style', 'italic');

    //$('.p1').css('font-style', 'italic');

// change only div3 using id attribute, because id is unique attribute for jQuery.

    //$("#div1, #div3").css('background-color', 'red');

//change happens multiple  attribute at the same jQuery command
    //$('#div1, li').css('color', 'red');
    //$('#div1, li').css('font-size', '30px');

// outside div paragraph
    //$("div > p").fadeToggle();   // p is inside div

   // $("p:first").fadeToggle();          // jquery access first p element from the heml .
    //$("p:second").fadeToggle()            // it is not working like this statement for jqery
   // $('li:even').fadeToggle();              // all even number list will gone
    $('li:odd').fadeToggle();                 // all odd number list will gone. 

}