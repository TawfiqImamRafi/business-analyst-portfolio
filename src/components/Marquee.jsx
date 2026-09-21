import { marqueeItems } from "../data/site.js";

/* The track is rendered twice so the CSS translate loops seamlessly. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" id="track">
        {[0, 1].map((pass) =>
          marqueeItems.map((item) => <span key={pass + item}>{item}</span>)
        )}
      </div>
    </div>
  );
}
