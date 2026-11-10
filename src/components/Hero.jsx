import { profile } from "../data/portfolio";
import Icon from "./Icon";
import Reveal from "./Reveal";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section id="home" className="hero shell" aria-labelledby="hero-title">
      <div className="hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> FULL-STACK DEVELOPER
          </p>
          <h1 id="hero-title">
            <span className="hero-title-line">Continuous learning.</span>{" "}
            <span className="hero-title-line hero-title-accent">
              Proven experience.
            </span>
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
          <HeroVisual />
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
