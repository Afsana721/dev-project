// $("document").ready(() => {
//     console.log("it's working!")
// });

// function func1(){
//     document.getElementById('img1').style.width = "800px";
// }

// $("button").click(func1);
// function func1(){
//     $("#img1").css("width", "800px");
// };

// $("button").click(function(){
//     $("#img1").css("width", "800px");
// });

// $("document").ready(() => {
//     console.log("it's working!")
//     $("button").click(() => {
//         $("#img1").css("width", "800px");
//     });
// });

$("document").ready(() => {
    console.log("it's working!")

    // $("button").dblclick(function()  {
    //     $("#img1").css("width", "800px");
    // });
    
    /*
    $("#img1").mouseenter(() => {
        $("#img1").css("width", "900px");
    });

    $("#img1").mouseleave(() => {
        $("#img1").css("width", "300px");
    });*/

    $("#img1").hover(fun1, fun2)
    function fun1(){
        $("#img1").css("width", "900px");
    }

    function fun2(){
        $("#img1").css("width", "200px");
    }

});
     
    



