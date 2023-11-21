$("document").ready(() => {
    console.log("ready to go!!!");

    $("#btn").click(function() {
        //$("#div1").hide(2000).show(2000);
        //$("#div1").toggle(2000);
        //$("#div1").fadeOut(2000).fadeIn(2000);
        //$("#div1").fadeToggle(2000);
        //$("#div1").fadeTo(2000,0.4);
        //$("#div1").slideUp(2000).slideDown(2000);
         //$("#div1").slideToggle(2000);
         //$("#div1").animate({opacity: "0.5"}, 2000);
         //$("#div1").animate({height:"400px"}, 2000);
         //$("#div1").animate({height:"400px", width: "9000"}, 2000);
         $("#div1").animate({
            height:"400px", 
            width: "9000",
            marginLeft: "30px"
        }, 2000);
        
    })
})