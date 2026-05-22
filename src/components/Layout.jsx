import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { MobileNav } from './MobileNav';
import { Modal } from './Modal';
import { WalkingBot } from './WalkingBot';
import { useAnimations } from '../hooks/useAnimations';
import { useModal } from '../hooks/useModal';

export function Layout({ navbarVariant = 'default', modalMode = 'home' }) {
  const location = useLocation();
  const navigate = useNavigate();
  const modal = useModal({ formSubmitMode: modalMode });
  useAnimations();

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
    <>
      <MobileNav />
      <Navbar variant={navbarVariant} />
      <Outlet />
      <WalkingBot />
      <Modal
        isOpen={modal.isOpen}
        title={modal.title}
        showForm={modal.showForm}
        showSuccess={modal.showSuccess}
        onClose={modal.closeModal}
        onSubmit={modal.handleSubmit}
      />
    </>
  );
}

