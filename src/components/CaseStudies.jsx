import { cases } from "../data/site.js";

const n = (i) => String(i + 1).padStart(2, "0");

export default function CaseStudies() {
  return (
    <section id="cases">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Featured case studies</div>
          <h2 className="title">Real products, live in the market.</h2>
          <p className="lede">
            Eight live products I've worked on across travel, healthcare, payments
            and commerce — serving both B2B and B2C. Each card is what the product
            does and exactly where I came in.
          </p>
        </div>
        <div className="cases">
          {cases.map((c, i) => (
            <article className="card hoverable case reveal" key={c.name}>
              <div className="case-top">
                <span className="num">{n(i)}</span>
                <span className="tag">{c.tag}</span>
              </div>
              <h3>{c.name}</h3>
              <div className="kind">{c.kind}</div>
              <p className="desc">{c.desc}</p>
              <div className="part">
                <b>My part —</b> {c.part}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
