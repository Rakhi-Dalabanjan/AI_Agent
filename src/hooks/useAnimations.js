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
    document.querySelectorAll('.reveal, [data-scroll]').forEach((el) => revealIO.observe(el));

    const autoRevealSelectors = [
      '.section-title-centered',
      '.section-title',
      '.section-desc',
      '.pricing-card',
      '.glass-card',
      '.result-card',
      '.process-step',
      '.industry-card',
      '.solution-card',
      '.challenges-card',
      '.tab-content-panel',
      '.integration-card',
      '.feat-item',
      '.logo-grid',
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

    const gridState = initInteractiveGrid();
    initTypingAnimation();

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
  // Hint to the browser: keep this canvas on its own GPU layer
  canvas.style.willChange = 'transform';
  container.appendChild(canvas);
  document.body.prepend(container);

  const ctx = canvas.getContext('2d', { alpha: true });
  const gridSize = 44;
  const dotSize = 1.2;
  const maxDist = 140;
  const baseColor = 'rgba(99, 102, 241, 0.18)';
  const activeColor = 'rgba(168, 85, 247, 0.55)';

  let width = 0;
  let height = 0;
  let points = [];   // pre-computed { x, y } grid positions
  let mouse = { x: -9999, y: -9999 };
  let dirty = true;  // only redraw when needed
  let rafId;
  let resizeTimer;

  // Build the grid point list once
  const buildGrid = () => {
    const cols = Math.ceil(width / gridSize) + 1;
    const rows = Math.ceil(height / gridSize) + 1;
    points = [];
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        points.push({ x: i * gridSize, y: j * gridSize });
      }
    }
  };

  const resize = () => {
    width  = canvas.width  = window.innerWidth;
    height = canvas.height = window.innerHeight;
    buildGrid();
    dirty = true;
  };

  // Throttle resize to avoid jank during window drag
  const onResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  };

  const onMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    dirty = true;   // mark as needing a redraw
  };

  window.addEventListener('resize', onResize, { passive: true });
  window.addEventListener('mousemove', onMouseMove, { passive: true });
  resize();

  const draw = () => {
    rafId = requestAnimationFrame(draw);
    if (!dirty) return;   // skip frame — nothing changed
    dirty = false;

    ctx.clearRect(0, 0, width, height);

    // --- Pass 1: draw all inactive dots in one batched path ---
    ctx.beginPath();
    ctx.fillStyle = baseColor;
    for (let k = 0; k < points.length; k++) {
      const { x, y } = points[k];
      const dx = x - mouse.x;
      const dy = y - mouse.y;
      if (dx * dx + dy * dy >= maxDist * maxDist) {
        ctx.moveTo(x + dotSize, y);
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
      }
    }
    ctx.fill();

    // --- Pass 2: draw active (near-mouse) dots individually ---
    const maxDistSq = maxDist * maxDist;
    for (let k = 0; k < points.length; k++) {
      const { x, y } = points[k];
      const dx = x - mouse.x;
      const dy = y - mouse.y;
      const distSq = dx * dx + dy * dy;
      if (distSq < maxDistSq) {
        const ratio = 1 - Math.sqrt(distSq) / maxDist;
        const size = dotSize + ratio * 2.2;
        ctx.globalAlpha = 0.35 + ratio * 0.65;
        ctx.fillStyle = activeColor;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  };

  draw();

  return {
    cleanup: () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
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

