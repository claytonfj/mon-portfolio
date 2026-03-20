import { Application } from 'https://unpkg.com/@splinetool/runtime@1.12.69/build/runtime.js';

// ── Spline 3D Robot ──
const canvas = document.getElementById('spline-canvas');
const loader = document.getElementById('spline-loader');

const isMobile = window.innerWidth <= 992;

if (!canvas || isMobile) {
  // Pas de Spline sur mobile ou si canvas absent — débloquer le preloader
  window.addEventListener('load', () => window.dispatchEvent(new Event('splineReady')));
}

if (canvas && !isMobile) {
  const app = new Application(canvas);
  app
    .load('https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode')
    .then(() => {
      if (loader) loader.style.display = 'none';

      // Forcer le canvas à la taille réelle du conteneur
      function resizeSplineCanvas() {
        const container = canvas.parentElement;
        if (!container) return;
        const dpr = window.devicePixelRatio || 1;
        const w = Math.round(container.clientWidth * dpr);
        const h = Math.round(container.clientHeight * dpr);
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
        }
      }
      resizeSplineCanvas();
      window.addEventListener('resize', resizeSplineCanvas);

      // Signaler que le robot 3D est prêt
      window.dispatchEvent(new Event('splineReady'));
    })
    .catch(() => {
      // Fallback : masquer le loader et le canvas, le dégradé reste visible
      if (loader) loader.style.display = 'none';
      if (canvas) canvas.style.display = 'none';
      window.dispatchEvent(new Event('splineReady'));
    });

  // ── Forward pointer events au canvas Spline ──
  // Permet au robot de suivre la souris uniquement dans la zone hero
  const heroEl = document.getElementById('home');
  if (heroEl) {
    heroEl.addEventListener('pointermove', (e) => {
      if (e.target === canvas) return;
      const syntheticEvent = new PointerEvent('pointermove', {
        clientX: e.clientX,
        clientY: e.clientY,
        screenX: e.screenX,
        screenY: e.screenY,
        pointerId: e.pointerId || 1,
        pointerType: e.pointerType || 'mouse',
        bubbles: true,
        cancelable: true
      });
      canvas.dispatchEvent(syntheticEvent);
    });
  }
}

// ── Effet lumière souris ──
const heroSection = document.getElementById('home');
const glow = document.getElementById('hero-glow');

if (heroSection && glow) {
  heroSection.addEventListener('mouseenter', () => { glow.style.opacity = '1'; });
  heroSection.addEventListener('mouseleave', () => { glow.style.opacity = '0'; });
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + 'px';
    glow.style.top = (e.clientY - rect.top) + 'px';
  });
}

// ── Particules subtiles ──
const particleCanvas = document.getElementById('hero-particles');
if (particleCanvas) {
  const ctx = particleCanvas.getContext('2d');
  let w, h, particles;

  function resize() {
    const hero = document.getElementById('home');
    w = particleCanvas.width = hero.offsetWidth;
    h = particleCanvas.height = hero.offsetHeight;
  }

  function createParticles() {
    const count = Math.floor((w * h) / 18000);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.dx;
      p.y += p.dy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(120, 130, 255, ${p.opacity})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
}
