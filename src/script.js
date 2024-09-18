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
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlides();
}

function showPrevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlides();
}

function currentSlide(index) {
    slideIndex = index;
    showSlides();
}

document.addEventListener('DOMContentLoaded', () => {
    showSlides();
    setInterval(showNextSlide, 5000); // Change slide every 3 seconds
});


// scrool animation for info 
// JavaScript
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });
  
  document.querySelectorAll('.wrapper-info').forEach((element) => {
    observer.observe(element);
  });
  