import { useState } from "react";

export function ContactContent() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSubmitted(true);
      
      const text = `Hello, I'm ${form.name}. Business: ${form.businessType}. ${form.message}`;
      setTimeout(() => {
        window.open(
          `https://wa.me/918151889911?text=${encodeURIComponent(text)}`,
          "_blank",
        );
      }, 800);
      
    } catch (err) {
      setError(err.message || "An error occurred while sending your message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-glow-1" style={{ top: 0, left: 0 }} />
      <div className="bg-glow-2" style={{ bottom: 0, right: 0 }} />

      <section className="subpage-hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge-accent">📬 GET IN TOUCH</span>
            <h1
              className="hero-heading"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)" }}
            >
              Let&apos;s Build Your
              <span
                className="gradient-text-purple"
                data-typed-text="AI Future"
                data-typed-delay="400"
              >
                {" "}
                AI Future
              </span>
            </h1>
            <p className="hero-description">
              Ready to automate your business? Reach out and our team will help
              you deploy intelligent AI workflows tailored to your goals.
            </p>
          </div>
        </div>
      </section>

      <div className="container contact-page-wrap">
        <div className="contact-grid">
          <div className="glass-card contact-info-panel reveal">
            <h3 style={{ fontSize: "22px", marginBottom: "24px" }}>
              Contact Information
            </h3>
            <div className="contact-info-item">
              <i data-lucide="mail" />
              <div>
                <strong style={{ display: "block", marginBottom: "4px" }}>
                  Email
                </strong>
                <a
                  href="mailto:support@agenticai.com"
                  style={{ color: "#a5b4fc", fontSize: "14px" }}
                >
                  support@agenticai.com
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <i data-lucide="message-circle" />
              <div>
                <strong style={{ display: "block", marginBottom: "4px" }}>
                  WhatsApp
                </strong>
                <a
                  href="https://wa.me/918151889911"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#4ade80", fontSize: "14px" }}
                >
                  +91 81518 89911
                </a>
              </div>
            </div>
            <div className="contact-info-item">
              <i data-lucide="clock" />
              <div>
                <strong style={{ display: "block", marginBottom: "4px" }}>
                  Support Hours
                </strong>
                <span style={{ color: "#94a3b8", fontSize: "14px" }}>
                  Mon – Sat, 9AM – 8PM IST
                </span>
              </div>
            </div>
            <a
              href="https://wa.me/918151889911"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary glow-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginTop: "12px",
                textDecoration: "none",
              }}
            >
              <i data-lucide="message-circle" /> Chat on WhatsApp
            </a>
            <div className="contact-social-row">
              <a href="#" className="contact-social-btn" aria-label="Twitter">
                <i data-lucide="twitter" />
              </a>
              <a href="#" className="contact-social-btn" aria-label="LinkedIn">
                <i data-lucide="linkedin" />
              </a>
              <a href="#" className="contact-social-btn" aria-label="GitHub">
                <i data-lucide="github" />
              </a>
            </div>
          </div>

          <div className="glass-card contact-form-panel reveal reveal-delay-1">
            {submitted ? (
              <div className="contact-success-msg">
                <i className="fa-solid fa-circle-check" />
                <h3>Message Sent!</h3>
                <p style={{ color: "#94a3b8", marginTop: "8px" }}>
                  We&apos;ll get back to you shortly. Opening WhatsApp for a
                  faster response...
                </p>
              </div>
            ) : (
              <form className="contact-form lead-form" onSubmit={handleSubmit}>
                <h3 style={{ fontSize: "22px", marginBottom: "24px" }}>
                  Send Us a Message
                </h3>
                {error && (
                  <div className="contact-error-msg" style={{ color: "#ef4444", marginBottom: "16px", fontSize: "14px", padding: "10px", background: "rgba(239, 68, 68, 0.1)", borderRadius: "8px", border: "1px solid rgba(239, 68, 68, 0.2)" }}>
                    <i className="fa-solid fa-circle-exclamation" style={{ marginRight: "6px" }} />
                    {error}
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 90000 00000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-business">Business Type</label>
                  <select
                    id="contact-business"
                    name="businessType"
                    required
                    value={form.businessType}
                    onChange={handleChange}
                  >
                    <option value="">Select your industry</option>
                    <option value="E-Commerce">E-Commerce</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Agency">Agency</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your automation goals..."
                    required
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-full glow-btn"
                  disabled={loading}
                  style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && (
                    <i
                      className="fa-solid fa-paper-plane"
                      style={{ marginLeft: "8px" }}
                    />
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
