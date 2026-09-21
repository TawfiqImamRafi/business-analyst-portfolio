import { principles } from "../data/site.js";

const n = (i) => String(i + 1).padStart(2, "0");

export default function Principles() {
  return (
    <section id="principles">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Working principles</div>
          <h2 className="title">How I show up on a team.</h2>
        </div>
        <div className="grid-3" style={{ marginTop: 44 }}>
          {principles.map(([title, body], i) => (
            <div
              className="card hoverable reveal"
              key={title}
              style={{ "--d": `${(i % 3) * 70}ms` }}
            >
              <div className="num">{n(i)}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
