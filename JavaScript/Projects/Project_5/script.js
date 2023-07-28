//create 5 variables using image path
var img1 ="https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
var img2 = "https://thumbs.dreamstime.com/b/bombay-aloo-curried-potatoes-5946228.jpg";
var img3 = "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
var img4 = "https://images.pexels.com/photos/7226323/pexels-photo-7226323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
var img5 = "https://images.pexels.com/photos/948421/pexels-photo-948421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
var img6 = "https://images.pexels.com/photos/5150134/pexels-photo-5150134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

//create an Array for image variables

const images = [img1, img2, img3, img4, img5,img6];

// Index to keep track of the currently displayed image
let currentImageIndex =0;

//get the html emage element from DOM using image id

const imageElement = document.getElementById("image");

// create a function to display the image at teh given index

function showImages(index) {
    imageElement.src = images[index];
}

//create function to navigate to the previous imge
function prevImage() {

//calculate teh index of the previous image
    currentImageIndex = (currentImageIndex -1 + images.length) % images.length;

//display the previous image
    showImages(currentImageIndex);

}

// function to navigate to the next image
function nextImage() {

//calculate the index of the next image 
    currentImageIndex = (currentImageIndex +1) % images.length;

//display next image
    showImages(currentImageIndex);
}

//display the initial image when the page loades.

showImages(currentImageIndex);
