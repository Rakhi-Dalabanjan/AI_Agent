import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useMagneticEffects
 * Naviravity-style premium cursor interactions:
 *   - Magnetic attraction on buttons (smooth spring pull with safe cap)
 *   - 3D perspective tilt on cards (GPU-layer transform)
 *   - --mouse-x / --mouse-y CSS vars for spotlight glows
 *   - Cursor-follow glow orb on the page
 *   - Nav item subtle lift
 */
export function useMagneticEffects() {
  const location = useLocation();

  useEffect(() => {
    const cleanups = [];

    // ── Shared rAF state ──────────────────────────────────────────
    let rafPending = false;
    const schedule = (fn) => {
      if (!rafPending) {
        rafPending = true;
        requestAnimationFrame(() => {
          fn();
          rafPending = false;
        });
      }
    };

    // ══════════════════════════════════════════════════════════════
    // 1. CURSOR GLOW ORB — soft radial blob following the mouse
    // ══════════════════════════════════════════════════════════════
    const orb = document.createElement('div');
    orb.className = 'cursor-glow-orb';
    document.body.appendChild(orb);

    let orbX = window.innerWidth / 2;
    let orbY = window.innerHeight / 2;
    let targetOrbX = orbX;
    let targetOrbY = orbY;
    let orbRafId;

    const onOrbMouseMove = (e) => {
      targetOrbX = e.clientX;
      targetOrbY = e.clientY;
    };
    window.addEventListener('mousemove', onOrbMouseMove, { passive: true });

    const lerpOrb = () => {
      orbX += (targetOrbX - orbX) * 0.07;
      orbY += (targetOrbY - orbY) * 0.07;
      orb.style.transform = `translate(calc(${orbX}px - 50%), calc(${orbY}px - 50%))`;
      orbRafId = requestAnimationFrame(lerpOrb);
    };
    lerpOrb();

    cleanups.push(() => {
      cancelAnimationFrame(orbRafId);
      window.removeEventListener('mousemove', onOrbMouseMove);
      orb.remove();
    });

    // ══════════════════════════════════════════════════════════════
    // 2. MAGNETIC BUTTONS — spring attraction toward cursor
    // ══════════════════════════════════════════════════════════════
    const MAGNETIC_SELECTORS = [
      '.btn',
      '[class^="btn-"]',
      '[class*=" btn-"]',
      '.nav-btn-solid',
      '.open-modal',
      '.btn-magnetic',
    ].join(', ');

    const attachMagnetic = (el) => {
      let currentX = 0;
      let currentY = 0;
      let targetX = 0;
      let targetY = 0;
      let animId;
      let isHovered = false;

      const spring = () => {
        currentX += (targetX - currentX) * 0.22;
        currentY += (targetY - currentY) * 0.22;

        const dist = Math.hypot(targetX - currentX, targetY - currentY);
        el.style.transform = `translate(${currentX}px, ${currentY}px)`;

        if (isHovered || dist > 0.05) {
          animId = requestAnimationFrame(spring);
        } else {
          currentX = 0;
          currentY = 0;
          el.style.transform = '';
          animId = null;
        }
      };

      const onEnter = () => {
        isHovered = true;
        if (!animId) animId = requestAnimationFrame(spring);
      };

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;

        // Pull strength capped at 16px to prevent jumping on large elements
        const maxPull = 16;
        targetX = Math.max(-maxPull, Math.min(maxPull, dx * 0.24));
        targetY = Math.max(-maxPull, Math.min(maxPull, dy * 0.24));

        // Update CSS vars for the glow highlight
        const pctX = ((e.clientX - rect.left) / rect.width) * 100;
        const pctY = ((e.clientY - rect.top) / rect.height) * 100;
        el.style.setProperty('--mouse-x', `${pctX}%`);
        el.style.setProperty('--mouse-y', `${pctY}%`);
      };

      const onLeave = () => {
        isHovered = false;
        targetX = 0;
        targetY = 0;
        el.style.removeProperty('--mouse-x');
        el.style.removeProperty('--mouse-y');
        if (!animId) animId = requestAnimationFrame(spring);
      };

      el.addEventListener('mouseenter', onEnter, { passive: true });
      el.addEventListener('mousemove', onMove, { passive: true });
      el.addEventListener('mouseleave', onLeave, { passive: true });

      cleanups.push(() => {
        cancelAnimationFrame(animId);
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
        el.style.transform = '';
        el.style.removeProperty('--mouse-x');
        el.style.removeProperty('--mouse-y');
      });
    };

    // ══════════════════════════════════════════════════════════════
    // 3. SPOTLIGHT GLOW — set --mouse-x/y on card surface hover
    // ══════════════════════════════════════════════════════════════
    const SPOTLIGHT_SELECTORS = [
      '.glass-card',
      '.service-h-card',
      '.pricing-card',
      '.showcase-visual',
    ].join(', ');

    const attachSpotlight = (card) => {
      const onMove = (e) => {
        schedule(() => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          card.style.setProperty('--mouse-x', `${x}%`);
          card.style.setProperty('--mouse-y', `${y}%`);
        });
      };
      const onLeave = () => {
        card.style.removeProperty('--mouse-x');
        card.style.removeProperty('--mouse-y');
      };
      card.addEventListener('mousemove', onMove, { passive: true });
      card.addEventListener('mouseleave', onLeave, { passive: true });
      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
        card.style.removeProperty('--mouse-x');
        card.style.removeProperty('--mouse-y');
      });
    };

    // ══════════════════════════════════════════════════════════════
    // 4. ENHANCED 3D TILT — spring-based tilt on cards
    // ══════════════════════════════════════════════════════════════
    const TILT_SELECTORS = [
      '.glass-card',
      '.pricing-card',
      '.service-h-card',
      '.industry-card',
      '.result-card',
      '.solution-card',
      '.comp-card',
      '[data-tilt]',
    ].join(', ');

    const attachTilt = (el) => {
      let tiltX = 0;
      let tiltY = 0;
      let targetTiltX = 0;
      let targetTiltY = 0;
      let tiltAnimId;
      let isTiltHovered = false;

      const maxDeg = el.matches('.pricing-card, [data-tilt]') ? 6 : 4;
      const liftPx = el.matches('.pricing-card') ? 8 : 5;

      const animateTilt = () => {
        tiltX += (targetTiltX - tiltX) * 0.14;
        tiltY += (targetTiltY - tiltY) * 0.14;

        const dist = Math.hypot(targetTiltX - tiltX, targetTiltY - tiltY);
        el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${isTiltHovered ? -liftPx : 0}px)`;

        if (isTiltHovered || dist > 0.01) {
          tiltAnimId = requestAnimationFrame(animateTilt);
        } else {
          el.style.transform = '';
          tiltAnimId = null;
        }
      };

      const onEnter = () => {
        isTiltHovered = true;
        if (!tiltAnimId) tiltAnimId = requestAnimationFrame(animateTilt);
      };

      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        targetTiltX = -y * maxDeg * 2;
        targetTiltY = x * maxDeg * 2;
      };

      const onLeave = () => {
        isTiltHovered = false;
        targetTiltX = 0;
        targetTiltY = 0;
        if (!tiltAnimId) tiltAnimId = requestAnimationFrame(animateTilt);
      };

      el.addEventListener('mouseenter', onEnter, { passive: true });
      el.addEventListener('mousemove', onMove, { passive: true });
      el.addEventListener('mouseleave', onLeave, { passive: true });

      cleanups.push(() => {
        cancelAnimationFrame(tiltAnimId);
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mousemove', onMove);
        el.removeEventListener('mouseleave', onLeave);
        el.style.transform = '';
      });
    };

    // ══════════════════════════════════════════════════════════════
    // 5. INTEGRATION CARDS — individual stagger + float on hover
    // ══════════════════════════════════════════════════════════════
    const attachIntegration = (card, i) => {
      const onEnter = () => {
        card.style.transitionDelay = `${i * 0.015}s`;
      };
      const onLeave = () => {
        card.style.transitionDelay = '0s';
      };
      card.addEventListener('mouseenter', onEnter, { passive: true });
      card.addEventListener('mouseleave', onLeave, { passive: true });
      cleanups.push(() => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mouseleave', onLeave);
        card.style.transitionDelay = '';
      });
    };

    // ══════════════════════════════════════════════════════════════
    // 6. FEAT-ICON — ripple expand on hover
    // ══════════════════════════════════════════════════════════════
    const attachIcon = (icon) => {
      const onEnter = () => {
        icon.style.transition =
          'transform 0.4s cubic-bezier(0.34,1.4,0.64,1), box-shadow 0.4s ease';
      };
      const onLeave = () => {
        icon.style.transition =
          'transform 0.5s cubic-bezier(0.23,1,0.32,1), box-shadow 0.5s ease';
      };
      icon.addEventListener('mouseenter', onEnter, { passive: true });
      icon.addEventListener('mouseleave', onLeave, { passive: true });
      cleanups.push(() => {
        icon.removeEventListener('mouseenter', onEnter);
        icon.removeEventListener('mouseleave', onLeave);
        icon.style.transition = '';
      });
    };

    // ══════════════════════════════════════════════════════════════
    // DYNAMIC SCANNING & BINDING (handles tab changes & SPA routing)
    // ══════════════════════════════════════════════════════════════
    const scanAll = () => {
      // 2. Magnetic buttons
      document.querySelectorAll(MAGNETIC_SELECTORS).forEach((el) => {
        if (el.dataset.magneticAttached) return;
        el.dataset.magneticAttached = 'true';
        attachMagnetic(el);
      });

      // 3. Spotlight glow
      document.querySelectorAll(SPOTLIGHT_SELECTORS).forEach((card) => {
        if (card.dataset.spotlightAttached) return;
        card.dataset.spotlightAttached = 'true';
        attachSpotlight(card);
      });

      // 4. Enhanced 3D tilt
      document.querySelectorAll(TILT_SELECTORS).forEach((el) => {
        if (el.dataset.tiltAttached) return;
        el.dataset.tiltAttached = 'true';
        attachTilt(el);
      });

      // 5. Integration cards
      document.querySelectorAll('.integration-card').forEach((card, i) => {
        if (card.dataset.intAttached) return;
        card.dataset.intAttached = 'true';
        attachIntegration(card, i);
      });

      // 6. Feat icons
      document.querySelectorAll('.feat-icon').forEach((icon) => {
        if (icon.dataset.iconAttached) return;
        icon.dataset.iconAttached = 'true';
        attachIcon(icon);
      });
    };

    // Initial scan on mount/route change
    scanAll();
    // Re-scan a frame later to make sure React finished rendering
    requestAnimationFrame(scanAll);
    const timer = setTimeout(scanAll, 100);

    // Observe future DOM insertions (e.g. tabs, accordion expansions, client-side renders)
    const observer = new MutationObserver(() => {
      schedule(scanAll);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    cleanups.push(() => {
      clearTimeout(timer);
      observer.disconnect();
    });

    // ── Cleanup on unmount / route change ───────────────────────
    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [location.pathname]);
}
