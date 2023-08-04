//create a alert function using document object with function ready().
/*document.ready(
    alert("hello!")
)*/


//use js document object & get html element by Id and change the text by innerHTML
document.getElementById("demo1").innerHTML = "This is Dynamic text message";
document.getElementById("demo2").innerHTML = "Hello JavaScript!";

//locate button click & action is onclick to displaydate function
document.getElementById("myBtn").onclick = displayDate;


//create a displaydate function to display date insede innerHTML
function displayDate() {
  document.getElementById("mydate").innerHTML = Date();
}



//write some text using js document object with its method write()
document.write("Hello, I am from JS file")
document.write("<h3>h3 header come from the Js file</h3>");
