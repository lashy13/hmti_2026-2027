import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ristekLogo from "../assets/Divisions/ristek.png";
import humasLogo from "../assets/Divisions/humas.png";
import ekraf from "../assets/Divisions/ekraf.png";

function Divisions() {
  const navigate = useNavigate();

  return (
    <section id="divisions" className="divisions-section">
      {/* =========================
          BACK TO HMTI
      ========================= */}
      <button className="back-hmti-button" onClick={() => navigate("/hmti")}>
        <span>←</span>
        BACK TO HMTI
      </button>

      {/* =========================
          HEADER
      ========================= */}
      <div className="divisions-header">
        <div>
          <span className="division-mini">ORGANIZATIONAL STRUCTURE</span>
          <h2>
            SIX
            <br />
            <span>DIVISIONS.</span>
          </h2>
        </div>
        <p>
          HMTI terdiri dari enam divisi yang memiliki peran dan fokus
          masing-masing. Bersama-sama, setiap divisi menjadi bagian dari
          perjalanan mahasiswa Teknik Informatika untuk berkembang, berkarya,
          dan berkontribusi.
        </p>
      </div>

      {/* =========================
          DIVISION GRID
      ========================= */}
      <div className="divisions-grid">
        {/* =========================
            01. PSDM
        ========================= */}
        <motion.article
          className="division-card psdm-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
        >
          <div className="division-top">
            <span>01</span>
            <span>DEVELOPMENT</span>
          </div>

          {/* Logo Simbol Pengganti Bintang */}
          <div className="division-symbol-img">
            <img src="/images/psdm-logo.png" alt="PSDM Logo" />
          </div>

          <div className="division-content">
            <h3>PSDM</h3>
            <span className="division-full">
              PENGEMBANGAN SUMBER DAYA MAHASISWA
            </span>
            <p>
              Berfokus pada pengembangan potensi, kemampuan, dan kualitas
              mahasiswa melalui kegiatan pengembangan diri, organisasi, dan
              pembelajaran.
            </p>

            {/* Program Kerja Asli */}
            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>OSMA</span>
                <small>DEVELOPMENT</small>
              </div>
              <div className="division-mini-program">
                <span>PENGURUS MUDA</span>
                <small>LEARNING</small>
              </div>
              <div className="division-mini-program">
                <span>LATIHAN DASAR ORGANISASI</span>
                <small>LEARNING</small>
              </div>
              <div className="division-mini-program">
                <span>IT SPORT</span>
                <small>DEVELOPMENT</small>
              </div>
            </div>

            {/* Tombol Explore */}
            <button
              className="division-explore-btn"
              onClick={() => navigate("/divisions/psdm")}
            >
              <span>Explore Division</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="division-bottom">
            <span>01 / 06</span>
            <span>PSDM</span>
          </div>
        </motion.article>

        {/* =========================
            02. EKRAF
        ========================= */}
        <motion.article
          className="division-card ekraf-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <div className="division-top">
            <span>02</span>
            <span>CREATIVE</span>
          </div>

          <div className="division-symbol-img">
            <img src={ekraf} alt="ekraf Logo" />
          </div>

          <div className="division-content">
            <h3>EKRAF</h3>
            <span className="division-full">EKONOMI KREATIF</span>
            <p>
              Mendorong kreativitas mahasiswa dalam menghasilkan ide, karya, dan
              peluang melalui kegiatan kreatif dan inovatif.
            </p>

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>PDH/KORSA</span>
                <small>DEVELOPMENT</small>
              </div>
              <div className="division-mini-program">
                <span>MANAJEMEN MEDIA SOSIAL</span>
                <small>LEARNING</small>
              </div>
              <div className="division-mini-program">
                <span>MAERCHANDISE</span>
                <small>CAPACITY</small>
              </div>
               <div className="division-mini-program">
                <span>WAROENG EKRAF</span>
                <small>DEVELOPMENT</small>
              </div>
            </div>

            <button
              className="division-explore-btn"
              onClick={() => navigate("/divisions/ekraf")}
            >
              <span>Explore Division</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="division-bottom">
            <span>02 / 06</span>
            <span>EKRAF</span>
          </div>
        </motion.article>

        {/* =========================
            03. ADVOKASI
        ========================= */}
        <motion.article
          className="division-card advokasi-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <div className="division-top">
            <span>03</span>
            <span>ASPIRATION</span>
          </div>

          <div className="division-symbol-img">
            <img src="/images/advokasi-logo.png" alt="Advokasi Logo" />
          </div>

          <div className="division-content">
            <h3>ADVOKASI</h3>
            <span className="division-full">ADVOKASI MAHASISWA</span>
            <p>
              Menjadi wadah bagi mahasiswa untuk menyampaikan aspirasi,
              kebutuhan, dan berbagai persoalan yang berkaitan dengan kehidupan
              mahasiswa.
            </p>

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>DISKUSI UMUM</span>
                <small>DEVELOPMENT</small>
              </div>
              <div className="division-mini-program">
                <span>SAKTI</span>
                <small>LEARNING</small>
              </div>
              <div className="division-mini-program">
                <span>HARI WAJIB PDH</span>
                <small>CAPACITY</small>
              </div>
               <div className="division-mini-program">
                <span>LDP</span>
                <small>CAPACITY</small>
              </div>
               <div className="division-mini-program">
                <span>KOTAK ASPIRASI</span>
                <small>CAPACITY</small>
              </div>
            </div>

            <button
              className="division-explore-btn"
              onClick={() => navigate("/divisions/advokasi")}
            >
              <span>Explore Division</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="division-bottom">
            <span>03 / 06</span>
            <span>ADVOKASI</span>
          </div>
        </motion.article>

        {/* =========================
            04. KOMINFO
        ========================= */}
        <motion.article
          className="division-card division-featured kominfo-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <div className="division-top">
            <span>04</span>
            <span>INFORMATION</span>
          </div>

          <div className="division-symbol-img">
            <img src="/images/kominfo-logo.png" alt="Kominfo Logo" />
          </div>

          <div className="division-content">
            <h3>KOMINFO</h3>
            <span className="division-full">KOMUNIKASI DAN INFORMASI</span>
            <p>
              Mengelola informasi, publikasi, dan media digital HMTI agar
              informasi organisasi dapat tersampaikan dengan baik kepada
              mahasiswa.
            </p>

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>PENGELOLAAN SOSIAL MEDIA HMTI</span>
                <small>DEVELOPMENT</small>
              </div>
              <div className="division-mini-program">
                <span>DOKUTI</span>
                <small>LEARNING</small>
              </div>
              <div className="division-mini-program">
                <span>MEDPART</span>
                <small>CAPACITY</small>
              </div>
            </div>

            <button
              className="division-explore-btn"
              onClick={() => navigate("/divisions/kominfo")}
            >
              <span>Explore Division</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="division-bottom">
            <span>04 / 06</span>
            <span>KOMINFO</span>
          </div>
        </motion.article>

        {/* =========================
            05. HUMAS
        ========================= */}
        <motion.article
          className="division-card humas-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.2 }}
        >
          <div className="division-top">
            <span>05</span>
            <span>RELATION</span>
          </div>

          <div className="division-symbol-img">
           <img src={humasLogo} alt="Humas Logo" />
          </div>

          <div className="division-content">
            <h3>HUMAS</h3>
            <span className="division-full">HUBUNGAN MASYARAKAT</span>
            <p>
              Membangun dan menjaga hubungan yang baik antara HMTI dengan
              mahasiswa, organisasi lain, serta pihak eksternal.
            </p>

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>STUDI BANDING</span>
                <small>DEVELOPMENT</small>
              </div>
              <div className="division-mini-program">
                <span>SAFARI HUMAS</span>
                <small>LEARNING</small>
              </div>
              <div className="division-mini-program">
                <span>BAKTI SOSIAL</span>
                <small>CAPACITY</small>
              </div>
            </div>

            <button
              className="division-explore-btn"
              onClick={() => navigate("/divisions/humas")}
            >
              <span>Explore Division</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="division-bottom">
            <span>05 / 06</span>
            <span>HUMAS</span>
          </div>
        </motion.article>

        {/* =========================
            06. RISTEK
        ========================= */}
        <motion.article
          className="division-card ristek-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          <div className="division-top">
            <span>06</span>
            <span>TECHNOLOGY</span>
          </div>

          <div className="division-symbol-img">
           <img src={ristekLogo} alt="Ristek Logo" />
          </div>

          <div className="division-content">
            <h3>RISTEK</h3>
            <span className="division-full">RISET DAN TEKNOLOGI</span>
            <p>
              Berfokus pada pengembangan teknologi, riset, dan peningkatan
              kemampuan mahasiswa dalam bidang informatika.
            </p>

            <div className="division-mini-programs">
              <div className="division-mini-program">
                <span>WEB HMTI</span>
                <small>DEVELOPMENT</small>
              </div>
              <div className="division-mini-program">
                <span>NITRO</span>
                <small>LEARNING</small>
              </div>
              <div className="division-mini-program">
                <span>STUDY CLUB</span>
                <small>CAPACITY</small>
              </div>
            </div>

            <button
              className="division-explore-btn"
              onClick={() => navigate("/divisions/ristek")}
            >
              <span>Explore Division</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="division-bottom">
            <span>06 / 06</span>
            <span>RISTEK</span>
          </div>
        </motion.article>
      </div>

      {/* =========================
          FOOTER
      ========================= */}
      <div className="division-footer">
        <div className="division-counter">
          <strong>06</strong>
          <span>
            DIVISIONS
            <br />
            ONE COMMUNITY
          </span>
        </div>
        <div className="division-footer-line"></div>
        <span className="division-footer-text">
          DIFFERENT ROLES. ONE ORGANIZATION.
        </span>
      </div>
    </section>
  );
}

export default Divisions;
