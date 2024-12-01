// carrusel
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    let currentIndex = 0;
    const totalSlides = slides.length;
    const intervalTime = 3000;
    let slideInterval;

    const updateSlides = () => {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            if (index === currentIndex) {
                slide.classList.add("active");
            }
        });
    };

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlides();
    };

    const prevSlide = () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlides();
    };

    next.addEventListener("click", () => {
        nextSlide();
        resetInterval();
    });

    prev.addEventListener("click", () => {
        prevSlide();
        resetInterval();
    });

    const resetInterval = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    };

    slideInterval = setInterval(nextSlide, intervalTime);
});

// Menú hamburguesa
function toggleMenu() {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
}

//Boton Ir arriba
const scrollUpButton = document.querySelector('.scroll-up');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 200) {
                    scrollUpButton.style.display = 'flex';
                } else {
                    scrollUpButton.style.display = 'none';
                }
            });
    
            scrollUpButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
       //Boton Ir abajo    
  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
