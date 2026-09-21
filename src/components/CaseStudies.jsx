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
            Eight products I've worked on across travel, healthcare, payments and
            commerce — all live and serving real users.
          </p>
        </div>
        <div className="cases">
          {/* Names only — no description, by design. --d staggers the reveal. */}
          {cases.map((name, i) => (
            <article
              className="card hoverable case reveal"
              key={name}
              style={{ "--d": `${i * 55}ms` }}
            >
              <span className="num">{n(i)}</span>
              <h3>{name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
