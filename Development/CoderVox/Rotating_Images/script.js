
var url1 = "./Assets/Rotaing_img1.jpg";
var url2 ="./Assets/Rotaing_img2.png";
var url3 = "./Assets/Rotaing_img3.jpg"

var imageArray = [url1, url2, url3];

var index = 0;

function rotateImage(){
    document.querySelector("img").setAttribute("src", imageArray[index]);
    index ++;
        if(index >= imageArray.length){
            index = 0;
        }

}
setInterval(rotateImage, 1000);

