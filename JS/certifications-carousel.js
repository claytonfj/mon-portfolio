// certifications-carousel.js - Carrousel des certifications

function initCertificationsCarousel() {
    if (typeof Swiper === 'undefined') return;

    var slides = document.querySelectorAll('.swiper-slide');
    var slideCount = slides.length;
    if (slideCount === 0) return;

    var middleIndex = Math.floor(slideCount / 2);

    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: middleIndex,

        coverflowEffect: {
            rotate: 20,
            stretch: -50,
            depth: 550,
            modifier: 1,
            slideShadows: false
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
            hide: false,
            snapOnRelease: true
        },

        navigation: false,
        speed: 600,
        resistanceRatio: 0.7,

        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        threshold: 10,

        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        watchSlidesProgress: true,
        preloadImages: true,
        updateOnImagesReady: true,
        updateOnWindowResize: true,
        roundLengths: true,

        autoplay: false,
        loop: false,

        on: {
            init: function() {
                var self = this;
                setTimeout(function() {
                    self.slides.forEach(function(slide) {
                        slide.style.opacity = '1';
                        slide.style.visibility = 'visible';
                        slide.style.zIndex = '1';

                        var card = slide.querySelector('.certification-card');
                        if (card) {
                            card.style.opacity = '1';
                            card.style.visibility = 'visible';
                            card.style.transform = 'translateZ(0)';
                        }
                    });
                    self.update();
                    self.slideTo(middleIndex, 0);
                }, 100);
            }
        }
    });

    // Single delayed update
    setTimeout(function() {
        swiper.update();
    }, 500);

    // Debounced resize
    var resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            swiper.update();
        }, 250);
    });
}
