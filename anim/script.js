let currentIndex = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.gallery img');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    document.querySelector('.gallery').style.transform = `translateX(${-currentIndex * 100}%)`;
}