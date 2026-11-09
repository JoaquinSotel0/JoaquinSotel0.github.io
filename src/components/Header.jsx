import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import Icon from "./Icon";

const sections = ["work", "about", "stack", "contact"];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggle = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -55% 0px" },
    );
    ["home", ...sections].forEach((id) =>
      observer.observe(document.getElementById(id)),
    );
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function closeOnEscape(event) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function closeOnDesktop() {
      if (window.innerWidth > 760) setOpen(false);
    }
    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a
          className="brand"
          href="#home"
          aria-label="Joaquin Sotelo, home"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark">
            js<span>.</span>
          </span>
          <span>
            Joaquin Sotelo<span className="brand-dot">.</span>
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="main-navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              aria-current={active === section ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {section === "work"
                ? "Work"
                : section[0].toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            className="nav-github"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <Icon name="diagonal" size={15} />
          </a>
        </nav>
      </div>
    </header>
  );
}
