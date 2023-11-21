$("document").ready(function() {
    console.log("It's working!");
//hide, show, toggle effects
    $("#btn1").click(function() {
        $("#img1").hide(2000);
    })

    $("#btn2").click(function() {
        $("#img1").show(2000);
    })

    $("#btn3").click(function() {
        $("#img1").toggle(3000);
    })

//fade in, fade out, fade-toggle

$("#btn4").click(function() {       //show effect as same
    $("#img1").fadeIn(2000)
})

$("#btn5").click(function() {       //hide effect as same
    $("#img1").fadeOut(2000)
})

$("#btn6").click(function() {       //toggle effect as same 
    $("#img1").fadeToggle(2000)
})

//Slide effect
$("#btn7").click(function() {       //slide up effect as same 
    $("#img1").slideUp(2000)
})

$("#btn8").click(function() {       //slider down effect as same 
    $("#img1").slideDown(2000)
})

$("#btn9").click(function() {       //slider toggle effect as same 
    $("#img1").slideToggle(2000)
})

$("#btn10").click(function() {       //slider down effect as same 
    $("#img1").stop()
})

})