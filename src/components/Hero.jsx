import { useState } from "react";
import { flowSteps, RESUME, RESUME_FILENAME } from "../data/site.js";

const n = (i) => String(i + 1).padStart(2, "0");

export default function Hero() {
  /* The original page swapped a broken portrait for an "RM" monogram via an
     inline onerror handler; in React that is just a piece of state. */
  const [portraitFailed, setPortraitFailed] = useState(false);

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
            <div className="role">
              Rifat Jahan Mim<span className="sep">·</span>
              <span className="accent">Product Analyst</span>
            </div>
            <p className="intro">
              I bridge business, product, design and engineering — turning complex
              requirements into practical, user-focused solutions. 4+ years across
              enterprise systems.
            </p>
            <div className="hero-btns">
              <a className="btn solid" href="#cases">
                Explore My Work →
              </a>
              <a className="btn" href={RESUME} download={RESUME_FILENAME}>
                Download Resume
              </a>
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
              <div className="step" key={step}>
                <div className="n">{n(i)}</div>
                <div className="s">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
