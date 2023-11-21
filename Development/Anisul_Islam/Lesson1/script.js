//document.querySelector("h1").innerHTML = "World!"
// $("h1").text("world!")
// $(".my-div").text("hi, hello");
// $("#p1, h1").html("<b>game</b>");

//$("#p1").append("game");
//$("#p1").prepend("game");

var mypara1 = $("<p></p>").text("This is paragraph 0");
//$("#p1").before(mypara1);
$("#p1").after(mypara1);