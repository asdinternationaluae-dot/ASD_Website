/**
 * tilt.js — Vanilla JS 3D Tilt Effect
 */
class TiltEffect {
    constructor(elements) {
        this.elements = elements;
        this.init();
    }

    init() {
        this.elements.forEach(el => {
            el.addEventListener('mousemove', (e) => this.handleMove(e, el));
            el.addEventListener('mouseleave', () => this.handleReset(el));
            
            // Add glow element if it doesn't exist
            if (!el.querySelector('.tilt-glow')) {
                const glow = document.createElement('div');
                glow.className = 'tilt-glow';
                el.appendChild(glow);
            }
        });
    }

    handleMove(e, el) {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15; // Max 15 degrees
        const rotateY = ((x - centerX) / centerX) * 15;
        
        const inner = el.querySelector('.tilt-inner') || el;
        inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        // Update glow position
        const glowX = (x / rect.width) * 100;
        const glowY = (y / rect.height) * 100;
        el.style.setProperty('--glow-x', `${glowX}%`);
        el.style.setProperty('--glow-y', `${glowY}%`);
    }

    handleReset(el) {
        const inner = el.querySelector('.tilt-inner') || el;
        inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
}

// Global initialization
window.initTilt = (selector) => {
    const elements = document.querySelectorAll(selector);
    new TiltEffect(elements);
};
