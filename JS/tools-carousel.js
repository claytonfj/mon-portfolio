// tools-carousel.js - Carrousel infini des outils avec fondu

function initToolsCarousel() {
    const carousel = document.querySelector('.tools-carousel');
    if (!carousel) return;

    // Only duplicate once — prevent re-duplication on resize
    if (carousel.dataset.initialized) return;
    carousel.dataset.initialized = 'true';

    const items = carousel.innerHTML;
    carousel.innerHTML = items + items + items;
    carousel.style.animationDuration = '40s';
}

window.initToolsCarousel = initToolsCarousel;
