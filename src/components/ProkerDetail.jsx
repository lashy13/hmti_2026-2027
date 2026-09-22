import { Link } from "react-router-dom";
import "../styles/ProkerDetail.css";

function ProkerDetail({
  division = "HMTI",
  title = "Program Kerja",
  description = "",
  about = "",
  implementation = "",
  location = "",
  participants = "",
}) {
  // =====================================================
  // DIVISION PATH
  // Contoh:
  // RISTEK   -> /divisions/ristek
  // HUMAS    -> /divisions/humas
  // ADVOKASI -> /divisions/advokasi
  // PSDM     -> /divisions/psdm
  // EKRAF    -> /divisions/ekraf
  // =====================================================

  const divisionPath = String(division)
    .trim()
    .toLowerCase();

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

          {/* IMPLEMENTATION */}

          <div className="proker-info-card">

            <span>
              IMPLEMENTATION
            </span>

            <h3>
              {implementation}
            </h3>

          </div>


          {/* LOCATION */}

          <div className="proker-info-card">

            <span>
              LOCATION
            </span>

            <h3>
              {location}
            </h3>

          </div>


          {/* PARTICIPANTS */}

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
          BACK TO DIVISION
      ===================================================== */}

      <section className="proker-back">

        <Link
          to={`/divisions/${divisionPath}`}
          className="proker-back-button"
        >
          ← BACK TO {division}
        </Link>

      </section>

    </main>
  );
}

export default ProkerDetail;