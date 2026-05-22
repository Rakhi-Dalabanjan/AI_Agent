import { useEffect } from "react";
import { HeroTypedCycle } from "../../components/HeroTypedCycle";
import { WorkflowMarquee } from "../../components/WorkflowMarquee";
import { HeroChatbotVisual } from "../../components/HeroChatbotVisual";
import { CampaignAnalytics } from "../../components/CampaignAnalytics";
import { LiveSupportSimulation } from "../../components/LiveSupportSimulation";
import { refreshLucideIcons } from "../../utils/lucide";
import { ChromaKeyVideo } from "../../components/ChromaKeyVideo";
const homeHeroVideo = "/images/3.mp4";
const aiTrainingVideo = "/images/Automating.mp4";

/* Auto-generated from index.html — do not edit by hand unless syncing from legacy HTML */
export function HomeContent() {
  useEffect(() => {
    refreshLucideIcons();
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="hero" id="home" style={{ overflow: "hidden" }}>
        <div className="container hero-container">
          {/* LEFT */}
          <div className="hero-content">
            <div className="hero-badge">
              <i
                data-lucide="zap"
                style={{ color: "#f59e0b", width: "16px", height: "16px" }}
              ></i>{" "}
              AI AGENTS FOR MODERN BUSINESSES
            </div>

            <h1
              className="hero-heading"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)", maxWidth: "90%" }}
            >
              AI Agents That Automate <HeroTypedCycle /> Workflows &amp;
              Business Growth
            </h1>

            <p className="hero-description">
              Build powerful AI systems for WhatsApp, workflow automation, and
              Web automation. Automate customer support, capture leads
              instantly, schedule appointments, and streamline business
              operations using intelligent AI automation.
            </p>

            <div className="hero-buttons">
              <button
                className="btn-primary-purple open-modal btn-magnetic"
                data-modal-title="Book a Demo"
              >
                <i
                  data-lucide="calendar-check"
                  style={{ width: "18px", height: "18px" }}
                ></i>{" "}
                Book Free Demo{" "}
                <i
                  data-lucide="arrow-right"
                  style={{ marginLeft: "5px", width: "18px", height: "18px" }}
                ></i>
              </button>
              <button
                className="btn-secondary-outline btn-magnetic"
                id="talk-whatsapp-btn"
              >
                <i
                  data-lucide="message-circle"
                  style={{ color: "#25D366", fontSize: "18px" }}
                ></i>{" "}
                Talk on WhatsApp
              </button>
            </div>

            <div className="trust-grid">
              <div className="trust-box">
                <div className="trust-icon" style={{ color: "#3b82f6" }}>
                  <i data-lucide="clock"></i>
                  <span className="icon-24">24</span>
                </div>
                <div className="trust-text">
                  <span className="highlight-text">24/7</span>
                  <br />
                  AI Support
                </div>
              </div>
              <div className="trust-box">
                <div className="trust-icon" style={{ color: "#22c55e" }}>
                  <i data-lucide="message-circle"></i>
                </div>
                <div className="trust-text">
                  <span className="highlight-text">WhatsApp</span>
                  <br />
                  Integration
                </div>
              </div>

              <div className="trust-box">
                <div className="trust-icon" style={{ color: "#3b82f6" }}>
                  <i data-lucide="settings-2"></i>
                </div>
                <div className="trust-text">
                  <span className="highlight-text">Workflow</span>
                  <br />
                  Automation
                </div>
              </div>
            </div>

            <div className="trusted-by-hero">
              <p>Trusted by 500+ businesses worldwide</p>
              <div className="trusted-logos">
                <span>
                  <i data-lucide="home"></i> realestate.com
                </span>
                <span>
                  <i data-lucide="plus-square"></i> MediCare
                </span>
                <span>
                  <i data-lucide="shopping-bag"></i> ShopEase
                </span>
                <span>
                  <i data-lucide="graduation-cap"></i> EduSmart
                </span>
                <span>
                  <i data-lucide="bar-chart"></i> WorkFlow
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Hero Video */}
          <div className="hero-visual-complex">
            <ChromaKeyVideo
              src={homeHeroVideo}
              similarity={0.4}
              smoothness={0.08}
              maxWidth={800}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "16px",
              }}
            />
            {/* Hidden: Main Dashboard Card */}
            <div
              className="comp-card main-dashboard"
              style={{ display: "none" }}
            >
              <div className="md-header">
                <div className="md-logo">
                  <i data-lucide="bot"></i> AI Dashboard
                </div>
              </div>
              <div className="md-body">
                <div className="md-sidebar">
                  <div className="md-nav active">
                    <i data-lucide="layout-dashboard"></i> Overview
                  </div>
                  <div className="md-nav">
                    <i data-lucide="message-square"></i> Conversations
                  </div>
                  <div className="md-nav">
                    <i data-lucide="users"></i> Leads
                  </div>
                  <div className="md-nav">
                    <i data-lucide="calendar"></i> Appointments
                  </div>
                  <div className="md-nav">
                    <i data-lucide="user"></i> Customers
                  </div>
                  <div className="md-nav">
                    <i data-lucide="pie-chart"></i> Analytics
                  </div>
                  <div className="md-nav">
                    <i data-lucide="settings"></i> Settings
                  </div>
                </div>
                <div className="md-content">
                  <div className="md-stats-row">
                    <div className="md-stat">
                      <span>Conversations</span>
                      <strong>
                        12,543 <small>+18.2%</small>
                      </strong>
                    </div>
                    <div className="md-stat">
                      <span>Leads Captured</span>
                      <strong>
                        3,275 <small>+22.6%</small>
                      </strong>
                    </div>
                    <div className="md-stat">
                      <span>Appointments</span>
                      <strong>
                        1,782 <small>+16.3%</small>
                      </strong>
                    </div>
                    <div className="md-stat">
                      <span>Conversion Rate</span>
                      <strong>
                        24.6% <small>+8.7%</small>
                      </strong>
                    </div>
                  </div>

                  <div className="md-chart-section">
                    <div className="md-chart">
                      <div className="chart-top">
                        <span>Conversations Overview</span>
                        <div className="dropdown">
                          This Week <i data-lucide="chevron-down"></i>
                        </div>
                      </div>
                      <div className="md-chart-graph">
                        <svg viewBox="0 0 300 100" className="mini-line-graph">
                          <path
                            d="M 0,80 L 20,70 L 40,40 L 60,60 L 80,45 L 100,50 L 120,40 L 140,25 L 160,40 L 180,20 L 200,40 L 220,10 L 240,20 L 260,15 L 300,5"
                            fill="none"
                            stroke="#a855f7"
                            strokeWidth="2"
                          />
                          <circle cx="20" cy="70" r="2" fill="#a855f7" />
                          <circle cx="40" cy="40" r="2" fill="#a855f7" />
                          <circle cx="120" cy="40" r="2" fill="#a855f7" />
                          <circle cx="220" cy="10" r="2" fill="#a855f7" />
                          <circle cx="260" cy="15" r="2" fill="#a855f7" />
                        </svg>
                        <div className="chart-labels-y">
                          <span>6K</span>
                          <span>4K</span>
                          <span>2K</span>
                          <span>0</span>
                        </div>
                        <div className="chart-labels-x">
                          <span>May 10</span>
                          <span>May 11</span>
                          <span>May 12</span>
                          <span>May 13</span>
                          <span>May 14</span>
                          <span>May 15</span>
                          <span>May 16</span>
                        </div>
                      </div>
                    </div>
                    <div className="md-agent-activity">
                      <span>AI Agent Activity</span>
                      <div className="agent-avatar">
                        <i data-lucide="bot"></i>
                      </div>
                      <strong style={{ marginTop: "10px" }}>
                        AI Agent is{" "}
                        <span style={{ color: "#22c55e" }}>active</span>{" "}
                        <span className="dot-active"></span>
                      </strong>
                      <p>Handling 32 conversations</p>
                      <div className="progress-container">
                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: "98%" }}
                          ></div>
                        </div>
                        <div className="task-comp">
                          Task Completion <span>98%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating WhatsApp Chat */}
            <div className="comp-card float-chat" style={{ display: "none" }}>
              <div className="cw-header">
                <div
                  className="cw-avatar"
                  style={{
                    background: "#22c55e",
                    color: "white",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                  }}
                >
                  <i data-lucide="bot"></i>
                </div>
                <div className="cw-info">
                  <strong>AI Agent</strong>
                  <span>
                    <span className="dot-active"></span> Online
                  </span>
                </div>
                <div className="cw-actions">
                  <i data-lucide="video"></i>{" "}
                  <i data-lucide="more-vertical"></i>
                </div>
              </div>
              <div className="cw-body">
                <div className="msg received">
                  Hi 👋 How can I help you today? <span>10:30 AM</span>
                </div>
                <div className="msg sent">
                  I want to book an appointment{" "}
                  <span>
                    10:31 AM{" "}
                    <i data-lucide="check-check" className="text-blue"></i>
                  </span>
                </div>
                <div className="msg received">
                  Sure! Please select a date & time. <span>10:31 AM</span>
                </div>
                <div className="msg sent btn-msg">
                  View Available Slots{" "}
                  <span>
                    10:32 AM{" "}
                    <i data-lucide="check-check" className="text-blue"></i>
                  </span>
                </div>
              </div>
              <div className="wa-float-icon">
                <i data-lucide="message-circle"></i>
              </div>
            </div>

            {/* Floating Workflow */}
            <div
              className="comp-card float-workflow"
              style={{ display: "none" }}
            >
              <div className="ww-header">Workflow Automation</div>
              <div className="ww-flow">
                <div className="wf-node">
                  <div className="icon bg-blue">
                    <i data-lucide="user"></i>
                  </div>
                  <span>New Lead</span>
                </div>
                <div className="wf-arrow">
                  <div className="dashed-line"></div>
                </div>
                <div className="wf-node">
                  <div className="icon bg-purple">
                    <i data-lucide="brain-circuit"></i>
                  </div>
                  <span>AI Qualification</span>
                </div>
                <div className="wf-arrow">
                  <div className="dashed-line"></div>
                </div>
                <div className="wf-node">
                  <div className="icon bg-pink">
                    <i data-lucide="database"></i>
                  </div>
                  <span>Lead Capture</span>
                </div>
              </div>
              <div className="ww-flow mt-10">
                <div className="wf-node">
                  <div className="icon bg-green">
                    <i data-lucide="message-circle"></i>
                  </div>
                  <span>Send WhatsApp</span>
                </div>
                <div className="wf-arrow left">
                  <div className="dashed-line"></div>
                </div>
                <div className="wf-node">
                  <div className="icon bg-indigo">
                    <i data-lucide="calendar"></i>
                  </div>
                  <span>Schedule Appointment</span>
                </div>
                <div className="wf-arrow left">
                  <div className="dashed-line"></div>
                </div>
                <div className="wf-node">
                  <div className="icon bg-red">
                    <i data-lucide="bell"></i>
                  </div>
                  <span>Follow Up</span>
                </div>
              </div>
            </div>

            {/* Floating Robot */}
            <div className="float-robot" style={{ display: "none" }}>
              <div className="robot-glow-rings">
                <div className="ring r1"></div>
                <div className="ring r2"></div>
              </div>
              <ChromaKeyVideo src="/images/ai_chatting.mp4" similarity={0.75} smoothness={0.15} maxWidth={500} style={{ width: '350px', height: 'auto', transform: 'scale(1.7)', transformOrigin: 'bottom center' }} />
            </div>
          </div>
        </div>

        {/* HERO BOTTOM FEATURES */}
        <div className="hero-features-wrap">
          <div
            className="hero-bottom-features stagger-container"
            style={{ padding: 0, maxWidth: "none", margin: 0 }}
          >
            <div className="feature-item stagger-item">
              <div className="feat-icon animate-svg-pulse">
                <i data-lucide="bot-message-square"></i>
              </div>
              <div className="feat-text">
                <h4>AI-Powered Conversations</h4>
                <p>
                  Human-like conversations that engage, support, and convert.
                </p>
              </div>
            </div>
            <div className="feature-item stagger-item">
              <div className="feat-icon animate-svg-pulse">
                <i data-lucide="mouse-pointer-click"></i>
              </div>
              <div className="feat-text">
                <h4>Instant Lead Capture</h4>
                <p>
                  Capture leads automatically from WhatsApp, Web, and other
                  channels.
                </p>
              </div>
            </div>
            <div className="feature-item stagger-item">
              <div className="feat-icon animate-svg-pulse">
                <i data-lucide="settings-2"></i>
              </div>
              <div className="feat-text">
                <h4>Smart Automation</h4>
                <p>
                  Automate repetitive tasks and workflows to save time and
                  reduce errors.
                </p>
              </div>
            </div>
            <div className="feature-item stagger-item">
              <div className="feat-icon animate-svg-pulse">
                <i data-lucide="bar-chart-big"></i>
              </div>
              <div className="feat-text">
                <h4>Analytics & Insights</h4>
                <p>
                  Track performance, analyze data, and grow your business
                  faster.
                </p>
              </div>
            </div>
            <div className="feature-item stagger-item">
              <div className="feat-icon animate-svg-pulse">
                <i data-lucide="shield-half"></i>
              </div>
              <div className="feat-text">
                <h4>Secure & Scalable</h4>
                <p>
                  Enterprise-grade security and infrastructure built to scale
                  with you.
                </p>
              </div>
            </div>
          </div>
          <HeroChatbotVisual />
        </div>
      </section>
      <WorkflowMarquee />

      {/* 3. AI TRAINING SECTION */}
      <section className="ai-training section-padding reveal-up" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Train AI Using Your Business Knowledge
            </h2>
            <p className="section-desc">
              Instantly turn your company data into a smart, responsive AI
              agent. Connect your existing knowledge base and let the AI do the
              rest.
            </p>
          </div>

          <div className="training-grid">
            {/* Training sources */}
            <div className="training-sources">
              <div className="glass-card source-card">
                <div className="icon-box red">
                  <i data-lucide="file-text"></i>
                </div>
                <div className="source-info">
                  <h3>PDF Documents</h3>
                  <p>Upload manuals and guides</p>
                </div>
              </div>
              <div className="glass-card source-card">
                <div className="icon-box blue">
                  <i data-lucide="globe"></i>
                </div>
                <div className="source-info">
                  <h3>Website URLs</h3>
                  <p>Scrape your entire site</p>
                </div>
              </div>
              <div className="glass-card source-card">
                <div className="icon-box green">
                  <i data-lucide="book-user"></i>
                </div>
                <div className="source-info">
                  <h3>Help Center / FAQs</h3>
                  <p>Sync with Zendesk or Intercom</p>
                </div>
              </div>
              <div className="glass-card source-card">
                <div className="icon-box yellow">
                  <i data-lucide="sheet"></i>
                </div>
                <div className="source-info">
                  <h3>Google Sheets Integration</h3>
                  <p>Lead capture &amp; workflow sync</p>
                </div>
              </div>
            </div>

            {/* AI Brain Visual */}
            <div className="ai-brain-visual glass-card" style={{ padding: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ChromaKeyVideo
                src={aiTrainingVideo}
                similarity={0.4}
                smoothness={0.08}
                maxWidth={800}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "24px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW AUTOMATION SECTION */}
      <section className="workflow-automation section-padding" id="workflows">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              Build Powerful Automation Workflows
            </h2>
            <p className="section-desc">
              Design complex conversational journeys visually. No coding
              required.
            </p>
          </div>

          <div className="workflow-builder glass-card">
            <div className="builder-header">
              <div className="tools">
                <i data-lucide="mouse-pointer-2"></i> <i data-lucide="hand"></i>{" "}
                <i data-lucide="zoom-in"></i>
              </div>
              <div className="builder-title">Lead Qualification Flow</div>
              <button className="btn btn-primary btn-small">Publish</button>
            </div>
            <div className="builder-canvas">
              {/* Workflow Nodes */}
              <div
                className="node node-trigger"
                style={{
                  top: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="node-icon">
                  <i data-lucide="message-square"></i>
                </div>
                <div className="node-content">
                  <h4>Customer Message</h4>
                  <p>WhatsApp</p>
                </div>
              </div>

              <svg
                className="node-connector"
                style={{ top: "80px", left: "50%", transform: "translateX(-50%)" }}
                width="2"
                height="40"
              >
                <line x1="1" y1="0" x2="1" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <line x1="1" y1="0" x2="1" y2="40" stroke="#a855f7" strokeWidth="2" className="animated-path" />
              </svg>

              <div
                className="node node-ai"
                style={{
                  top: "120px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="node-icon">
                  <i data-lucide="bot"></i>
                </div>
                <div className="node-content">
                  <h4>AI Response</h4>
                  <p>Answer & Ask for Email</p>
                </div>
              </div>

              {/* Split paths */}
              <svg
                className="node-split"
                style={{
                  top: "180px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
                width="200"
                height="60"
              >
                <path
                  d="M100,0 L100,20 L10,20 L10,60"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                />
                <path
                  d="M100,0 L100,20 L10,20 L10,60"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  className="animated-path"
                />
                <path
                  d="M100,0 L100,20 L190,20 L190,60"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                />
                <path
                  d="M100,0 L100,20 L190,20 L190,60"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  className="animated-path"
                />
              </svg>

              <div
                className="node node-action"
                style={{
                  top: "240px",
                  left: "calc(50% - 90px)",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="node-icon">
                  <i data-lucide="database"></i>
                </div>
                <div className="node-content">
                  <h4>Lead Capture</h4>
                  <p>Workflow Sync</p>
                </div>
              </div>

              <div
                className="node node-human"
                style={{
                  top: "240px",
                  left: "calc(50% + 90px)",
                  transform: "translateX(-50%)",
                }}
              >
                <div className="node-icon">
                  <i data-lucide="headphones"></i>
                </div>
                <div className="node-content">
                  <h4>Assign Sales</h4>
                  <p>Live Agent Handoff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OMNICHANNEL INTEGRATIONS SECTION */}
      <section className="integrations section-padding" id="integrations">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Connect Every Communication Channel
            </h2>
            <p className="section-desc">
              Deploy your AI agents wherever your customers are. Seamlessly
              integrate with your favorite tools.
            </p>
          </div>

          <div className="integration-grid">
            {/* Row 1 */}
            <div className="integration-card glass-card">
              <i
                data-lucide="message-circle"
                style={{ color: "#25D366", fontSize: "20px" }}
              ></i>{" "}
              WhatsApp
            </div>
            <div className="integration-card glass-card">
              <i
                data-lucide="send"
                style={{ color: "#0088cc", fontSize: "20px" }}
              ></i>{" "}
              Telegram
            </div>
            <div className="integration-card glass-card">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E1306C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginRight: "6px",
                }}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </div>
            <div className="integration-card glass-card">
              <i
                data-lucide="message-circle"
                style={{ color: "#1877F2", fontSize: "20px" }}
              ></i>{" "}
              Messenger
            </div>
            <div className="integration-card glass-card">
              <i data-lucide="mail" style={{ color: "#EA4335" }}></i> Gmail
            </div>
            {/* Row 2 */}
            <div className="integration-card glass-card">
              <i
                data-lucide="shopping-cart"
                style={{ color: "#95BF47", fontSize: "20px" }}
              ></i>{" "}
              Shopify
            </div>
            <div className="integration-card glass-card">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E01E5A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginRight: "6px",
                }}
              >
                <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" />
                <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" />
                <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" />
                <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" />
                <path d="M15.5 19v1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5h1.5z" />
                <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" />
                <path d="M8.5 5H7V3.5C7 2.67 7.67 2 8.5 2S10 2.67 10 3.5 9.33 5 8.5 5z" />
              </svg>
              Slack
            </div>
            <div className="integration-card glass-card">
              <i data-lucide="code" style={{ color: "#A8B9CC" }}></i> APIs
            </div>
            <div className="integration-card glass-card">
              <i data-lucide="webhook" style={{ color: "#7C3AED" }}></i>{" "}
              Webhooks
            </div>
          </div>
        </div>
      </section>

      {/* 6. CAMPAIGNS & BROADCASTS SECTION */}
      <section className="campaigns section-padding">
        <div className="container container-split">
          <div className="split-content">
            <h2 className="section-title">Launch Smart AI Campaigns</h2>
            <ul className="feature-list">
              <li>
                <i data-lucide="check-circle-2"></i>
                <strong className="feature-label">WhatsApp Broadcasts:</strong>
                <span className="feature-desc">
                  Send mass messages with high open rates.
                </span>
              </li>
              <li>
                <i data-lucide="check-circle-2"></i>
                <strong className="feature-label">Campaign Scheduling:</strong>
                <span className="feature-desc">
                  Plan campaigns ahead of time for optimal delivery.
                </span>
              </li>
              <li>
                <i data-lucide="check-circle-2"></i>
                <strong className="feature-label">Message Templates:</strong>
                <span className="feature-desc">
                  Pre-approved Meta templates for quick launching.
                </span>
              </li>
              <li>
                <i data-lucide="check-circle-2"></i>
                <strong className="feature-label">Smart Segmentation:</strong>
                <span className="feature-desc">
                  Target users based on interaction history.
                </span>
              </li>
              <li>
                <i data-lucide="check-circle-2"></i>
                <strong className="feature-label">Automated Follow-ups:</strong>
                <span className="feature-desc">
                  AI handles responses to campaign replies.
                </span>
              </li>
            </ul>
          </div>
          <div className="split-visual">
            <CampaignAnalytics />
          </div>
        </div>
      </section>

      {/* 7. AI + HUMAN SUPPORT SECTION */}
      <section className="human-support section-padding">
        <div className="container container-split reverse">
          <div className="split-content">
            <h2 className="section-title">AI Automation With Human Support</h2>
            <p className="section-desc">
              Don't lose the human touch. Our platform seamlessly routes complex
              queries to human agents while the AI handles the repetitive tasks.
            </p>
            <div className="feature-grid-2">
              <div className="feat-item">
                <i data-lucide="bot"></i>
                <h5>AI First Line</h5>
                <p>Resolves 80% of queries instantly.</p>
              </div>
              <div className="feat-item">
                <i data-lucide="users"></i>
                <h5>Live Agent Handoff</h5>
                <p>Seamless transfer with full context.</p>
              </div>
              <div className="feat-item">
                <i data-lucide="inbox"></i>
                <h5>Shared Inbox</h5>
                <p>Collaborate across your team.</p>
              </div>
              <div className="feat-item">
                <i data-lucide="sparkles"></i>
                <h5>AI Assisted Replies</h5>
                <p>Draft suggested responses for humans.</p>
              </div>
            </div>
          </div>
          <div className="split-visual">
            <LiveSupportSimulation />
          </div>
        </div>
      </section>

      {/* 8. ANALYTICS DASHBOARD SECTION */}
      <section className="analytics section-padding text-center">
        <div className="container">
          <div className="section-header mx-auto">
            <h2 className="section-title">Track Performance In Real Time</h2>
            <p className="section-desc">
              Comprehensive insights into your AI's performance, lead
              generation, and customer satisfaction.
            </p>
          </div>

          <div className="analytics-grid">
            <div className="glass-card stat-card">
              <div className="stat-header">
                <span className="title">Resolution Rate</span>
                <i data-lucide="trending-up" className="text-green"></i>
              </div>
              <div className="stat-value-large">86.4%</div>
              <div className="stat-sub">+5.2% from last week</div>
              <div className="mini-chart chart-green"></div>
            </div>
            <div className="glass-card stat-card">
              <div className="stat-header">
                <span className="title">Messages Processed</span>
                <i data-lucide="message-square" className="text-blue"></i>
              </div>
              <div className="stat-value-large">124k</div>
              <div className="stat-sub">+12% from last week</div>
              <div className="mini-chart chart-blue"></div>
            </div>
            <div className="glass-card stat-card">
              <div className="stat-header">
                <span className="title">Avg Response Time</span>
                <i data-lucide="clock" className="text-purple"></i>
              </div>
              <div className="stat-value-large">1.2s</div>
              <div className="stat-sub">-0.4s from last week</div>
              <div className="mini-chart chart-purple"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. TEMPLATE MARKETPLACE SECTION */}
      <section className="templates section-padding">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Start Faster With Ready-Made Templates
            </h2>
            <p className="section-desc">
              Deploy industry-specific AI agents in one click.
            </p>
          </div>

          <div className="template-grid">
            <div className="glass-card template-card">
              <div className="template-icon">
                <i data-lucide="home"></i>
              </div>
              <h3>Real Estate AI Bot</h3>
              <p>
                Qualify leads, schedule property viewings, and answer FAQs about
                listings.
              </p>
              <a
                href="#"
                className="template-link open-modal"
                data-modal-title="Preview Template"
              >
                Preview Template <i data-lucide="arrow-right"></i>
              </a>
            </div>
            <div className="glass-card template-card">
              <div className="template-icon">
                <i data-lucide="heart-pulse"></i>
              </div>
              <h3>Clinic Assistant</h3>
              <p>
                Manage appointments, send reminders, and handle patient
                inquiries securely.
              </p>
              <a
                href="#"
                className="template-link open-modal"
                data-modal-title="Preview Template"
              >
                Preview Template <i data-lucide="arrow-right"></i>
              </a>
            </div>
            <div className="glass-card template-card">
              <div className="template-icon">
                <i data-lucide="utensils-crossed"></i>
              </div>
              <h3>Restaurant Booking Bot</h3>
              <p>
                Take reservations, showcase menus, and handle takeout orders on
                WhatsApp.
              </p>
              <a
                href="#"
                className="template-link open-modal"
                data-modal-title="Preview Template"
              >
                Preview Template <i data-lucide="arrow-right"></i>
              </a>
            </div>
            <div className="glass-card template-card">
              <div className="template-icon">
                <i data-lucide="shopping-basket"></i>
              </div>
              <h3>E-commerce Sales Bot</h3>
              <p>
                Recommend products, track orders, and recover abandoned carts.
              </p>
              <a
                href="#"
                className="template-link open-modal"
                data-modal-title="Preview Template"
              >
                Preview Template <i data-lucide="arrow-right"></i>
              </a>
            </div>
            <div className="glass-card template-card">
              <div className="template-icon">
                <i data-lucide="concierge-bell"></i>
              </div>
              <h3>Customer Support AI</h3>
              <p>
                Handle returns, refunds, and general inquiries with a human
                handoff option.
              </p>
              <a
                href="#"
                className="template-link open-modal"
                data-modal-title="Preview Template"
              >
                Preview Template <i data-lucide="arrow-right"></i>
              </a>
            </div>
            <div className="glass-card template-card">
              <div className="template-icon">
                <i data-lucide="contact-round"></i>
              </div>
              <h3>Lead Generation Bot</h3>
              <p>
                Engage website visitors, collect contact info, and sync to
                workflow automation.
              </p>
              <a
                href="#"
                className="template-link open-modal"
                data-modal-title="Preview Template"
              >
                Preview Template <i data-lucide="arrow-right"></i>
              </a>
            </div>
            <div className="glass-card template-card">
              <div className="template-icon">
                <i data-lucide="dumbbell"></i>
              </div>
              <h3>Gym / Fitness AI Assistant</h3>
              <p>
                Manage memberships, class bookings, and fitness inquiries
                automatically.
              </p>
              <a
                href="#"
                className="template-link open-modal"
                data-modal-title="Preview Template"
              >
                Preview Template <i data-lucide="arrow-right"></i>
              </a>
            </div>
            <div className="glass-card template-card">
              <div className="template-icon">
                <i data-lucide="car-front"></i>
              </div>
              <h3>Car Rental AI Booking Bot</h3>
              <p>
                Handle reservations, availability checks, and customer support
                on autopilot.
              </p>
              <a
                href="#"
                className="template-link open-modal"
                data-modal-title="Preview Template"
              >
                Preview Template <i data-lucide="arrow-right"></i>
              </a>
            </div>
            <div className="glass-card template-card">
              <div className="template-icon">
                <i data-lucide="graduation-cap"></i>
              </div>
              <h3>Education / Tutoring AI Assistant</h3>
              <p>
                Answer course questions, schedule sessions, and support student
                enrollment.
              </p>
              <a
                href="#"
                className="template-link open-modal"
                data-modal-title="Preview Template"
              >
                Preview Template <i data-lucide="arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="final-cta">
        <div className="cta-background">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>
        <div className="container text-center relative z-10">
          <h2 className="hero-title">
            Start Automating Customer Conversations With AI
          </h2>
          <p className="hero-subtitle mx-auto" style={{ maxWidth: "600px" }}>
            Join thousands of businesses saving time and increasing sales with
            our AI automation platform.
          </p>
          <div className="hero-cta justify-center mt-8">
            <a
              href="#"
              className="btn btn-primary btn-large glow-btn open-modal"
              data-modal-title="Get Started Now"
            >
              Get Started Now
            </a>
            <a
              href="#"
              className="btn btn-ghost btn-large open-modal"
              data-modal-title="Book a Demo"
            >
              Book Demo
            </a>
          </div>
        </div>
      </section>

      {/* 12. FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="logo">
                <div className="logo-icon">
                  <i data-lucide="bot"></i>
                </div>
                <h2>AgenticAI</h2>
              </a>
              <p className="footer-desc">
                Next-generation AI automation platform for modern businesses.
                Streamline communication, automate workflows, and grow faster.
              </p>
              <div className="social-links">
                <a href="#">
                  <i data-lucide="twitter"></i>
                </a>
                <a href="#">
                  <i data-lucide="linkedin"></i>
                </a>
                <a href="#">
                  <i data-lucide="github"></i>
                </a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Platform</h4>
              <a href="/services">Services</a>
              <a href="/solutions">Solutions</a>
              <a href="#features">Features</a>
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
            <p>&copy; 2026 AgenticAI Inc. All rights reserved.</p>
            <div className="status-indicator">
              <span className="pulse-dot"></span> All systems operational
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
