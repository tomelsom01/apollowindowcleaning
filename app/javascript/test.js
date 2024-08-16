const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 3000);
    }
}

function showSlide(n) {
    // Ensure the slide index wraps around correctly
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }

    // Remove the 'displaySlide' class from all slides
    slides.forEach(slide => slide.classList.remove('displaySlide'));

    // Add the 'displaySlide' class to the current slide
    slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {

    showSlide(slideIndex - 1);
}

function nextSlide() {
    
    showSlide(slideIndex + 1);
}
