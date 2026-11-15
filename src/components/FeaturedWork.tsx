import type { Project } from "../data/projects";

type FeaturedWorkProps = {
  projects: Project[];
};

const featuredProjects = (projects: Project[]) =>
  projects.filter((project) => project.featured);
const secondaryProjects = (projects: Project[]) =>
  projects.filter((project) => !project.featured);

export function FeaturedWork({ projects }: FeaturedWorkProps) {
  const primaryProjects = featuredProjects(projects);
  const additionalProjects = secondaryProjects(projects);

  return (
    <section className="section section--work" id="work">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">Selected work</p>
          <h2>Systems that bridge complexity and trust.</h2>
        </div>

        <div className="project-grid project-grid--featured">
          {primaryProjects.map((project) => (
            <article
              key={project.name}
              className={`project-card project-card--${project.accent}`}>
              <div
                className="project-card__visual"
                aria-label={project.imageAlt}>
                {project.image ? (
                  <img src={project.image} alt={project.imageAlt} />
                ) : (
                  <div className="project-card__shape">
                    <span>{project.category}</span>
                  </div>
                )}
              </div>

              <div className="project-card__content">
                <div className="project-card__meta">
                  <span>{project.category}</span>
                </div>

                <h3>{project.name}</h3>
                <p className="project-card__summary">{project.summary}</p>
                {/* <p className="project-card__description">{project.description}</p> */}

                <div className="project-card__stack">
                  <span className="project-card__section-label">Stack</span>
                  <p>{project.stack.join(" / ")}</p>
                </div>

                <div className="project-card__links">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.name}`}>
                      Live Demo <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  {project.apiDocs ? (
                    <a
                      href={project.apiDocs}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`API documentation for ${project.name}`}>
                      API Documentation <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.name}`}>
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="project-grid project-grid--secondary">
          {additionalProjects.map((project) => (
            <article
              key={project.name}
              className={`project-card project-card--secondary project-card--${project.accent}`}>
              <div
                className="project-card__visual project-card__visual--image"
                aria-label={project.imageAlt}>
                {project.image ? (
                  <img src={project.image} alt={project.imageAlt} />
                ) : null}
              </div>

              <div className="project-card__content">
                <div className="project-card__meta">
                  <span>{project.category}</span>
                </div>

                <h3>{project.name}</h3>
                <p className="project-card__summary">{project.summary}</p>
                {/* <p className="project-card__description">
                  {project.description}
                </p> */}

                <div className="project-card__stack">
                  <span className="project-card__section-label">Stack</span>
                  <p>{project.stack.join(" / ")}</p>
                </div>

                <div className="project-card__links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repository for ${project.name}`}>
                    GitHub <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
