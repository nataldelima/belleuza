// Slider de Depoimentos
const testimonialDots = document.querySelectorAll('.slider-dot');
const testimonials = document.querySelectorAll('.testimonial');

testimonialDots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'));

        // Atualizar depoimentos ativos
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });
        testimonials[slideIndex].classList.add('active');

        // Atualizar dots ativos
        testimonialDots.forEach(d => {
            d.classList.remove('active');
        });
        dot.classList.add('active');
    });
});

// Troca automática dos depoimentos
let currentSlide = 0;
function changeSlide() {
    testimonialDots.forEach(d => d.classList.remove('active'));
    testimonials.forEach(t => t.classList.remove('active'));

    currentSlide = (currentSlide + 1) % testimonials.length;

    testimonialDots[currentSlide].classList.add('active');
    testimonials[currentSlide].classList.add('active');
}

setInterval(changeSlide, 5000);