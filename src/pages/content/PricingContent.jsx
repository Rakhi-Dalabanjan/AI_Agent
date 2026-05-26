import { useState } from 'react';
import { WebsitePreviewModal } from '../../components/WebsitePreviewModal';

const previewPlansData = {
  landing: {
    id: 'landing',
    title: 'Landing Page',
    images: [
      '/images/previews/landing_page_1.png',
      '/images/previews/landing_page_2.png'
    ]
  },
  business: {
    id: 'business',
    title: 'Business Website',
    images: [
      '/images/previews/business_site_1.png',
      '/images/previews/business_site_2.png'
    ]
  },
  custom: {
    id: 'custom',
    title: 'Premium Custom Website',
    images: [
      '/images/previews/custom_premium_1.png',
      '/images/previews/custom_premium_2.png'
    ]
  }
};

export function PricingContent() {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [activePreviewPlan, setActivePreviewPlan] = useState(null);

  const handleOpenPreview = (planId) => {
    setActivePreviewPlan(previewPlansData[planId]);
    setIsPreviewModalOpen(true);
  };

  return (
    <div className="pricing-page-wrapper">
      <div className="pricing-glow-orb-1" />
      <div className="pricing-glow-orb-2" />

      {/* Hero Section */}
      <section className="subpage-hero" style={{ paddingBottom: '40px' }}>
        <div className="container hero-container" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="badge-accent">💎 PREMIUM PRICING</span>
            <h1 className="hero-heading" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
              Scale Your Agency With
              <span className="gradient-text-purple"> AI Automation</span>
            </h1>
            <p className="hero-description" style={{ margin: '0 auto' }}>
              Select the perfect plan for your business. From intelligent chatbots to fully custom web platforms, we provide the tools to automate, engage, and convert.
            </p>
          </div>
        </div>
      </section>

      {/* LIGHT THEME FOLD */}
      <div className="light-theme-fold">
        {/* Category 1: AI Agent Monthly Plans */}
        <section className="pricing-category-section">
          <div className="container">
            <div className="pricing-section-header">
              <h2>1. AI Agent Monthly Plans</h2>
              <p>Recurring subscription plans for ongoing AI agent hosting, analytics, and support.</p>
            </div>

            <div className="pricing-cards-grid">
              {/* Starter Plan */}
              <div className="pricing-card-custom">
                <div className="pc-header">
                  <h3 className="pc-title">Starter Plan</h3>
                  <p className="pc-desc">Perfect for small businesses looking to automate basic tasks.</p>
                  <div className="pc-price">₹2,999 <span>/mo</span></div>
                </div>
                <ul className="pc-features">
                  <li><i className="fa-solid fa-check" /> AI chatbot automation</li>
                  <li><i className="fa-solid fa-check" /> WhatsApp integration</li>
                  <li><i className="fa-solid fa-check" /> Lead capture</li>
                  <li><i className="fa-solid fa-check" /> FAQ automation</li>
                  <li><i className="fa-solid fa-check" /> Basic analytics</li>
                  <li><i className="fa-solid fa-check" /> Monthly support</li>
                </ul>
                <button className="pc-cta-btn btn-premium-outline open-modal" data-modal-title="Get Started - Starter Plan">Get Started</button>
              </div>

              {/* Growth Plan (Featured) */}
              <div className="pricing-card-custom featured">
                <div className="popular-badge-custom">Most Popular</div>
                <div className="pc-header">
                  <h3 className="pc-title">Growth Plan</h3>
                  <p className="pc-desc">Advanced features for scaling agencies and growing teams.</p>
                  <div className="pc-price">₹9,999 <span>/mo</span></div>
                </div>
                <ul className="pc-features">
                  <li><i className="fa-solid fa-check" /> Advanced AI workflows</li>
                  <li><i className="fa-solid fa-check" /> CRM integration</li>
                  <li><i className="fa-solid fa-check" /> Multi-platform support</li>
                  <li><i className="fa-solid fa-check" /> Smart lead qualification</li>
                  <li><i className="fa-solid fa-check" /> Analytics dashboard</li>
                  <li><i className="fa-solid fa-check" /> Priority support</li>
                </ul>
                <button className="pc-cta-btn btn-premium-solid open-modal" data-modal-title="Get Started - Growth Plan">Get Started</button>
              </div>

              {/* Enterprise Plan */}
              <div className="pricing-card-custom">
                <div className="pc-header">
                  <h3 className="pc-title">Enterprise Plan</h3>
                  <p className="pc-desc">Uncapped potential with fully custom solutions.</p>
                  <div className="pc-price" style={{ fontSize: '28px' }}>Custom</div>
                </div>
                <ul className="pc-features">
                  <li><i className="fa-solid fa-check" /> Fully custom AI agent</li>
                  <li><i className="fa-solid fa-check" /> Unlimited automations</li>
                  <li><i className="fa-solid fa-check" /> API integrations</li>
                  <li><i className="fa-solid fa-check" /> Team management</li>
                  <li><i className="fa-solid fa-check" /> Advanced analytics</li>
                  <li><i className="fa-solid fa-check" /> Dedicated support</li>
                </ul>
                <button className="pc-cta-btn btn-premium-outline open-modal" data-modal-title="Get Started - Enterprise Plan">Schedule Demo</button>
              </div>
            </div>
          </div>
        </section>

        {/* Category 2: AI Agent Setup Pricing */}
        <section className="pricing-category-section">
          <div className="container">
            <div className="pricing-section-header">
              <h2>2. AI Agent Setup Pricing</h2>
              <p>One-time implementation fees to design, train, and deploy your custom AI agents.</p>
            </div>

            <div className="pricing-cards-grid">
              {/* Basic Setup */}
              <div className="pricing-card-custom">
                <div className="pc-header">
                  <h3 className="pc-title">Basic Setup</h3>
                  <p className="pc-desc">Quick and efficient deployment for standard use cases.</p>
                  <div className="pc-price">₹19,999 <span>one-time</span></div>
                </div>
                <ul className="pc-features">
                  <li><i className="fa-solid fa-check" /> WhatsApp Business setup</li>
                  <li><i className="fa-solid fa-check" /> AI basic training</li>
                  <li><i className="fa-solid fa-check" /> Workflow configuration</li>
                  <li><i className="fa-solid fa-check" /> Integration setup</li>
                </ul>
                <button className="pc-cta-btn btn-premium-outline open-modal" data-modal-title="Book Consultation - Basic Setup">Book Consultation</button>
              </div>

              {/* Professional Setup (Featured) */}
              <div className="pricing-card-custom featured" style={{ borderTopColor: 'var(--pricing-accent-orange)' }}>
                <div className="popular-badge-custom" style={{ background: 'linear-gradient(90deg, var(--pricing-accent-orange), #ff2a00)', boxShadow: '0 0 15px var(--pricing-accent-orange-glow)' }}>Recommended</div>
                <div className="pc-header">
                  <h3 className="pc-title">Professional Setup</h3>
                  <p className="pc-desc">Comprehensive setup with CRM and multi-channel integration.</p>
                  <div className="pc-price">₹49,999 <span>one-time</span></div>
                </div>
                <ul className="pc-features">
                  <li><i className="fa-solid fa-check" style={{ color: 'var(--pricing-accent-orange)' }} /> Advanced workflow automation</li>
                  <li><i className="fa-solid fa-check" style={{ color: 'var(--pricing-accent-orange)' }} /> CRM & API setup</li>
                  <li><i className="fa-solid fa-check" style={{ color: 'var(--pricing-accent-orange)' }} /> AI optimization</li>
                  <li><i className="fa-solid fa-check" style={{ color: 'var(--pricing-accent-orange)' }} /> Multi-channel integrations</li>
                </ul>
                <button className="pc-cta-btn btn-premium-solid open-modal" data-modal-title="Book Consultation - Professional Setup" style={{ background: 'linear-gradient(135deg, var(--pricing-accent-orange), #ff2a00)', boxShadow: '0 4px 15px rgba(255, 90, 0, 0.3)' }}>Book Consultation</button>
              </div>

              {/* Enterprise Setup */}
              <div className="pricing-card-custom">
                <div className="pc-header">
                  <h3 className="pc-title">Enterprise Setup</h3>
                  <p className="pc-desc">Bespoke implementation for complex enterprise operations.</p>
                  <div className="pc-price" style={{ fontSize: '28px' }}>Custom</div>
                </div>
                <ul className="pc-features">
                  <li><i className="fa-solid fa-check" /> Fully custom deployment</li>
                  <li><i className="fa-solid fa-check" /> Advanced AI training</li>
                  <li><i className="fa-solid fa-check" /> Enterprise integrations</li>
                  <li><i className="fa-solid fa-check" /> Team onboarding</li>
                  <li><i className="fa-solid fa-check" /> Dedicated implementation</li>
                </ul>
                <button className="pc-cta-btn btn-premium-outline open-modal" data-modal-title="Book Consultation - Enterprise Setup">Schedule Demo</button>
              </div>
            </div>
          </div>
        </section>

        {/* Category 3: Website Development Pricing */}
        <section className="pricing-category-section preview-enabled" style={{ paddingBottom: '120px' }}>
          <div className="container">
            <div className="pricing-section-header">
              <h2>3. Website Development Pricing</h2>
              <p>End-to-end web design and development packages powered by modern tech stacks.</p>
            </div>

            <div className="pricing-cards-grid">
              {/* Landing Page */}
              <div className="pricing-card-custom" onClick={() => handleOpenPreview('landing')}>
                <div className="pc-header">
                  <h3 className="pc-title">Landing Page</h3>
                  <p className="pc-desc">High-converting single page websites for campaigns.</p>
                  <div className="pc-price">₹14,999 <span>starting from</span></div>
                </div>
                <ul className="pc-features">
                  <li><i className="fa-solid fa-check" /> Modern responsive design</li>
                  <li><i className="fa-solid fa-check" /> Basic animations</li>
                  <li><i className="fa-solid fa-check" /> Fast loading</li>
                  <li><i className="fa-solid fa-check" /> Contact forms</li>
                </ul>
                <button className="pc-cta-btn btn-premium-outline open-modal" data-modal-title="Get Started - Landing Page">Get Started</button>
              </div>

              {/* Business Website (Featured) */}
              <div className="pricing-card-custom featured" onClick={() => handleOpenPreview('business')}>
                <div className="popular-badge-custom">Best Value</div>
                <div className="pc-header">
                  <h3 className="pc-title">Business Website</h3>
                  <p className="pc-desc">Complete online presence for established businesses.</p>
                  <div className="pc-price">₹39,999 <span>starting from</span></div>
                </div>
                <ul className="pc-features">
                  <li><i className="fa-solid fa-check" /> Multi-page website</li>
                  <li><i className="fa-solid fa-check" /> Advanced UI/UX</li>
                  <li><i className="fa-solid fa-check" /> SEO optimized</li>
                  <li><i className="fa-solid fa-check" /> Admin dashboard</li>
                  <li><i className="fa-solid fa-check" /> AI-ready integrations</li>
                </ul>
                <button className="pc-cta-btn btn-premium-solid open-modal" data-modal-title="Get Started - Business Website">Get Started</button>
              </div>

              {/* Premium Custom Website */}
              <div className="pricing-card-custom" onClick={() => handleOpenPreview('custom')}>
                <div className="pc-header">
                  <h3 className="pc-title">Premium Custom Website</h3>
                  <p className="pc-desc">Cutting-edge digital experiences with premium animations.</p>
                  <div className="pc-price" style={{ fontSize: '28px' }}>Custom</div>
                </div>
                <ul className="pc-features">
                  <li><i className="fa-solid fa-check" /> Fully custom design</li>
                  <li><i className="fa-solid fa-check" /> High-end animations</li>
                  <li><i className="fa-solid fa-check" /> AI integrations</li>
                  <li><i className="fa-solid fa-check" /> Performance optimization</li>
                  <li><i className="fa-solid fa-check" /> Premium support</li>
                </ul>
                <button className="pc-cta-btn btn-premium-outline open-modal" data-modal-title="Get Started - Custom Website">Schedule Demo</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="container">
        <div className="footer-cta-wrap reveal">
          <div className="footer-cta-card" style={{ marginTop: '0', padding: '60px', minHeight: 'auto' }}>
            <h2>Ready To Scale Your Agency?</h2>
            <p>Our experts will help you choose the right AI automation package for your business goals.</p>
            <div className="cta-buttons">
              <a href="/contact" className="nav-btn-solid" style={{ padding: '14px 28px', textDecoration: 'none' }}>
                Contact Us
              </a>
              <button type="button" className="btn-secondary-outline open-modal" data-modal-title="Book a Demo">
                Book Free Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Website Preview Modal */}
      <WebsitePreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        plan={activePreviewPlan}
      />
    </div>
  );
}
