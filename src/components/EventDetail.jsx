
import { useNavigate } from "react-router-dom";
import "../styles/EventDetail.css";

function EventDetail({
  number,
  title,
  category,
  date,
  location,
  description,
  about,
  image,
}) {
  const navigate = useNavigate();

  return (
    <section className="event-detail-page">

      {/* ================= BACK BUTTON ================= */}
      <div className="event-detail-back">
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="Kembali ke halaman utama"
        >
          <span>←</span>
          <span>KEMBALI KE EVENTS</span>
        </button>
      </div>

      {/* ================= HERO ================= */}
      <section className="event-detail-hero">

        <div className="event-detail-grid" />
        <div className="event-detail-glow" />

        <div className="event-detail-content">

          <span className="event-detail-label">
            {category}
          </span>

          <h1>{title}</h1>

          <p>
            {description}
          </p>

          {/* ================= META ================= */}
          <div className="event-detail-meta">

            <div>
              <span>DATE</span>
              <strong>{date}</strong>
            </div>

            <div>
              <span>LOCATION</span>
              <strong>{location}</strong>
            </div>

            <div>
              <span>EVENT</span>
              <strong>HMTI</strong>
            </div>

          </div>

        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <main className="event-detail-main">

        {/* IMAGE */}
        <div className="event-detail-image">

          {image ? (
            <img
              src={image}
              alt={title}
            />
          ) : (
            <div className="event-image-placeholder">
              <span>HMTI EVENT {number}</span>
              <strong>{title}</strong>
              <small>Event information coming soon</small>
            </div>
          )}

        </div>

        {/* ABOUT */}
        <div className="event-detail-about">

          <span className="event-section-label">
            ABOUT EVENT
          </span>

          <h2>
            About <span>{title}.</span>
          </h2>

          <p>
            {about}
          </p>

        </div>

      </main>

    </section>
  );
}

export default EventDetail;
