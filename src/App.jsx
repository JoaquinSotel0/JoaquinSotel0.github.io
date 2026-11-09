import { MotionConfig } from "motion/react";
import { profile, skillGroups } from "./data/portfolio";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Reveal from "./components/Reveal";
import Icon from "./components/Icon";

function About() {
  return (
    <section
      id="about"
      className="about-section section"
      aria-labelledby="about-title"
    >
      <div className="shell about-grid">
        <Reveal>
          <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
          <h2 id="about-title">
            Curious by nature.
            <br />
            <span>Builder by practice.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="about-lead">
            I like understanding how the whole thing works.
          </p>
          <p>
            My projects connect web development, databases, and data analysis.
            I’m comfortable moving between frontend interfaces and backend
            logic, with Python, JavaScript, and Django at the center of my
            toolkit.
          </p>
          <p>
            Working on collaborative software projects has given me practice
            with integration, debugging, and bringing changes together in Git. I
            keep learning by building, reading code, and working through the
            details.
          </p>
          <a
            className="text-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            A closer look on GitHub <Icon name="diagonal" size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Stack() {
  const icons = ["code", "database", "terminal"];
  return (
    <section id="stack" className="section shell" aria-labelledby="stack-title">
      <Reveal>
        <div className="section-heading stack-heading">
          <div>
            <p className="eyebrow">03 / THE TOOLKIT</p>
            <h2 id="stack-title">
              Different tools.
              <br />
              <span>Connected thinking.</span>
            </h2>
          </div>
          <p>
            The technologies I work with, from the browser to the database and
            the terminal in between.
          </p>
        </div>
      </Reveal>
      <div className="stack-grid">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05}>
            <div className="stack-card">
              <div className="stack-top">
                <Icon name={icons[index]} size={25} />
                <span>{group.number}</span>
              </div>
              <h3>{group.title}</h3>
              <p>{group.subtitle}</p>
              <ul className="tags">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="contact-section shell"
      aria-labelledby="contact-title"
    >
      <Reveal>
        <div className="contact-card">
          <div>
            <p className="eyebrow">04 / WHAT’S NEXT?</p>
            <h2 id="contact-title">
              Good things start
              <br />
              with a <span>connection.</span>
            </h2>
            <p>
              Explore my repositories, see what I’m building,
              <br className="desktop-break" /> and connect with me on GitHub.
            </p>
            <a
              className="button button-primary"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Find me on GitHub <Icon name="diagonal" size={18} />
            </a>
          </div>
          <div className="contact-symbol" aria-hidden="true">
            {"{"}
            <span>↗</span>
            {"}"}
          </div>
          <span className="contact-handle">@JoaquinSotel0</span>
        </div>
      </Reveal>
    </section>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Stack />
        <Contact />
      </main>
      <footer className="shell footer">
        <a className="footer-brand" href="#home">
          Joaquin Sotelo<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} · Built with React & a little curiosity.
        </p>
        <a href="#home">
          Back to top <Icon name="up" size={15} />
        </a>
      </footer>
    </MotionConfig>
  );
}
