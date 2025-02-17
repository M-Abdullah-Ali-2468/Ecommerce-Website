
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    const sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

const nextButton = document.querySelector('.nav-button:first-child');
const prevButton = document.querySelector('.nav-button:last-child');
const productsGrid = document.querySelector('.products-grid');

let currentPosition = 0;
const totalProducts = document.querySelectorAll('.product-card').length;

nextButton.addEventListener('click', () => {
    if (currentPosition < totalProducts - 1) {
        currentPosition++;
        updateProductsView();
    }
});

prevButton.addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        updateProductsView();
    }
});

function updateProductsView() {
    const offset = currentPosition * -100;
    productsGrid.style.transform = `translateX(${offset}%)`;
}
// Return to Top Button
const returnButton = document.querySelector('.return-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        returnButton.classList.add('visible');
    } else {
        returnButton.classList.remove('visible');
    }
});

returnButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const track = document.querySelector('.testimonials-track');
const slides = document.querySelectorAll('.testimonials-slide');
const dots = document.querySelectorAll('.dot');
const leftButton = document.querySelector('.prev-button');
const rightButton = document.querySelector('.next-button');
let currentSlide = 0;

function updateSlider() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });

    // Update buttons
    leftButton.disabled = currentSlide === 0;
    rightButton.disabled = currentSlide === slides.length - 1;
}

// Event listeners
leftButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
    }
});

rightButton.addEventListener('click', () => {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlider();
    }
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

// Initial setup
updateSlider();

// Footer
document.getElementById('anv-newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('.anv-email-input').value;
    if (email) {
        alert('Thank you for subscribing!');
        this.reset();
    } else {
        alert('Please enter a valid email address');
    }
});