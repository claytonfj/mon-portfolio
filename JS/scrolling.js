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
    const elements = document.querySelectorAll('.about-image, .about-text, .skills-info, .skills-progress, .project-item, .contact-info, .contact-form');
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

    // Animation d'entrée section veille
    initVeilleReveal();
}

function initVeilleReveal() {
    var section = document.querySelector('.veille-section');
    if (!section) return;

    var header = section.querySelector('.section-header');
    var introText = section.querySelector('.veille-intro-text');
    var introImage = section.querySelector('.veille-intro-image');
    var filters = section.querySelector('.veille-filters');
    var cards = section.querySelectorAll('.veille-card');

    // État initial : tout caché
    [header, filters].filter(Boolean).forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px)';
        el.style.transition = 'opacity 1s ease, transform 1s ease';
    });
    if (introText) {
        introText.style.opacity = '0';
        introText.style.transform = 'translateX(-60px)';
        introText.style.transition = 'opacity 1s ease, transform 1s ease';
    }
    if (introImage) {
        introImage.style.opacity = '0';
        introImage.style.transform = 'translateX(60px)';
        introImage.style.transition = 'opacity 1s ease, transform 1s ease';
    }
    cards.forEach(function(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px)';
        card.style.transition = 'opacity 1s ease, transform 1s ease';
    });

    var revealed = false;
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting && !revealed) {
                revealed = true;
                observer.unobserve(section);

                // 1. Titre
                if (header) {
                    header.style.opacity = '1';
                    header.style.transform = 'translateY(0)';
                }

                // 2. Intro texte (depuis la gauche) + image (depuis la droite)
                setTimeout(function() {
                    if (introText) {
                        introText.style.opacity = '1';
                        introText.style.transform = 'translateX(0)';
                    }
                    if (introImage) {
                        introImage.style.opacity = '1';
                        introImage.style.transform = 'translateX(0)';
                    }
                }, 500);

                // 3. Filtres
                setTimeout(function() {
                    if (filters) {
                        filters.style.opacity = '1';
                        filters.style.transform = 'translateY(0)';
                    }
                }, 1000);

                // 4. Cartes une par une
                cards.forEach(function(card, i) {
                    setTimeout(function() {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 1400 + i * 200);
                });
            }
        });
    }, {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.05
    });

    observer.observe(section);
}
