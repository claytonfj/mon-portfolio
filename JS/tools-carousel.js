// tools-carousel.js - Carrousel infini des outils avec fondu

function initToolsCarousel() {
    const setupToolsCarousel = () => {
        const container = document.querySelector('.tools-carousel-container');
        const carousel = document.querySelector('.tools-carousel');
        
        if (!container || !carousel) return;

        // Dupliquer le contenu pour l'effet infini
        const items = carousel.innerHTML;
        carousel.innerHTML = items + items + items;

        const fixedSpeed = 40;
        carousel.style.animationDuration = `${fixedSpeed}s`;
        
        // Créer le masque de dégradé si non existant
        if (!container.querySelector('.fade-mask')) {
            const fadeMask = document.createElement('div');
            fadeMask.className = 'fade-mask';
            container.appendChild(fadeMask);
        }
    };

    setupToolsCarousel();
    window.addEventListener('resize', setupToolsCarousel);
}

// Exporter la fonction
window.initToolsCarousel = initToolsCarousel;