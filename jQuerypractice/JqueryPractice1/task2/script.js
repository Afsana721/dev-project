
//  create a function with the name func1() using javascript

//  function func1() {
//     document.getElementById('img1').style.width = "450px";
// }

//create jQuery function for button click action, predefined jquery function

// $('button').click(func1);
// function func1() {
//     $('#img1').css('width', '500px');
// }

// we can write anonymous function.

// $('button').click(function() {
//     $("#img1").css('width', '500px');
// });

// create a function where ref. whole html document, ready function is called after the html document fully loaded.
// that time jquery will wait in a queue untile html document loaded, after loaded then it will do action.
// so, ready is a jQuery Event.


/*$('document').ready(function() {

    $('button').click(function() {
        $("#img1").css('width', '500px');
    });

})*/

// dobule click action jQuery

/*$('document').ready(function() {

    $('button').dblclick(function() {
        $("#img1").css('width', '500px');
    });

});*/


// mouseEnter action jQuery & mouseleave action

$('document').ready(function() {

    /* $('button').mouseenter(function() {
        $("#img1").css('width', '500px');
    });

   $('button').mouseleave(function() {
        $("#img1").css('width', '300px');
    }); */
//alternate code for mouseleave

$('#img1').hover(func1, func2)
function func1() {
    $("#img1").css('width', '500px');
}

function func2() {
    $("#img1").css('width', '300px');
}


});