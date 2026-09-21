import { Fragment } from "react";
import { aiChips, aiLoop } from "../data/site.js";

export default function AiAssisted() {
  return (
    <section id="ai">
      <div className="wrap">
        <div className="two-col">
          <div className="reveal">
            <div className="eyebrow">AI-assisted work</div>
            <h2 className="title">AI-assisted product development.</h2>
            <p className="lede">
              I use Claude AI and ChatGPT to move faster through research, analysis
              and prototyping — so more time goes into judgement, stakeholder
              conversations and validation. AI supports my product thinking; it does
              not replace it.
            </p>
            <div className="pills" style={{ marginTop: 26 }}>
              <span className="pill tool-pill">Claude AI</span>
              <span className="pill tool-pill">ChatGPT</span>
            </div>
          </div>
          <div style={{ display: "grid", gap: 20 }}>
            <div className="card reveal">
              <div className="card-label">Where it helps</div>
              <div className="chipgrid">
                {aiChips.map((chip) => (
                  <span className="chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="card reveal">
              <div className="card-label">The loop</div>
              <div className="loop">
                {/* direct children of a wrapping flex row — no wrapper elements */}
                {aiLoop.map((step, i) => (
                  <Fragment key={step}>
                    <span className="chip">{step}</span>
                    {i < aiLoop.length - 1 && <span className="arrow">→</span>}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
