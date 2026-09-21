import { useState } from "react";
import { navItems, RESUME, RESUME_FILENAME } from "../data/site.js";
import {
  useStuckHeader,
  useActiveSection,
  useScrollProgress,
} from "../hooks/useScrollBehaviour.js";

const hrefs = navItems.map((n) => n.href);

export default function Header() {
  const [open, setOpen] = useState(false);
  const stuck = useStuckHeader();
  const active = useActiveSection(hrefs);
  const progress = useScrollProgress();

  return (
    <header id="top" className={stuck ? "stuck" : undefined}>
      <div className="wrap navbar">
        <a className="brand" href="#home">
          <span className="mark">RM</span>Rifat Jahan Mim
        </a>
        <nav className="links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? "active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="btn" href={RESUME} download={RESUME_FILENAME}>
            Download Resume
          </a>
          <a className="btn solid" href="#cases">
            View Case Studies
          </a>
        </div>
        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>

      {/* reading position, drawn along the bottom edge of the header */}
      <div
        className="progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${progress})` }}
      />

      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="btn solid" href="#cases" onClick={() => setOpen(false)}>
          View Case Studies
        </a>
        <a
          className="btn"
          href={RESUME}
          download={RESUME_FILENAME}
          onClick={() => setOpen(false)}
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}
