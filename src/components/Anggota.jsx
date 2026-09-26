  import { motion } from "framer-motion";
  import { useNavigate } from "react-router-dom";
  import "../styles/Anggota.css";

  // =====================================================
  // FOTO ANGGOTA
  // =====================================================

  // import ketua from "../assets/anggota/ketua.jpg";
  // import wakil from "../assets/anggota/wakil.jpg";
  // import anggota1 from "../assets/anggota/anggota-1.jpg";
  // import anggota2 from "../assets/anggota/anggota-2.jpg";
  // import anggota3 from "../assets/anggota/anggota-3.jpg";
  // import anggota4 from "../assets/anggota/anggota-4.jpg";

  // =====================================================
  // COMPONENT
  // =====================================================

  function Anggota() {
    const navigate = useNavigate();

    // ===================================================
    // DATA ANGGOTA
    // ===================================================

    const anggota = [
      {
        id: 1,
        nama: "Nama Ketua",
        jabatan: "Ketua HMTI",
        divisi: "BPH",
        // foto: ketua,
      },
      {
        id: 2,
        nama: "Nama Wakil",
        jabatan: "Wakil Ketua HMTI",
        divisi: "BPH",
        // foto: wakil,
      },
      {
        id: 3,
        nama: "Nama Anggota 1",
        jabatan: "Anggota",
        divisi: "RISTEK",
        // foto: anggota1,
      },
      {
        id: 4,
        nama: "Nama Anggota 2",
        jabatan: "Anggota",
        divisi: "PSDM",
        // foto: anggota2,
      },
      {
        id: 5,
        nama: "Nama Anggota 3",
        jabatan: "Anggota",
        divisi: "EKRAF",
        // foto: anggota3,
      },
      {
        id: 6,
        nama: "Nama Anggota 4",
        jabatan: "Anggota",
        divisi: "HUMAS",
        // foto: anggota4,
      },
    ];

    return (
      <main className="anggota-page">

        {/* MEMBER SECTION */}
        <section className="anggota-section">
          <button className="anggota-back-button" onClick={() => navigate(-1)}>
            <span className="back-arrow">←</span>
            Back
          </button>

          <div className="anggota-container">
            {/* HEADER */}
            <motion.div
              className="anggota-section-header"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <div>
                <span className="section-label">HMTI 2026 / 2027</span>

                <h2>
                  Pengurus &
                  <br />
                  <strong>Anggota HMTI</strong>
                </h2>
              </div>

              <p>
                Satu himpunan, satu tujuan. Bersama membangun lingkungan Teknik
                Informatika yang aktif, kreatif, dan kolaboratif.
              </p>
            </motion.div>

            {/* MEMBER GRID */}
            <div className="anggota-grid">
              {anggota.map((item, index) => (
                <motion.article
                  className="anggota-card"
                  key={item.id}
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                >
                  {/* FOTO */}
                  <div className="anggota-photo">
                    <img src={item.foto} alt={item.nama} loading="lazy" />

                    <div className="anggota-number">
                      {String(item.id).padStart(2, "0")}
                    </div>

                    <div className="anggota-photo-overlay"></div>
                  </div>

                  {/* INFO */}
                  <div className="anggota-info">
                    <span className="anggota-divisi">{item.divisi}</span>

                    <h3>{item.nama}</h3>

                    <p>{item.jabatan}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  export default Anggota;
