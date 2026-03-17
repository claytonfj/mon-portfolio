// scrolling.js - Gestion du défilement

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initScrollDown() {
    const scrollDownElement = document.querySelector('.scroll-down');
    
    if (!scrollDownElement) return;
    
    scrollDownElement.addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });
}

function initScrollAnimations() {
    const animatedElements = new Set();

    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-image, .about-text, .skills-info, .skills-progress, .project-item, .contact-info, .contact-form, .certification-card');
        
        elements.forEach(el => {
            if (animatedElements.has(el)) return;
            
            const elementPosition = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                el.classList.add('animate__animated', 'animate__fadeInUp');
                animatedElements.add(el);
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
}