/**
 * AgenticAI — Shared Animations JS
 * Loaded by ALL pages. Handles:
 *  - Active nav tab detection (auto from URL)
 *  - Mobile nav drawer
 *  - Scroll-reveal (.reveal class)
 *  - Auto-reveal for common elements on subpages
 *  - Stat counter (data-count)
 *  - Card tilt (data-tilt)
 *  - Navbar scroll shrink
 */

(function () {
    'use strict';

    /* ── 1. Auto Active Nav Link ── */
    function setActiveNav() {
        const page = window.location.pathname.split('/').pop() || 'index.html';
        // Desktop nav
        document.querySelectorAll('.nav-links a').forEach(link => {
            const href = (link.getAttribute('href') || '').split('?')[0].split('#')[0];
            if (href && href === page) {
                link.classList.add('active');
            } else if (href && !href.startsWith('#') && href !== '') {
                link.classList.remove('active');
            }
        });
        // Mobile drawer nav
        document.querySelectorAll('.svc-nav-links a').forEach(link => {
            const href = (link.getAttribute('href') || '').split('?')[0].split('#')[0];
            if (href && href === page) {
                link.classList.add('active');
            } else if (href && !href.startsWith('#') && href !== '') {
                link.classList.remove('active');
            }
        });
    }
    setActiveNav();

    /* ── 2. Navbar Scroll Shrink ── */
    const _navbar = document.getElementById('navbar');
    if (_navbar) {
        window.addEventListener('scroll', function () {
            _navbar.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    /* ── 3. Mobile Nav Drawer (for pages using svc-nav-drawer) ── */
    const _mobileBtn    = document.getElementById('mobile-menu-btn');
    const _navDrawer    = document.getElementById('mobile-nav-drawer');
    const _navOverlay   = document.getElementById('mobile-nav-overlay');
    const _navCloseBtn  = document.getElementById('mobile-nav-close-btn');

    function _openNav() {
        _navDrawer  && _navDrawer.classList.add('active');
        _navOverlay && _navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function _closeNav() {
        _navDrawer  && _navDrawer.classList.remove('active');
        _navOverlay && _navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    _mobileBtn   && _mobileBtn.addEventListener('click', _openNav);
    _navCloseBtn && _navCloseBtn.addEventListener('click', _closeNav);
    _navOverlay  && _navOverlay.addEventListener('click', _closeNav);
    document.querySelectorAll('.svc-nav-links a').forEach(l =>
        l.addEventListener('click', _closeNav)
    );

    /* ── 4. Scroll Reveal (.reveal class) ── */
    const _revealIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                _revealIO.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => _revealIO.observe(el));

    /* ── 5. Auto-Reveal for common subpage elements (no .reveal class needed) ── */
    const _autoRevealSelectors = [
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

    document.querySelectorAll(_autoRevealSelectors).forEach(function (el) {
        if (!el.classList.contains('reveal')) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)';
            const io = new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                    io.disconnect();
                }
            }, { threshold: 0.1 });
            io.observe(el);
        }
    });

    /* ── 6. Stat Counter (data-count + data-suffix) ── */
    function _countUp(el) {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        let val = 0;
        const step = target / 80;
        const timer = setInterval(function () {
            val = Math.min(val + step, target);
            el.textContent = (Number.isInteger(target) ? Math.floor(val) : val.toFixed(1)) + suffix;
            if (val >= target) clearInterval(timer);
        }, 18);
    }
    document.querySelectorAll('[data-count]').forEach(function (el) {
        const io = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) { _countUp(el); io.disconnect(); }
        }, { threshold: 0.5 });
        io.observe(el);
    });

    /* ── 7. Card 3D Tilt (data-tilt attribute) ── */
    document.querySelectorAll('[data-tilt]').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width  - 0.5;
            const y = (e.clientY - r.top)  / r.height - 0.5;
            card.style.transform = `translateY(-5px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
        });
        card.addEventListener('mouseleave', function () {
            card.style.transform = '';
        });
    });

    /* ── 8. Service card tilt (auto, no attribute needed) ── */
    document.querySelectorAll('.service-h-card').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width  - 0.5;
            const y = (e.clientY - r.top)  / r.height - 0.5;
            card.style.transform = `translateY(-6px) rotateX(${-y * 4}deg) rotateY(${x * 4}deg)`;
        });
        card.addEventListener('mouseleave', function () {
            card.style.transform = '';
        });
    });

    /* ── 9. Pricing card tilt ── */
    document.querySelectorAll('.pricing-card').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            const r = card.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width  - 0.5;
            const y = (e.clientY - r.top)  / r.height - 0.5;
            card.style.transform = `translateY(-6px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
        });
        card.addEventListener('mouseleave', function () {
            card.style.transform = '';
        });
    });

    /* ── 10. Final Safety Icon Render ── */
    if (window.lucide) {
        lucide.createIcons();
    }

    /* ── 11. Interactive Background Grid ── */
    function initInteractiveGrid() {
        const container = document.createElement('div');
        container.className = 'interactive-grid-bg';
        const canvas = document.createElement('canvas');
        canvas.className = 'interactive-grid-canvas';
        container.appendChild(canvas);
        document.body.prepend(container);

        const ctx = canvas.getContext('2d');
        let width, height;
        let mouse = { x: -1000, y: -1000 };

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', e => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        resize();

        const gridSize = 40;
        const dotSize = 1;
        const color = 'rgba(99, 102, 241, 0.2)';
        const activeColor = 'rgba(168, 85, 247, 0.6)';

        function draw() {
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
                        const ratio = 1 - (dist / maxDist);
                        ctx.fillStyle = activeColor;
                        const size = dotSize + ratio * 2;
                        ctx.beginPath();
                        ctx.arc(x, y, size, 0, Math.PI * 2);
                        ctx.fill();
                        
                        // Draw line to mouse
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
            requestAnimationFrame(draw);
        }
        draw();
    }
    initInteractiveGrid();

    /* ── 12. AI Typing Animation ── */
    function initTypingAnimation() {
        const elements = document.querySelectorAll('[data-typed-text]');
        elements.forEach(el => {
            const text = el.dataset.typedText;
            const speed = parseInt(el.dataset.typedSpeed) || 100;
            const delay = parseInt(el.dataset.typedDelay) || 0;
            
            el.textContent = '';
            el.classList.add('typed-text');
            
            setTimeout(() => {
                let i = 0;
                const interval = setInterval(() => {
                    el.textContent += text[i];
                    i++;
                    if (i >= text.length) {
                        clearInterval(interval);
                        // Trigger layout adjustment if space is tight
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
    initTypingAnimation();

    /* ── 13. Magnetic Buttons ── */
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn-magnetic');
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }
    initMagneticButtons();

    /* ── 14. Enhanced Scroll Reveal ── */
    const enhancedRevealIO = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                enhancedRevealIO.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-zoom, .stagger-container').forEach(el => {
        enhancedRevealIO.observe(el);
    });

})();
