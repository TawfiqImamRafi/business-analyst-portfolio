import { liveProducts } from "../data/site.js";

const n = (i) => String(i + 1).padStart(2, "0");

export default function LiveProducts() {
  return (
    <section className="alt" id="products">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Live products</div>
          <h2 className="title">Real products, live in the market.</h2>
          <p className="lede">
            {liveProducts.length} products I've worked on across travel, payments,
            commerce and government — all live and serving real users.
          </p>
        </div>
        <div className="products">
          {/* --d staggers the reveal across the grid */}
          {liveProducts.map(({ name, note, live = true }, i) => (
            <article
              className="card hoverable product reveal"
              key={name}
              style={{ "--d": `${i * 55}ms`, "--i": i }}
            >
              <span className="num">{n(i)}</span>
              <h3>{name}</h3>
              {note ? (
                <span className="live note">{note}</span>
              ) : live ? (
                <span className="live">
                  <i className="dot" />
                  Live
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
