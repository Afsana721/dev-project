
$(document).ready(function() {
    function getContent() {
        var headerContent = $('h1').text();
        alert("this content of my h1 tag is: headerContent");
    }

// call the getContent function to alert pop up. 

    getContent();

    $('h1').text("This is your name header");
    $('#canine').text('lion');
    $('.feline:nth-child(2)').text('leopard');
});

var imageSrc = $("img").attr('src');
$('#imageSrc').text(imageSrc);

$('img').attr('src', 'https://s3.amazonaws.com/accsoftwarebootcamp.com/garfield-1.jpg');
imageSrc = $('img').attr('src');
$('#imageSrc').text(imageSrc);

$('input').attr('type', 'color');
$('input').attr('id', 'colorPicker');


var inputValue = $('input[type="text"]').val();
//console.log("Value from text input: " +inputValue);

$('input[type="text"]').val('horse');
var newInputeValue = $('input["type="text"]').val();
$('#textInputValue').text(newInputValue);

$('li').addClass('box');
$('img').addClass('imageBox');
$('li:first-child').removeClass('box').addClass('imageBox');
$('li:nth-child(3)').removeClass();