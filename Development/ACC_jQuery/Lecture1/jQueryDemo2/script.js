$("document").ready(() => {
    console.log("working fine!")

    $("div").css("backgroundColor", "blue");
    $("#food").css("border", "8px solid green");
    $("div").eq(0).css("color", "yellow")
    // $(".fun").css({
    //     "letter-spacing": "25px",
    //     "fontsize": "30px"
    // });

    let theStyle = {
        letterSpacing: "25px",
        fontSize: "30px"
    };

    $(".fun").css(theStyle);
})