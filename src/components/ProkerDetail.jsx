import { useNavigate } from "react-router-dom";
import "../styles/ProkerDetail.css";

function ProkerDetail({
  division = "HMTI",
  title = "Program Kerja",
  description = "",
  about = "",
  implementation = "",
  location = "",
  participants = "",
  pj = [],
}) {
  const navigate = useNavigate();

  const divisionPath = String(division)
    .trim()
    .toLowerCase();

  const handleBack = () => {
    navigate(`/divisions/${divisionPath}`, {
      replace: true,
    });
  };

  return (
    <main className="proker-detail">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="proker-hero">

        <div className="proker-hero-number">
          {division}
        </div>

        <div className="proker-hero-content">

          <span className="proker-label">
            {division} / PROGRAM KERJA
          </span>

          <h1>
            {title}
          </h1>

          <p>
            {description}
          </p>

        </div>

      </section>


      {/* =====================================================
          ABOUT PROGRAM
      ===================================================== */}

      <section className="proker-about">

        <div className="proker-section-label">
          ABOUT PROGRAM
        </div>

        <div className="proker-about-content">

          <h2>
            {title}
          </h2>

          <p>
            {about}
          </p>

        </div>

      </section>


      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <section className="proker-info">

        <div className="proker-section-label">
          INFORMATION
        </div>

        <div className="proker-info-grid">

          <div className="proker-info-card">
            <span>
              IMPLEMENTATION
            </span>

            <h3>
              {implementation}
            </h3>
          </div>


          <div className="proker-info-card">
            <span>
              LOCATION
            </span>

            <h3>
              {location}
            </h3>
          </div>


          <div className="proker-info-card">
            <span>
              PARTICIPANTS
            </span>

            <h3>
              {participants}
            </h3>
          </div>

        </div>

      </section>


      {/* =====================================================
          PERSON IN CHARGE
      ===================================================== */}

      {pj.length > 0 && (
        <section className="proker-pj-section">

          <div className="proker-section-label">
            PERSON IN CHARGE
          </div>

          <div className="proker-pj-grid">

            {pj.map((person, index) => (
              <div
                className="proker-pj"
                key={index}
              >

                <div className="proker-pj-photo">

                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                    />
                  ) : (
                    <div className="proker-pj-placeholder">
                      PJ
                    </div>
                  )}

                </div>

                <div className="proker-pj-info">

                  <span>
                    PENANGGUNG JAWAB
                  </span>

                  <h3>
                    {person.name}
                  </h3>

                  <p>
                    {person.position}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </section>
      )}


      {/* =====================================================
          BACK TO DIVISION
      ===================================================== */}

      <section className="proker-back">

        <button
          type="button"
          className="proker-back-button"
          onClick={handleBack}
        >
          ← BACK TO {division}
        </button>

      </section>

    </main>
  );
}

export default ProkerDetail;