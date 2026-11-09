import { projects } from "../data/portfolio";
import Icon from "./Icon";
import Reveal from "./Reveal";
import ProjectArt from "./ProjectArt";

export default function Projects() {
  return (
    <section id="work" className="section shell" aria-labelledby="work-title">
      <Reveal>
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2 id="work-title">
              Built to solve.
              <br />
              <span>Shared to grow.</span>
            </h2>
          </div>
          <p>
            A selection of web applications and data explorations. Real
            projects, with the code behind them.
          </p>
        </div>
      </Reveal>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Reveal
            key={project.id}
            className={index === 0 ? "featured-project" : ""}
          >
            <article
              className={`project-card ${index === 0 ? "is-featured" : ""}`}
            >
              <ProjectArt type={project.illustration} />
              <div className="project-content">
                <div className="project-category">
                  <span>{project.category}</span>
                  <span>{project.number}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-role">{project.role}</p>
                <p className="project-description">{project.description}</p>
                <ul className="tags" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <details className="project-details">
                  <summary>
                    {project.detailTitle}
                    <span className="details-plus" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <ul>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <a
                    className="evidence-link"
                    href={project.evidence}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.evidenceLabel}
                    <Icon name="diagonal" size={13} />
                  </a>
                </details>
                <a
                  className="project-link"
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <Icon name="github" size={17} /> View repository
                  </span>
                  <Icon name="diagonal" size={19} />
                  <span className="sr-only">: {project.title}</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
