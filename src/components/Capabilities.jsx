import { capabilities } from "../data/site.js";
import { indexLabel } from "../lib/format.js";

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">What I do</div>
          <h2 className="title">
            Six capabilities I bring
            <br />
            to a product team.
          </h2>
        </div>
        <div className="grid-3" style={{ marginTop: 44 }}>
          {capabilities.map(([title, body], i) => (
            <div
              className="card hoverable reveal"
              key={title}
              style={{ "--d": `${(i % 3) * 70}ms` }}
            >
              <div className="num">{indexLabel(i)}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
