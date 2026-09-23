import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../../styles/Prestasi.css";

// import prestasi1 from "../../assets/prestasi/prestasi-1.jpg";
// import prestasi2 from "../../assets/prestasi/prestasi-2.jpg";
// import prestasi3 from "../../assets/prestasi/prestasi-3.jpg";

function Prestasi() {

  const prestasiData = [
    {
      id: 1,
      title: "Juara 1 Hackathon",
      year: "2026",
      category: "Technology Competition",
    //   image: prestasi1,
    },

    {
      id: 2,
      title: "Juara 2 Web Development",
      year: "2026",
      category: "Web Development",
    //   image: prestasi2,
    },

    {
      id: 3,
      title: "Juara 3 Cybersecurity Competition",
      year: "2026",
      category: "Cybersecurity",
    //   image: prestasi3,
    },
  ];

  return (
    <main className="prestasi-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <section className="prestasi-hero">

        <motion.div
          className="prestasi-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="prestasi-eyebrow">
            HMTI UMP • ACHIEVEMENTS
          </span>

          <h1>
            OUR
            <br />
            <span>PRESTASI</span>
          </h1>

          <p>
            Dokumentasi berbagai pencapaian dan prestasi
            mahasiswa Teknik Informatika Universitas
            Muhammadiyah Purwokerto.
          </p>

        </motion.div>

      </section>


      {/* =========================================
          PRESTASI LIST
      ========================================= */}

      <section className="prestasi-section">

        <div className="prestasi-section-header">

          <div>
            <span>ACHIEVEMENTS</span>

            <h2>
              Pencapaian
              <br />
              <strong>Mahasiswa HMTI</strong>
            </h2>
          </div>

          <p>
            Setiap pencapaian merupakan bagian dari proses
            belajar, berkembang, dan berkarya.
          </p>

        </div>


        <div className="prestasi-grid">

          {prestasiData.map((item, index) => (

            <motion.div
              key={item.id}
              className="prestasi-card"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              <Link
                to={`/prestasi/${item.id}`}
                className="prestasi-card-link"
              >

                <div className="prestasi-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="prestasi-overlay">

                    <span>
                      VIEW DETAIL
                    </span>

                    <strong>
                      ↗
                    </strong>

                  </div>

                </div>


                <div className="prestasi-card-content">

                  <div className="prestasi-meta">

                    <span>
                      {item.category}
                    </span>

                    <span>
                      {item.year}
                    </span>

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <div className="prestasi-arrow">
                    VIEW ACHIEVEMENT
                    <span>→</span>
                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </section>

    </main>
  );
}

export default Prestasi;