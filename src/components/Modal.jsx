import { useEffect } from 'react';
import { refreshLucideIcons } from '../utils/lucide';

export function Modal({ isOpen, title, showForm, showSuccess, onClose, onSubmit }) {
  useEffect(() => {
    if (isOpen) refreshLucideIcons();
  }, [isOpen, showForm, showSuccess]);

  return (
    <div
      className={`modal-overlay${isOpen ? ' active' : ''}`}
      id="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal glass-card" id="main-modal">
        <div className="modal-header">
          <h3 id="modal-title">{title}</h3>
          <button type="button" className="close-modal" id="close-modal" onClick={onClose}>
            <i data-lucide="x" />
          </button>
        </div>
        <div className="modal-body">
          {showForm && (
            <form id="lead-form" className="lead-form" onSubmit={onSubmit}>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.875rem',
                  marginBottom: '20px',
                  textAlign: 'center',
                }}
              >
                Enter your WhatsApp number to receive a live interactive demo directly on your
                phone.
              </p>
              <div className="form-group">
                <label htmlFor="lead-name">Name</label>
                <input id="lead-name" type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="lead-phone">WhatsApp Number</label>
                <input id="lead-phone" type="tel" placeholder="+91 90000 00000" required />
              </div>
              <button type="submit" className="btn btn-primary btn-full glow-btn">
                Send Demo to WhatsApp
              </button>
            </form>
          )}
          {showSuccess && (
            <div
              className="form-success"
              id="form-success"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <i
                data-lucide="check-circle"
                style={{ color: '#10b981', width: 48, height: 48, marginBottom: 16 }}
              />
              <h4>Demo Sent!</h4>
              <p style={{ color: 'var(--text-secondary)', marginTop: 8 }}>
                Check your WhatsApp! The AI bot has just messaged you.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
