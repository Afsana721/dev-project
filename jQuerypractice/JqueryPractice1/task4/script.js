
//Write the jQuer to DOM load to mainpulation html elements by the function

$('document').ready(function() {
//use text function to print dom page by clicking the div box.
    $(".div1").click(function() {
        var x = $(".p1").html();
        $("#span1").text(x)
    }) 

});