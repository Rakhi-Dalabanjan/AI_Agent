import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import { Navbar } from './Navbar';
import { MobileNav } from './MobileNav';
import { Modal } from './Modal';
import { WalkingBot } from './WalkingBot';
import { CustomCursor } from './CustomCursor';
import { useAnimations } from '../hooks/useAnimations';
import { useMagneticEffects } from '../hooks/useMagneticEffects';
import { useModal } from '../hooks/useModal';

export function Layout({ navbarVariant = 'default', modalMode = 'home' }) {
  const location = useLocation();
  const navigate = useNavigate();
  const modal = useModal({ formSubmitMode: modalMode });
  useAnimations();
  useMagneticEffects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto') || href === '#') return;
      if (href.startsWith('/')) {
        const [path, hash] = href.split('#');
        if (hash) {
          e.preventDefault();
          navigate(path || '/');
          requestAnimationFrame(() => {
            const el = document.getElementById(hash);
            if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
          });
          return;
        }
        if (!href.includes('.')) {
          e.preventDefault();
          navigate(href);
        }
      }
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.0, smoothTouch: true, syncTouch: false }}>
      <MobileNav />
      <Navbar variant={navbarVariant} />
      <Outlet />
      
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="logo">
                <div className="logo-icon">
                  <i data-lucide="bot"></i>
                </div>
                <h2>IAMKRATU.AI</h2>
              </a>
              <p className="footer-desc">
                Deploy 24x7 AI Employees for business growth. Automate customer engagement, lead generation, support, WhatsApp, and voice assistance.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" aria-label="GitHub">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Platform</h4>
              <a href="/services">Services</a>
              <a href="/solutions">Solutions</a>
              <a href="/#faq">FAQs</a>
              <a href="/pricing">Pricing</a>
            </div>

            <div className="footer-links">
              <h4>Company</h4>
              <a href="/contact">Contact</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 IAMKRATU.AI All rights reserved.</p>
            <div className="status-indicator">
              <span className="pulse-dot"></span> All systems operational
            </div>
          </div>
        </div>
      </footer>

      <WalkingBot />
      <CustomCursor />
      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        showForm={modal.showForm}
        showSuccess={modal.showSuccess}
        onClose={modal.closeModal}
        onSubmit={modal.handleSubmit}
      />
    </ReactLenis>
  );
}
