// main.js - Fichier principal qui initialise toutes les fonctionnalités

document.addEventListener('DOMContentLoaded', function() {
    // Initialiser toutes les fonctionnalités
    initPreloader();
    initCustomCursor();
    initNavbarScroll();
    initMobileMenu();
    initActiveNav();
    initSmoothScrolling();
    initScrollAnimations();
    initContactForm();
    initHeroTextAnimation();
    initScrollReveal();
    initToolsCarousel();
    initLoadMoreProjects();
    initScrollDown();
    
    // Initialiser la modal des projets
    if (typeof initProjectModal === 'function') {
        initProjectModal();
    }

    // Initialiser le bouton "Voir plus de projets"
    if (typeof initLoadMoreProjects === 'function') {
        initLoadMoreProjects();
    }
    
    // Initialiser le carrousel des certifications
    if (typeof initCertificationsCarousel === 'function') {
        initCertificationsCarousel();
    }

    // Initialiser la timeline Aceternity
    if (typeof initTimelineScroll === 'function') {
        initTimelineScroll();
    }

    // Initialiser la veille informatique
    if (typeof initVeille === 'function') {
        initVeille();
    }

    console.log('Toutes les fonctionnalités sont initialisées !');
});