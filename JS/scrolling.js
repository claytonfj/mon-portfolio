// scrolling.js - Gestion du défilement

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
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
    const elements = document.querySelectorAll('.about-image, .about-text, .skills-info, .skills-progress, .project-item, .contact-info, .contact-form, .certification-card');
    if (!elements.length) return;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -15% 0px',
        threshold: 0
    });

    elements.forEach(function(el) {
        observer.observe(el);
    });
}
