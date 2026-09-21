import { docs } from "../data/site.js";

export default function Documentation() {
  return (
    <section className="alt" id="documentation">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Documentation</div>
          <h2 className="title">
            From problem to implementation-
            <br />
            ready documentation.
          </h2>
          <p className="lede">
            The artefacts I produce so business, design, engineering and QA all work
            from the same definition. Client documents stay confidential — these are
            the formats, not the content.
          </p>
        </div>
        <div className="grid-3" style={{ marginTop: 44 }}>
          {docs.map((d) => (
            <div className="card hoverable doc reveal" key={d.title}>
              <div className="doc-head">
                <h3>{d.title}</h3>
                <span className="doc-tag">{d.tag}</span>
              </div>
              <p>{d.desc}</p>
              <ul className="doc-list">
                {d.inside.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="doc-for">
                <b>Used by — </b>
                {d.who}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
