
$('document').ready(function() {
// task2: click events

    $('img').click(function() {
        alert("You have clicked the image");
    })

// click list items
    // $('li').click(function() {
    //     alert("You have clicked on a list element");
    // })
// this keyword 
    $('li').eq(1).click(function() {
        $(this).fadeOut();
    })

    $('li').click(function() {
        var color = $(this).text();
        alert("Your clicked on a list element. Color: " +color);
    })

//task 2 Propagation
    $('span').click(function(event) {
        event.stopPropagation();
        $(this).remove();
    } )

// // remove paragraog tag
//     $('p').click(function() {
//         $(this).remove();
//     })

// //add click event for div
//     $('div').click(function() {
//         $(this).remove();
//     })




})