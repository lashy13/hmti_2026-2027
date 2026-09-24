import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import imgPlaceholder from "../assets/logo/image.png";
import "../styles/about.css";

function AboutHmti() {
  const navigate = useNavigate();

  const bphMembers = [
    {
      name: "Nama Ketua",
      position: "KETUA HMTI",
      image: imgPlaceholder,
      description:
        "Memimpin dan mengarahkan organisasi serta memastikan seluruh kegiatan HMTI berjalan sesuai tujuan.",
    },
    {
      name: "Nama Wakil",
      position: "WAKIL KETUA",
      image: imgPlaceholder,
      description:
        "Mendampingi ketua dalam menjalankan organisasi serta membantu koordinasi antar bagian dalam HMTI.",
    },
    {
      name: "Nama Sekretaris 1",
      position: "SEKRETARIS 1",
      image: imgPlaceholder,
      description:
        "Mengelola administrasi, dokumentasi, dan kebutuhan kesekretariatan organisasi secara umum.",
    },
    {
      name: "Nama Sekretaris 2",
      position: "SEKRETARIS 2",
      image: imgPlaceholder,
      description:
        "Membantu pengelolaan administrasi serta kearsipan dokumen organisasi.",
    },
    {
      name: "Nama Bendahara 1",
      position: "BENDAHARA 1",
      image: imgPlaceholder,
      description:
        "Mengelola keuangan organisasi secara tertib, transparan, dan bertanggung jawab.",
    },
    {
      name: "Nama Bendahara 2",
      position: "BENDAHARA 2",
      image: imgPlaceholder,
      description:
        "Membantu pengelolaan dana, pembukuan kas, dan laporan keuangan kegiatan.",
    },
  ];

  return (
    <>
      {/* =====================================================
          ABOUT HMTI
      ===================================================== */}

      <section
        className="hmti-section"
        id="about"
        style={{
          scrollMarginTop: "120px",
        }}
      >
        <div className="hmti-header">
          <div className="hmti-title">
            <span className="hmti-mini">
              HIMPUNAN MAHASISWA
            </span>

            <h2>
              ONE
              <br />
              <span>COMMUNITY.</span>
            </h2>
          </div>

          <div className="hmti-description">
            <p>
              Himpunan Mahasiswa Teknik Informatika atau HMTI
              merupakan wadah mahasiswa Teknik Informatika untuk
              berkembang bersama dalam bidang akademik, teknologi,
              organisasi, dan pengembangan diri.
            </p>

            <p>
              HMTI menjadi ruang bagi mahasiswa untuk membangun
              relasi, mengembangkan potensi, bertukar ide, dan
              menciptakan berbagai kegiatan yang memberikan manfaat
              bagi mahasiswa Teknik Informatika.
            </p>
          </div>
        </div>

        {/* =====================================================
            VISI MISI
        ===================================================== */}

        <motion.div
          className="hmti-visimisi"
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
          <div className="visimisi-column">
            <span className="visimisi-number">
              01
            </span>

            <h3>Visi</h3>

            <p>
              Menjadikan Himpunan Mahasiswa sebagai wadah
              pengembangan diri yang aktif, inklusif, dan progresif
              untuk seluruh mahasiswa Program Studi Teknik
              Informatika, guna menciptakan lingkungan akademik dan
              non-akademik yang berkualitas, solid, serta berdaya
              saing.
            </p>
          </div>

          <div className="visimisi-column">
            <span className="visimisi-number">
              02
            </span>

            <h3>Misi</h3>

            <ul>
              <li>
                Meningkatkan peran dan fungsi himpunan sebagai
                organisasi yang responsif terhadap kebutuhan
                mahasiswa.
              </li>

              <li>
                Mengembangkan program kerja inovatif dan
                berkelanjutan dalam bidang akademik, minat bakat,
                serta pengabdian masyarakat.
              </li>

              <li>
                Memperkuat solidaritas dan komunikasi internal antar
                anggota serta membangun hubungan harmonis dengan
                pihak luar.
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          BPH
      ===================================================== */}

      <section className="bph-section">
        <div className="bph-header">
          <div>
            <span className="about-mini">
              STRUKTUR ORGANISASI
            </span>

            <h2>
              BPH
              <br />
              <span>HMTI.</span>
            </h2>
          </div>

          <p>
            Badan Pengurus Harian merupakan bagian yang memiliki
            peran dalam mengelola, mengoordinasikan, dan memastikan
            organisasi HMTI berjalan dengan baik sesuai dengan
            tujuan yang telah ditetapkan.
          </p>
        </div>

        {/* =====================================================
            BPH MEMBERS
        ===================================================== */}

        <div className="bph-grid">
          {bphMembers.map((member, index) => (
            <motion.div
              className="bph-card"
              key={index}
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
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="bph-photo">
                <img
                  src={member.image}
                  alt={member.name}
                />

                <span className="bph-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="bph-info">
                <span>
                  {member.position}
                </span>

                <h3>
                  {member.name}
                </h3>

                <p>
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =====================================================
            DIVISIONS CTA
        ===================================================== */}

        <motion.div
          className="hmti-divisions-cta"
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
          <div className="division-cta-content">
            <span className="division-mini">
              HMTI ORGANIZATIONAL STRUCTURE
            </span>

            <h3>
              WE HAVE
              <br />
              <span>6 DIVISIONS.</span>
            </h3>

            <p>
              Dalam menjalankan berbagai program dan kegiatan,
              HMTI memiliki enam divisi yang berperan dalam
              mengembangkan potensi mahasiswa serta mendukung
              jalannya organisasi.
            </p>

            <div className="division-list">
              <div className="division-item">
                <span>01</span>
                <strong>PSDM</strong>
              </div>

              <div className="division-item">
                <span>02</span>
                <strong>RISTEK</strong>
              </div>

              <div className="division-item">
                <span>03</span>
                <strong>EKRAF</strong>
              </div>

              <div className="division-item">
                <span>04</span>
                <strong>ADVOKASI</strong>
              </div>

              <div className="division-item">
                <span>05</span>
                <strong>KOMINFO</strong>
              </div>

              <div className="division-item">
                <span>06</span>
                <strong>HUMAS</strong>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="division-button"
            onClick={() => navigate("/divisions")}
          >
            <span>EXPLORE DIVISIONS</span>
            <strong>→</strong>
          </button>
        </motion.div>
      </section>
    </>
  );
}

export default AboutHmti;