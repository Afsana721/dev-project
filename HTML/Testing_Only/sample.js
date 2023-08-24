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

const galleryContainer = document.querySelector('.gallery');

images.forEach(imgSrc => {
    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = "Fruit";
    galleryContainer.appendChild(img);
});
