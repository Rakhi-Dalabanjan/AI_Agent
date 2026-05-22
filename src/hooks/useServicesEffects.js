import { useEffect } from 'react';

/** Services page inline script behaviors */
export function useServicesEffects() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    const sections = ['whatsapp-agent', 'workflow-automation', 'custom-solutions'];
    const tabLinks = document.querySelectorAll('.shortcut-tab[data-section]');
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            tabLinks.forEach((t) => t.classList.remove('tab-active'));
            const active = document.querySelector(
              `.shortcut-tab[data-section="${e.target.id}"]`
            );
            if (active) active.classList.add('tab-active');
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    const heroVis = document.querySelector('.hero-visual-complex');
    if (heroVis && !heroVis.dataset.particles) {
      heroVis.dataset.particles = 'true';
      heroVis.style.position = 'relative';
      for (let i = 0; i < 12; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.cssText = `
                    left:${Math.random() * 90 + 5}%;
                    bottom:${Math.random() * 30}px;
                    animation-duration:${2 + Math.random() * 3}s;
                    animation-delay:${Math.random() * 3}s;
                    opacity:${0.4 + Math.random() * 0.5};
                    background:${Math.random() > 0.5 ? 'rgba(168,85,247,0.8)' : 'rgba(99,102,241,0.8)'};
                `;
        heroVis.appendChild(p);
      }
    }

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);
}
