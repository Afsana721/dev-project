
/*$(document).ready(() => 
alert("I am working!"));*/

//Update our items using ul element.

/*$('ul').on('click', function() {
    $(this).toggleClass('completed');
});*/

//Update our items- we are clicking on an "li", we are targeting the "ul." We need to focus our click. We can add "li" as a second argument & this keyword referring to teh specific list ite that we are clicking on.

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Delete our items using ul element- we are clicking li but we are removing ul all.

/*$('ul').on('click', function() {
    $(this).remove();
});*/


//delete individual item.
/*$('ul').on('click', 'span', function() {
    $(this).remove();
});*/

// span is being clicked but, if we want the "li" to disapper, then we can use -parent();

/*$('ul').on('click','span', function() {
    $(this).parent().remove();
});*/

// adding items
/*$("input").keypress(function() {

});*/

// adding items using -Event- object to do something if the 'enter' key is pressed & 13 is represents 'enter' key.
/*$('input').keypress(function(event) {
    if(event.which === 13) {
        let listItem = $(this).val();
    }
});*/

$("input").keypress(function(event) {
    if(event.which ===13) {
        let listItem = $(this).val();
        $("ul").append('<li>${listItem}
        <span><i class ='fa fa-trash-alt'></i></span></li>'
        );
    }
});