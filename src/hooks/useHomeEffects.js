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

    return () => {};
  }, []);
}

