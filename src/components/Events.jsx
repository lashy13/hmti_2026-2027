import imgHackwins from "../assets/logo/image.png";
import imgMewins from "../assets/logo/image.png";
import imgWebDesign from "../assets/logo/image.png";
import imgNetwork from "../assets/logo/image.png";
import imgHackathon from "../assets/logo/image.png";

const events = [
  {
    number: "01",
    category: "RITECH EVENT",
    title: "Hackwins",
    image: imgHackwins,
    date: "12 Oktober 2026",
    location: "Universitas Muhammadiyah Purwokerto",
    description: "Hackwins merupakan kegiatan yang berfokus pada pengembangan kemampuan teknologi dan cybersecurity melalui tantangan yang menarik dan kompetitif."
  },
  {
    number: "02",
    category: "RITECH EVENT",
    title: "Mewins",
    image: imgMewins,
    date: "20 Oktober 2026",
    location: "Universitas Muhammadiyah Purwokerto",
    description: "Mewins menjadi ruang bagi mahasiswa untuk mengembangkan kreativitas dan kemampuan teknologi melalui kegiatan yang interaktif dan kolaboratif."
  },
  {
    number: "03",
    category: "COMPETITION",
    title: "Web Design",
    image: imgWebDesign,
    date: "5 November 2026",
    location: "Universitas Muhammadiyah Purwokerto",
    description: "Kompetisi desain website yang memberikan kesempatan bagi peserta untuk menunjukkan kreativitas, kemampuan UI/UX, dan pemahaman teknologi web."
  },
  {
    number: "04",
    category: "TECHNOLOGY",
    title: "Network Competition",
    image: imgNetwork,
    date: "18 November 2026",
    location: "Universitas Muhammadiyah Purwokerto",
    description: "Kompetisi jaringan komputer yang dirancang untuk menguji kemampuan peserta dalam memahami dan menyelesaikan berbagai permasalahan jaringan."
  },
  {
    number: "05",
    category: "TECHNOLOGY",
    title: "Hackathon",
    image: imgHackathon,
    date: "10 Desember 2026",
    location: "Universitas Muhammadiyah Purwokerto",
    description: "Hackathon menjadi wadah untuk membangun solusi teknologi secara kreatif melalui kerja sama tim, problem solving, dan pengembangan produk."
  }
];

function Events() {
  return (
    <main className="events-page" id="events">
      <section className="events-hero">
        <div className="events-hero-content">
          <h1>Our <span>Events.</span></h1>
          <p>Berbagai kegiatan dan event yang diselenggarakan untuk mengembangkan kreativitas, teknologi, kolaborasi, dan kemampuan mahasiswa Informatika.</p>
        </div>
      </section>

      <section className="events-container">
        {events.map((event, index) => (
          <article className={`event-item ${index % 2 !== 0 ? "event-reverse" : ""}`} key={event.number}>
            <div className="event-image-wrapper">
              <span className="event-number">{event.number}</span>
              <img src={event.image} alt={event.title} className="event-image" />
            </div>

            <div className="event-content">
              <span className="event-small-title">{event.category}</span>
              <h2>{event.title}</h2>

              <div className="event-info">
                <div className="event-info-item">
                  <div className="info-icon">◷</div>
                  <div>
                    <span className="info-label">DATE</span>
                    <p>{event.date}</p>
                  </div>
                </div>

                <div className="event-info-item">
                  <div className="info-icon">◇</div>
                  <div>
                    <span className="info-label">LOCATION</span>
                    <p>{event.location}</p>
                  </div>
                </div>
              </div>

              <div className="event-line"></div>
              <p className="event-description">{event.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Events;