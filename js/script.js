// Initialize Lucide Icons
lucide.createIcons();

// Sticky Navbar Background
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Floating Particles Effect
const particlesContainer = document.getElementById('particles');

function createParticles() {
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random properties
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

// Add CSS for particles animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 0.5; }
        90% { opacity: 0.5; }
        100% { transform: translateY(-100vh) translateX(20vw); opacity: 0; }
    }
`;
document.head.appendChild(style);

createParticles();


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Reveal Animation (Simple Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add reveal class to elements
document.querySelectorAll('.section-title, .section-desc, .glass-card, .integration-card, .feat-item, .logo-grid').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Mobile Nav Drawer
const mobileBtn    = document.getElementById('mobile-menu-btn');
const navDrawer    = document.getElementById('mobile-nav-drawer');
const navOverlay   = document.getElementById('mobile-nav-overlay');
const navCloseBtn  = document.getElementById('mobile-nav-close-btn');

function openNav() {
    navDrawer?.classList.add('active');
    navOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeNav() {
    navDrawer?.classList.remove('active');
    navOverlay?.classList.remove('active');
    document.body.style.overflow = '';
}

mobileBtn?.addEventListener('click', openNav);
navCloseBtn?.addEventListener('click', closeNav);
navOverlay?.addEventListener('click', closeNav);
document.querySelectorAll('.svc-nav-links a').forEach(l => l.addEventListener('click', closeNav));

// Modal Logic
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const leadForm = document.getElementById('lead-form');
const formSuccess = document.getElementById('form-success');

document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = btn.getAttribute('data-modal-title');
        if (title && modalTitle) {
            modalTitle.textContent = title;
        }
        if (modalOverlay) {
            modalOverlay.classList.add('active');
            
            // reset form if previously submitted
            if (leadForm && formSuccess) {
                leadForm.style.display = 'block';
                formSuccess.style.display = 'none';
                leadForm.reset();
            }
        }
        
        // if mobile menu is open, close it
        if (mobileMenu && mobileMenu.classList.contains('open')) {
            mobileMenu.classList.remove('open');
            if(mobileBtn) {
                mobileBtn.innerHTML = '<i data-lucide="menu"></i>';
                lucide.createIcons();
            }
        }
    });
});

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
}

// Form Submission Simulation
if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state on button
        const submitBtn = leadForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Connecting to WhatsApp... <i data-lucide="loader" class="spin"></i>';
        lucide.createIcons();
        
        // Add spin css dynamically
        if (!document.getElementById('spin-style')) {
            const style = document.createElement('style');
            style.id = 'spin-style';
            style.textContent = `
                .spin { animation: spin 1s linear infinite; display: inline-block; width: 16px; height: 16px; vertical-align: middle; margin-left: 8px; }
                @keyframes spin { 100% { transform: rotate(360deg); } }
            `;
            document.head.appendChild(style);
        }

        // Get the entered details
        const userName = leadForm.querySelector('input[type="text"]').value;

        // Redirect to the provided WhatsApp link
        setTimeout(() => {
            // Using the WhatsApp link provided by the user, dynamically injecting their name into the message
            const customMessage = `Hello I want to know more about your services. My name is ${userName}`;
            const waLink = `https://wa.me/918151889911?text=${encodeURIComponent(customMessage)}`;
            
            // Open WhatsApp in a new tab
            window.open(waLink, '_blank');

            // Show Success state in the modal
            leadForm.style.display = 'none';
            formSuccess.style.display = 'block';
            submitBtn.innerHTML = originalText;
            lucide.createIcons();
        }, 800);
    });
}

// Talk on WhatsApp button directly opens WhatsApp link
const talkWhatsappBtn = document.getElementById('talk-whatsapp-btn');
if (talkWhatsappBtn) {
    talkWhatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const customMessage = `Hello I want to know more about your services.`;
        const waLink = `https://wa.me/918151889911?text=${encodeURIComponent(customMessage)}`;
        window.open(waLink, '_blank');
    });
}

// INDIVIDUAL FLOATING EFFECTS FOR EACH CARD (Prevents isolated stacking contexts so blend-mode works)
const floatingCards = document.querySelectorAll('.hero-visual-complex .comp-card');
if (floatingCards.length > 0) {
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 60;
        const y = (window.innerHeight / 2 - e.pageY) / 60;
        floatingCards.forEach(card => {
            card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
        });
    });
}

// ── Typed Text Effect in Hero ──
const typedTarget = document.querySelector('.gradient-text-purple');
if (typedTarget) {
    const words = ['Conversations', 'Workflows', 'Customer Journeys', 'Lead Capture', 'Appointments'];
    let wi = 0, ci = 0, deleting = false;
    const cursor = document.createElement('span');
    cursor.className = 'typed-cursor';
    typedTarget.parentNode.insertBefore(cursor, typedTarget.nextSibling);
    function typeLoop() {
        const word = words[wi];
        if (!deleting) {
            typedTarget.textContent = word.slice(0, ++ci);
            if (ci === word.length) { deleting = true; return setTimeout(typeLoop, 1800); }
        } else {
            typedTarget.textContent = word.slice(0, --ci);
            if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
        }
        setTimeout(typeLoop, deleting ? 45 : 90);
    }
    typeLoop();
}

// ── Stat Counter on data-count elements ──
function countUp(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    let val = 0;
    const step = target / 80;
    const timer = setInterval(() => {
        val = Math.min(val + step, target);
        el.textContent = (Number.isInteger(target) ? Math.floor(val) : val.toFixed(1)) + suffix;
        if (val >= target) clearInterval(timer);
    }, 18);
}
document.querySelectorAll('[data-count]').forEach(el => {
    const io = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) { countUp(el); io.disconnect(); }
    }, { threshold: 0.5 });
    io.observe(el);
});

// ── Enhanced Scroll Reveal for index sections ──
const revealEls = document.querySelectorAll(
    '.section-title, .section-desc, .glass-card, .integration-card, .feat-item, .logo-grid, .pricing-card'
);
const revealIO = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0) scale(1)';
            revealIO.unobserve(e.target);
        }
    });
}, { threshold: 0.08 });
revealEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px) scale(0.97)';
    el.style.transition = 'opacity 0.65s cubic-bezier(0.4,0,0.2,1), transform 0.65s cubic-bezier(0.4,0,0.2,1)';
    revealIO.observe(el);
});

// ── Pricing card 3D tilt ──
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `translateY(-6px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
});
