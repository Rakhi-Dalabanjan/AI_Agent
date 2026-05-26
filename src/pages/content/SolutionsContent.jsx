import { ChromaKeyVideo } from '../../components/ChromaKeyVideo';

export function SolutionsContent() {
    return (
        <>
            {/* BACKGROUND GLOWS */}
            <div className="bg-glow-1" style={{ top: '0', right: '0' }}></div>
            <div className="bg-glow-2" style={{ bottom: '0', left: '0' }}></div>

            {/* HERO */}
            <section className="subpage-hero">
                <div className="container hero-container">
                    <div className="hero-content">
                        <span className="badge-accent" style={{ background: 'rgba(168, 85, 247, 0.15)', borderColor: 'rgba(168, 85, 247, 0.3)', color: '#c084fc' }}>🚀 AI BUSINESS SOLUTIONS</span>
                        <h1 className="hero-heading" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)' }}>
                            Intelligent AI Solutions For
                            <span className="gradient-text-purple" data-typed-text="Modern Businesses" data-typed-delay="400"> Modern Businesses</span>
                        </h1>
                        <p className="hero-description">
                            Transform customer communication, automate workflows, improve operational efficiency, and accelerate business growth using powerful AI-driven automation systems tailored for your industry.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary-purple open-modal btn-magnetic" data-modal-title="Book a Demo">
                                Book Free Demo <i className="fa-solid fa-arrow-right" style={{ marginLeft: '5px' }}></i>
                            </button>
                            <button className="btn-secondary-outline btn-magnetic" id="talk-whatsapp-btn">
                                <i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i> Talk on WhatsApp
                            </button>
                        </div>
                    </div>

                    <div className="hero-visual-complex">
                        {/* Dashboard Visualization */}
                        <div className="comp-card main-dashboard">
                            <div className="md-header">
                                <div className="md-logo"><i className="fa-solid fa-robot"></i> AI Solutions Map</div>
                                <div style={{ display: 'flex', gap: '10px', color: '#94a3b8' }}><i className="fa-solid fa-magnifying-glass"></i> <i className="fa-solid fa-circle-user"></i></div>
                            </div>
                            <div className="md-body" style={{ display: 'grid', gridTemplateColumns: '1fr 240px', height: 'calc(100% - 50px)' }}>
                                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ fontSize: '13px', fontWeight: '600' }}>Activity Flow</span>
                                        <span style={{ fontSize: '10px', color: '#22c55e', background: 'rgba(34,197,94,0.1)', padding: '4px 8px', borderRadius: '12px' }}><i className="fa-solid fa-circle" style={{ fontSize: '6px', marginRight: '4px' }}></i> Active</span>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '10px', borderRadius: '8px', fontSize: '11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span>WhatsApp Query Auto-Resolved</span>
                                            <span style={{ color: '#64748b' }}>2m ago</span>
                                        </div>

                                        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '10px', borderRadius: '8px', fontSize: '11px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span>New Lead Captured to Workflow Hub</span>
                                            <span style={{ color: '#64748b' }}>12m ago</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1', fontSize: '28px' }}>
                                        <i className="fa-solid fa-robot"></i>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '14px', fontWeight: '700' }}>AI Agent Active</div>
                                        <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>Handling 32 sessions</p>
                                    </div>
                                    <button className="nav-btn-solid" style={{ width: '100%', padding: '10px', fontSize: '12px' }}>View Sessions</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT SECTION (LIGHT FOLD) */}
            <div className="light-theme-fold">
                <div className="container">

                    {/* COMMON BUSINESS CHALLENGES */}
                    <div className="section-title-centered">
                        <h2>Common Business Challenges We Solve</h2>
                        <p>Identify your main operations bottlenecks and let our autonomous systems eliminate them effortlessly.</p>
                    </div>

                    <div className="autoslide-container">
                        <div className="autoslide-track-right">
                            {/* Set 1: Original Cards */}
                            <div className="challenge-card">
                                <div className="challenge-icon animate-svg-pulse"><i className="fa-solid fa-hourglass-half"></i></div>
                                <h3>Slow Lead Response</h3>
                                <p>Delayed replies lead to lost opportunities and reduced conversions.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-arrows-rotate"></i></div>
                                <h3>Repetitive Manual Work</h3>
                                <p>Teams spend hours on repetitive tasks that can be automated.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-envelope-open-text"></i></div>
                                <h3>Missed Inquiries</h3>
                                <p>Customers reach out anytime, but businesses can't respond 24/7.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-diagram-project"></i></div>
                                <h3>Poor Workflows</h3>
                                <p>Disconnected systems and manual processes reduce productivity.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-users-slash"></i></div>
                                <h3>Limited Capacity</h3>
                                <p>It's hard to provide instant support with limited team resources.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-chart-pie"></i></div>
                                <h3>Low Conversions</h3>
                                <p>Slow communication and poor follow-ups result in lower sales.</p>
                            </div>

                            {/* Set 2: Duplicated Cards for Infinite Loop */}
                            <div className="challenge-card">
                                <div className="challenge-icon animate-svg-pulse"><i className="fa-solid fa-hourglass-half"></i></div>
                                <h3>Slow Lead Response</h3>
                                <p>Delayed replies lead to lost opportunities and reduced conversions.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-arrows-rotate"></i></div>
                                <h3>Repetitive Manual Work</h3>
                                <p>Teams spend hours on repetitive tasks that can be automated.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-envelope-open-text"></i></div>
                                <h3>Missed Inquiries</h3>
                                <p>Customers reach out anytime, but businesses can't respond 24/7.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-diagram-project"></i></div>
                                <h3>Poor Workflows</h3>
                                <p>Disconnected systems and manual processes reduce productivity.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-users-slash"></i></div>
                                <h3>Limited Capacity</h3>
                                <p>It's hard to provide instant support with limited team resources.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-chart-pie"></i></div>
                                <h3>Low Conversions</h3>
                                <p>Slow communication and poor follow-ups result in lower sales.</p>
                            </div>

                            {/* Set 3: Duplicated Cards for Infinite Loop */}
                            <div className="challenge-card">
                                <div className="challenge-icon animate-svg-pulse"><i className="fa-solid fa-hourglass-half"></i></div>
                                <h3>Slow Lead Response</h3>
                                <p>Delayed replies lead to lost opportunities and reduced conversions.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-arrows-rotate"></i></div>
                                <h3>Repetitive Manual Work</h3>
                                <p>Teams spend hours on repetitive tasks that can be automated.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-envelope-open-text"></i></div>
                                <h3>Missed Inquiries</h3>
                                <p>Customers reach out anytime, but businesses can't respond 24/7.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-diagram-project"></i></div>
                                <h3>Poor Workflows</h3>
                                <p>Disconnected systems and manual processes reduce productivity.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-users-slash"></i></div>
                                <h3>Limited Capacity</h3>
                                <p>It's hard to provide instant support with limited team resources.</p>
                            </div>
                            <div className="challenge-card">
                                <div className="challenge-icon"><i className="fa-solid fa-chart-pie"></i></div>
                                <h3>Low Conversions</h3>
                                <p>Slow communication and poor follow-ups result in lower sales.</p>
                            </div>
                        </div>
                    </div>

                    {/* AI SOLUTIONS DESIGNED FOR GROWTH */}
                    <div className="section-title-centered">
                        <h2>AI Solutions Designed For Business Growth</h2>
                        <p>Tailored core AI architectures built to scale and optimize operations in the background.</p>
                    </div>

                    <div className="solutions-grid">
                        <div className="solution-card">
                            <i className="fa-brands fa-whatsapp sol-icon" style={{ color: '#22c55e' }}></i>
                            <h3>WhatsApp AI Solutions</h3>
                            <p>Automate customer communication, support, bookings, and lead handling directly through WhatsApp using AI-powered automation.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', margin: '12px 0', fontSize: '12px', color: '#94a3b8' }}>
                                <span><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '6px' }}></i>AI Chat Support</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '6px' }}></i>Lead Capture</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '6px' }}></i>Appointment Booking</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '6px' }}></i>WhatsApp Commerce</span>
                            </div>
                            <a href="#" className="solution-link open-modal" data-modal-title="Explore WhatsApp AI">Explore Solution <i className="fa-solid fa-arrow-right"></i></a>
                        </div>

                        <div className="solution-card">
                            <i className="fa-solid fa-gears sol-icon" style={{ color: '#3b82f6' }}></i>
                            <h3>Workflow Automation Solutions</h3>
                            <p>Automate repetitive operations and streamline business workflows using intelligent AI systems.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', margin: '12px 0', fontSize: '12px', color: '#94a3b8' }}>
                                <span><i className="fa-solid fa-check" style={{ color: '#3b82f6', marginRight: '6px' }}></i>Workflow Automation</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#3b82f6', marginRight: '6px' }}></i>Employee Notifications</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#3b82f6', marginRight: '6px' }}></i>Data Automation</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#3b82f6', marginRight: '6px' }}></i>Process Optimization</span>
                            </div>
                            <a href="#" className="solution-link open-modal" data-modal-title="Explore Workflow Automation">Explore Solution <i className="fa-solid fa-arrow-right"></i></a>
                        </div>

                        <div className="solution-card">
                            <i className="fa-solid fa-brain sol-icon" style={{ color: '#f97316' }}></i>
                            <h3>Custom AI Systems</h3>
                            <p>Tailored AI infrastructure designed specifically for your business workflows and operations.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', margin: '12px 0', fontSize: '12px', color: '#94a3b8' }}>
                                <span><i className="fa-solid fa-check" style={{ color: '#f97316', marginRight: '6px' }}></i>AI Dashboards</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#f97316', marginRight: '6px' }}></i>Business Automation</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#f97316', marginRight: '6px' }}></i>AI Portals</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#f97316', marginRight: '6px' }}></i>Enterprise Integrations</span>
                            </div>
                            <a href="#" className="solution-link open-modal" data-modal-title="Explore Custom Solutions">Explore Solution <i className="fa-solid fa-arrow-right"></i></a>
                        </div>

                        <div className="solution-card">
                            <i className="fa-solid fa-graduation-cap sol-icon" style={{ color: '#a855f7' }}></i>
                            <h3>AI Training Solutions</h3>
                            <p>Equip your internal teams with Prompt Engineering skills, LLM training, and operational frameworks to build and manage AI assets.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', margin: '12px 0', fontSize: '12px', color: '#94a3b8' }}>
                                <span><i className="fa-solid fa-check" style={{ color: '#a855f7', marginRight: '6px' }}></i>Prompt Engineering</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#a855f7', marginRight: '6px' }}></i>LLM Workshops</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#a855f7', marginRight: '6px' }}></i>Operations Playbooks</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#a855f7', marginRight: '6px' }}></i>Team Enablement</span>
                            </div>
                            <a href="#" className="solution-link open-modal" data-modal-title="Explore AI Training">Explore Solution <i className="fa-solid fa-arrow-right"></i></a>
                        </div>

                        <div className="solution-card">
                            <i className="fa-solid fa-headset sol-icon" style={{ color: '#06b6d4' }}></i>
                            <h3>Human Support Solutions</h3>
                            <p>Combine automation with human intelligence using seamless handoffs, fallback triggers, and performance oversight dashboards.</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', margin: '12px 0', fontSize: '12px', color: '#94a3b8' }}>
                                <span><i className="fa-solid fa-check" style={{ color: '#06b6d4', marginRight: '6px' }}></i>Live Agent Handoffs</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#06b6d4', marginRight: '6px' }}></i>Automated Fallbacks</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#06b6d4', marginRight: '6px' }}></i>Oversight Dashboards</span>
                                <span><i className="fa-solid fa-check" style={{ color: '#06b6d4', marginRight: '6px' }}></i>Hybrid Performance</span>
                            </div>
                            <a href="#" className="solution-link open-modal" data-modal-title="Explore Human Support">Explore Solution <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>

                    {/* INDUSTRY-SPECIFIC AI SOLUTIONS */}
                    <div className="section-title-centered">
                        <h2>Industry-Specific AI Solutions</h2>
                        <p>We deliver niche-specific functionalities tailored precisely to key high-growth sectors.</p>
                    </div>

                    <div className="autoslide-container" style={{ marginBottom: '80px' }}>
                        <div className="autoslide-track-right">
                            {/* Set 1: Original Cards */}
                            <div className="industry-card">
                                <i className="fa-solid fa-house-chimney"></i>
                                <h3>Real Estate</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Property inquiry auto-answers</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated buyer qualification</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated viewing schedules</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-heart-pulse"></i>
                                <h3>Healthcare</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> 24/7 appointment bookings</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Post-consultation follow-ups</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Medical history syncing</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-utensils"></i>
                                <h3>Restaurants</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Chat-based digital orders</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated table reservations</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Feedback and review captures</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <h3>E-Commerce</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Cart recovery alerts</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Tracking order support</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated upsell prompts</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <h3>Education</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Student admission FAQs</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Dynamic course recommendations</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Instant fee payment alerts</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-briefcase"></i>
                                <h3>Agencies</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated client onboarding</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Live workflow sync &amp; updates</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Project update reporting</li>
                                </ul>
                            </div>

                            {/* Set 2: Duplicated Cards for Infinite Loop */}
                            <div className="industry-card">
                                <i className="fa-solid fa-house-chimney"></i>
                                <h3>Real Estate</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Property inquiry auto-answers</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated buyer qualification</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated viewing schedules</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-heart-pulse"></i>
                                <h3>Healthcare</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> 24/7 appointment bookings</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Post-consultation follow-ups</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Medical history syncing</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-utensils"></i>
                                <h3>Restaurants</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Chat-based digital orders</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated table reservations</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Feedback and review captures</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <h3>E-Commerce</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Cart recovery alerts</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Tracking order support</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated upsell prompts</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <h3>Education</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Student admission FAQs</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Dynamic course recommendations</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Instant fee payment alerts</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-briefcase"></i>
                                <h3>Agencies</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated client onboarding</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Live workflow sync &amp; updates</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Project update reporting</li>
                                </ul>
                            </div>

                            {/* Set 3: Duplicated Cards for Infinite Loop */}
                            <div className="industry-card">
                                <i className="fa-solid fa-house-chimney"></i>
                                <h3>Real Estate</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Property inquiry auto-answers</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated buyer qualification</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated viewing schedules</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-heart-pulse"></i>
                                <h3>Healthcare</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> 24/7 appointment bookings</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Post-consultation follow-ups</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Medical history syncing</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-utensils"></i>
                                <h3>Restaurants</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Chat-based digital orders</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated table reservations</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Feedback and review captures</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-cart-shopping"></i>
                                <h3>E-Commerce</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Cart recovery alerts</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Tracking order support</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated upsell prompts</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <h3>Education</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Student admission FAQs</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Dynamic course recommendations</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Instant fee payment alerts</li>
                                </ul>
                            </div>
                            <div className="industry-card">
                                <i className="fa-solid fa-briefcase"></i>
                                <h3>Agencies</h3>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Automated client onboarding</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Live workflow sync &amp; updates</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Project update reporting</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* OUR AI SOLUTIONS IN ACTION */}
                    <div className="section-title-centered">
                        <h2>Our AI Solutions In Action</h2>
                        <p>Select a solution tab below to preview interactive simulated live features.</p>
                    </div>

                    <div className="action-tabs-container">
                        <div className="action-tab-nav">
                            <button type="button" className="act-btn active" data-tab="act-whatsapp"><i className="fa-brands fa-whatsapp"></i> WhatsApp AI</button>

                            <button type="button" className="act-btn" data-tab="act-workflow"><i className="fa-solid fa-gears"></i> Workflow Automation</button>
                            <button type="button" className="act-btn" data-tab="act-custom"><i className="fa-solid fa-brain"></i> Custom AI</button>
                        </div>

                        {/* WhatsApp Tab */}
                        <div id="act-whatsapp" className="action-tab-content active">
                            <div className="atc-info">
                                <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>WhatsApp AI Solutions</h3>
                                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>Turn WhatsApp into your smartest 24/7 sales agent and customer support channel. Qualify leads and close deals automatically.</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}><i className="fa-solid fa-check-circle" style={{ color: '#22c55e', marginTop: '2px', flexShrink: 0 }}></i> <span>Instant auto replies</span></div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}><i className="fa-solid fa-check-circle" style={{ color: '#22c55e', marginTop: '2px', flexShrink: 0 }}></i> <span>Automated buyer and lead qualification</span></div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}><i className="fa-solid fa-check-circle" style={{ color: '#22c55e', marginTop: '2px', flexShrink: 0 }}></i> <span>Calendar integration for appointment booking</span></div>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}><i className="fa-solid fa-check-circle" style={{ color: '#22c55e', marginTop: '2px', flexShrink: 0 }}></i> <span>Multi-language support (50+ languages)</span></div>
                                </div>
                            </div>
                            <div className="atc-preview" style={{ display: 'flex', justifyContent: 'center' }}>
                                {/* WhatsApp Mock Widget with Looping Chat Animation */}
                                <div className="sol-wa-widget">
                                    <div className="sol-wa-header">
                                        <div className="sol-wa-avatar"><i className="fa-solid fa-robot"></i></div>
                                        <div className="sol-wa-header-info">
                                            <span className="sol-wa-name">imkratuchat</span>
                                            <span className="sol-wa-status"><span className="sol-wa-online-dot"></span> Online</span>
                                        </div>
                                    </div>
                                    <div className="sol-wa-body">
                                        <div className="sol-wa-bubble sol-wa-bubble-in sol-wa-anim-b1">Hi! I'd like to book an appointment for tomorrow afternoon.</div>
                                        <div className="sol-wa-typing sol-wa-anim-typing">
                                            <span className="sol-wa-dot"></span>
                                            <span className="sol-wa-dot"></span>
                                            <span className="sol-wa-dot"></span>
                                        </div>
                                        <div className="sol-wa-bubble sol-wa-bubble-out sol-wa-anim-b2">I have openings at 2:00 PM and 4:30 PM tomorrow. Which works for you? 😊</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Workflow Tab */}
                        <div id="act-workflow" className="action-tab-content">
                            <div className="atc-info">
                                <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>AI Workflows</h3>
                                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>Automate data flow. Link systems together to make sure client info, sales numbers, and logistics sync up in real-time without human admin errors.</p>
                            </div>
                            <div className="atc-preview" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="sol-wf-widget">
                                    <div className="sol-wf-title">WORKFLOW AUTOMATION MAP</div>
                                    <div className="sol-wf-steps">
                                        <div className="sol-wf-step sol-wf-anim-s1">
                                            <i className="fa-solid fa-plug" style={{ color: '#22c55e', marginRight: '6px' }}></i>
                                            <span>Webhook Received (New Lead)</span>
                                            <span className="sol-wf-check">✓</span>
                                        </div>
                                        <div className="sol-wf-step sol-wf-anim-s2">
                                            <i className="fa-solid fa-check" style={{ color: '#22c55e', marginRight: '6px' }}></i>
                                            <span>Qualify Lead (Passed Score)</span>
                                            <span className="sol-wf-check">✓</span>
                                        </div>
                                        <div className="sol-wf-step sol-wf-anim-s3">
                                            <i className="fa-solid fa-arrow-right-arrow-left" style={{ color: '#6366f1', marginRight: '6px' }}></i>
                                            <span>Syncing lead data to Google Sheets...</span>
                                            <span className="sol-wf-spinner"></span>
                                        </div>
                                        <div className="sol-wf-step sol-wf-anim-s4">
                                            <i className="fa-solid fa-circle-check" style={{ color: '#22c55e', marginRight: '6px' }}></i>
                                            <span>Completed Successfully!</span>
                                            <span className="sol-wf-check sol-wf-check-done">✓</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Custom Tab */}
                        <div id="act-custom" className="action-tab-content">
                            <div className="atc-info">
                                <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>Custom Enterprise AI</h3>
                                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px', lineHeight: '1.6' }}>We build and host specialized internal company knowledge bots, smart AI dashboards, and heavy-weight process automation for your exact architecture.</p>
                            </div>
                            <div className="atc-preview" style={{ display: 'flex', justifyContent: 'center' }}>
                                <div className="sol-custom-widget">
                                    <div className="sol-custom-core-glow"></div>
                                    <div className="sol-custom-core-icon"><i className="fa-solid fa-microchip"></i></div>
                                    <div className="sol-custom-ring sol-custom-ring-1"></div>
                                    <div className="sol-custom-ring sol-custom-ring-2"></div>
                                    <div className="sol-custom-node sol-custom-node-1"><i className="fa-solid fa-database"></i></div>
                                    <div className="sol-custom-node sol-custom-node-2"><i className="fa-solid fa-cloud"></i></div>
                                    <div className="sol-custom-node sol-custom-node-3"><i className="fa-solid fa-lock"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WHY BUSINESSES CHOOSE US */}
                    <div className="section-title-centered">
                        <h2>Why Businesses Choose Us</h2>
                        <p>Our depth of AI knowledge and enterprise integration capabilities set us apart as your long-term automation partner.</p>
                    </div>

                    <div className="autoslide-container" style={{ marginBottom: '100px' }}>
                        <div className="autoslide-track-right">
                            {/* Set 1: Original Cards */}
                            <div className="why-box">
                                <i className="fa-solid fa-puzzle-piece"></i>
                                <h4>Custom Fit</h4>
                                <p>We don't use cookie-cutter tools. We build for your workflow.</p>
                            </div>
                            <div className="why-box">
                                <i className="fa-solid fa-plug"></i>
                                <h4>Easy Sync</h4>
                                <p>Integrates seamlessly into Slack, HubSpot, Salesforce, and others.</p>
                            </div>
                            <div className="why-box">
                                <i className="fa-solid fa-shield-halved"></i>
                                <h4>Secure & Scalable</h4>
                                <p>Enterprise-grade data privacy and scalable compute infrastructures.</p>
                            </div>
                            <div className="why-box">
                                <i className="fa-solid fa-headset"></i>
                                <h4>24/7 Support</h4>
                                <p>Ongoing engineering support, maintenance, and daily performance optimization.</p>
                            </div>

                            {/* Set 2: Duplicated Cards for Infinite Loop */}
                            <div className="why-box">
                                <i className="fa-solid fa-puzzle-piece"></i>
                                <h4>Custom Fit</h4>
                                <p>We don't use cookie-cutter tools. We build for your workflow.</p>
                            </div>
                            <div className="why-box">
                                <i className="fa-solid fa-plug"></i>
                                <h4>Easy Sync</h4>
                                <p>Integrates seamlessly into Slack, HubSpot, Salesforce, and others.</p>
                            </div>
                            <div className="why-box">
                                <i className="fa-solid fa-shield-halved"></i>
                                <h4>Secure & Scalable</h4>
                                <p>Enterprise-grade data privacy and scalable compute infrastructures.</p>
                            </div>
                            <div className="why-box">
                                <i className="fa-solid fa-headset"></i>
                                <h4>24/7 Support</h4>
                                <p>Ongoing engineering support, maintenance, and daily performance optimization.</p>
                            </div>

                            {/* Set 3: Duplicated Cards for Infinite Loop */}
                            <div className="why-box">
                                <i className="fa-solid fa-puzzle-piece"></i>
                                <h4>Custom Fit</h4>
                                <p>We don't use cookie-cutter tools. We build for your workflow.</p>
                            </div>
                            <div className="why-box">
                                <i className="fa-solid fa-plug"></i>
                                <h4>Easy Sync</h4>
                                <p>Integrates seamlessly into Slack, HubSpot, Salesforce, and others.</p>
                            </div>
                            <div className="why-box">
                                <i className="fa-solid fa-shield-halved"></i>
                                <h4>Secure & Scalable</h4>
                                <p>Enterprise-grade data privacy and scalable compute infrastructures.</p>
                            </div>
                            <div className="why-box">
                                <i className="fa-solid fa-headset"></i>
                                <h4>24/7 Support</h4>
                                <p>Ongoing engineering support, maintenance, and daily performance optimization.</p>
                            </div>
                        </div>
                    </div>

                    {/* SUCCESS METRICS (REAL RESULTS, REAL IMPACT) */}
                    <div className="section-title-centered">
                        <h2>Real Results, Real Impact</h2>
                        <p>Concrete metrics and numbers showcasing actual business efficiency uplifts.</p>
                    </div>

                    <div className="results-grid">
                        <div className="result-card">
                            <div className="result-img-wrap">
                                <img src="/images/real_estate.png" alt="Real Estate Results" />
                            </div>
                            <div className="result-info">
                                <h3>Real Estate Agency</h3>
                                <p>Eliminated weekend client delays and automated manual follow-ups entirely.</p>
                                <div className="metrics-row">
                                    <div className="metric-item">
                                        <span className="metric-val">70%</span>
                                        <span className="metric-lbl">Less Admin Work</span>
                                    </div>
                                    <div className="metric-item">
                                        <span className="metric-val">80%</span>
                                        <span className="metric-lbl">Faster Response</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="result-card">
                            <div className="result-img-wrap">
                                <img src="/images/whatsapp_study.png" alt="WhatsApp Support Results" />
                            </div>
                            <div className="result-info">
                                <h3>WhatsApp Auto-Support</h3>
                                <p>Handled holiday rush inquiry volumes without adding a single headcount.</p>
                                <div className="metrics-row">
                                    <div className="metric-item">
                                        <span className="metric-val">60%</span>
                                        <span className="metric-lbl">Client CSAT Boost</span>
                                    </div>
                                    <div className="metric-item">
                                        <span className="metric-val">45%</span>
                                        <span className="metric-lbl">Support Cost Drop</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="result-card">
                            <div className="result-img-wrap">
                                <img src="/images/workflow_study.png" alt="Workflow Automation Results" />
                            </div>
                            <div className="result-info">
                                <h3>Workflow Streamline</h3>
                                <p>Linked inventory platforms to ERP databases for flawless item fulfillment.</p>
                                <div className="metrics-row">
                                    <div className="metric-item">
                                        <span className="metric-val">40+</span>
                                        <span className="metric-lbl">Hours Saved/Wk</span>
                                    </div>
                                    <div className="metric-item">
                                        <span className="metric-val">2X</span>
                                        <span className="metric-lbl">Processing Speed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                {/* FOOTER CTA */}
                <div className="footer-cta-wrap">
                    <div className="footer-cta-card">
                        <div className="cta-robot-floating">
                            <ChromaKeyVideo src="/images/ai_chatting.mp4" similarity={0.75} smoothness={0.15} maxWidth={500} style={{ width: '100%', height: 'auto', transform: 'scale(1.7)', transformOrigin: 'bottom center' }} />
                        </div>
                        <h2>Ready To Automate Your Business With AI?</h2>
                        <p>Transform customer communication, automate operations, improve efficiency, and scale your business using intelligent AI-powered systems.</p>
                        <div className="cta-buttons">
                            <button className="nav-btn-solid open-modal" data-modal-title="Book a Demo" style={{ padding: '16px 32px', fontSize: '16px' }}>Book Free Demo</button>
                            <button className="btn-secondary-outline" id="talk-whatsapp-btn-2"><i className="fa-brands fa-whatsapp" style={{ color: '#25D366' }}></i> Talk on WhatsApp</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
