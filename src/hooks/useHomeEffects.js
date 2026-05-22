import { useEffect } from 'react';

/** Home page effects from legacy js/script.js */
export function useHomeEffects() {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer && !particlesContainer.dataset.initialized) {
      particlesContainer.dataset.initialized = 'true';

    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      const size = Math.random() * 4 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 10;
      const duration = Math.random() * 20 + 10;
      const opacity = Math.random() * 0.5 + 0.1;
      particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: #fff;
            border-radius: 50%;
            left: ${posX}vw;
            top: ${posY}vh;
            opacity: ${opacity};
            box-shadow: 0 0 ${size * 2}px rgba(255,255,255,0.8);
            animation: floatParticle ${duration}s ${delay}s infinite linear;
        `;
      particlesContainer.appendChild(particle);
    }
    }

    if (!document.getElementById('float-particle-style')) {
      const style = document.createElement('style');
      style.id = 'float-particle-style';
      style.textContent = `
    @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 0.5; }
        90% { opacity: 0.5; }
        100% { transform: translateY(-100vh) translateX(20vw); opacity: 0; }
    }
`;
      document.head.appendChild(style);
    }

    const anchorHandlers = [];
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const handler = (e) => {
        const href = anchor.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      };
      anchor.addEventListener('click', handler);
      anchorHandlers.push({ anchor, handler });
    });

    const floatingCards = document.querySelectorAll('.hero-visual-complex .comp-card');
    const onMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.pageX) / 60;
      const y = (window.innerHeight / 2 - e.pageY) / 60;
      floatingCards.forEach((card) => {
        card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
      });
    };
    if (floatingCards.length) document.addEventListener('mousemove', onMouseMove);

    const revealEls = document.querySelectorAll(
      '.section-title, .section-desc, .glass-card, .integration-card, .feat-item, .logo-grid, .pricing-card'
    );
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0) scale(1)';
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    const hiddenRevealEls = [];
    revealEls.forEach((el) => {
      hiddenRevealEls.push(el);
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px) scale(0.97)';
      el.style.transition =
        'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)';
      revealIO.observe(el);
    });

    requestAnimationFrame(() => {
      hiddenRevealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0) scale(1)';
          revealIO.unobserve(el);
        }
      });
    });

    return () => {
      anchorHandlers.forEach(({ anchor, handler }) =>
        anchor.removeEventListener('click', handler)
      );
      if (floatingCards.length) document.removeEventListener('mousemove', onMouseMove);
      revealIO.disconnect();
      hiddenRevealEls.forEach((el) => {
        el.style.opacity = '';
        el.style.transform = '';
        el.style.transition = '';
      });
    };
  }, []);
}
