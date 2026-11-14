import { projects } from '../data/projects'

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container">
        <p className="section-label">
          Technical solutions / integrations / customer-facing technology
        </p>

        <div className="hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              <span>Tariq</span>
              <span className="hero__title-accent">Horan</span>
            </h1>

            <div className="hero__support">
              <p className="hero__copy">
                I work at the intersection of engineering, API architecture,
                payment systems and customer trust — helping teams deliver
                technical experiences that are both dependable and genuinely
                usable.
              </p>

              <a href="#work" className="hero__link">
                Explore selected work <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero__visual" role="group" aria-label="Featured project imagery">
            {featuredProjects.map((project, index) => (
              <figure
                key={project.name}
                className={`hero__image hero__image--${index + 1}`}
              >
                {project.image ? <img src={project.image} alt={project.imageAlt} /> : null}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
