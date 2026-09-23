import { processSteps } from "../data/site.js";

const n = (i) => String(i + 1).padStart(2, "0");

export default function Process() {
  return (
    <section className="dark" id="process">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">My product process</div>
          <h2 className="title">A repeatable way of working.</h2>
        </div>
        <div className="process reveal">
          {processSteps.map(([title, body], i) => (
            <div className="p" key={title} style={{ "--d": `${i * 70}ms`, "--i": i }}>
              <div className="num n">{n(i)}</div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
