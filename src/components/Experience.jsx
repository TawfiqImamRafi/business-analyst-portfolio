import { Fragment } from "react";
import { timeline, evolution } from "../data/site.js";

export default function Experience() {
  return (
    <section className="alt" id="experience">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Experience</div>
          <h2 className="title">A steady move toward product.</h2>
        </div>
        <div className="two-col" style={{ marginTop: 44 }}>
          <div className="timeline reveal">
            {timeline.map(([years, company, role]) => (
              <div className="tl" key={company}>
                <div className="yr">{years}</div>
                <h3>{company}</h3>
                <span>{role}</span>
              </div>
            ))}
          </div>
          <div className="card reveal">
            <div className="card-label">The evolution</div>
            <div className="loop">
              {evolution.map((step, i) => (
                <Fragment key={step}>
                  <span className="chip">{step}</span>
                  {i < evolution.length - 1 && <span className="arrow">→</span>}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
