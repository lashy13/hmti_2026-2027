import { useNavigate } from "react-router-dom";
import "../styles/events.css";
import eventImage from "../assets/logo/image.png";
const events = [
  {
    number: "01",
    title: "Coming Soon",
    slug: "event-1",
    date: "Coming Soon",
    location: "UMP",
    category: "RITECH EVENT",
    description:
      "Event RITECH akan segera hadir. Nantikan informasi selengkapnya dan persiapkan dirimu untuk mengikuti keseruannya.",
  },
  {
    number: "02",
    title: "Coming Soon",
    slug: "event-1",
    date: "Coming Soon",
    location: "UMP",
    category: "RITECH EVENT",
    description:
      "Event RITECH akan segera hadir. Nantikan informasi selengkapnya dan persiapkan dirimu untuk mengikuti keseruannya.",
  },
  {
    number: "03",
    title: "Coming Soon",
    slug: "event-1",
    date: "Coming Soon",
    location: "UMP",
    category: "RITECH EVENT",
    description:
      "Event RITECH akan segera hadir. Nantikan informasi selengkapnya dan persiapkan dirimu untuk mengikuti keseruannya.",
  },
  {
    number: "04",
    title: "Coming Soon",
    slug: "event-1",
    date: "Coming Soon",
    location: "UMP",
    category: "RITECH EVENT",
    description:
      "Event RITECH akan segera hadir. Nantikan informasi selengkapnya dan persiapkan dirimu untuk mengikuti keseruannya.",
  },
];

function EventCard({ event }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/events/${event.slug}`);
  };

  return (
    <article
      className="event-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Lihat detail ${event.title}`}
    >
      {/* IMAGE */}
      <div className="event-image-box">
        <img src={eventImage} alt={event.title} className="event-image" />

        <span className="event-number">{event.number}</span>

        <span className="event-category">{event.category}</span>
      </div>

      {/* CONTENT */}
      <div className="event-card-content">
        <h2>{event.title}</h2>

        {/* META */}
        <div className="event-meta">
          <div>
            <span className="meta-icon">◷</span>
            <span>{event.date}</span>
          </div>

          <div>
            <span className="meta-icon">⌖</span>
            <span>{event.location}</span>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p>{event.description}</p>

        {/* LINE */}
        <div className="event-card-line" />

        {/* MORE */}
        <div className="event-more">
          <span>HMTI EVENT</span>
          <span className="event-arrow">↗</span>
        </div>
      </div>
    </article>
  );
}

function Events() {
  return (
    <section className="events-page" id="events">
      {/* HEADER */}
      <div className="events-header">
        <div className="events-header-inner">
          <span className="events-label">HMTI ACTIVITIES</span>

          <h1>
            Our <span>Events.</span>
          </h1>

          <p>
            Berbagai kegiatan dan event yang diselenggarakan untuk mengembangkan
            kreativitas, teknologi, kolaborasi, dan kemampuan mahasiswa
            Informatika.
          </p>
        </div>
      </div>

      {/* EVENTS */}
      <div className="events-container">
        <div className="events-grid">
          {events.map((event) => (
            <EventCard key={event.number} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
