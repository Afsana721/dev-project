
$("document").ready(function() {


// dom mainpulation by css properties with rgb value on the alert box.
   /* $(".div1").click(function() {
        //alert($(".div1").css("background-color"));
        alert($(".div1").css("height"));
    })*/

// alert popup show the div propertie by button click and change the background color

    $("#btn1").click(function() {
        $(".div1").css("background-color", "green");
    })

    $(".div1").click(function() {
       alert($(".div1").css("background-color")); 
      
    })

//append method used to append something with the particular element.

    /*$("#btn1").click(function() {
        $(".div1").append("<p>This is box 2</p>");
    })*/

       $("#btn1").click(function() {
        $(".div1").append('<img src= "Assets/food3.jpg" height="100px" width="100px">')

         })

       

//prepend: add something to the beginning of something else.

       /* $("#btn2").click(function() {
        $('.div1').prepend('<img src= "Assets/food3.jpg" height="100px" width="100px">')
    })*/


    $("#btn2").click(function() {
        $('.div1').prepend("<p>This is paragraph 2 using prepend</p>")
    })

//before & after function of jquery

    $('#btn3').click(function() {
        $('.div1').before("<p>This is paragraph 2 using befoe</p>")
    })

    $('#btn4').click(function() {
        $('.div1').after("<p>This is paragraph 2 using after</p>")
    })

//remove & empty function/methods: remove method uses any types from the html doc.
// remove whole div box from the dom.
    $('#btn5').click(function() {
        $('.div1').remove();
    })

//empty method work differently, it makes element empty without deleting
// empty method vanishes all element inside div element

    $("#btn6").click(function() {
        $('.div1').empty();
    })

});