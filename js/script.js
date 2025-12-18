// Menu Mobile
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

// Fechar menu ao clicar em um link
document.querySelectorAll('#mainNav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});


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

// Formulário de Contato
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Coletar dados do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Criar mensagem para WhatsApp
    const serviceText = service ? `Serviço de interesse: ${document.getElementById('service').options[document.getElementById('service').selectedIndex].text}` : '';
    const whatsappMessage = `Olá, meu nome é ${name}. ${serviceText} ${message ? `Minha mensagem: ${message}` : ''}`;

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Redirecionar para WhatsApp
    window.open(`https://wa.me/5511999999999?text=${encodedMessage}`, '_blank');

    // Limpar formulário
    contactForm.reset();

    // Feedback visual (opcional)
    alert('Você será redirecionado para o WhatsApp para finalizar o agendamento. Obrigada!');
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});