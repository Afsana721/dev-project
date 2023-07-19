
//  image Array with image paths as string array

var url1 = "https://media.gettyimages.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=gi&k=20&c=ANSbtbaJgd_AQYLH0f7gp2eLgzXdal6UZrw3Lxqgeok=";
var url2 = "https://www.decorilla.com/online-decorating/wp-content/uploads/2023/02/Interior-design-trends-2023-imagined-by-Decorilla.jpg";
var url3 =  "https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2021/12/25141633/home-temple-design.jpg";

//var imageArray = ["Assets/Rotaing_img1.jpg", "Assets/Rotaing_img2.jpg", "Assets/Rotaing_img3.jpg"];
var imageArray = [url1, url2, url3];

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


setInterval(rotateImage, 3000);



