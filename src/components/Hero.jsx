import { useState } from "react";
import { flowSteps, roles } from "../data/site.js";
import { useResumePreview } from "../context/ResumePreview.jsx";
import { useTypewriter } from "../hooks/useScrollBehaviour.js";
import { indexLabel } from "../lib/format.js";

export default function Hero() {
  /* The original page swapped a broken portrait for an "RM" monogram via an
     inline onerror handler; in React that is just a piece of state. */
  const [portraitFailed, setPortraitFailed] = useState(false);
  const openResume = useResumePreview();
  const role = useTypewriter(roles);

  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="badge">
              <i className="dot" />
              Open to product &amp; business analysis roles
            </span>
            <h1>
              Complex problems,
              <br />
              <span className="accent">clear products.</span>
            </h1>
            <div className="role">Rifat Jahan Mim</div>
            {/* reserves room for the longest role, so nothing else on the
                page shifts as the word types and deletes */}
            <div className="role-cycle-line accent">
              {role}
              <i className="caret" aria-hidden="true" />
              <span className="sr-only">{roles.join(", ")}</span>
            </div>
            <p className="intro">
              I bridge business, product, design and engineering — turning complex
              requirements into practical, user-focused solutions. 4+ years across
              enterprise systems.
            </p>
            <div className="hero-btns">
              <a className="btn solid" href="#cases">
                Explore My Work <span className="arr">→</span>
              </a>
              <button type="button" className="btn" onClick={openResume}>
                View Resume
              </button>
            </div>
            <div className="pills">
              <span className="pill">Product Discovery</span>
              <span className="pill">Requirement Engineering</span>
              <span className="pill">Workflow &amp; Solution Design</span>
              <span className="pill">AI-Assisted Prototyping</span>
            </div>
          </div>

          <div className="portrait-wrap">
            <div className="now-card">
              <div className="k">Currently</div>
              <div className="v">Business Analyst, US-Bangla Airlines</div>
            </div>
            <div className="portrait-card">
              <div className="portrait">
                {portraitFailed ? (
                  <div className="initials">RM</div>
                ) : (
                  <img
                    src="/assets/portrait.jpg"
                    alt="Rifat Jahan Mim"
                    onError={() => setPortraitFailed(true)}
                  />
                )}
              </div>
              <div className="portrait-meta">
                <div>
                  <strong>Rifat Jahan Mim</strong>
                  <span>Dhaka, Bangladesh</span>
                </div>
                <span className="yrs">4+ yrs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flowcard reveal">
          <div className="card-label">How work moves</div>
          <div className="flow">
            {flowSteps.map((step, i) => (
              <div className="step" key={step} style={{ "--d": `${i * 70}ms` }}>
                <div className="n">{indexLabel(i)}</div>
                <div className="s">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
