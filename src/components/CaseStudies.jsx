import { Fragment, useId, useState } from "react";
import { caseStudies } from "../data/site.js";
import { indexLabel } from "../lib/format.js";

const COUNTS = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
const sentence = (words) =>
  words.length < 2
    ? words.join("")
    : `${words.slice(0, -1).join(", ")} and ${words[words.length - 1]}`;

/* A row of steps joined by arrows. --i staggers both the entrance and the
   travelling highlight, so the chain reads left to right. */
function Flow({ steps }) {
  return (
    <div className="flowline">
      {steps.map((step, i) => (
        <Fragment key={step}>
          <span className="fstep" style={{ "--i": i }}>
            {step}
          </span>
          {i < steps.length - 1 && (
            <span className="farrow" aria-hidden="true">
              →
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

function Workflow({ title, steps, branches }) {
  return (
    <div className="wf">
      <div className="cs-label">{title}</div>
      <Flow steps={steps} />
      {branches && (
        <div className="wf-branches">
          {branches.map((branch) => (
            <div className="wf-branch" key={branch.label}>
              <div className="wf-cond">{branch.label}</div>
              <Flow steps={branch.steps} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function List({ items }) {
  return (
    <ul className="cs-list">
      {items.map((item, i) => (
        <li key={item} style={{ "--i": i }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

function CaseStudy({ study, index, open, onToggle }) {
  const uid = useId();
  const [tab, setTab] = useState(0);

  const tabs = [
    { key: "problem", label: "Problem" },
    { key: "approach", label: "Approach" },
    { key: "solution", label: "Solution" },
    ...(study.workflows?.length ? [{ key: "workflows", label: "Workflows" }] : []),
  ];
  const current = tabs[tab].key;

  /* Arrow keys / Home / End move between tabs, per the tabs pattern. */
  const onTabKeys = (e) => {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (tab === last ? 0 : tab + 1)
      : e.key === "ArrowLeft" ? (tab === 0 ? last : tab - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setTab(next);
    document.getElementById(`${uid}-tab-${next}`)?.focus();
  };

  return (
    <article className={open ? "cs open reveal" : "cs reveal"} style={{ "--d": `${index * 80}ms` }}>
      <div className="cs-head">
        <div className="cs-meta">
          <span className="num">{indexLabel(index)}</span>
          <span className="cs-domain">{study.domain}</span>
        </div>
        <h3 className="cs-title">
          <button
            type="button"
            className="cs-toggle"
            aria-expanded={open}
            aria-controls={`${uid}-body`}
            onClick={onToggle}
          >
            {study.title}
            <span className="cs-toggle-label" aria-hidden="true">
              {open ? "Close" : "View case study"}
              <i className="cs-chev" />
            </span>
          </button>
        </h3>
        <p className="cs-summary">{study.summary}</p>
      </div>

      <div className="cs-body" id={`${uid}-body`}>
        <div className="cs-body-inner">
          <div className="cs-pad">
            <div className="cs-glance">
              <div className="cs-fact">
                <div className="cs-label">My role</div>
                <p>{study.role}</p>
                <div className="cs-label" style={{ marginTop: 18 }}>
                  Outcome
                </div>
                <p>{study.outcome}</p>
              </div>
              <div className="cs-fact">
                <div className="cs-label">My contribution</div>
                <div className="cs-chips">
                  {study.contribution.map((item, i) => (
                    <span className="cs-chip" key={item} style={{ "--i": i }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="cs-tabs" role="tablist" aria-label="Case study sections" style={{ "--n": tabs.length, "--i": tab }} onKeyDown={onTabKeys}>
              <span className="cs-thumb" aria-hidden="true" />
              {tabs.map((t, i) => (
                <button
                  key={t.key}
                  type="button"
                  role="tab"
                  id={`${uid}-tab-${i}`}
                  aria-selected={i === tab}
                  aria-controls={`${uid}-panel`}
                  tabIndex={i === tab ? 0 : -1}
                  className={i === tab ? "cs-tab on" : "cs-tab"}
                  onClick={() => setTab(i)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* keyed by tab so each switch replays the entrance animation */}
            <div className="cs-panel" role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${tab}`} key={current}>
              {current === "problem" && (
                <div className="cs-cols">
                  <div className="cs-block">
                    <h4>Context</h4>
                    <p>{study.context}</p>
                  </div>
                  <div className="cs-block">
                    <h4>Challenges</h4>
                    <List items={study.challenges} />
                  </div>
                </div>
              )}

              {current === "approach" && (
                <div className="cs-cols">
                  <div className="cs-block">
                    <h4>Process</h4>
                    <ol className="cs-steps">
                      {study.process.map((step, i) => (
                        <li key={step} style={{ "--i": i }}>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="cs-block">
                    <h4>Key decisions</h4>
                    <List items={study.decisions} />
                  </div>
                </div>
              )}

              {current === "solution" && (
                <>
                  <div className="cs-cols">
                    <div className="cs-block">
                      <h4>Solution</h4>
                      <List items={study.solution} />
                    </div>
                    {study.ecosystem && (
                      <div className="cs-block">
                        <h4>Product ecosystem</h4>
                        <div className="cs-eco">
                          {study.ecosystem.map((item, i) => (
                            <span key={item} style={{ "--i": i }}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  {study.lifecycle && (
                    <div className="wf">
                      <div className="cs-label">Core lifecycle</div>
                      <Flow steps={study.lifecycle} />
                    </div>
                  )}
                </>
              )}

              {current === "workflows" && (
                <>
                  {study.workflowsTitle && <h4 className="cs-wf-title">{study.workflowsTitle}</h4>}
                  <div className="cs-wfs">
                    {study.workflows.map((wf) => (
                      <Workflow key={wf.title} {...wf} />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function CaseStudies() {
  /* One study open at a time; the first starts open so the section never
     lands as a wall of collapsed rows. */
  const [openIndex, setOpenIndex] = useState(0);
  const count = caseStudies.length;

  return (
    <section id="cases">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Featured case studies</div>
          <h2 className="title">
            Problem → thinking →
            <br />
            solution → contribution.
          </h2>
          <p className="lede">
            {COUNTS[count] ?? count} {count === 1 ? "product" : "products"}{" "}
            {count === 1 ? "in" : "across"} {sentence(caseStudies.map((s) => s.sector))}.
            Each case is written as the problem I found, how I worked through it,
            and exactly what I contributed.
          </p>
        </div>
        <div className="cs-list-wrap">
          {caseStudies.map((study, i) => (
            <CaseStudy
              key={study.title}
              study={study}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
