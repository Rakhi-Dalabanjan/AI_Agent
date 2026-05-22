import { useCallback, useEffect, useState } from 'react';
import { refreshLucideIcons } from '../utils/lucide';

const WA_NUMBER = '918151889911';

export function useModal({ formSubmitMode = 'home' } = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('Book a Demo');
  const [showForm, setShowForm] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = useCallback((modalTitle = 'Book a Demo') => {
    setTitle(modalTitle);
    setShowForm(true);
    setShowSuccess(false);
    setIsOpen(true);
    const drawer = document.getElementById('mobile-nav-drawer');
    const overlay = document.getElementById('mobile-nav-overlay');
    if (drawer?.classList.contains('active')) {
      drawer.classList.remove('active');
      overlay?.classList.remove('active');
      document.body.style.overflow = '';
    }
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const onDocClick = (e) => {
      const trigger = e.target.closest?.('.open-modal');
      if (trigger) {
        e.preventDefault();
        openModal(trigger.getAttribute('data-modal-title') || 'Book a Demo');
      }
    };
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, [openModal]);

  useEffect(() => {
    const talkBtn = document.getElementById('talk-whatsapp-btn');
    const talkBtn2 = document.getElementById('talk-whatsapp-btn-2');
    const onTalk = (e) => {
      e.preventDefault();
      const msg =
        formSubmitMode === 'home'
          ? 'Hello I want to know more about your services.'
          : '';
      const url = msg
        ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
        : `https://wa.me/${WA_NUMBER}`;
      window.open(url, '_blank');
    };
    talkBtn?.addEventListener('click', onTalk);
    talkBtn2?.addEventListener('click', onTalk);
    return () => {
      talkBtn?.removeEventListener('click', onTalk);
      talkBtn2?.removeEventListener('click', onTalk);
    };
  }, [formSubmitMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (formSubmitMode === 'home') {
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML =
        'Connecting to WhatsApp... <i data-lucide="loader" class="spin"></i>';
      refreshLucideIcons();

      if (!document.getElementById('spin-style')) {
        const style = document.createElement('style');
        style.id = 'spin-style';
        style.textContent = `
                .spin { animation: spin 1s linear infinite; display: inline-block; width: 16px; height: 16px; vertical-align: middle; margin-left: 8px; }
                @keyframes spin { 100% { transform: rotate(360deg); } }
            `;
        document.head.appendChild(style);
      }

      const userName = form.querySelector('input[type="text"]').value;
      setTimeout(() => {
        const customMessage = `Hello I want to know more about your services. My name is ${userName}`;
        window.open(
          `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(customMessage)}`,
          '_blank'
        );
        setShowForm(false);
        setShowSuccess(true);
        submitBtn.innerHTML = originalText;
        refreshLucideIcons();
      }, 800);
      return;
    }

    setShowForm(false);
    setShowSuccess(true);
    const messages = {
      services:
        'Hello, I would like to book a free demo for your AI Agent services.',
      solutions:
        'Hello, I would like to book a free demo for your AI Solutions.',
      pricing: 'Hello, I would like to know about pricing.',
      resources: 'Hello, I would like to learn more about your AI resources.',
      industries: 'Hello, I would like to learn about industry AI solutions.',
      contact: 'Hello, I would like to get in touch about your AI services.',
      default: 'Hello, I would like to book a free demo.',
    };
    setTimeout(() => {
      window.location.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        messages[formSubmitMode] || messages.default
      )}`;
    }, 1200);
  };

  return {
    isOpen,
    title,
    showForm,
    showSuccess,
    openModal,
    closeModal,
    handleSubmit,
  };
}
