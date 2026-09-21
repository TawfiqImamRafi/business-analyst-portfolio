import {
  EMAIL,
  PHONE,
  PHONE_HREF,
  RESUME,
  RESUME_FILENAME,
} from "../data/site.js";

export default function Contact() {
  return (
    <section className="dark" id="contact">
      <div className="wrap">
        <div className="two-col">
          <div className="reveal">
            <div className="eyebrow">Contact</div>
            <h2 className="title">
              Let's build better
              <br />
              digital products.
            </h2>
            <p className="lede">
              Open to Business Analyst, Product Analyst, Product Specialist and
              Product Manager conversations.
            </p>
            <div className="hero-btns" style={{ marginBottom: 0 }}>
              <a className="btn light" href={`mailto:${EMAIL}`}>
                Get in Touch
              </a>
              <a className="btn ghost-dark" href={RESUME} download={RESUME_FILENAME}>
                Download Resume
              </a>
            </div>
          </div>
          <div className="contact-card reveal">
            <h3>Rifat Jahan Mim</h3>
            <div className="sub">
              Business Analyst | Product Analyst | Product &amp; Solution Designer
            </div>
            <div className="crow">
              <span className="k">Email</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="crow">
              <span className="k">Phone</span>
              <a href={`tel:${PHONE_HREF}`}>{PHONE}</a>
            </div>
            <div className="crow">
              <span className="k">Location</span>
              <span className="v">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
        <footer>© {new Date().getFullYear()} Rifat Jahan Mim. All rights reserved.</footer>
      </div>
    </section>
  );
}
