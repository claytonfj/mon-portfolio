// timeline-scroll.js — Aceternity-style scroll animation

function initTimelineScroll() {
    const timeline = document.getElementById('aceternityTimeline');
    if (!timeline) return;

    const lineProgress = document.getElementById('atLineProgress');
    const entries = timeline.querySelectorAll('.at-entry');

    // Animer la ligne de progression au scroll
    function updateLine() {
        var rect = timeline.getBoundingClientRect();
        var timelineTop = rect.top + window.scrollY;
        var timelineHeight = rect.height;

        // Calcul du scroll relatif à la timeline
        var scrollTop = window.scrollY;
        var windowHeight = window.innerHeight;
        var start = timelineTop - windowHeight * 0.9;
        var end = timelineTop + timelineHeight - windowHeight * 0.5;
        var progress = (scrollTop - start) / (end - start);
        progress = Math.min(1, Math.max(0, progress));

        if (lineProgress) {
            lineProgress.style.height = (progress * 100) + '%';
        }
    }

    // Observer pour les entrées (classes actives + visibles)
    var observerOptions = {
        root: null,
        rootMargin: '-20% 0px -30% 0px',
        threshold: 0
    };

    var visibleObserverOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    // Active = actuellement dans le viewport centré
    var activeObserver = new IntersectionObserver(function(observerEntries) {
        observerEntries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('at-active');
            } else {
                entry.target.classList.remove('at-active');
            }
        });
    }, observerOptions);

    // Visible = a été scrollé au moins une fois (pour les animations d'apparition)
    var visibleObserver = new IntersectionObserver(function(observerEntries) {
        observerEntries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('at-visible');
            }
        });
    }, visibleObserverOptions);

    entries.forEach(function(entry) {
        activeObserver.observe(entry);
        visibleObserver.observe(entry);
    });

    // Scroll listener avec requestAnimationFrame pour perf
    var ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateLine();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Init
    updateLine();
}
