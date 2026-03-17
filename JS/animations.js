// animations.js - Animations diverses

function initHeroTextAnimation() {
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, index * 300 + 500);
    });
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