import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// import cerenityImage from "../assets/cerenity/cerenity.jpg";

// import mentor1 from "../assets/cerenity/mentor1.jpg";
// import mentor2 from "../assets/cerenity/mentor2.jpg";
// import mentor3 from "../assets/cerenity/mentor3.jpg";

import "../styles/cerenity.css";

function Cerenity() {
  const mentors = [
    {
      name: "Nama Mentor 1",
      role: "Mentor Programming",
    //   image: mentor1,
    },
    {
      name: "Nama Mentor 2",
      role: "Mentor Cybersecurity",
    //   image: mentor2,
    },
    {
      name: "Nama Mentor 3",
      role: "Mentor Artificial Intelligence",
    //   image: mentor3,
    },
  ];

  return (
    <section className="cerenity">

      {/* BACK */}

      <div className="cerenity-back">
        <Link to="/">
          <span>←</span>
          KEMBALI KE HOME
        </Link>
      </div>


      {/* HERO */}

      <div className="cerenity-content">

        <motion.div
          className="cerenity-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="cerenity-label">
            HMTI • STUDY CLUB
          </span>

          <h1>
            CERENITY
            <br />
            <span>STUDY CLUB</span>
          </h1>

          <div className="cerenity-line"></div>

          <p>
            Cerenity adalah study club yang jadi ruang belajar dan
            berkembang bareng buat mahasiswa yang tertarik di bidang
            teknologi.
          </p>

          <p>
            Dengan suasana yang santai, kolaboratif, dan suportif,
            Cerenity hadir sebagai tempat untuk eksplorasi, diskusi,
            dan ngembangin skill tanpa tekanan.
          </p>

        </motion.div>


        {/* FOTO CERENITY */}

        <motion.div
          className="cerenity-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="cerenity-photo">

            <img
            //   src={cerenityImage}
              alt="Kegiatan Cerenity Study Club"
            />

            <div className="cerenity-photo-overlay"></div>

            <div className="cerenity-photo-label">
              <span>HMTI UMP</span>
              <strong>CERENITY</strong>
            </div>

          </div>

        </motion.div>

      </div>


      {/* MENTORS */}

      <section className="cerenity-mentors">

        <motion.div
          className="mentors-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <span className="cerenity-label">
            OUR MENTORS
          </span>

          <h2>
            Belajar Bersama
            <br />
            <span>Mentor Cerenity</span>
          </h2>

          <p>
            Kenali mentor yang akan menemani proses belajar,
            eksplorasi, dan pengembangan skill di Cerenity.
          </p>

        </motion.div>


        <div className="mentor-grid">

          {mentors.map((mentor, index) => (

            <motion.div
              className="mentor-card"
              key={mentor.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >

              <div className="mentor-image">

                <img
                  src={mentor.image}
                  alt={mentor.name}
                />

                <div className="mentor-number">
                  0{index + 1}
                </div>

              </div>

              <div className="mentor-info">

                <span>
                  {mentor.role}
                </span>

                <h3>
                  {mentor.name}
                </h3>

                <div className="mentor-line"></div>

                <p>
                  Membimbing dan berbagi pengalaman
                  dalam kegiatan Cerenity Study Club.
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* BOTTOM */}

      <motion.div
        className="cerenity-bottom"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <span>
          LEARN • BUILD • GROW
        </span>

        <h2>
          Tumbuh bersama,
          <br />
          <span>melangkah lebih jauh.</span>
        </h2>

      </motion.div>

    </section>
  );
}

export default Cerenity;