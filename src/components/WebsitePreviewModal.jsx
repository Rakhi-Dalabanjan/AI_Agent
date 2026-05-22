import React, { useState, useEffect } from 'react';
import '../styles/preview-modal.css';

export function WebsitePreviewModal({ isOpen, onClose, plan }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIdx(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !plan) return null;

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % plan.images.length);
  };

  const prevImage = () => {
    setCurrentImageIdx((prev) => (prev - 1 + plan.images.length) % plan.images.length);
  };

  const toggleFullscreen = (e) => {
    const elem = e.currentTarget.closest('.preview-image-wrapper');
    if (!document.fullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
          console.error(`Error attempting to enable fullscreen: ${err.message}`);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="preview-modal-overlay active" onClick={onClose}>
      <div className="preview-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="preview-close-btn" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="interactive-particle-bg">
            <div className="particle p1"></div>
            <div className="particle p2"></div>
            <div className="particle p3"></div>
        </div>

        <div className="preview-modal-header">
          <span className="badge-accent" style={{ marginBottom: '10px', display: 'inline-block' }}>Premium Preview</span>
          <h2>{plan.title} Showcase</h2>
          <p>Explore the stunning, high-converting designs available with this package.</p>
        </div>

        <div className="preview-carousel-container">
          <button className="carousel-btn prev-btn" onClick={prevImage}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          
          <div className="preview-image-track" style={{ transform: `translateX(-${currentImageIdx * 100}%)` }}>
            {plan.images.map((imgSrc, idx) => (
              <div className="preview-image-slide" key={idx}>
                <div className={`preview-image-wrapper ${plan.id === 'custom' ? 'premium-animated-wrap' : ''}`}>
                  {imgSrc.endsWith('.mp4') ? (
                    <video src={imgSrc} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <img src={imgSrc} alt={`${plan.title} Preview ${idx + 1}`} loading="lazy" />
                  )}
                  <div className="image-hover-overlay">
                    <button className="btn-fullscreen" onClick={toggleFullscreen}>
                      <i className="fa-solid fa-expand"></i> View Fullscreen
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn next-btn" onClick={nextImage}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>

        <div className="preview-carousel-indicators">
          {plan.images.map((_, idx) => (
            <div 
              key={idx} 
              className={`indicator ${idx === currentImageIdx ? 'active' : ''}`}
              onClick={() => setCurrentImageIdx(idx)}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
