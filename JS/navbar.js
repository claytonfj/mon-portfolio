// navbar.js - Gestion de la navbar capsule

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');

    if (!navbar) return;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        // Capsule tightens after scrolling past 80px
        if (currentScroll > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-capsule a');
    const mobileLinks = document.querySelectorAll('.mobile-menu__content a');

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(function(link) {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
                mobileLinks.forEach(function(link) {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
                });
            }
        });
    }, {
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0
    });

    sections.forEach(function(section) {
        observer.observe(section);
    });
}

function initMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu__content a');

    if (!menuBtn || !mobileMenu) return;

    // Create overlay for closing menu by clicking outside
    const overlay = document.createElement('div');
    overlay.className = 'mobile-menu-overlay';
    document.body.appendChild(overlay);

    function closeMenu() {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.body.classList.remove('mobile-menu-open');
    }

    function openMenu() {
        menuBtn.classList.add('active');
        mobileMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('mobile-menu-open');
    }

    menuBtn.addEventListener('click', function() {
        if (mobileMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}
