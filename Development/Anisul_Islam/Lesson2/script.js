//jQuery HTML Attribute manipulation

//var myattr = document.querySelector("a").getAttribute("href");
//console.log(myattr);

$("document").ready(() => {
    console.log("Ready!!")
});

// var getAtt = $("a").attr("href");
// console.log(getAtt)

var getAtt = $("a").removeAttr("href");
console.log(getAtt)

//javaScript set attribute value
//document.querySelector("a").setAttribute("href", "https://www.amazon.com");
//jQuery
    $("a").attr("href", "https://www.amazon.com");

//CSS handling by jQuery
    // $("h1").css("color", "red");
    // $("h1").css("font-style", "italic");
    // $("h1").css("font-size", "3rem");

    // $("h1").css({
    //     "color": "green",
    //     "font-sty;e": "italic",
    //     "font-size": "3rem"
    // });

    // var theStyle ={
    //     color: "tomato",
    //     fontStyle: "italic",
    //     fontSize: "3rem"
    // };

    $("h1").addClass("style1 style2");

//javaScript Event handling
    // document.querySelector("button").addEventListener("click", function(){
    //     document.querySelector("#head").innerHTML= "You have clicked the button";
    // });

//jQuery Event handling
    // $("button").click( function() {
    //     $("#head").text("You clicked and did it.")
    // })

    //jQuery Event handling with toggle
    // $("button").click( function() {
    //     $("#head").toggleClass("style1"); //toggle has two state: remove and add
    // })

//Event Listener with multliple Elements
    //using JavaScript
    // var totalButtons = document.querySelectorAll(".myButton").length;
    // console.log(totalButtons);

    // for( i =0; i < totalButtons; i++){
    //     document.querySelectorAll(".myButton")[i].addEventListener("click", function(){
    //         var text = this.innerHTML;
    //         document.querySelector("#head2").innerHTML = text + ": is clicked";
    //     })
    // }

 //using jQuery: 
        // $(".myButton").click(function() {
        //     var valueText = this.innerHTML;
        //     $("#head2").text(valueText + ": is clicked");
        // });

        $(".myButton").on("mouseout", function() {
            var valueText = this.innerHTML;
            $("#head2").text(valueText + ": is clicked");
        })