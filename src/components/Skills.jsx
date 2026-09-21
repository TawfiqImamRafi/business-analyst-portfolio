import { skills } from "../data/site.js";

export default function Skills() {
  return (
    <section className="alt" id="skills">
      <div className="wrap">
        <div className="reveal">
          <div className="eyebrow">Skills</div>
          <h2 className="title">
            Grouped by how the
            <br />
            work is actually used.
          </h2>
        </div>
        <div className="grid-3" style={{ marginTop: 44 }}>
          {skills.map(([group, tags], i) => (
            <div
              className="card skills reveal"
              key={group}
              style={{ "--d": `${(i % 3) * 70}ms` }}
            >
              <h3>{group}</h3>
              <div className="tagwrap">
                {tags.map((tag) => (
                  <span className="t" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
