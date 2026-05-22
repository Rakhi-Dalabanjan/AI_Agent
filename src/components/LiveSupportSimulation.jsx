import { useEffect, useState } from "react";

const CHATS = [
  {
    id: "1",
    name: "Sarah M.",
    preview: "Need help with billing...",
    badge: "AI",
    active: true,
  },
  {
    id: "2",
    name: "John D.",
    preview: "Where is my order?",
    badge: "Human",
    active: false,
  },
];

const CONVERSATION = [
  { role: "user", text: "Hi, I need to update my credit card." },
  {
    role: "ai",
    text: "Hello Sarah! I can help. Here is a secure link to update your billing details.",
  },
  { role: "user", text: "The link is giving me an error." },
  { role: "system", text: "AI routed to human agent based on sentiment." },
  {
    role: "human",
    text: "Hi Sarah, I'm Michael. Let me generate a new secure link for you.",
  },
];

export function LiveSupportSimulation() {
  const [activeChat, setActiveChat] = useState("1");
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const [typing, setTyping] = useState(false);
  const [handoffShown, setHandoffShown] = useState(false);

  useEffect(() => {
    setVisibleMsgs(0);
    setHandoffShown(false);
    let i = 0;
    let timeoutId;

    const tick = () => {
      if (i < CONVERSATION.length) {
        const msg = CONVERSATION[i];
        if (msg.role === "ai" || msg.role === "human") {
          setTyping(true);
          timeoutId = setTimeout(() => {
            setTyping(false);
            if (msg.role === "system") setHandoffShown(true);
            i += 1;
            setVisibleMsgs(i);
            timeoutId = setTimeout(tick, msg.role === "system" ? 400 : 1200);
          }, 700);
        } else {
          i += 1;
          setVisibleMsgs(i);
          timeoutId = setTimeout(tick, 900);
        }
      }
    };

    timeoutId = setTimeout(tick, 400);
    return () => clearTimeout(timeoutId);
  }, [activeChat]);

  const renderMsg = (msg, key) => {
    if (msg.role === "system") {
      return (
        <div key={key} className="handoff-banner">
          <i data-lucide="arrow-right-left" style={{ marginRight: "6px" }} />
          {msg.text}
        </div>
      );
    }
    return (
      <div key={key} className={`msg ${msg.role}`}>
        {msg.text}
      </div>
    );
  };

  return (
    <div className="split-screen-mockup glass-card live-support-panel">
      <div className="left-pane">
        <div className="chat-list">
          {CHATS.map((chat) => (
            <div
              key={chat.id}
              className={`chat-list-item${activeChat === chat.id ? " active" : ""}`}
              onClick={() => setActiveChat(chat.id)}
              onKeyDown={(e) => e.key === "Enter" && setActiveChat(chat.id)}
              role="button"
              tabIndex={0}
            >
              <div className="avatar">
                <i data-lucide="user" />
              </div>
              <div className="preview">
                <strong>{chat.name}</strong>
                <span>{chat.preview}</span>
              </div>
              <span
                className={chat.badge === "AI" ? "badge-bot" : "badge-human"}
              >
                {chat.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="right-pane">
        <div className="chat-header">
          <div>
            <strong>Sarah M.</strong>
            <span className="status text-muted status-live">
              Live support active
            </span>
          </div>
          <button type="button" className="btn btn-small btn-outline">
            Close Ticket
          </button>
        </div>
        <div className="chat-body">
          {CONVERSATION.slice(0, visibleMsgs).map((msg, i) =>
            renderMsg(msg, i),
          )}
          {typing && (
            <div className="typing-indicator-live" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          )}
        </div>
        <div className="chat-input-area">
          <div className="ai-suggestion glass-card">
            <span>
              <i data-lucide="sparkles" /> Suggestion:
            </span>{" "}
            &quot;Here is your new secure link: https://...&quot;
            <button type="button" className="btn btn-small">
              Use
            </button>
          </div>
          <div className="input-box">Type a message...</div>
        </div>
      </div>
    </div>
  );
}
