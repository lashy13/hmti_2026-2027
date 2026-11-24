import { useNavigate } from "react-router-dom";
import "../styles/ProkerDetail.css";

function ProkerDetail({
  division = "HMTI",
  title = "Program Kerja",
  description = "",
  about = "",
  activityImage = "",
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
    <main className={`proker-detail ${divisionPath}-page`}>

      {/* BACK BUTTON */}

      <div className="proker-top-back">
        <button
          type="button"
          className="proker-back-button"
          onClick={handleBack}
        >
          <span className="back-arrow">←</span>
          <span>BACK TO {division}</span>
        </button>
      </div>


      {/* HERO */}

      <section className="proker-hero">

        <div className="proker-orb proker-orb-one"></div>
        <div className="proker-orb proker-orb-two"></div>

        <div className="proker-grid"></div>

        <div className="proker-hero-number">
          {division}
        </div>

        <div className="proker-hero-content">

          <span className="proker-label">
            {division} / PROGRAM KERJA
          </span>

          <h1>{title}</h1>

          <p>{description}</p>

        </div>

      </section>


      {/* =====================================================
          ACTIVITY + ABOUT
      ===================================================== */}

      <section className="proker-main-content">

        {/* KOLOM KIRI — FOTO */}

        <div className="proker-activity">

          <div className="proker-section-label">
            ACTIVITY
          </div>

          <div className="proker-activity-wrapper">

            {activityImage ? (
              <>
                <div className="proker-activity-shine"></div>

                <img
                  src={activityImage}
                  alt={`${title} activity`}
                  className="proker-activity-image"
                />

                <div className="proker-activity-overlay">
                  <span>{title}</span>
                </div>
              </>
            ) : (
              <div className="proker-activity-placeholder">
                <span>ACTIVITY PHOTO</span>
                <small>Foto kegiatan belum tersedia</small>
              </div>
            )}

          </div>

        </div>


        {/* KOLOM KANAN — PENJELASAN */}

        <div className="proker-about">

          <div className="proker-section-label">
            ABOUT PROGRAM
          </div>

          <div className="proker-about-content">

            <h2>{title}</h2>

            <p>{about}</p>

          </div>

        </div>

      </section>


      {/* PERSON IN CHARGE */}

      {pj.length > 0 && (
        <section className="proker-pj-section">

          <div className="proker-section-label">
            PERSON IN CHARGE
          </div>

          <h2 className="proker-pj-title">
            The People Behind
            <span> {title}</span>
          </h2>

          <div className="proker-pj-grid">

            {pj.map((person, index) => (
              <div
                className="proker-pj"
                key={index}
              >

                <div className="proker-pj-photo-wrapper">

                  <div className="proker-pj-ring"></div>

                  <div className="proker-pj-photo">

                    {person.photo ? (
                      <img
                        src={person.photo}
                        alt={person.name}
                      />
                    ) : (
                      <div className="proker-pj-placeholder">
                        {person.name
                          ? person.name.charAt(0).toUpperCase()
                          : "P"}
                      </div>
                    )}

                  </div>

                </div>

                <div className="proker-pj-info">

                  <span>PENANGGUNG JAWAB</span>

                  <h3>{person.name}</h3>

                  <p>{person.position}</p>

                </div>

              </div>
            ))}

          </div>

        </section>
      )}

    </main>
  );
}

export default ProkerDetail;