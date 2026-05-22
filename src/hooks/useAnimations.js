import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { refreshLucideIcons } from '../utils/lucide';

/**
 * Shared animations from legacy js/animations.js
 */
export function useAnimations() {
  const location = useLocation();

  useEffect(() => {
    setupLucideGlobal();

    const navbar = document.getElementById('navbar');
    const onScroll = () => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navDrawer = document.getElementById('mobile-nav-drawer');
    const navOverlay = document.getElementById('mobile-nav-overlay');
    const navCloseBtn = document.getElementById('mobile-nav-close-btn');

    const openNav = () => {
      navDrawer?.classList.add('active');
      navOverlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
    const closeNav = () => {
      navDrawer?.classList.remove('active');
      navOverlay?.classList.remove('active');
      document.body.style.overflow = '';
    };

    mobileBtn?.addEventListener('click', openNav);
    navCloseBtn?.addEventListener('click', closeNav);
    navOverlay?.addEventListener('click', closeNav);
    document.querySelectorAll('.svc-nav-links a').forEach((l) =>
      l.addEventListener('click', closeNav)
    );

    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealIO.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealIO.observe(el));

    const autoRevealSelectors = [
      '.section-title-centered',
      '.pricing-card',
      '.glass-card',
      '.result-card',
      '.process-step',
      '.industry-card',
      '.solution-card',
      '.challenges-card',
      '.tab-content-panel',
    ].join(',');

    const autoObservers = [];
    const autoRevealEls = [];

    const revealAutoEl = (el) => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    };

    document.querySelectorAll(autoRevealSelectors).forEach((el) => {
      if (el.classList.contains('reveal')) return;
      autoRevealEls.push(el);
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition =
        'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)';
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            revealAutoEl(el);
            io.disconnect();
          }
        },
        { threshold: 0.05, rootMargin: '0px 0px -5% 0px' }
      );
      io.observe(el);
      autoObservers.push(io);
    });

    function countUp(el) {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      let val = 0;
      const step = target / 80;
      const timer = setInterval(() => {
        val = Math.min(val + step, target);
        el.textContent =
          (Number.isInteger(target) ? Math.floor(val) : val.toFixed(1)) + suffix;
        if (val >= target) clearInterval(timer);
      }, 18);
    }

    const countObservers = [];
    document.querySelectorAll('[data-count]').forEach((el) => {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            countUp(el);
            io.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      io.observe(el);
      countObservers.push(io);
    });

    const tiltCleanups = [];
    const attachTilt = (selector, transformFn) => {
      document.querySelectorAll(selector).forEach((card) => {
        const onMove = (e) => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = transformFn(x, y);
        };
        const onLeave = () => {
          card.style.transform = '';
        };
        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
        tiltCleanups.push(() => {
          card.removeEventListener('mousemove', onMove);
          card.removeEventListener('mouseleave', onLeave);
        });
      });
    };

    attachTilt('[data-tilt]', (x, y) =>
      `translateY(-5px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`
    );
    attachTilt('.service-h-card', (x, y) =>
      `translateY(-6px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`
    );
    attachTilt('.pricing-card', (x, y) =>
      `translateY(-6px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`
    );

    const gridState = initInteractiveGrid();
    initTypingAnimation();
    initMagneticButtons();

    const enhancedRevealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            enhancedRevealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document
      .querySelectorAll('.reveal-up, .reveal-fade, .reveal-zoom, .stagger-container')
      .forEach((el) => enhancedRevealIO.observe(el));

    const revealVisibleNow = () => {
      document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-zoom, .stagger-container').forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('visible');
        }
      });
      autoRevealEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          revealAutoEl(el);
        }
      });
    };

    requestAnimationFrame(() => {
      refreshLucideIcons();
      revealVisibleNow();
      requestAnimationFrame(revealVisibleNow);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      mobileBtn?.removeEventListener('click', openNav);
      navCloseBtn?.removeEventListener('click', closeNav);
      navOverlay?.removeEventListener('click', closeNav);
      revealIO.disconnect();
      autoObservers.forEach((io) => io.disconnect());
      countObservers.forEach((io) => io.disconnect());
      enhancedRevealIO.disconnect();
      tiltCleanups.forEach((fn) => fn());
      gridState?.cleanup();
      document.body.style.overflow = '';
      autoRevealEls.forEach((el) => {
        el.style.opacity = '';
        el.style.transform = '';
        el.style.transition = '';
      });
    };
  }, [location.pathname]);
}

function setupLucideGlobal() {
  window.lucide = { createIcons: refreshLucideIcons };
}

function initInteractiveGrid() {
  const container = document.createElement('div');
  container.className = 'interactive-grid-bg';
  const canvas = document.createElement('canvas');
  canvas.className = 'interactive-grid-canvas';
  container.appendChild(canvas);
  document.body.prepend(container);

  const ctx = canvas.getContext('2d');
  let width;
  let height;
  let mouse = { x: -1000, y: -1000 };
  let rafId;

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  const onResize = () => resize();
  const onMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  window.addEventListener('resize', onResize);
  window.addEventListener('mousemove', onMouseMove);
  resize();

  const gridSize = 40;
  const dotSize = 1;
  const color = 'rgba(99, 102, 241, 0.2)';
  const activeColor = 'rgba(168, 85, 247, 0.6)';

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    const cols = Math.ceil(width / gridSize) + 1;
    const rows = Math.ceil(height / gridSize) + 1;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * gridSize;
        const y = j * gridSize;
        const dist = Math.hypot(x - mouse.x, y - mouse.y);
        const maxDist = 150;

        if (dist < maxDist) {
          const ratio = 1 - dist / maxDist;
          ctx.fillStyle = activeColor;
          const size = dotSize + ratio * 2;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = `rgba(168, 85, 247, ${ratio * 0.2})`;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        } else {
          ctx.fillStyle = color;
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    rafId = requestAnimationFrame(draw);
  };
  draw();

  return {
    cleanup: () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      container.remove();
    },
  };
}

function initTypingAnimation() {
  document.querySelectorAll('[data-typed-text]').forEach((el) => {
    if (el.dataset.typedInitialized || el.hasAttribute('data-typed-cycle')) return;
    el.dataset.typedInitialized = 'true';
    const text = el.dataset.typedText;
    const speed = parseInt(el.dataset.typedSpeed, 10) || 100;
    const delay = parseInt(el.dataset.typedDelay, 10) || 0;
    el.textContent = '';
    el.classList.add('typed-text');

    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        el.textContent += text[i];
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          const container = el.closest('.hero-container');
          if (container) container.classList.add('typing-finished');
          setTimeout(() => {
            el.style.borderRight = 'none';
          }, 1000);
        }
      }, speed);
    }, delay);
  });
}

function initMagneticButtons() {
  document.querySelectorAll('.btn-magnetic').forEach((btn) => {
    const onMove = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };
    const onLeave = () => {
      btn.style.transform = 'translate(0, 0)';
    };
    btn.addEventListener('mousemove', onMove);
    btn.addEventListener('mouseleave', onLeave);
  });
}
