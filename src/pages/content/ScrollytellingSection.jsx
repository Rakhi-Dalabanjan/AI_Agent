import { useEffect, useState } from "react";

export function ScrollytellingSection() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const steps = document.querySelectorAll(".scrollytelling-step");
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const stepNum = parseInt(entry.target.getAttribute("data-step"), 10);
          if (!isNaN(stepNum)) {
            setActiveStep(stepNum);
          }
        }
      });
    }, observerOptions);

    steps.forEach((step) => observer.observe(step));

    return () => {
      steps.forEach((step) => observer.unobserve(step));
    };
  }, []);

  return (
    <section className="scrollytelling-section">
      <div className="scrollytelling-container container">
        {/* LEFT: STEP CONTENT (SCROLLING) */}
        <div className="scrollytelling-left">
          <div className={`scrollytelling-step ${activeStep === 1 ? 'active' : ''}`} data-step="1">
            <span className="step-number">01</span>
            <h3 className="step-title">Ingest Leads &amp; Trigger Workflows</h3>
            <p className="step-description">
              As soon as a new lead interacts with your business via WhatsApp, Web forms, or Social media, Kratu AI captures their details instantly and initiates the customized automation workflow.
            </p>
            <div className="step-indicator-bar"></div>
          </div>

          <div className={`scrollytelling-step ${activeStep === 2 ? 'active' : ''}`} data-step="2">
            <span className="step-number">02</span>
            <h3 className="step-title">Intelligent AI Routing &amp; Processing</h3>
            <p className="step-description">
              Our NLP engine categorizes the lead's intent within milliseconds. The AI drafts a context-aware personalized response and automatically updates your internal CRM databases.
            </p>
            <div className="step-indicator-bar"></div>
          </div>

          <div className={`scrollytelling-step ${activeStep === 3 ? 'active' : ''}`} data-step="3">
            <span className="step-number">03</span>
            <h3 className="step-title">CRM Sync &amp; Calendar Execution</h3>
            <p className="step-description">
              The agent finalizes the action by booking a calendar slot or sending an automated follow-up. Metrics are updated in real-time on your dashboard, closing the loop.
            </p>
            <div className="step-indicator-bar"></div>
          </div>
        </div>

        {/* RIGHT: PINNED VISUAL PANEL */}
        <div className="scrollytelling-right">
          <div className="pinned-glass-card">
            <div className="pinned-card-header">
              <div className="header-status">
                <span className="pulse-dot-green"></span>
                <span>AI Agent Status: Active</span>
              </div>
              <div className="header-action">Demo Sync</div>
            </div>
            <div className="pinned-card-body">
              <div className={`scrolly-visual-state state-1 ${activeStep === 1 ? 'active' : ''}`}>
                <div className="visual-node-flow">
                  <div className="flow-badge whatsapp-badge">
                    <i className="fa-brands fa-whatsapp"></i> WhatsApp Inflow
                  </div>
                  <div className="flow-arrow-down">↓</div>
                  <div className="flow-badge crm-badge pulse-glow">
                    <i className="fa-solid fa-database"></i> Lead Captured
                  </div>
                </div>
                <div className="visual-details">
                  <span className="details-label">Lead Details:</span>
                  <pre className="details-json">
                    {`{
  "source": "WhatsApp",
  "name": "Jane Smith",
  "status": "Incoming",
  "time": "Just now"
}`}
                  </pre>
                </div>
              </div>

              <div className={`scrolly-visual-state state-2 ${activeStep === 2 ? 'active' : ''}`}>
                <div className="visual-nlp-analysis">
                  <div className="nlp-intent-badge">
                    <i className="fa-solid fa-brain"></i> Intent: Demo Booking
                  </div>
                  <div className="nlp-confidence">Confidence: 99.4%</div>
                </div>
                <div className="visual-details">
                  <span className="details-label">AI Drafted Reply:</span>
                  <p className="details-text" style={{ fontStyle: "italic" }}>
                    "Hi Jane, I'd love to help you schedule a demo. Here are the available slots..."
                  </p>
                </div>
              </div>

              <div className={`scrolly-visual-state state-3 ${activeStep === 3 ? 'active' : ''}`}>
                <div className="visual-calendar-sync">
                  <div className="calendar-slot">
                    <div><i className="fa-solid fa-calendar-check"></i> Demo Confirmed</div>
                    <span className="slot-time">Today, 2:00 PM</span>
                  </div>
                </div>
                <div className="visual-details">
                  <span className="details-label">CRM Update:</span>
                  <div className="crm-sync-list">
                    <div className="sync-item"><i className="fa-solid fa-circle-check" style={{ color: "#22c55e" }}></i> Pipeline Updated</div>
                    <div className="sync-item"><i className="fa-solid fa-circle-check" style={{ color: "#22c55e" }}></i> Notification Dispatched</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
