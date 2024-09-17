let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length / 2; // Adjust for duplicated slides

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
        }, 50);
    } else {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    updateDots();
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
        }, 50);
    } else {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
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
        dot.classList.toggle('active', index === currentIndex % totalSlides);
    });
}

setInterval(showNextSlide, 5500); // Change slide every 3 seconds
