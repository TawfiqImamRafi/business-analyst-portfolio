import { useState } from "react";
import { navItems } from "../data/site.js";
import {
  useStuckHeader,
  useActiveSection,
  useScrollProgress,
} from "../hooks/useScrollBehaviour.js";
import { useResumePreview } from "../context/ResumePreview.jsx";

const hrefs = navItems.map((n) => n.href);

export default function Header() {
  const [open, setOpen] = useState(false);
  const stuck = useStuckHeader();
  const active = useActiveSection(hrefs);
  const progress = useScrollProgress();
  const openResume = useResumePreview();

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
          <button type="button" className="btn solid" onClick={openResume}>
            View Resume
          </button>
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

      {/* the inner wrapper lets the menu open by animating grid rows 0fr → 1fr */}
      <div className={open ? "mobile-menu open" : "mobile-menu"}>
        <div className="mm-inner">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              style={{ "--i": i }}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn solid"
            href="#cases"
            style={{ "--i": navItems.length }}
            onClick={() => setOpen(false)}
          >
            View Case Studies
          </a>
          <button
            type="button"
            className="btn"
            style={{ "--i": navItems.length + 1 }}
            onClick={() => {
              setOpen(false);
              openResume();
            }}
          >
            View Resume
          </button>
        </div>
      </div>
    </header>
  );
}
