// cursor.js - Curseur personnalisé (desktop only)

function initCustomCursor() {
    // Disable on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    if (!cursor || !cursorFollower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    let rafId = null;

    // Use RAF for smooth follower animation instead of setTimeout
    function updateFollower() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        rafId = requestAnimationFrame(updateFollower);
    }

    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    }, { passive: true });

    rafId = requestAnimationFrame(updateFollower);

    // Use event delegation for hover effects
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('a, button, .tool-item, .project-item, .menu-btn')) {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.opacity = '0.5';
            cursorFollower.style.width = '20px';
            cursorFollower.style.height = '20px';
        }
    }, { passive: true });

    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('a, button, .tool-item, .project-item, .menu-btn')) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.opacity = '1';
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
        }
    }, { passive: true });
}
