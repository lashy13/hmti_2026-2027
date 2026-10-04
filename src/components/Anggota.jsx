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
      nama: "Agil Rifaldi",
      jabatan: "Ketua HMTI",
      divisi: "BPH",
      // foto: ketua,
    },
    {
      id: 2,
      nama: "Fiona Aulia WIjaya",
      jabatan: "Wakil Ketua HMTI",
      divisi: "BPH",
      // foto: wakil,
    },
    {
      id: 3,
      nama: "Nasha Widya Putri",
      jabatan: "Sekretaris 1",
      divisi: "BPH",
      // foto: anggota1,
    },
    {
      id: 4,
      nama: "Neifi Ayunda Tristianti",
      jabatan: "Sekretaris 2",
      divisi: "BPH",
      // foto: anggota2,
    },
    {
      id: 5,
      nama: "Dias Wahyu Widayati",
      jabatan: " Bendahara 1",
      divisi: "BPH",
      // foto: anggota3,
    },
    {
      id: 6,
      nama: "Salwa Humayroh",
      jabatan: "Bendahara 2",
      divisi: "BPH",
      // foto: anggota4,
    },
    {
      id: 7,
      nama: "Firman Hidayah",
      jabatan: "Ketua Divisi Ristek",
      divisi: "RISTEK",
      // foto: anggota5,
    },
    {
      id: 8,
      nama: "Habiburrahim Mu’awwadz",
      jabatan: "Staf Divisi Ristek",
      divisi: "RISTEK",
      // foto: anggota6,
    },
    {
      id: 9,
      nama: "Arkan Rosif Ashshofa",
      jabatan: "Staf Divisi Ristek",
      divisi: "RISTEK",
      // foto: anggota7,
    },
    {
      id: 10,
      nama: "Ega Juanda Putra",
      jabatan: "Staf Divisi Ristek",
      divisi: "RISTEK",
      // foto: anggota8,
    },
    {
      id: 11,
      nama: "NMuhammad Reza Fahlevi",
      jabatan: "Staf Divisi Ristek",
      divisi: "RISTEK",
      // foto: anggota9,
    },
    {
      id: 12,
      nama: "Muhammad Dzaki Arkaan",
      jabatan: "Staf Divisi Ristek",
      divisi: "RISTEK",
      // foto: anggota10,
    },
    {
      id: 13,
      nama: "Adna Afiansyah",
      jabatan: "Staff Divisi Ristek",
      divisi: "RISTEK",
      // foto: anggota11,
    },
    {
      id: 14,
      nama: "Akbar Faitu Rahman",
      jabatan: "Staff Divisi Ristek",
      divisi: "RISTEK",
      // foto: anggota12,
    },
    {
      id: 15,
      nama: "Agis Aditya",
      jabatan: "Ketua Divisi Humas",
      divisi: "HUMAS",
      // foto: anggota13,
    },
    {
      id: 16,
      nama: "Muhammad Bintang Adien",
      jabatan: "Staff Divisi Humas",
      divisi: "HUMAS",
      // foto: anggota14,
    },
    {
      id: 17,
      nama: "Wildan Imanuddin",
      jabatan: "Staff Divisi Humas",
      divisi: "HUMAS",
      // foto: anggota15,
    },
    {
      id: 18,
      nama: "Sania Salsabila",
      jabatan: "Staff Divisi Humas",
      divisi: "HUMAS",
      // foto: anggota16,
    },
    {
      id: 19,
      nama: "Tiara Ayuningtyas",
      jabatan: "Staff Divisi Humas",
      divisi: "HUMAS",
      // foto: anggota17,
    },
    {
      id: 20,
      nama: "Fakhrul Zakaria",
      jabatan: "Staff Divisi Humas",
      divisi: "HUMAS",
      // foto: anggota18,
    },
    {
      id: 21,
      nama: "Nayla Cikha Safira",
      jabatan: "Staff Divisi Humas",
      divisi: "HUMAS",
      // foto: anggota19,
    },
    {
      id: 22,
      nama: "Bondan Pratama Firdaus",
      jabatan: "Ketua Divisi Kominfo",
      divisi: "KOMINFO",
      // foto: anggota20,
    },
    {
      id: 23,
      nama: "Muhammad Diva Iyan Nur Alif ",
      jabatan: "Staff Divisi Kominfo",
      divisi: "KOMINFO",
      // foto: anggota21,
    },
    {
      id: 24,
      nama: "Nadhif Aufaa Pratama",
      jabatan: "Staff Divisi Kominfo",
      divisi: "KOMINFO",
      // foto: anggota22,
    },
    {
      id: 25,
      nama: "Haidar Aflathun",
      jabatan: "Staff Divisi Kominfo",
      divisi: "KOMINFO",
      // foto: anggota23,
    },
    {
      id: 26,
      nama: "Fatino Aziz Fadhilah",
      jabatan: "Staff Divisi Kominfo",
      divisi: "KOMINFO",
      // foto: anggota24,
    },
    {
      id: 27,
      nama: "Dwi Safira Aulia",
      jabatan: "Staff Divisi Kominfo",
      divisi: "KOMINFO",
      // foto: anggota25,
    },
    {
      id: 28,
      nama: "Lukman Nur Fadhilah",
      jabatan: "Staff Divisi Kominfo",
      divisi: "KOMINFO",
      // foto: anggota26,
    },
    {
      id: 29,
      nama: "Raynald Salsa Saputra",
      jabatan: "Ketua Divisi PSDM",
      divisi: "PSDM",
      // foto: anggota27,
    },
    {
      id: 30,
      nama: "Rafi Ikhwan Ma’ruf",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      // foto: anggota28,
    },
    {
      id: 31,
      nama: "Kinanti",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      // foto: anggota29,
    },
    {
      id: 32,
      nama: "Assifa Ramadan Kurniawan",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      // foto: anggota30,
    },
    {
      id: 33,
      nama: "Yoga Aditia Saputra",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      // foto: anggota31,
    },
    {
      id: 34,
      nama: "Hanif Jundi Prasetyo",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      // foto: anggota32,
    },
    {
      id: 35,
      nama: "Seva Ayu Salsabila",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      // foto: anggota33,
    },
    {
      id: 36,
      nama: "Muhammad Himamul Haq",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      // foto: anggota34,
    },
    {
      id: 37,
      nama: "Raya Putra Indra",
      jabatan: "Ketua Divisi Ekraf",
      divisi: "EKRAF",
      // foto: anggota35,
    },
    {
      id: 38,
      nama: "Rangga Isnata Sibkhan",
      jabatan: "Staff Divisi Ekraf",
      divisi: "EKRAF",
      // foto: anggota36,
    },
    {
      id: 39,
      nama: "Hasna Salsabila",
      jabatan: "Staff Divisi Ekraf",
      divisi: "EKRAF",
      // foto: anggota37,
    },
    {
      id: 40,
      nama: "A Nugraha Hoiri Irobbani",
      jabatan: "Staff Divisi Ekraf",
      divisi: "EKRAF",
      // foto: anggota38,
    },
    {
      id: 41,
      nama: "Zaki Wijdan Rajendra",
      jabatan: "Staff Divisi Ekraf",
      divisi: "EKRAF",
      // foto: anggota39,
    },
    {
      id: 42,
      nama: "Jona Faozan Saputra",
      jabatan: "Staff Divisi Ekraf",
      divisi: "EKRAF",
      // foto: anggota40,
    },
    {
      id: 43,
      nama: "NAditya Resya Saputra",
      jabatan: "Ketua Divisi Advokasi",
      divisi: "ADVOKASI",
      // foto: anggota41,
    },
    {
      id: 44,
      nama: "Muhammad Lutfi Bachtiar",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      // foto: anggota42,
    },
    {
      id: 45,
      nama: "Agranto Bahy Rahma",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      // foto: anggota43,
    },
    {
      id: 46,
      nama: "Rahma Syariah",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      // foto: anggota44,
    },
    {
      id: 47,
      nama: "Muhammad Asif Mardiansyah",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      // foto: anggota45,
    },
    {
      id: 48,
      nama: "Naoyama Daneela Rahma",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      // foto: anggota46,
    },
    {
      id: 49,
      nama: "Maghfira Mani Riaha Putri",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      // foto: anggota47,
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
