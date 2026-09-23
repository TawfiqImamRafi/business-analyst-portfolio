import { Fragment } from "react";
import { checklist } from "../data/site.js";

const thinking = ["Understand", "Challenge", "Structure", "Design", "Validate", "Improve"];

export default function About() {
  return (
    <section className="alt" id="about">
      <div className="wrap">
        <div className="two-col">
          <div className="reveal from-left">
            <div className="eyebrow">About</div>
            <h2 className="title">
              More than requirements.
              <br />
              I solve problems.
            </h2>
            <div className="about-body">
              <p>
                My work starts before a requirement exists. I spend time with
                stakeholders to understand how the business actually operates, where
                the process breaks, and what people need but haven't asked for yet —
                then I turn that into a product definition teams can build.
              </p>
              <p>
                I work across enterprise systems, fleet management, healthcare,
                fintech, supply chain, inventory, CRM, CMS and travel technology.
                The domains change; the discipline doesn't — understand deeply,
                structure clearly, validate continuously.
              </p>
            </div>
            <div className="card-label" style={{ marginTop: 34 }}>
              How I think
            </div>
            <div className="thinkrow">
              {/* pills and arrows must stay direct children — .thinkrow is a
                  wrapping flex row, so a wrapper element would break the gaps */}
              {thinking.map((word, i) => (
                <Fragment key={word}>
                  <span className="pill">{word}</span>
                  {i < thinking.length - 1 && <span className="arrow">→</span>}
                </Fragment>
              ))}
            </div>
          </div>
          <div className="card reveal from-right">
            <div className="card-label">What that looks like in practice</div>
            <ul className="checklist">
              {/* --d staggers each line in once the card has revealed */}
              {checklist.map((item, i) => (
                <li key={item} style={{ "--d": `${i * 45}ms` }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
