let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length / 2; // Adjust for duplicated slides

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function currentSlide(index) {
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

setInterval(showNextSlide, 5500); // Change slide every 5.5 seconds
