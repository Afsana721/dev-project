
// check jQuery is ready
/*$(document).ready(() =>
    alert("I am working"));*/

// setting value

// change header test using h1 tag reference.
//$("h1").text("I am the Header");

// change last header text using h1 index
//$("h1").eq(3).text("I am not the last header");



// use also 

$("h1").last().text("I am only last header");


// getting value

/*let result = $("h1").eq(1).text();
console.log(result);*/


/*let changeFun = () => $("h1").eq(1).text("I am a dog!");
setTimeout(changeFun, 1000);*/

// Styling jQuery

$("h1").css("text-transform", " capitalize");
$("h1").css("backgroun-color", "blue");
$("h1").css("border", "red 3px dotted");

let theStyles = {
    backgroundColor: "orange",
    fonsSize: "48px",
    border: "4px solid green"

};

let content = "I am changed.";
$("h1").eq(1).css(theStyles).text(content);