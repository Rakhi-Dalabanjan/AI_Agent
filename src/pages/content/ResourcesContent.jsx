import { useState } from 'react';
import { ChromaKeyVideo } from '../../components/ChromaKeyVideo';

export function ResourcesContent() {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="resources-page-wrapper">
      {/* HERO SECTION */}
      <section className="subpage-hero resources-hero">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="badge-accent">📚 RESOURCES PLATFORM</span>
            <h1 className="hero-heading" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: '1.2' }}>
              AI Resources for <br />
              <span className="gradient-text-purple">Modern Businesses</span>
            </h1>
            <p className="hero-description">
              Explore guides, blogs, tutorials, case studies, AI strategies, automation insights, and industry resources designed to help businesses build and scale their AI workforce.
            </p>
            <div className="hero-buttons">
              <a href="#explore" className="btn-primary-purple btn-magnetic">
                Explore Resources
              </a>
              <button className="btn-secondary-outline btn-magnetic open-modal" data-modal-title="Read UI Guides">
                Read UI Guides
              </button>
              <button className="btn-secondary-outline btn-magnetic open-modal" data-modal-title="Contact Experts">
                Contact Experts
              </button>
            </div>
          </div>

          <div className="hero-visual-complex resources-visual-complex">
            <div className="robot-wrapper">
              <img src="/images/resources_3d_robot.png" alt="3D Robot at laptop" className="robot-image" />
            </div>

            {/* Floating side badges */}
            <div className="floating-badges-left">
              <div className="floating-badge badge-1">
                <i className="fa-solid fa-user-gear"></i> Profiles
              </div>
              <div className="floating-badge badge-2">
                <i className="fa-solid fa-blog"></i> Blogs
              </div>
              <div className="floating-badge badge-3">
                <i className="fa-solid fa-graduation-cap"></i> Tutorials
              </div>
            </div>

            <div className="floating-badges-right">
              <div className="floating-badge badge-4">
                <i className="fa-solid fa-chart-line"></i> Case Studies
              </div>
              <div className="floating-badge badge-5">
                <i className="fa-solid fa-cubes"></i> Templates
              </div>
              <div className="floating-badge badge-6">
                <i className="fa-solid fa-screwdriver-wrench"></i> Tools
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHT THEME TRANSITION STARTS HERE */}
      <div className="resources-light-content-fold" id="explore">

        {/* SECTION: Explore Our AI Resources */}
        <section className="resources-explore-section section-padding">
          <div className="container">
            <div className="section-title-centered">
              <h2>Explore Our <span className="text-purple-highlight">AI Resources</span></h2>
              <p>Practical guides, benchmarks, and strategies to deploy automated systems successfully.</p>
            </div>

            <div className="explore-resources-grid">
              <div className="explore-card">
                <div className="card-top">
                  <div className="icon-circle bg-blue-light"><i className="fa-solid fa-user-ninja"></i></div>
                  <h3>AI Agent Guides</h3>
                </div>
                <ul className="bullet-points">
                  <li>What are AI Agents?</li>
                  <li>AI Architecture Guide</li>
                  <li>Multi-Agent Workflows</li>
                  <li>Automation Workspace</li>
                  <li>Business IT Modernization</li>
                </ul>
                <a href="#" className="explore-card-link open-modal" data-modal-title="Explore AI Agent Guides">Explore Guides <i className="fa-solid fa-arrow-right"></i></a>
              </div>

              <div className="explore-card">
                <div className="card-top">
                  <div className="icon-circle bg-pink-light"><i className="fa-solid fa-share-nodes"></i></div>
                  <h3>AI Social Media Resources</h3>
                </div>
                <ul className="bullet-points">
                  <li>AI Brand Creation</li>
                  <li>Auto Content Stratagems</li>
                  <li>Social Media Automation</li>
                  <li>Frontier Integration</li>
                  <li>AI Creativity Techniques</li>
                </ul>
                <a href="#" className="explore-card-link open-modal" data-modal-title="Explore AI Social Media Resources">Read Articles <i className="fa-solid fa-arrow-right"></i></a>
              </div>

              <div className="explore-card">
                <div className="card-top">
                  <div className="icon-circle bg-teal-light"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
                  <h3>AI SEO Resources</h3>
                </div>
                <ul className="bullet-points">
                  <li>Keyword Research</li>
                  <li>AI SEO Optimization</li>
                  <li>Web Content Generation</li>
                  <li>Local SEO Strategies</li>
                  <li>SEO Metrics Analysis</li>
                </ul>
                <a href="#" className="explore-card-link open-modal" data-modal-title="Explore AI SEO Resources">Read SEO Guides <i className="fa-solid fa-arrow-right"></i></a>
              </div>

              <div className="explore-card">
                <div className="card-top">
                  <div className="icon-circle bg-orange-light"><i className="fa-solid fa-bullseye"></i></div>
                  <h3>AI Marketing Resources</h3>
                </div>
                <ul className="bullet-points">
                  <li>AI Marketing Automation</li>
                  <li>Lead Generation</li>
                  <li>Personalized Campaigns</li>
                  <li>AI Copywriting</li>
                  <li>AI Email Campaigns</li>
                </ul>
                <a href="#" className="explore-card-link open-modal" data-modal-title="Explore AI Marketing Resources">Explore Marketing <i className="fa-solid fa-arrow-right"></i></a>
              </div>

              <div className="explore-card">
                <div className="card-top">
                  <div className="icon-circle bg-purple-light"><i className="fa-solid fa-gears"></i></div>
                  <h3>AI Automation Resources</h3>
                </div>
                <ul className="bullet-points">
                  <li>Workflow Automation</li>
                  <li>CRM Integration</li>
                  <li>WhatsApp Automation</li>
                  <li>AI Productivity Systems</li>
                  <li>Dataset Process Automation</li>
                </ul>
                <a href="#" className="explore-card-link open-modal" data-modal-title="Explore AI Automation Resources">Read Automation Guides <i className="fa-solid fa-arrow-right"></i></a>
              </div>

              <div className="explore-card">
                <div className="card-top">
                  <div className="icon-circle bg-green-light"><i className="fa-solid fa-chart-line-up"></i></div>
                  <h3>AI Business Growth Resources</h3>
                </div>
                <ul className="bullet-points">
                  <li>Scale Agency Model</li>
                  <li>Autonomous Pricing</li>
                  <li>Growth Automation</li>
                  <li>AI Productivity Benchmarks</li>
                  <li>ROI/KPI Analysis</li>
                </ul>
                <a href="#" className="explore-card-link open-modal" data-modal-title="Explore AI Business Growth Resources">Explore Insights <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Featured AI Resources */}
        <section className="featured-resources-section section-padding">
          <div className="container">
            <div className="section-title-centered">
              <h2>Featured <span className="text-purple-highlight">AI Resources</span></h2>
              <p>Our top-rated handpicked resource kits to scale your digital presence.</p>
            </div>

            <div className="featured-resources-row">
              <div className="featured-card">
                <div className="card-image-wrap">
                  <img src="/images/robot_front_idle.png" alt="Transforming Businesses" />
                </div>
                <div className="card-content">
                  <h4>How AI Agents Are Transforming Businesses</h4>
                  <p>Learn how AI automation is changing operations, marketing, support, and sales.</p>
                </div>
              </div>

              <div className="featured-card">
                <div className="card-image-wrap">
                  <img src="/images/workflow_study.png" alt="AI Workforce" />
                </div>
                <div className="card-content">
                  <h4>Building an AI Workforce for SMEs</h4>
                  <p>A startup guide to metrics, ROI, &amp; workflows for startups and small businesses.</p>
                </div>
              </div>

              <div className="featured-card">
                <div className="card-image-wrap">
                  <img src="/images/robot_side_profile.png" alt="Social Media Automation" />
                </div>
                <div className="card-content">
                  <h4>AI Tools &amp; Social Media Automation</h4>
                  <p>Discover free tools to generate engaging content and grow your brand consistently.</p>
                </div>
              </div>

              <div className="featured-card">
                <div className="card-image-wrap">
                  <img src="/images/real_estate.png" alt="AI SEO Growth" />
                </div>
                <div className="card-content">
                  <h4>AI SEO Strategies for Business Growth</h4>
                  <p>Improve branding, search traffic, using AI SEO workflows and automation.</p>
                </div>
              </div>

              <div className="featured-card">
                <div className="card-image-wrap">
                  <img src="/images/whatsapp_study.png" alt="WhatsApp AI Guide" />
                </div>
                <div className="card-content">
                  <h4>WhatsApp AI Automation Guide</h4>
                  <p>Automate customer communication and engagement using WhatsApp AI systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Success Stories & Case Studies */}
        <section className="case-studies-section section-padding">
          <div className="container">
            <div className="section-title-centered">
              <h2>Success Stories &amp; Case <span className="text-purple-highlight">Studies</span></h2>
              <p>Real results achieved by modern fast-growing agencies using our systems.</p>
            </div>

            <div className="case-studies-grid">
              <div className="case-card">
                <div className="case-header">
                  <div className="case-icon-box bg-purple-tint"><i className="fa-solid fa-basket-shopping"></i></div>
                  <h3>Ecommerce Business Automation</h3>
                </div>
                <p>A custom automated system that qualifies leads and handles customer support, leading to 80% resolution.</p>
                <a href="#" className="case-link open-modal" data-modal-title="Ecommerce Case Study">Read Case Study <i className="fa-solid fa-arrow-right"></i></a>
              </div>

              <div className="case-card">
                <div className="case-header">
                  <div className="case-icon-box bg-green-tint"><i className="fa-solid fa-house-chimney"></i></div>
                  <h3>Real Estate Lead Automation</h3>
                </div>
                <p>An automated lead qualification script that increased conversion rates by 45%.</p>
                <a href="#" className="case-link open-modal" data-modal-title="Real Estate Case Study">Read Case Study <i className="fa-solid fa-arrow-right"></i></a>
              </div>

              <div className="case-card">
                <div className="case-header">
                  <div className="case-icon-box bg-blue-tint"><i className="fa-solid fa-circle-play"></i></div>
                  <h3>Social Media AI Model</h3>
                </div>
                <p>AI generation content that increased engagement and followers across platforms.</p>
                <a href="#" className="case-link open-modal" data-modal-title="Social Media Case Study">Read Case Study <i className="fa-solid fa-arrow-right"></i></a>
              </div>

              <div className="case-card">
                <div className="case-header">
                  <div className="case-icon-box bg-orange-tint"><i className="fa-solid fa-headset"></i></div>
                  <h3>AI Customer Support Transformation</h3>
                </div>
                <p>Business reduced response time by 75% using AI support agents.</p>
                <a href="#" className="case-link open-modal" data-modal-title="Customer Support Case Study">Read Case Study <i className="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Downloads, Tutorials, Insights */}
        <section className="downloads-tutorials-section section-padding">
          <div className="container columns-container">
            {/* Column 1 */}
            <div className="resource-col">
              <h3>Free AI Resources &amp; Downloads</h3>
              <div className="downloads-list">
                <div className="download-item open-modal" data-modal-title="Download: AI Business Planner Template">
                  <i className="fa-solid fa-file-pdf text-red"></i>
                  <div className="download-info">
                    <h4>AI Business Planner Template</h4>
                    <p>Step-by-step layout planner template.</p>
                  </div>
                  <i className="fa-solid fa-download download-icon"></i>
                </div>
                <div className="download-item open-modal" data-modal-title="Download: AI Chatbot Guide for Growth">
                  <i className="fa-solid fa-file-word text-blue"></i>
                  <div className="download-info">
                    <h4>AI Chatbot Guide for Growth</h4>
                    <p>Guide for setup &amp; growth triggers.</p>
                  </div>
                  <i className="fa-solid fa-download download-icon"></i>
                </div>
                <div className="download-item open-modal" data-modal-title="Download: AI ROI Calculator">
                  <i className="fa-solid fa-file-excel text-green"></i>
                  <div className="download-info">
                    <h4>AI ROI Calculator</h4>
                    <p>Calculate your automation ROI template.</p>
                  </div>
                  <i className="fa-solid fa-download download-icon"></i>
                </div>
                <div className="download-item open-modal" data-modal-title="Download: AI Workflow Templates">
                  <i className="fa-solid fa-file-lines text-purple"></i>
                  <div className="download-info">
                    <h4>AI Workflow Templates</h4>
                    <p>Pre-built automation workflow diagrams.</p>
                  </div>
                  <i className="fa-solid fa-download download-icon"></i>
                </div>
                <div className="download-item open-modal" data-modal-title="Download: AI Business Automation Guide">
                  <i className="fa-solid fa-book-bookmark text-orange"></i>
                  <div className="download-info">
                    <h4>AI Business Automation Guide</h4>
                    <p>Actionable resources for modern teams.</p>
                  </div>
                  <i className="fa-solid fa-download download-icon"></i>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className="resource-col">
              <h3>Video Tutorials &amp; AI Learning</h3>
              <div className="tutorial-featured-card open-modal" data-modal-title="Watch: AI Agent Drive Tutorial">
                <div className="tutorial-img-wrap">
                  <ChromaKeyVideo src="/images/Automating.mp4" similarity={0.4} smoothness={0.08} maxWidth={400} style={{ width: '100%', height: '100%', borderRadius: '12px' }} />
                  <div className="play-button-overlay"><i className="fa-solid fa-play"></i></div>
                </div>
                <h4>AI Agent Drive</h4>
                <p>Step-by-step tutorial to build and launch your first AI Agent.</p>
              </div>

              <ul className="tutorial-list">
                <li className="open-modal" data-modal-title="Watch: AI Social Media Automation Tutorial"><i className="fa-solid fa-circle-play"></i> AI Social Media Automation <i className="fa-solid fa-chevron-right arrow-end"></i></li>
                <li className="open-modal" data-modal-title="Watch: AI SEO Workflows Tutorial"><i className="fa-solid fa-circle-play"></i> AI SEO Workflows <i className="fa-solid fa-chevron-right arrow-end"></i></li>
                <li className="open-modal" data-modal-title="Watch: WhatsApp Automation Tutorial"><i className="fa-solid fa-circle-play"></i> WhatsApp Automation <i className="fa-solid fa-chevron-right arrow-end"></i></li>
                <li className="open-modal" data-modal-title="Watch: AI Studio Basics Tutorial"><i className="fa-solid fa-circle-play"></i> AI Studio Basics <i className="fa-solid fa-chevron-right arrow-end"></i></li>
                <li className="open-modal" data-modal-title="Watch: Platform Onboarding Tutorial"><i className="fa-solid fa-circle-play"></i> Premium Automation <i className="fa-solid fa-chevron-right arrow-end"></i></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="resource-col">
              <h3>Latest AI Insights &amp; Articles</h3>
              <div className="articles-list">
                <div className="article-item open-modal" data-modal-title="Read: The Future of AI Workforce">
                  <div className="article-thumb"><img src="/images/robot_front_idle.png" alt="Future of AI" /></div>
                  <div className="article-meta">
                    <h4>The Future of AI Workforce</h4>
                    <span>May 20, 2026</span>
                  </div>
                </div>
                <div className="article-item open-modal" data-modal-title="Read: How AI Agents Improve Workplace Productivity">
                  <div className="article-thumb"><img src="/images/workflow_study.png" alt="Productivity" /></div>
                  <div className="article-meta">
                    <h4>How AI Agents Improve Workplace Productivity</h4>
                    <span>May 18, 2026</span>
                  </div>
                </div>
                <div className="article-item open-modal" data-modal-title="Read: AI Social Media Tools for Work">
                  <div className="article-thumb"><img src="/images/robot_side_profile.png" alt="Social Media Tools" /></div>
                  <div className="article-meta">
                    <h4>AI Social Media Tools for Work</h4>
                    <span>May 15, 2026</span>
                  </div>
                </div>
                <div className="article-item open-modal" data-modal-title="Read: AI Automation for Startups">
                  <div className="article-thumb"><img src="/images/whatsapp_study.png" alt="Startups" /></div>
                  <div className="article-meta">
                    <h4>AI Automation for Startups</h4>
                    <span>May 10, 2026</span>
                  </div>
                </div>
              </div>
              <a href="#" className="view-all-writing-link open-modal" data-modal-title="All Resources Articles">View All Writing <i className="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
        </section>

        {/* SECTION: Subscribe & Community */}
        <section className="subscribe-community-section section-padding">
          <div className="container sub-comm-grid">
            {/* Subscribe */}
            <div className="sub-comm-card subscribe-card">
              <div className="icon-box bg-purple-tint"><i className="fa-solid fa-envelope-open-text"></i></div>
              <h3>Subscribe to AI Insights</h3>
              <p>Get tactical updates, AI strategies, automation insights &amp; industry trends delivered straight to your inbox.</p>
              <form className="subscribe-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}>
                <input type="email" placeholder="Enter your email address" required />
                <button type="submit" className="btn-primary-purple">Subscribe Now</button>
              </form>
            </div>

            {/* Community */}
            <div className="sub-comm-card community-card">
              <div className="community-info">
                <h3>Join The IAMKRATU.AI Community</h3>
                <p>Connect with business owners, creators, agencies, and developers learning &amp; building modern AI workforces.</p>

                <div className="community-tabs">
                  <span><i className="fa-solid fa-comments"></i> AI Discussions</span>
                  <span><i className="fa-solid fa-users"></i> Members Area</span>
                  <span><i className="fa-solid fa-lightbulb"></i> Insights</span>
                  <span><i className="fa-solid fa-chess"></i> Strategies</span>
                  <span><i className="fa-solid fa-arrows-spin"></i> Updates</span>
                </div>
              </div>

              <div className="community-image">
                <div className="community-photo-overlay">
                  <div className="active-users"><span className="pulse-dot"></span> 1,240 Online</div>
                </div>
                <img src="/images/real_estate.png" alt="Kratu AI Community" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Why Businesses Use Kratu AI */}
        <section className="why-kratu-section section-padding">
          <div className="container">
            <div className="section-title-centered">
              <h2>Why Businesses Use <span className="text-purple-highlight">IAMKRATU.AI Resources</span></h2>
              <p>Our practical assets are designed directly to empower and fast-track automation scaling.</p>
            </div>

            <div className="why-kratu-grid">
              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-brain"></i></div>
                <h4>Practical Knowledge</h4>
                <p>Learn strategies and workflows that you can implement in your business operations immediately.</p>
              </div>

              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-chart-line-up"></i></div>
                <h4>Business Focused</h4>
                <p>Resources focused completely on reducing operations overhead and maximizing output productivity.</p>
              </div>

              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
                <h4>AI Simplified</h4>
                <p>High-quality guides structured clearly to help both tech-savvy and non-technical stakeholders.</p>
              </div>

              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-compass"></i></div>
                <h4>Industry Specific Insights</h4>
                <p>Tailor-made benchmarks, guidelines, and strategies matching specific industry challenges.</p>
              </div>

              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-graduation-cap"></i></div>
                <h4>Continuous Learning</h4>
                <p>Stay constantly updated with structural trends in the fast-paced autonomous AI revolution.</p>
              </div>

              <div className="why-item">
                <div className="why-icon"><i className="fa-solid fa-circle-check"></i></div>
                <h4>Actionable Content</h4>
                <p>Get downloadable kits, spreadsheets, guides, and templates ready to build your automated workforce.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: FAQs & Final CTA */}
        <section className="faq-cta-section section-padding">
          <div className="container faq-cta-split">
            {/* FAQ Accordion */}
            <div className="faq-wrap">
              <h2>Frequently Asked Questions</h2>
              <div className="faq-accordion">
                <details className="faq-item-details" open>
                  <summary>Are these resources free? <i className="fa-solid fa-chevron-down"></i></summary>
                  <p>Yes, all templates, checklists, and guides in this resources repository are 100% free and ready to download.</p>
                </details>
                <details className="faq-item-details">
                  <summary>Who are these resources for? <i className="fa-solid fa-chevron-down"></i></summary>
                  <p>Our resources are built for agency owners, SMEs, automation engineers, and business leaders seeking operational efficiency.</p>
                </details>
                <details className="faq-item-details">
                  <summary>Do I need technical knowledge? <i className="fa-solid fa-chevron-down"></i></summary>
                  <p>No, we design our worksheets, planners, and tutorial workflows to be easily understood by non-technical stakeholders.</p>
                </details>
                <details className="faq-item-details">
                  <summary>How often are resources updated? <i className="fa-solid fa-chevron-down"></i></summary>
                  <p>We update our templates, tutorials, and insights library weekly to match updates in AI LLM platforms and integrations.</p>
                </details>
                <details className="faq-item-details">
                  <summary>Can I request a specific guide? <i className="fa-solid fa-chevron-down"></i></summary>
                  <p>Absolutely! Contact our expert team via WhatsApp or the contact form, and we'll queue up guides that solve your specific operational blocker.</p>
                </details>
              </div>
            </div>

            {/* Final CTA Card */}
            <div className="cta-showcase-card">
              <div className="cta-card-content">
                <h2>Ready to Build Your AI Workforce?</h2>
                <p>Explore all resources, automation guides, and implement strategies from IAMKRATU.AI.</p>
                <div className="cta-card-buttons">
                  <button className="btn-primary-purple open-modal" data-modal-title="Explore All Resources">Explore Resources</button>
                  <button className="btn-secondary-outline open-modal" data-modal-title="Watch Tour Video">Watch Tour</button>
                  <button className="btn-secondary-outline open-modal" data-modal-title="Contact Experts">Contact Experts</button>
                </div>
              </div>
              <div className="cta-card-image">
                <img src="/images/resources_3d_robot.png" alt="3D Robot avatar" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
