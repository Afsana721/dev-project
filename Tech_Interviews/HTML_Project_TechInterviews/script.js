//create an array of images
const images = [
    "./assets/1.jpg",
    "./assets/2.jpg",
    "./assets/3.jpg",
    "./assets/4.jpg",
    "./assets/5.jpg",
    "./assets/6.jpg",
    "./assets/7.jpg",
    "./assets/8.jpg",
    "./assets/9.jpg"
];

//select the gallery container element using its class as selector
const galleryContainer = document.querySelector('.gallery');

//use forEach loop through each image path in the array and create image elements
images.forEach(imgSrc => {
    //create a new image element
    const img = document.createElement('img');

    //set the src attribute to the current image path
    img.src = imgSrc;
    //set the alt attribute to provide alternative text. 
    img.alt = "Fruit";

    //append created image element to the gallery container
    galleryContainer.appendChild(img);
});
