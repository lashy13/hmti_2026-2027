
import { useNavigate } from "react-router-dom";
import "../styles/Events.css";
import eventImage from "../assets/logo/image.png";
const events = [
  {
    number: "01",
    title: "Hackwins",
    slug: "event-1",
    date: "12 Oktober 2026",
    location: "UMP",
    category: "RITECH EVENT",
    description:
      "Kompetisi cybersecurity yang mengasah kemampuan dan kreativitas peserta dalam menyelesaikan berbagai tantangan teknologi.",
  },
  {
    number: "02",
    title: "Mewins",
    slug: "event-2",
    date: "20 Oktober 2026",
    location: "UMP",
    category: "RITECH EVENT",
    description:
      "Ajang kreativitas dan inovasi teknologi yang memberikan ruang bagi peserta untuk menghasilkan karya terbaik.",
  },
  {
    number: "03",
    title: "Web Design",
    slug: "event-3",
    date: "5 November 2026",
    location: "UMP",
    category: "COMPETITION",
    description:
      "Kompetisi desain website yang menggabungkan kreativitas visual, teknologi, dan pengalaman pengguna.",
  },
  {
    number: "04",
    title: "Network Competition",
    slug: "event-4",
    date: "18 November 2026",
    location: "UMP",
    category: "TECHNOLOGY",
    description:
      "Kompetisi jaringan komputer untuk menguji kemampuan peserta dalam memahami dan menyelesaikan permasalahan jaringan.",
  },
  {
    number: "05",
    title: "Hackathon",
    slug: "event-5",
    date: "10 Desember 2026",
    location: "UMP",
    category: "TECHNOLOGY",
    description:
      "Kompetisi pengembangan solusi digital melalui kolaborasi, kreativitas, dan pemanfaatan teknologi.",
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
        <img
          src={eventImage}
          alt={event.title}
          className="event-image"
        />

        <span className="event-number">
          {event.number}
        </span>

        <span className="event-category">
          {event.category}
        </span>
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
    <section
      className="events-page"
      id="events"
    >
      {/* HEADER */}
      <div className="events-header">
        <div className="events-header-inner">
          <span className="events-label">
            HMTI ACTIVITIES
          </span>

          <h1>
            Our <span>Events.</span>
          </h1>

          <p>
            Berbagai kegiatan dan event yang diselenggarakan
            untuk mengembangkan kreativitas, teknologi,
            kolaborasi, dan kemampuan mahasiswa Informatika.
          </p>
        </div>
      </div>

      {/* EVENTS */}
      <div className="events-container">
        <div className="events-grid">
          {events.map((event) => (
            <EventCard
              key={event.number}
              event={event}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
