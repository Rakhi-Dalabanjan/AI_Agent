const PIES = [
  {
    title: "Delivery Rate",
    value: "98%",
    gradient: "conic-gradient(#22c55e 0% 98%, rgba(255,255,255,0.08) 98% 100%)",
    legend: [{ color: "#22c55e", label: "Delivered 98%" }],
  },
  {
    title: "Engagement",
    value: "64%",
    gradient:
      "conic-gradient(#6366f1 0% 64%, #a855f7 64% 82%, rgba(255,255,255,0.08) 82% 100%)",
    legend: [
      { color: "#6366f1", label: "Replies 64%" },
      { color: "#a855f7", label: "Clicks 18%" },
    ],
  },
];

export function CampaignAnalytics() {
  return (
    <div className="glass-card analytics-dashboard campaign-analytics-dash">
      <div className="dash-header">
        <i
          data-lucide="pie-chart"
          style={{ marginRight: "8px", color: "#a855f7" }}
        />
        AI Campaign Insights Dashboard
      </div>
      <div className="campaign-metrics-row">
        <div className="campaign-metric-card">
          <div className="stat-label">Total Sent</div>
          <div className="stat-value">12,450</div>
        </div>
        <div className="campaign-metric-card">
          <div className="stat-label">Open Rate</div>
          <div className="stat-value">87.3%</div>
        </div>
        <div className="campaign-metric-card highlight">
          <div className="stat-label">Conversions</div>
          <div className="stat-value">3,124</div>
        </div>
      </div>
      <div className="campaign-charts-grid">
        {PIES.map((pie) => (
          <div key={pie.title} className="pie-chart-wrap">
            <span className="pie-chart-title">{pie.title}</span>
            <div className="pie-chart" style={{ background: pie.gradient }}>
              <div className="pie-chart-center">{pie.value}</div>
            </div>
            <div className="pie-legend">
              {pie.legend.map((l) => (
                <span key={l.label}>
                  <span style={{ color: l.color }}>■</span> {l.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
