// animations.js - Animations diverses

function initHeroTextAnimation() {
    const subtitle = document.querySelector('.hero-content .subtitle');
    const titleWords = document.querySelectorAll('.title-word');
    const description = document.querySelector('.hero-content .description');
    const heroBtns = document.querySelector('.hero-content .hero-btns');

    // Animer le subtitle en premier
    if (subtitle) {
        setTimeout(() => {
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
        }, 200);
    }

    // Animer les mots du titre avec décalage
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, index * 250 + 600);
    });

    // Animer la description
    if (description) {
        setTimeout(() => {
            description.style.opacity = '1';
            description.style.transform = 'translateY(0)';
        }, 1400);
    }

    // Animer les boutons
    if (heroBtns) {
        setTimeout(() => {
            heroBtns.style.opacity = '1';
            heroBtns.style.transform = 'translateY(0)';
        }, 1700);
    }
}

function initScrollReveal() {
    if (typeof ScrollReveal === 'undefined') return;
    
    const scrollReveal = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });
    
    scrollReveal.reveal('.section-header', { 
        origin: 'top',
        delay: 200
    });
    
    scrollReveal.reveal('.about-image, .skills-info', { 
        origin: 'left',
        interval: 200
    });
    
    scrollReveal.reveal('.about-text, .skills-progress', { 
        origin: 'right',
        interval: 200
    });
    
    scrollReveal.reveal('.project-item', { 
        interval: 200
    });
    
    scrollReveal.reveal('.certification-card', { 
        interval: 200
    });
    
    scrollReveal.reveal('.contact-info', { 
        origin: 'left',
        delay: 200
    });
    
    scrollReveal.reveal('.contact-form', { 
        origin: 'right',
        delay: 200
    });
}