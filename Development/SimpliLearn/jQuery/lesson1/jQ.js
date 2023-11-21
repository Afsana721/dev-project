// function func1() {
//     $("#img1").fadeToggle();
// };

function func1() {
  $("#img1").fadeToggle(3000);
};

function func2() {
//jQuery syntax: $(element name).action/function to do some task
    // /$("#div1, #div2").css("background-color", "orange");
    //$("#div1, #div3").css("background-color", "orange");
    //$("#p1").css("font-style", "italic");
   //$(".p1").css("font-style", "italic");

    //$("#div1,li").css("background-color", "purple");

    //$("div > p").fadeToggle();
    //$("div  p").fadeToggle();
    //$("p:first").fadeToggle(); //first p element but not working as second

    //$("li:even").fadeToggle(); //odd li will be fade
    $("li:odd").fadeToggle();
}