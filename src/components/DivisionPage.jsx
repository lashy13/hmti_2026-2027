import { Link, useNavigate } from "react-router-dom";

import "../styles/DivisionPage.css";

function DivisionPage({
  division,
  number,
  category,
  subtitle,
  description,
  aboutTitle,
  aboutText,
  programs = [],
  members = [],
  backTo = "/divisions",
}) {
  const navigate = useNavigate();

  // Membuat class berdasarkan nama divisi
  // RISTEK -> ristek-page
  // HUMAS -> humas-page
  // KOMINFO -> kominfo-page
  const divisionClass = `${division
    ?.toLowerCase()
    .replace(/\s+/g, "-")}-page`;

  return (
    <div className={`division-page ${divisionClass}`}>

      {/* =====================================================
          BACK BUTTON
      ===================================================== */}

      <div className="division-back">
        <button
          type="button"
          onClick={() => navigate(backTo, { replace: true })}
        >
          <span>←</span>
          <span>BACK</span>
        </button>
      </div>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="division-hero">

        <div className="division-hero-number">
          {number}
        </div>

        <div className="division-hero-content">

          <span className="division-category">
            {category}
          </span>

          <h1>
            {division}
          </h1>

          <h2>
            {subtitle}
          </h2>

          <p>
            {description}
          </p>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section className="division-about">

        <div className="division-about-inner">

          <div className="division-about-title">

            <span className="division-about-label">
              ABOUT
            </span>

            <h2>
              {aboutTitle}
            </h2>

          </div>


          <div className="division-about-text">

            {aboutText?.map((text, index) => (
              <p key={index}>
                {text}
              </p>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROGRAMS
      ===================================================== */}

      <section className="division-programs">

        <div className="division-section-inner">

          <div className="division-section-heading">

            <span>
              PROGRAMS
            </span>

            <h2>
              OUR PROGRAMS
            </h2>

          </div>


          <div className="program-list">

            {programs.map((program) => {

              const hasLink = Boolean(program.link);

              const cardContent = (
                <>
                  {/* PROGRAM IMAGE */}

                  {program.image && (
                    <div className="program-image">

                      <img
                        src={program.image}
                        alt={program.title}
                      />

                    </div>
                  )}


                  {/* PROGRAM CONTENT */}

                  <div className="program-content">

                    <span className="program-category">
                      {program.category}
                    </span>

                    <div className="program-number">
                      {program.number}
                    </div>

                    <h3>
                      {program.title}
                    </h3>

                    <p>
                      {program.description}
                    </p>

                    {hasLink && (
                      <span className="program-arrow">
                        →
                      </span>
                    )}

                  </div>

                </>
              );


              /* PROGRAM DENGAN LINK */

              if (hasLink) {
                return (
                  <Link
                    key={program.number}
                    to={program.link}
                    className="program-card"
                  >
                    {cardContent}
                  </Link>
                );
              }


              /* PROGRAM TANPA LINK */

              return (
                <div
                  key={program.number}
                  className="program-card"
                >
                  {cardContent}
                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          MEMBERS
      ===================================================== */}

      <section className="division-members">

        <div className="division-section-inner">

          <div className="division-section-heading">

            <span>
              OUR TEAM
            </span>

            <h2>
              MEMBERS
            </h2>

          </div>


          <div className="members-grid">

            {members.map((member) => (

              <div
                className="member-card"
                key={member.id}
              >

                <div className="member-photo">

                  <img
                    src={member.photo}
                    alt={member.name}
                  />

                </div>


                <div className="member-info">

                  <h3>
                    {member.name}
                  </h3>

                  <p>
                    {member.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default DivisionPage;