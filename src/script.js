let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slidesContainer = document.querySelector('.slides');

function showSlides() {
    const offset = -slideIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
    dots.forEach((dot, index) => {
        dot.className = dot.className.replace(' active', '');
        if (index === slideIndex % dots.length) {
            dot.className += ' active';
        }
    });
}

function showNextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
        slides.style.transition = 'none';
        currentIndex = 0;
        slides.style.transform = `translateX(0)`;
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            currentIndex++;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots(); // Ensure dots are updated after the transition
        }, 50);
    } else {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }
}

function showPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        slides.style.transition = 'none';
        currentIndex = totalSlides - 1;
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            currentIndex--;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
            updateDots(); // Ensure dots are updated after the transition
        }, 50);
    } else {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateDots();
    }
}

function currentSlide(index) {
    slideIndex = index;
    showSlides();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex % totalSlides);
    });
}

setInterval(showNextSlide, 5500); // Change slide every 5.5 seconds
