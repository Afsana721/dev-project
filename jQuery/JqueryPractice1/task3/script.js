
//First ready function

$('document').ready(function() {

//use click, hide, show, toggle(both task hide& show using single button) fuctions from jQuery- predefined and set timeour by jquery 

    $('#btn1').click(function() {
        $('#imag1').hide(1000);
    })

    $('#btn2').click(function() {
        $('#imag1').show(1000);
    })

    $('#btn3').click(function() {
        $('#imag1').toggle(3000);
    })
//user fadeIn, fadeout and fadeToggle effect

    $('#btn4').click(function() {
        $('#imag1').fadeIn(2000);
    })

    $('#btn5').click(function() {
        $('#imag1').fadeOut(1000);
    })

    $('#btn6').click(function() {
        $('#imag1').fadeToggle(1000);
    })

    //use slide actions fuctions from jQuery- predefined and set timeour by jquery 

    $('#btn7').click(function() {
        $('#imag2').slideUp(1000);
    })

    $('#btn8').click(function() {
        $('#imag2').slideDown(1000);
    })

    $('#btn9').click(function() {
        $('#imag2').slideToggle(1000);
    })

// calling stop function here
    $('#btn10').click(function() {
        $('#imag2').stop();
    })

// make function to click and get animated effect of the image.
// animate effect function has three parameters: first one is goining to css properties for style changes, Second parameter is the time stamp & 
//third parameter is call back function
 // we can use 'slow' or time stamp: 2000 /3000 ms.
 // alert("Animated");   - it will pop up before animate action happens, use call back function to make it properly.
        
    /*$('#btn11').click(function() {
            $('#imag3').animate({
            left:'300px',
            opacity:'1',
            height: '400px',
            width:'400px'
        }, 'slow', function() {
            alert("Animated")
        })
   
        
    })*/

// create a call back function for slide up and down by call back function

        /*$('#btn11').click(function() {
            $('#imag3').slideUp(2000, function() {
                $('#imag3').slideDown(2000);
            })
        })*/

//jQuery Callbacks & Chanining functions, allows multiple methods within a single statement, we can make more than effect in a single html element.
// here asking two different effect:- slideup & slideDown actions.
    $('#btn11').click(function() {
        //$('#imag3').slideUp(2000).css('opacity',1).slideDown(3000);  

        // we can also add more actions here
        $('#imag3').slideUp(2000).css('opacity','1').slideDown(2000).fadeOut(2000).fadeIn(2000);
    })

});