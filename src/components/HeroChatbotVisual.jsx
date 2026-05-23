import { useEffect, useState } from "react";

const MESSAGES = [
  {
    type: "bot",
    text: "Hi! I'm your AI assistant. How can I help automate your business today?",
  },
  { type: "user", text: "I need help with lead capture on WhatsApp." },
  {
    type: "bot",
    text: "I can set up smart workflows, auto-replies, and lead capture for you instantly.",
  },
  { type: "user", text: "Perfect! Let's get started." },
  { type: "bot", text: "Great! Booking a demo slot for you now..." },
];

export function HeroChatbotVisual() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    let idx = 0;
    let timeoutId;

    const showNext = () => {
      if (idx < MESSAGES.length) {
        setShowTyping(true);
        timeoutId = setTimeout(() => {
          setShowTyping(false);
          idx += 1;
          setVisibleCount(idx);
          timeoutId = setTimeout(showNext, idx < MESSAGES.length ? 1400 : 2500);
        }, 800);
      } else {
        timeoutId = setTimeout(() => {
          idx = 0;
          setVisibleCount(0);
          timeoutId = setTimeout(showNext, 600);
        }, 2500);
      }
    };

    timeoutId = setTimeout(showNext, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="hero-chatbot-visual">
      <span className="float-bubble-mini b1">24/7 Active</span>
      <span className="float-bubble-mini b2">AI Online</span>
      <span className="float-bubble-mini b3">Smart Reply</span>
      <div className="hero-chatbot-panel">
        <div className="chatbot-header">
          <div className="chatbot-avatar">
            <i data-lucide="bot" aria-hidden="true" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "14px", color: "white" }}>
              IAMKRATU.AI Bot
            </div>
            <div className="status-live">Online &amp; Learning</div>
          </div>
        </div>
        <div className="chatbot-messages">
          {MESSAGES.slice(0, visibleCount).map((msg, i) => (
            <div
              key={`${msg.type}-${i}`}
              className={`chat-bubble ${msg.type}`}
              style={{ animationDelay: "0s" }}
            >
              {msg.text}
            </div>
          ))}
          {showTyping && (
            <div className="chat-typing" aria-label="Typing">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
