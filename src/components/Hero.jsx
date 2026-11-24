import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hmtiLogo from "../assets/logo/hmti-logo.png";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* =========================
          HERO CONTENT
      ========================== */}

      <div className="hero-content">

        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span></span>
          UNIVERSITAS MUHAMMADIYAH PURWOKERTO
        </motion.div>


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          HIMPUNAN
          <br />
          <span>MAHASISWA</span>
          <br />
          TEKNIK
          <br />
          <span>INFORMATIKA</span>
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Himpunan Mahasiswa Teknik Informatika menjadi ruang untuk belajar,
          berkarya, berkolaborasi, dan berkembang melalui teknologi.
        </motion.p>


        {/* =========================
            HERO ACTIONS
        ========================== */}

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >

          {/* OUR DIVISIONS */}

          <Link
            to="/divisions"
            className="hero-action primary"
          >
            OUR DIVISIONS
            <span></span>
          </Link>


          {/* CERENITY */}

          <Link
            to="/cerenity"
            className="hero-action secondary"
          >
            CERENITY
            <span></span>
          </Link>


          {/* PRESTASI */}

          <Link
            to="/prestasi"
            className="hero-action secondary"
          >
            PRESTASI
            <span></span>
          </Link>


          {/* ANGGOTA */}

          <Link
            to="/anggota"
            className="hero-action secondary"
          >
            ANGGOTA
            <span></span>
          </Link>

        </motion.div>


        {/* =========================
            STATS
        ========================== */}

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >

          <div className="hero-stat">
            <strong>06</strong>
            <span>DIVISIONS</span>
          </div>

          <div className="hero-stat">
            <strong>45+</strong>
            <span>ACTIVE MEMBERS</span>
          </div>

          <div className="hero-stat">
            <strong>20+</strong>
            <span>PROGRAMS</span>
          </div>

        </motion.div>

      </div>


      {/* =========================
          LOGO SCENE
      ========================== */}

      <motion.div
        className="logo-scene"
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.3,
        }}
      >

        {/* ROTATING TEXT */}

        <div className="rotating-text">

          <svg viewBox="0 0 500 500">

            <defs>

              <path
                id="circlePath"
                d="
                  M 250,250
                  m -190,0
                  a 190,190 0 1,1 380,0
                  a 190,190 0 1,1 -380,0
                "
              />

            </defs>

            <text>

              <textPath href="#circlePath">
                TECHNOLOGY • CREATIVITY • INNOVATION • HMTI •
              </textPath>

            </text>

          </svg>

        </div>


        {/* RINGS */}

        <div className="outer-ring"></div>

        <div className="orbit orbit-one"></div>

        <div className="orbit orbit-two"></div>


        {/* LOGO */}

        <motion.div
          className="logo-wrapper"
          animate={{
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <div className="logo-glow"></div>

          <div className="logo-card">

            <img
              src={hmtiLogo}
              alt="Logo HMTI"
            />

          </div>

        </motion.div>


        {/* FLOATING DOTS */}

        <div className="floating-dot dot-one"></div>

        <div className="floating-dot dot-two"></div>

        <div className="floating-dot dot-three"></div>


        {/* CAPTION */}

        <div className="logo-caption">

          <span>
            HIMPUNAN MAHASISWA
          </span>

          <strong>
            TEKNIK INFORMATIKA
          </strong>

          <small>
            UNIVERSITAS MUHAMMADIYAH PURWOKERTO
          </small>

        </div>

      </motion.div>


      {/* =========================
          HERO BOTTOM
      ========================== */}

      <div className="hero-bottom">

        <div></div>

        <div className="scroll-indicator">

          <div className="scroll-line"></div>

        </div>

        <div className="year">

          <img
            src={hmtiLogo}
            alt="Logo HMTI"
          />

          <div>

            <strong>
              Est. 2007
            </strong>

            <span>
              UMP Purwokerto
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;