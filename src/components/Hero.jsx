import { profile } from "../data/portfolio";
import Icon from "./Icon";
import Reveal from "./Reveal";

function CodeCard() {
  return (
    <div
      className="hero-visual"
      aria-label="Illustration of a developer profile written as JavaScript"
    >
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />
      <div className="code-window">
        <div className="code-title">
          <span className="window-dots">
            <i />
            <i />
            <i />
          </span>
          <span>developer.js</span>
          <Icon name="code" size={15} />
        </div>
        <div className="code-body" aria-hidden="true">
          <div>
            <span className="line-number">01</span>
            <span>
              <b>const</b> developer = {"{"}
            </span>
          </div>
          <div>
            <span className="line-number">02</span>
            <span>
              {" "}
              name: <em>'Joaquin Sotelo'</em>,
            </span>
          </div>
          <div>
            <span className="line-number">03</span>
            <span>
              {" "}
              role: <em>'Full-Stack Developer'</em>,
            </span>
          </div>
          <div>
            <span className="line-number">04</span>
            <span> focus: [</span>
          </div>
          <div>
            <span className="line-number">05</span>
            <span>
              {" "}
              <em>'Web applications'</em>,
            </span>
          </div>
          <div>
            <span className="line-number">06</span>
            <span>
              {" "}
              <em>'Backend systems'</em>,
            </span>
          </div>
          <div>
            <span className="line-number">07</span>
            <span>
              {" "}
              <em>'Data & analysis'</em>
            </span>
          </div>
          <div>
            <span className="line-number">08</span>
            <span> ],</span>
          </div>
          <div>
            <span className="line-number">09</span>
            <span>
              {" "}
              mindset: <em>'Keep building.'</em>
            </span>
          </div>
          <div>
            <span className="line-number">10</span>
            <span>{"};"}</span>
          </div>
          <div className="code-comment">
            <span className="line-number">11</span>
            <span>// From idea to implementation.</span>
          </div>
        </div>
        <div className="code-footer">
          <span>
            <span className="status-dot" /> Always learning
          </span>
          <span>JavaScript</span>
        </div>
      </div>
      <span className="floating-label">
        <Icon name="branch" size={15} /> built through collaboration
      </span>
      <span className="visual-coordinate">&lt; ideas into code /&gt;</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero shell" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> FULL-STACK DEVELOPER
          </p>
          <h1 id="hero-title">
            Thoughtful code.
            <br />
            <span>Useful things.</span>
          </h1>
          <p className="hero-intro">
            Hi, I’m <strong>{profile.name}.</strong>
            <br />
            {profile.intro}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <Icon name="arrow" size={18} />
            </a>
            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" size={19} /> GitHub{" "}
              <Icon name="diagonal" size={14} />
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <CodeCard />
        </Reveal>
      </div>
      <div className="hero-bottom">
        <span>INTERFACES. SYSTEMS. DATA.</span>
        <a href="#work">
          SCROLL TO EXPLORE <Icon name="down" size={15} />
        </a>
      </div>
    </section>
  );
}
