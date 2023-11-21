$("document").ready(function() {
    console.log("it's working!")

    $("#btn").click(function() {
        $("#img").animate({
            left: "150px",
            opacity: "1",
            height: "600px",
            width: "600px"
        }, "slow");
    })
})