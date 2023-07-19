
// to roating image one after another, make a Array variable which contains images and show one to another when program asking individual following index

var img1="Assets/Roating_img1.jpg";
var img2="Assets/Home_imge2.png";
var img3 ="Assets/home_imge3.png";

var imagesArray = [ing1,img2,img3];

//create varible for indexing. creating a index variable, initialize value 0. 
var index = 0; 

//create a function to roating image from the dom- use selector and attribute which value will be changed by imageArray follow the index variable.

function roatingImage() {
    document.querySelector("img").setAttribute("src", imagesArray[index]);
//increasing index variable's value and make a condition
    index ++;
    if(index >= imagesArray.length) {
        index = 0;
    }

}

// make a setInterval method with time- takes two agrument-function & time (chnage the image source asking time)
setInterval(roatingImage, 3000);
