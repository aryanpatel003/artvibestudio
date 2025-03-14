const images = document.querySelector('.images');
const totalImages = document.querySelectorAll('.images img').length;
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    images.style.transform = `translateX(${offset}%)`;
    document.body.style.backgroundImage = `url(image${currentIndex + 1}.jpg)`; // Change the background image
}