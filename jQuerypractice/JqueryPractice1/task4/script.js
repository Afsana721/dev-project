
//Write the jQuer to DOM load to mainpulation html elements by the function

$('document').ready(function() {
//use text function to print dom page by clicking the div box.
   /* $(".div1").click(function() {
        var x = $(".p1").html();
        $("#span1").text(x)
    }) */
// how html method works: show html info.
   /*$('.div1').click(function() {
        alert($('.p1').html());
    })*/

//text method show the text inside html p tag.
   /* $('.div1').click(function() {
        alert($('.p1').text());
    })*/

//attr is the short form of attribute method, & specify class inside attr(). 
    /*$('.p1').click(function() {
        alert($('.p1').attr('class'))
    })*/


// id attribute and change the id of p1
    $('#btn1').click(function() {
        $('.p1').attr("id", "p2id")
    })

    $('.p1').click(function() {
        alert($('.p1').attr('id'));
    })

});