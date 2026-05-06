/**
 * hero.js — ASD Logo entrance animation using GSAP
 * Dependencies: GSAP 3.12.5 (CDN)
 */
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('hero-logo');
  const tagline = document.getElementById('hero-tagline');
  const subtitle = document.getElementById('hero-subtitle');
  const cta = document.getElementById('hero-cta');
  const scrollIndicator = document.getElementById('scroll-indicator');
  const pauseBtn = document.getElementById('hero-pause');
  const video = document.getElementById('hero-video');

  // Reduced motion check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Set final states directly
    if (logo) { logo.style.opacity = '1'; logo.style.transform = 'none'; }
    if (tagline) { tagline.style.opacity = '1'; tagline.style.transform = 'none'; }
    if (subtitle) { subtitle.style.opacity = '1'; subtitle.style.transform = 'none'; }
    if (cta) { cta.style.opacity = '1'; cta.style.transform = 'none'; }
    return;
  }

  // Check GSAP is loaded
  if (typeof gsap === 'undefined') {
    // Fallback: show everything
    [logo, tagline, subtitle, cta].forEach(el => {
      if (el) { el.style.opacity = '1'; el.style.transform = 'none'; }
    });
    return;
  }

  // Animation timeline
  const tl = gsap.timeline({ delay: 0.3 });

  // 1. Logo entrance: scale + perspective flip
  tl.to(logo, {
    scale: 1.05,
    opacity: 1,
    rotateY: 0,
    duration: 0.8,
    ease: 'back.out(1.7)'
  });

  // 2. Settle overshoot
  tl.to(logo, {
    scale: 1,
    duration: 0.2,
    ease: 'power2.out'
  });

  // 3. Tagline fade in
  tl.to(tagline, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.1');

  // 4. Subtitle fade in
  tl.to(subtitle, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: 'power2.out'
  }, '-=0.3');

  // 5. CTA fade in
  tl.to(cta, {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: 'power2.out'
  }, '-=0.2');

  // After entrance: gentle float loop
  tl.add(() => {
    gsap.to(logo, {
      y: -8,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: 'sine.inOut'
    });

    // Pulsing glow
    gsap.to(logo, {
      filter: 'drop-shadow(0 0 30px rgba(21,101,192,0.7))',
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: 'sine.inOut'
    });
  });

  // Scroll indicator: hide on scroll
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        scrollIndicator.classList.add('hidden');
      } else {
        scrollIndicator.classList.remove('hidden');
      }
    });
  }

  // Pause/play video button
  if (pauseBtn && video) {
    pauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        pauseBtn.setAttribute('aria-label', 'Pause video');
        pauseBtn.innerHTML = '<i data-lucide="pause" width="20" height="20"></i>';
      } else {
        video.pause();
        pauseBtn.setAttribute('aria-label', 'Play video');
        pauseBtn.innerHTML = '<i data-lucide="play" width="20" height="20"></i>';
      }
      if (typeof lucide !== 'undefined') lucide.createIcons();
    });
  }
});
