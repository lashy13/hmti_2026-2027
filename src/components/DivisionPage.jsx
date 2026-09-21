import { Link } from "react-router-dom";
import "../styles/DivisionPage.css";

function DivisionPage({
  division,
  number,
  category,
  subtitle,
  description,
  aboutTitle,
  aboutText,
  programs,
  members,
}) {
  return (
    <main className={`division-page ${division.toLowerCase()}-page`}>
      {/* BACK */}
      <Link to="/divisions" className="division-back">
        ← BACK TO DIVISIONS
      </Link>

      {/* HERO */}
      <section className="division-hero">
        <div className="division-hero-content">
          <span className="division-label">
            {number} / 06 — {category}
          </span>

          <h1>
            {division}
            <span>.</span>
          </h1>

          <h3>{subtitle}</h3>

          <p>{description}</p>
        </div>

        <div className="division-hero-box">
          <div className="hero-circle">{division.charAt(0)}</div>

          <span>{category} • HMTI</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="division-section">
        <div className="section-title">
          <span>01 — ABOUT</span>

          <h2>
            DEVELOPING
            <br />
            <strong>{aboutTitle}.</strong>
          </h2>
        </div>

        <div className="section-text">
          {aboutText.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </section>

      {/* PROGRAM */}
      {/* PROGRAM */}
      <section className="division-program">
        <div className="section-title">
          <span>02 — PROGRAM KERJA</span>

          <h2>
            OUR
            <br />
            <strong>PROGRAMS.</strong>
          </h2>
        </div>

        <div className="program-grid">
          {programs.map((program) => (
            <article
              className="program-card"
              key={program.number}
              style={{
                backgroundImage: `url(${program.image})`,
              }}
            >
              <div className="program-overlay"></div>

              <span className="program-number">{program.number}</span>

              <div className="program-content">
                <span className="program-category">{program.category}</span>

                <h3>{program.title}</h3>

                <p>{program.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* MEMBERS */}
      <section className="division-members">
        <div className="section-title">
          <span>03 — OUR TEAM</span>

          <h2>
            {division}
            <br />
            <strong>MEMBERS.</strong>
          </h2>
        </div>

        <div className="members-grid">
          {members.map((member) => (
            <article className="member-card" key={member.id}>
              <div
                className="member-photo"
                style={{
                  backgroundImage: `url(${member.photo})`,
                }}
              />

              <div className="member-info">
                <span>{String(member.id).padStart(2, "0")}</span>

                <h3>{member.name}</h3>

                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
    </main>
  );
}

export default DivisionPage;
