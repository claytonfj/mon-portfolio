// gallery.js - Lightbox de la galerie créative

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxVisual = document.getElementById('lightboxVisual');
    const lightboxInfo = document.getElementById('lightboxInfo');
    const lightboxCounter = document.getElementById('lightboxCounter');

    if (!galleryItems.length || !lightbox) return;

    let currentIndex = 0;
    const items = [...galleryItems];

    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightbox() {
        const item = items[currentIndex];
        if (!item) return;

        const img = item.querySelector('.gallery-img');
        const hover = item.querySelector('.gallery-hover');

        if (lightboxVisual) {
            if (img) {
                lightboxVisual.innerHTML = '<img src="' + img.src + '" alt="' + img.alt + '" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;">';
            }
        }

        if (lightboxInfo && hover) {
            lightboxInfo.innerHTML = hover.innerHTML;
        }

        if (lightboxCounter) {
            lightboxCounter.textContent = (currentIndex + 1) + ' / ' + items.length;
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateLightbox();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateLightbox();
    }

    // Clic sur les items
    galleryItems.forEach(function(item, idx) {
        item.addEventListener('click', function() { openLightbox(idx); });
    });

    // Fermer
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
    });

    // Navigation
    if (lightboxNext) lightboxNext.addEventListener('click', nextSlide);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevSlide);

    // Clavier
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
}

window.initGallery = initGallery;
