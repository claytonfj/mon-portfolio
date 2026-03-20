// preloader.js - Gestion du préloader (attend le chargement du robot 3D)

function initPreloader() {
    const preloader = document.querySelector('.preloader');

    if (!preloader) return;

    function hidePreloader() {
        preloader.classList.add('fade-out');
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);

        // Lancer les animations du hero après la disparition du preloader
        setTimeout(function() {
            initHeroTextAnimation();
        }, 300);
    }

    // Attendre que le robot 3D soit chargé (ou fallback après 8s)
    let ready = false;
    const fallbackTimeout = setTimeout(function() {
        if (!ready) {
            ready = true;
            hidePreloader();
        }
    }, 8000);

    window.addEventListener('splineReady', function() {
        if (!ready) {
            ready = true;
            clearTimeout(fallbackTimeout);
            // Attendre 3s après le chargement du robot pour masquer son animation de dézoom
            setTimeout(hidePreloader, 3000);
        }
    });
}
