// main.js - Fichier principal qui initialise toutes les fonctionnalités

document.addEventListener('DOMContentLoaded', function() {
    // Core
    initPreloader();
    initCustomCursor();
    initNavbarScroll();
    initMobileMenu();
    initActiveNav();
    initSmoothScrolling();
    initScrollAnimations();
    initToolsCarousel();
    initScrollDown();

    // Contact form
    if (typeof initContactForm === 'function') initContactForm();

    // ScrollReveal (loaded externally)
    if (typeof initScrollReveal === 'function') initScrollReveal();

    // Conditional inits
    if (typeof initProjectModal === 'function') initProjectModal();
    if (typeof initLoadMoreProjects === 'function') initLoadMoreProjects();
    if (typeof initCertificationsCarousel === 'function') initCertificationsCarousel();
    if (typeof initTimelineScroll === 'function') initTimelineScroll();
    if (typeof initVeille === 'function') initVeille();
    if (typeof initGallery === 'function') initGallery();
});
