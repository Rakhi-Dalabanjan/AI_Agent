import { useEffect, useState } from "react";
import { HeroTypedCycle } from "../../components/HeroTypedCycle";
import { WorkflowMarquee } from "../../components/WorkflowMarquee";
import { HeroChatbotVisual } from "../../components/HeroChatbotVisual";
import { CampaignAnalytics } from "../../components/CampaignAnalytics";
import { LiveSupportSimulation } from "../../components/LiveSupportSimulation";
import { refreshLucideIcons } from "../../utils/lucide";
import { ChromaKeyVideo } from "../../components/ChromaKeyVideo";
const homeHeroVideo = "/images/c_cc_c_ecmp_.mp4";
export function HomeContent() {
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    refreshLucideIcons();

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
              AI Workforce Platform for Businesses
            </div>

            <h1
              className="hero-heading"
              style={{ fontSize: "clamp(30px, 3.8vw, 52px)", lineHeight: "1.2", fontWeight: 800 }}
            >
              Build Your AI Workforce <br />
              for <HeroTypedCycle /> &amp; Business Growth
            </h1>

            <p className="hero-description">
              IAMKRATU.AI helps businesses deploy trained AI Agents for sales, customer support, social media, SEO, lead generation, operations, and automation — available 24x7.
            </p>

            <div className="hero-buttons" style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "20px" }}>
              <button
                className="btn-primary-purple open-modal btn-magnetic"
                data-modal-title="Hire AI Agents"
              >
                <i
                  data-lucide="users"
                  style={{ width: "18px", height: "18px" }}
                ></i>{" "}
                Hire AI Agents{" "}
                <i
                  data-lucide="arrow-right"
                  style={{ marginLeft: "5px", width: "18px", height: "18px" }}
                ></i>
              </button>
              <button
                className="btn-secondary-outline open-modal btn-magnetic"
                data-modal-title="Book a Demo"
              >
                <i
                  data-lucide="calendar-check"
                  style={{ color: "#a855f7", fontSize: "18px" }}
                ></i>{" "}
                Book Free Demo
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
              <p>Designed for startups, SMEs, agencies, ecommerce brands, real estate firms, and growing businesses.</p>
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
      </section>

      {/* HERO BOTTOM FEATURES — full-width light section */}
      <div className="hero-features-wrap">
        <div
          className="hero-bottom-features stagger-container"
          style={{ padding: 0, maxWidth: "none", margin: 0, display: "grid", gridTemplateColumns: "1fr", gap: "10px" }}
        >
          <div className="feature-item stagger-item" style={{ padding: "4px 0" }}>
            <div className="feat-icon animate-svg-pulse" style={{ width: "38px", height: "38px", borderRadius: "10px" }}>
              <i data-lucide="bot-message-square" style={{ width: "18px", height: "18px" }}></i>
            </div>
            <div className="feat-text">
              <h4 style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', margin: '0 0 2px' }}>AI-Powered Conversations</h4>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Human-like conversations that engage, support, and convert.</p>
            </div>
          </div>
          <div className="feature-item stagger-item" style={{ padding: "4px 0" }}>
            <div className="feat-icon animate-svg-pulse" style={{ width: "38px", height: "38px", borderRadius: "10px", color: '#3b82f6', background: 'rgba(59, 130, 246, 0.10)', borderColor: 'rgba(59, 130, 246, 0.20)' }}>
              <i data-lucide="message-square" style={{ width: "18px", height: "18px" }}></i>
            </div>
            <div className="feat-text">
              <h4 style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', margin: '0 0 2px' }}>WhatsApp Automation</h4>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Seamlessly automate replies, bookings, and alerts on WhatsApp.</p>
            </div>
          </div>
          <div className="feature-item stagger-item" style={{ padding: "4px 0" }}>
            <div className="feat-icon animate-svg-pulse" style={{ width: "38px", height: "38px", borderRadius: "10px", color: '#ec4899', background: 'rgba(236, 72, 153, 0.10)', borderColor: 'rgba(236, 72, 153, 0.20)' }}>
              <i data-lucide="search" style={{ width: "18px", height: "18px" }}></i>
            </div>
            <div className="feat-text">
              <h4 style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', margin: '0 0 2px' }}>SEO Optimization</h4>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Drive organic traffic and rank higher with autonomous SEO.</p>
            </div>
          </div>
          <div className="feature-item stagger-item" style={{ padding: "4px 0" }}>
            <div className="feat-icon animate-svg-pulse" style={{ width: "38px", height: "38px", borderRadius: "10px", color: '#06b6d4', background: 'rgba(6, 182, 212, 0.10)', borderColor: 'rgba(6, 182, 212, 0.20)' }}>
              <i data-lucide="phone" style={{ width: "18px", height: "18px" }}></i>
            </div>
            <div className="feat-text">
              <h4 style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', margin: '0 0 2px' }}>AI Voice Calls</h4>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Deploy voice agents to handle calls and appointments 24x7.</p>
            </div>
          </div>
          <div className="feature-item stagger-item" style={{ padding: "4px 0" }}>
            <div className="feat-icon animate-svg-pulse" style={{ width: "38px", height: "38px", borderRadius: "10px", color: '#10b981', background: 'rgba(16, 185, 129, 0.10)', borderColor: 'rgba(16, 185, 129, 0.20)' }}>
              <i data-lucide="check-circle" style={{ width: "18px", height: "18px" }}></i>
            </div>
            <div className="feat-text">
              <h4 style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', margin: '0 0 2px' }}>Lead Qualification</h4>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Automatically capture, score, and qualify every incoming lead.</p>
            </div>
          </div>
          <div className="feature-item stagger-item" style={{ padding: "4px 0" }}>
            <div className="feat-icon animate-svg-pulse" style={{ width: "38px", height: "38px", borderRadius: "10px", color: '#f59e0b', background: 'rgba(245, 158, 11, 0.10)', borderColor: 'rgba(245, 158, 11, 0.20)' }}>
              <i data-lucide="refresh-cw" style={{ width: "18px", height: "18px" }}></i>
            </div>
            <div className="feat-text">
              <h4 style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', margin: '0 0 2px' }}>Automated Follow-Ups</h4>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Nurture prospects automatically across email and chat.</p>
            </div>
          </div>
          <div className="feature-item stagger-item" style={{ padding: "4px 0" }}>
            <div className="feat-icon animate-svg-pulse" style={{ width: "38px", height: "38px", borderRadius: "10px", color: '#6366f1', background: 'rgba(99, 102, 241, 0.10)', borderColor: 'rgba(99, 102, 241, 0.20)' }}>
              <i data-lucide="git-branch" style={{ width: "18px", height: "18px" }}></i>
            </div>
            <div className="feat-text">
              <h4 style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', margin: '0 0 2px' }}>Workflow Automation</h4>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Connect apps and trigger multi-step background workflows.</p>
            </div>
          </div>
          <div className="feature-item stagger-item" style={{ padding: "4px 0" }}>
            <div className="feat-icon animate-svg-pulse" style={{ width: "38px", height: "38px", borderRadius: "10px", color: '#a855f7', background: 'rgba(168, 85, 247, 0.10)', borderColor: 'rgba(168, 85, 247, 0.20)' }}>
              <i data-lucide="bar-chart-3" style={{ width: "18px", height: "18px" }}></i>
            </div>
            <div className="feat-text">
              <h4 style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', margin: '0 0 2px' }}>Analytics Dashboard</h4>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Monitor AI performance, chats, and conversions in real time.</p>
            </div>
          </div>
          <div className="feature-item stagger-item" style={{ padding: "4px 0" }}>
            <div className="feat-icon animate-svg-pulse" style={{ width: "38px", height: "38px", borderRadius: "10px", color: '#4f46e5', background: 'rgba(79, 70, 229, 0.10)', borderColor: 'rgba(79, 70, 229, 0.20)' }}>
              <i data-lucide="network" style={{ width: "18px", height: "18px" }}></i>
            </div>
            <div className="feat-text">
              <h4 style={{ fontWeight: '700', fontSize: '14px', color: '#1e293b', margin: '0 0 2px' }}>Multi-Agent Workflows</h4>
              <p style={{ margin: 0, fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Orchestrate multiple specialized AI agents in sync.</p>
            </div>
          </div>
        </div>
        <HeroChatbotVisual />
      </div>
      <WorkflowMarquee />

      {/* LIGHT THEME FOLD FOR HOMEPAGE CONTENTS */}
      <div className="light-theme-fold" style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: 0 }}>

        {/* ABOUT SECTION */}
        <section className="about-section section-padding reveal-up" id="about" style={{ padding: '100px 0', borderBottom: '1px solid rgba(15,23,42,0.06)' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div className="about-content" data-scroll="slide-left">
              <span className="badge-accent" style={{ background: 'rgba(99, 102, 241, 0.08)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.15)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '16px' }}>
                About Us
              </span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, marginBottom: '24px', color: '#0f172a' }}>
                About IAMKRATU.AI
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
                IAMKRATU.AI is an AI Agent Platform that enables businesses to deploy trained AI Agents for business operations, customer engagement, marketing, sales, and workflow automation.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
                Our mission is to help businesses build their own AI Workforce without requiring technical expertise.
              </p>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.7' }}>
                From AI-powered customer support to lead automation and workflow optimization, IAMKRATU.AI helps businesses save time, reduce operational costs, improve productivity, and scale faster.
              </p>
            </div>
            <div className="about-visual" data-scroll="slide-right" style={{ position: 'relative' }}>
              <div className="glass-card" style={{ padding: '30px', borderRadius: '24px', background: '#f8fafc', border: '1px solid rgba(15,23,42,0.06)', boxShadow: '0 20px 40px rgba(15,23,42,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
                    <i data-lucide="cpu" style={{ width: '24px', height: '24px' }}></i>
                  </div>
                  <div>
                    <h4 style={{ color: '#0f172a', fontSize: '16px', fontWeight: 700 }}>Autonomous AI Core</h4>
                    <span style={{ color: '#64748b', fontSize: '12px' }}>IAMKRATU.AI Technology</span>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(15,23,42,0.06)', display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#0f172a' }}>
                    <span>Deploy 24x7 Agents</span>
                    <span style={{ color: '#22c55e', fontWeight: '600' }}>Ready</span>
                  </div>
                  <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(15,23,42,0.06)', display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#0f172a' }}>
                    <span>Zero Code Integrations</span>
                    <span style={{ color: '#6366f1', fontWeight: '600' }}>Active</span>
                  </div>
                  <div style={{ background: '#ffffff', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(15,23,42,0.06)', display: 'flex', justifyContent: 'space-between', fontSize: '13px', color: '#0f172a' }}>
                    <span>Custom Knowledge Brain</span>
                    <span style={{ color: '#a855f7', fontWeight: '600' }}>Trained</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE OFFER SECTION */}
        <section className="offerings-section section-padding reveal-up" id="offerings" style={{ padding: '100px 0', borderBottom: '1px solid rgba(15,23,42,0.06)' }}>
          <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '60px' }}>
              <span className="badge-accent" style={{ background: 'rgba(99, 102, 241, 0.08)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.15)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '16px' }}>
                What We Offer
              </span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                AI Agents for Every Business Need
              </h2>
            </div>
            <div className="template-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon"><i data-lucide="headset"></i></div>
                <h3>AI Customer Support Agent</h3>
                <p>Automate customer conversations across websites, WhatsApp, and social media platforms with intelligent AI support agents.</p>
                <a href="/services#customer-support-agent" className="template-link">Learn More <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon"><i data-lucide="trending-up"></i></div>
                <h3>AI Sales Agent</h3>
                <p>Capture, qualify, and convert leads automatically using conversational AI.</p>
                <a href="/services#sales-agent" className="template-link">Learn More <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon"><i data-lucide="search"></i></div>
                <h3>AI SEO Agent</h3>
                <p>Boost search rankings with AI-powered keyword research, SEO content generation, competitor analysis, and optimization.</p>
                <a href="/services#seo-agent" className="template-link">Learn More <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon"><i data-lucide="message-square"></i></div>
                <h3>AI WhatsApp Agent</h3>
                <p>Automate customer engagement, order updates, lead follow-ups, and support directly on WhatsApp.</p>
                <a href="/services#whatsapp-agent" className="template-link">Learn More <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon"><i data-lucide="phone"></i></div>
                <h3>AI Voice Agent</h3>
                <p>Deploy AI voice assistants for customer calls, appointment booking, support, and lead qualification.</p>
                <a href="/services#voice-agent" className="template-link">Learn More <i data-lucide="arrow-right"></i></a>
              </div>
            </div>
          </div>
        </section>

      </div> {/* END OF LIGHT THEME FOLD */}

      {/* HOW IT WORKS SECTION (DARK THEME) */}
      <section className="how-it-works-section section-padding reveal-up how-it-works-dark-theme" id="how-it-works" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '60px' }}>
            <span className="badge-accent" style={{ background: 'rgba(0, 102, 255, 0.1)', color: '#00BFFF', border: '1px solid rgba(0, 102, 255, 0.2)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '16px' }}>
              Process
            </span>
            <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
              How IAMKRATU.AI Works
            </h2>
          </div>
          <div className="process-timeline reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
            <div className="process-step" data-scroll="fade-scale">
              <div className="process-icon"><i data-lucide="mouse-pointer"></i></div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '12px 0 8px', color: '#ffffff' }}>1. Choose Your AI Agent</h3>
              <p style={{ fontSize: '13px', color: '#B6C2D9' }}>Select the AI agent that fits your business needs.</p>
            </div>
            <div className="process-step" data-scroll="fade-scale" style={{ animationDelay: '0.1s' }}>
              <div className="process-icon"><i data-lucide="database"></i></div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '12px 0 8px', color: '#ffffff' }}>2. Train & Customize</h3>
              <p style={{ fontSize: '13px', color: '#B6C2D9' }}>Upload business data, FAQs, SOPs, product information, or workflows.</p>
            </div>
            <div className="process-step" data-scroll="fade-scale" style={{ animationDelay: '0.2s' }}>
              <div className="process-icon"><i data-lucide="share-2"></i></div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '12px 0 8px', color: '#ffffff' }}>3. Integrate with Your Platforms</h3>
              <p style={{ fontSize: '13px', color: '#B6C2D9' }}>Connect your website, WhatsApp, CRM, or social platforms.</p>
            </div>
            <div className="process-step" data-scroll="fade-scale" style={{ animationDelay: '0.3s' }}>
              <div className="process-icon"><i data-lucide="rocket"></i></div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '12px 0 8px', color: '#ffffff' }}>4. Launch Automation</h3>
              <p style={{ fontSize: '13px', color: '#B6C2D9' }}>Your AI agent starts handling tasks automatically.</p>
            </div>
            <div className="process-step" data-scroll="fade-scale" style={{ animationDelay: '0.4s' }}>
              <div className="process-icon"><i data-lucide="bar-chart-3"></i></div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', margin: '12px 0 8px', color: '#ffffff' }}>5. Monitor & Scale</h3>
              <p style={{ fontSize: '13px', color: '#B6C2D9' }}>Track performance, analytics, and expand your AI workforce.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REOPEN LIGHT THEME FOLD */}
      <div className="light-theme-fold" style={{ backgroundColor: '#ffffff', color: '#0f172a', padding: 0 }}>

        {/* OMNICHANNEL INTEGRATIONS SECTION */}
        <section className="integrations section-padding" id="integrations" style={{ padding: '80px 0', borderBottom: '1px solid rgba(15,23,42,0.06)', background: '#ffffff' }}>
          <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '40px' }}>
              <span className="badge-accent" style={{ background: 'rgba(99, 102, 241, 0.08)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.15)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '16px' }}>
                Integrations
              </span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Connect Every Communication Channel
              </h2>
              <p style={{ color: '#475569', fontSize: '15px', maxWidth: '600px', margin: '0 auto' }}>
                Deploy your AI agents wherever your customers are. Seamlessly integrate with your favorite tools.
              </p>
            </div>
          </div>

          <div className="apps-marquee">
            <div className="apps-marquee-track">
              <div className="apps-marquee-group">
                <div className="integration-card glass-card"><i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '20px' }}></i> WhatsApp</div>
                <div className="integration-card glass-card"><i className="fa-brands fa-telegram" style={{ color: '#0088cc', fontSize: '20px' }}></i> Telegram</div>
                <div className="integration-card glass-card"><i className="fa-brands fa-instagram" style={{ color: '#E1306C', fontSize: '20px' }}></i> Instagram</div>
                <div className="integration-card glass-card"><i className="fa-brands fa-facebook-messenger" style={{ color: '#1877F2', fontSize: '20px' }}></i> Messenger</div>
                <div className="integration-card glass-card"><i className="fa-regular fa-envelope" style={{ color: '#EA4335', fontSize: '20px' }}></i> Gmail</div>
                <div className="integration-card glass-card"><i className="fa-brands fa-shopify" style={{ color: '#95BF47', fontSize: '20px' }}></i> Shopify</div>
                <div className="integration-card glass-card"><i className="fa-solid fa-bolt" style={{ color: '#FF4F00', fontSize: '20px' }}></i> Zapier</div>
                <div className="integration-card glass-card"><i className="fa-solid fa-code" style={{ color: '#A8B9CC', fontSize: '20px' }}></i> APIs</div>
                <div className="integration-card glass-card"><i className="fa-solid fa-circle-nodes" style={{ color: '#7C3AED', fontSize: '20px' }}></i> Webhooks</div>
              </div>
              <div className="apps-marquee-group">
                <div className="integration-card glass-card"><i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '20px' }}></i> WhatsApp</div>
                <div className="integration-card glass-card"><i className="fa-brands fa-telegram" style={{ color: '#0088cc', fontSize: '20px' }}></i> Telegram</div>
                <div className="integration-card glass-card"><i className="fa-brands fa-instagram" style={{ color: '#E1306C', fontSize: '20px' }}></i> Instagram</div>
                <div className="integration-card glass-card"><i className="fa-brands fa-facebook-messenger" style={{ color: '#1877F2', fontSize: '20px' }}></i> Messenger</div>
                <div className="integration-card glass-card"><i className="fa-regular fa-envelope" style={{ color: '#EA4335', fontSize: '20px' }}></i> Gmail</div>
                <div className="integration-card glass-card"><i className="fa-brands fa-shopify" style={{ color: '#95BF47', fontSize: '20px' }}></i> Shopify</div>
                <div className="integration-card glass-card"><i className="fa-solid fa-bolt" style={{ color: '#FF4F00', fontSize: '20px' }}></i> Zapier</div>
                <div className="integration-card glass-card"><i className="fa-solid fa-code" style={{ color: '#A8B9CC', fontSize: '20px' }}></i> APIs</div>
                <div className="integration-card glass-card"><i className="fa-solid fa-circle-nodes" style={{ color: '#7C3AED', fontSize: '20px' }}></i> Webhooks</div>
              </div>
            </div>
          </div>
        </section>

        {/* 8.5 PINNED SCROLLYTELLING SECTION */}
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

        {/* 9. INDUSTRIES SECTION */}
        <section className="templates section-padding" id="industries" style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}>
          <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '60px' }}>
              <span className="badge-accent" style={{ background: 'rgba(99, 102, 241, 0.08)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.15)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '16px' }}>
                Industries We Serve
              </span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Industry-Specific AI Solutions
              </h2>
            </div>
            <div className="template-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon" style={{ background: 'rgba(99,102,241,0.08)', color: '#6366f1' }}><i data-lucide="home"></i></div>
                <h3 style={{ color: '#0f172a' }}>Real Estate</h3>
                <p>Qualify buyers, capture listings interest, and schedule property viewings automatically.</p>
                <a href="/solutions#real-estate" className="template-link">Explore Solution <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon" style={{ background: 'rgba(236,72,153,0.08)', color: '#ec4899' }}><i data-lucide="shopping-basket"></i></div>
                <h3 style={{ color: '#0f172a' }}>Ecommerce</h3>
                <p>Recover abandoned carts, recommend products, and answer shipping status FAQs 24x7.</p>
                <a href="/solutions#ecommerce" className="template-link">Explore Solution <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon" style={{ background: 'rgba(34,197,94,0.08)', color: '#22c55e' }}><i data-lucide="heart-pulse"></i></div>
                <h3 style={{ color: '#0f172a' }}>Healthcare</h3>
                <p>Manage patient appointments, send clinic reminders, and automate standard medical FAQs.</p>
                <a href="/solutions#healthcare" className="template-link">Explore Solution <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon" style={{ background: 'rgba(249,115,22,0.08)', color: '#f97316' }}><i data-lucide="graduation-cap"></i></div>
                <h3 style={{ color: '#0f172a' }}>Education</h3>
                <p>Engage prospective students, support enrollment queries, and schedule advisory sessions.</p>
                <a href="/solutions#education" className="template-link">Explore Solution <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon" style={{ background: 'rgba(239,68,68,0.08)', color: '#ef4444' }}><i data-lucide="utensils-crossed"></i></div>
                <h3 style={{ color: '#0f172a' }}>Restaurants</h3>
                <p>Automate reservation bookings, share digital menus, and process orders over WhatsApp.</p>
                <a href="/solutions#restaurants" className="template-link">Explore Solution <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon" style={{ background: 'rgba(6,182,212,0.08)', color: '#06b6d4' }}><i data-lucide="plane"></i></div>
                <h3 style={{ color: '#0f172a' }}>Travel & Tourism</h3>
                <p>Provide 24x7 support for booking itineraries, tour inquiries, and ticket cancellations.</p>
                <a href="/solutions#travel" className="template-link">Explore Solution <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon" style={{ background: 'rgba(168,85,247,0.08)', color: '#a855f7' }}><i data-lucide="rocket"></i></div>
                <h3 style={{ color: '#0f172a' }}>Agencies & Startups</h3>
                <p>Scale client operations, qualify lead pipelines, and automate internal administrative workflows.</p>
                <a href="/solutions#agencies" className="template-link">Explore Solution <i data-lucide="arrow-right"></i></a>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale">
                <div className="template-icon" style={{ background: 'rgba(245,158,11,0.08)', color: '#f59e0b' }}><i data-lucide="dumbbell"></i></div>
                <h3 style={{ color: '#0f172a' }}>Gyms & Fitness Studios</h3>
                <p>Manage member check-ins, automate class booking alerts, and handle pricing plans inquiries.</p>
                <a href="/solutions#fitness" className="template-link">Explore Solution <i data-lucide="arrow-right"></i></a>
              </div>
            </div>
          </div>
        </section>

        {/* 10. TESTIMONIALS SECTION */}
        <section className="testimonials-section section-padding" id="testimonials" style={{ padding: '100px 0', borderTop: '1px solid rgba(15,23,42,0.06)', borderBottom: '1px solid rgba(15,23,42,0.06)', background: '#f8fafc' }}>
          <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '60px' }}>
              <span className="badge-accent" style={{ background: 'rgba(99, 102, 241, 0.08)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.15)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '16px' }}>
                Testimonials
              </span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Trusted by Fast-Growing Brands
              </h2>
            </div>
            <div className="template-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              <div className="glass-card template-card" data-scroll="fade-scale" style={{ textAlign: 'left', padding: '30px', background: '#ffffff', border: '1px solid rgba(15,23,42,0.06)' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '15px' }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p style={{ fontSize: '14px', color: '#475569', fontStyle: 'italic', marginBottom: '24px', lineHeight: '1.6' }}>
                  "Deploying the IAMKRATU.AI WhatsApp Agent has cut our support ticket delays to zero. Our lead collection doubled in the first month because of automated follow-ups!"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>A</div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', margin: 0 }}>Amit Sharma</h4>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Founder, Apex Realty</span>
                  </div>
                </div>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale" style={{ textAlign: 'left', padding: '30px', background: '#ffffff', border: '1px solid rgba(15,23,42,0.06)' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '15px' }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p style={{ fontSize: '14px', color: '#475569', fontStyle: 'italic', marginBottom: '24px', lineHeight: '1.6' }}>
                  "We use the AI SEO Agent to monitor ranks, optimize blog schedules, and write draft articles. Organic traffic has grown by 40% in just two months. A game-changer."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>P</div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', margin: 0 }}>Priya Patel</h4>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Marketing Dir, GlowCart</span>
                  </div>
                </div>
              </div>
              <div className="glass-card template-card" data-scroll="fade-scale" style={{ textAlign: 'left', padding: '30px', background: '#ffffff', border: '1px solid rgba(15,23,42,0.06)' }}>
                <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '15px' }}>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p style={{ fontSize: '14px', color: '#475569', fontStyle: 'italic', marginBottom: '24px', lineHeight: '1.6' }}>
                  "I was skeptical about AI Voice Calls, but IAMKRATU.AI schedules 30+ gym orientations a week. Zero manual calls needed. The integration with our CRM is seamless."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#06b6d4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>R</div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', margin: 0 }}>Rahul Mehta</h4>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Operations Head, IronFit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQ SECTION */}
        <section className="faq-section section-padding" id="faq" style={{ padding: '100px 0', borderBottom: '1px solid rgba(15,23,42,0.06)' }}>
          <div className="container">
            <div className="section-header text-center" style={{ marginBottom: '60px' }}>
              <span className="badge-accent" style={{ background: 'rgba(99, 102, 241, 0.08)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.15)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block', marginBottom: '16px' }}>
                FAQ
              </span>
              <h2 className="section-title" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="faq-accordion" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <details className="faq-item-details" style={{ marginBottom: '16px' }}>
                <summary>What is IAMKRATU.AI? <i className="fa-solid fa-chevron-down"></i></summary>
                <p>
                  IAMKRATU.AI is an AI Workforce Platform that enables businesses to deploy trained AI Agents for customer support, sales, WhatsApp automation, voice assistants, and operations — available 24x7.
                </p>
              </details>
              <details className="faq-item-details" style={{ marginBottom: '16px' }}>
                <summary>Do I need technical knowledge to use the platform? <i className="fa-solid fa-chevron-down"></i></summary>
                <p>
                  No technical knowledge is required. Our platform is designed to let you choose, train, customize, and deploy AI Agents through a simple, zero-code interface.
                </p>
              </details>
              <details className="faq-item-details" style={{ marginBottom: '16px' }}>
                <summary>What integrations do you support? <i className="fa-solid fa-chevron-down"></i></summary>
                <p>
                  We support seamless integrations with WhatsApp Business, websites, popular CRM platforms, and major operations/automation software to sync leads and customer data instantly.
                </p>
              </details>
              <details className="faq-item-details" style={{ marginBottom: '16px' }}>
                <summary>Which languages are supported by the AI Agents? <i className="fa-solid fa-chevron-down"></i></summary>
                <p>
                  Our AI Agents feature multi-language support, allowing them to converse naturally in English, Hindi, Kannada, Tamil, Telugu, and other major regional/global languages.
                </p>
              </details>
              <details className="faq-item-details" style={{ marginBottom: '16px' }}>
                <summary>How do I train my AI Agents? <i className="fa-solid fa-chevron-down"></i></summary>
                <p>
                  You can easily train your agents by uploading your existing business data, PDFs, product lists, URLs, or FAQs. The agent ingests this information to resolve inquiries with high accuracy.
                </p>
              </details>
              <details className="faq-item-details" style={{ marginBottom: '16px' }}>
                <summary>How does the 24x7 AI Employee help my business grow? <i className="fa-solid fa-chevron-down"></i></summary>
                <p>
                  By automating lead capture, qualifying prospects, resolving support tickets instantly, and performing follow-ups on auto-pilot, your business remains open 24x7, accelerating conversion rates.
                </p>
              </details>
            </div>
          </div>
        </section>

      </div> {/* END OF LIGHT THEME FOLD */}

      {/* SEAMLESS HERO STICKY SHOWCASE */}
      <section className="hero-showcase-section">
        {/* Slide 1: Platform Intelligence */}
        <div className="showcase-slide">
          <div className="showcase-glow orb-1"></div>
          <div className="showcase-glow orb-2"></div>
          <div className="container showcase-grid">
            <div className="showcase-text">
              <span className="badge-accent" style={{ background: 'rgba(0, 102, 255, 0.08)', color: '#0066FF', border: '1px solid rgba(0, 102, 255, 0.15)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block' }}>
                Platform Intelligence
              </span>
              <h2>Autonomous AI Employees Working 24x7</h2>
              <p>IAMKRATU.AI deploys context-aware, trained agents that handle leads, conversations, and operations automatically with human-like precision.</p>
            </div>
            <div className="showcase-visual">
              <div className="floating-glass-card card-main">
                <div className="card-header-glow"></div>
                <div className="card-content-wrap">
                  <div className="flex-row">
                    <span className="live-badge"><span className="pulse-dot"></span> Live Chat</span>
                    <span className="confidence-label">Confidence: 98.6%</span>
                  </div>
                  <div className="chat-bubble received">
                    Hi! How can I automate my CRM updates?
                  </div>
                  <div className="chat-bubble sent">
                    I can connect your forms directly to HubSpot or Salesforce via webhooks instantly.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2: WhatsApp Automation */}
        <div className="showcase-slide">
          <div className="showcase-glow orb-3"></div>
          <div className="showcase-glow orb-4"></div>
          <div className="container showcase-grid">
            <div className="showcase-visual">
              <div className="floating-glass-card whatsapp-sim-card">
                <div className="card-header-glow"></div>
                <div className="card-content-wrap">
                  <div className="whatsapp-header">
                    <div className="whatsapp-avatar">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div className="whatsapp-user-info">
                      <h4>Kratu AI WhatsApp Agent</h4>
                      <span>Online • 24x7 Assistant</span>
                    </div>
                  </div>
                  <div className="whatsapp-bubble-sent">
                    Can I book a demo for tomorrow at 3 PM?
                  </div>
                  <div className="whatsapp-bubble-received">
                    Sure! I have booked a slot for you. Check your email for details.
                  </div>
                  <div className="booking-confirm-badge">
                    <div className="booking-icon">
                      <i className="fa-solid fa-calendar-check"></i>
                    </div>
                    <div className="booking-details">
                      <h5>Demo Booking Confirmed</h5>
                      <p>Tomorrow at 3:00 PM (Local Time)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="showcase-text">
              <span className="badge-accent" style={{ background: 'rgba(168, 85, 247, 0.08)', color: '#a855f7', border: '1px solid rgba(168, 85, 247, 0.15)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block' }}>
                Multi-Channel Automation
              </span>
              <h2>Automate WhatsApp, Telegram &amp; Chatbots</h2>
              <p>Interact with customers instantly on their favorite messaging channels. Qualify leads, schedule appointments, and dispatch notifications automatically.</p>
            </div>
          </div>
        </div>

        {/* Slide 3: Real-Time Insights */}
        <div className="showcase-slide">
          <div className="showcase-glow orb-1"></div>
          <div className="showcase-glow orb-3"></div>
          <div className="container showcase-grid">
            <div className="showcase-text">
              <span className="badge-accent" style={{ background: 'rgba(236, 72, 153, 0.08)', color: '#ec4899', border: '1px solid rgba(236, 72, 153, 0.15)', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block' }}>
                Performance Metrics
              </span>
              <h2>Real-Time Campaign Performance &amp; Insights</h2>
              <p>Track and analyze every conversation, lead capture rate, and conversion metrics in real time. Sync details instantly with your CRM.</p>
            </div>
            <div className="showcase-visual">
              <div className="floating-glass-card analytics-dashboard-card">
                <div className="card-header-glow"></div>
                <div className="card-content-wrap">
                  <div className="analytics-header">
                    <h4>Kratu AI Dashboard</h4>
                    <p>Real-Time Performance Analytics</p>
                  </div>
                  <div className="metrics-row">
                    <div className="metric-box">
                      <div className="metric-label">Conversions</div>
                      <div className="metric-value">
                        +182% <span className="metric-change">↑</span>
                      </div>
                    </div>
                    <div className="metric-box">
                      <div className="metric-label">Response Time</div>
                      <div className="metric-value">0.4s</div>
                    </div>
                  </div>
                  <div className="crm-sync-list">
                    <div className="crm-item">
                      <div className="crm-user">
                        <i className="fa-solid fa-user-check" style={{ color: '#0066FF' }}></i>
                        <span>John Doe</span>
                      </div>
                      <div className="crm-status">CRM Synced</div>
                    </div>
                    <div className="crm-item">
                      <div className="crm-user">
                        <i className="fa-solid fa-user-check" style={{ color: '#a855f7' }}></i>
                        <span>Jane Smith</span>
                      </div>
                      <div className="crm-status">Qualified</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION (STAYS DARK/COLORED FOR PREMIUM FOOTER TRANSITION) */}
      <section className="final-cta">
        <div className="cta-background">
          <div className="glow-orb orb-1"></div>
          <div className="glow-orb orb-2"></div>
        </div>
        <div className="container text-center relative z-10">
          <h2 className="hero-title" style={{ color: '#ffffff' }}>
            Ready to Build Your AI Workforce?
          </h2>
          <p className="hero-subtitle mx-auto" style={{ maxWidth: "600px", color: '#cbd5e1' }}>
            Deploy intelligent AI Agents for your business today.
          </p>
          <div className="hero-cta justify-center mt-8" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              className="btn btn-primary btn-large glow-btn open-modal"
              data-modal-title="Start Free Trial"
            >
              Start Free Trial
            </button>
            <button
              className="btn btn-outline btn-large open-modal"
              data-modal-title="Book Demo"
            >
              Book Demo
            </button>
            <button
              className="btn btn-outline btn-large open-modal"
              data-modal-title="Contact Sales"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
