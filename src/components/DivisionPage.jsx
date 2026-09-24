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

  return (
    <div className="division-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="division-hero">

        {/* BACK BUTTON */}
        <button
          type="button"
          className="division-back-button"
          onClick={() => navigate(backTo, { replace: true })}
        >
          <span>←</span>
          <span>BACK</span>
        </button>


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

        <div className="division-about-title">

          <span>
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

      </section>


      {/* =====================================================
          PROGRAMS
      ===================================================== */}

      <section className="division-programs">

        <div className="section-heading">

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
                <div className="program-number">
                  {program.number}
                </div>


                {program.image && (
                  <div className="program-image">

                    <img
                      src={program.image}
                      alt={program.title}
                    />

                  </div>
                )}


                <div className="program-content">

                  <span className="program-category">
                    {program.category}
                  </span>

                  <h3>
                    {program.title}
                  </h3>

                  <p>
                    {program.description}
                  </p>

                </div>


                {hasLink && (
                  <div className="program-arrow">
                    →
                  </div>
                )}

              </>
            );


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

      </section>


      {/* =====================================================
          MEMBERS
      ===================================================== */}

      <section className="division-members">

        <div className="section-heading">

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

      </section>

    </div>
  );
}

export default DivisionPage;