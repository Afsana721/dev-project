

/*$('ul').on('click', function(){
    $(this).toggleClass('completed');
});*/

$('ul').on("click", "li", function(){
    $(this).toggleClass("completed");
});

/*$('ul').on('click', function(){
    $(this).remove();
});*/

$('ul').on('click', 'span', function(){
    $(this).parent().remove();
});

$('input').keypress(function(Event){
    // I want to run creation of an item
    // when the user clicks the "Enter" key
    //whose code is 13
    if(Event.which ===13){
        let listItem = $(this).val();
    // I want to append the item to the ul
    
    $("ul").append(
        '<li> ${lisstItem}<span>X</span></li>');
    }
});