
//create three variables
var url1 ="Assets/Js_background1 (1).jpg";
var url2 = "Assets/Js_background2 (1).jpg";
var url3="Assets/Js_background3 (1).jpg" ;

//create image Array using three variable
var imageArray = [url1, url2, url3];

//set index value 0
var index =0;

// Javascript setInterval function/ method to set using index point. setInterval takes two agrument
// first agrument is function & second argument number of time to run function continuously. Change the image path / source every specific time.

function rotateImage() {
//specify the select tag & attribute, & imageArray who holds three images location. Specify the index number from the Array variable
    document.querySelector("img").setAttribute("src", imageArray[index]);
    index ++;
    if(index >= imageArray.length) {
        index = 0;
    }

}

// create interval function to set time to ratate image. 

setInterval(rotateImage, 3000);