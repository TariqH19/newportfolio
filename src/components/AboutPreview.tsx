const timeline = [
  {
    period: "2026 — Present",
    title: "FastSpring — Technical Success Manager",
    text: "As a Technical Success Manager at FastSpring, I help customers maximize the value of the platform by providing technical guidance, resolving complex issues and supporting integrations as part of a smooth post-sales experience.",
  },
  {
    period: "2024 — 2026",
    title: "PayPal — Integration / Solution Engineer",
    text: "Supported large enterprises and SMEs with payment integrations, technical enablement and product launches while building internal tools using React and Node.js.",
  },
  {
    period: "2023 — 2024",
    title: "IADT — Software Developer / Research Assistant",
    text: "Led a student services digital transformation project, delivered a React frontend for 2,500+ students and built backend APIs with PHP Laravel and Strapi.",
  },
];

export function AboutPreview() {
  return (
    <section className="section about-preview" id="about">
      <div className="container about-preview__intro">
        <div>
          <p className="section-label">About</p>
        </div>

        <div className="about-preview__content">
          <h2>
            Technical thinking shaped by integration realities and customer
            conversations.
          </h2>
          <p>
            I bring together engineering delivery, practical systems thinking
            and customer-facing problem solving. My work is grounded in the
            realities of integrations: getting APIs, payment workflows, data
            flows and operational processes to work smoothly for both technical
            teams and end users.
          </p>
          <div className="about-preview__actions">
            <a
              href="/Tariq_Horan_CV.docx"
              className="button button--secondary"
              download>
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="container about-preview__timeline">
        {timeline.map((entry) => (
          <article key={entry.period} className="timeline-item">
            <div className="timeline-item__period">{entry.period}</div>
            <div className="timeline-item__content">
              <h3>{entry.title}</h3>
              <p>{entry.text}</p>
            </div>
          </article>
        ))}

        <div className="timeline-summary">
          <div>
            <span className="timeline-summary__label">Education</span>
            <p>BSc (Hons) Computing, IADT — First Class Honours.</p>
          </div>
          <div>
            <span className="timeline-summary__label">Interests</span>
            <p>
              Volunteering, mentoring students, helping at internal events and
              hackathons, hiking and travel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
