$("document").ready(() => {
    console.log("it's working!")
});

//$("#h3").text("I am the last header");

//$("h1").eq(2).text("I am the last header");

let value = () => $("h1").eq(1).text("I am dog!")
setTimeout(value, 3000);

// $("h1").css("text-transform", "capitalize");
// $("h1").eq(0).css("backround-color", "blue")

let thisStyle = {
    backgroundColor: "orange",
    fontSize: "48px",
    border: "4px solid green"
};

let content = "I have changed";

$("h1").eq(2).css(thisStyle).text(content);