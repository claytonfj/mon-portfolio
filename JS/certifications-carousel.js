// certifications-carousel.js - Carrousel des certifications

function initCertificationsCarousel() {
    if (typeof Swiper === 'undefined') {
        console.error('ERREUR: Swiper.js n\'est pas chargé !');
        return;
    }

    console.log('Swiper.js chargé, initialisation du carousel...');
    
    // Compter les slides
    const slides = document.querySelectorAll('.swiper-slide');
    const slideCount = slides.length;
    console.log(`Nombre de slides détectées: ${slideCount}`);
    
    if (slideCount === 0) return;
    
    // Calculer l'index du milieu
    const middleIndex = Math.floor(slideCount / 2);
    
    // Configuration Swiper 
    const swiper = new Swiper('.swiper-container', {
        // Effet de base
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        initialSlide: middleIndex,
        
        // Effet coverflow 
        coverflowEffect: {
            rotate: 20,
            stretch: -50,
            depth: 550,
            modifier: 1,
            slideShadows: false
        },
        
        // Pagination
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3
        },
        
        // Scrollbar
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
            hide: false,
            snapOnRelease: true
        },
        
        // Pas de navigation par flèches
        navigation: false,
        
        // Vitesse et fluidité
        speed: 600,
        resistanceRatio: 0.7,
        freeMode: false,
        
        // Pour mobile
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        threshold: 10,
        
        // Options importantes pour l'affichage
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        preloadImages: true,
        updateOnImagesReady: true,
        updateOnWindowResize: true,
        
        // Ajustements pour éviter les bugs d'affichage
        roundLengths: true,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        
        // Pas d'autoplay
        autoplay: false,
        
        // Pas de loop
        loop: false,
        
        // Callbacks pour debug
        on: {
            init: function() {
                console.log('Swiper initialisé avec succès');
                
                setTimeout(() => {
                    this.slides.forEach((slide, index) => {
                        slide.style.opacity = '1';
                        slide.style.visibility = 'visible';
                        slide.style.zIndex = '1';
                        
                        const card = slide.querySelector('.certification-card');
                        if (card) {
                            card.style.opacity = '1';
                            card.style.visibility = 'visible';
                            card.style.transform = 'translateZ(0)';
                        }
                    });
                    
                    this.update();
                    this.slideTo(middleIndex, 0);
                }, 100);
            },
            
            slideChange: function() {
                console.log(`Slide changée: ${this.activeIndex + 1} / ${slideCount}`);
            }
        }
    });
    
    // Force un update après un délai
    setTimeout(() => {
        swiper.update();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
        console.log('Swiper mis à jour après chargement');
    }, 500);
    
    // Redimensionnement de la fenêtre
    window.addEventListener('resize', function() {
        setTimeout(() => {
            swiper.update();
        }, 300);
    });
}