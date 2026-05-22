const TAGS = [
  { icon: 'fa-solid fa-robot', label: 'AI Automation' },
  { icon: 'fa-solid fa-diagram-project', label: 'Smart Workflows' },
  { icon: 'fa-solid fa-bullseye', label: 'Lead Capture' },
  { icon: 'fa-solid fa-comments', label: 'AI Chatbot' },
  { icon: 'fa-brands fa-whatsapp', label: 'WhatsApp AI' },
  { icon: 'fa-solid fa-chart-line', label: 'Sales Automation' },
  { icon: 'fa-solid fa-headset', label: 'AI Support' },
  { icon: 'fa-solid fa-calendar-check', label: 'Appointment Booking' },
  { icon: 'fa-solid fa-reply', label: 'Smart Replies' },
  { icon: 'fa-solid fa-gears', label: 'Workflow Engine' },
  { icon: 'fa-solid fa-chart-pie', label: 'AI Analytics' },
  { icon: 'fa-solid fa-building', label: 'Business Automation' },
];

function TagGroup() {
  return (
    <div className="workflow-marquee-group">
      {TAGS.map((tag) => (
        <div key={tag.label} className="workflow-tag">
          <i className={tag.icon} aria-hidden="true" />
          {tag.label}
        </div>
      ))}
    </div>
  );
}

export function WorkflowMarquee() {
  return (
    <section className="workflow-marquee-section" aria-label="AI workflow capabilities">
      <div className="container">
        <p className="section-subtitle-small">Powering intelligent automation across your business</p>
      </div>
      <div className="workflow-marquee">
        <div className="workflow-marquee-track">
          <TagGroup />
          <TagGroup />
        </div>
      </div>
    </section>
  );
}
