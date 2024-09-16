


/* Automated image slider */
let currentIndex = 0;

function showNextSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
    updateDots();
}

function showPrevSlide() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
    updateDots();
}

function currentSlide(index) {
    currentIndex = index;
    updateSlidePosition();
    updateDots();
}

function updateSlidePosition() {
    const slides = document.querySelector('.slides');
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
