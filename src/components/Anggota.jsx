import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/Anggota.css";

// =====================================================
// FOTO ANGGOTA
// =====================================================
//BPH
import nasha from "../assets/Anggota/BPH/Nasha.png";

// ADVOKASI
import Asif from "../assets/Anggota/Advokasi/Asif.png";
import Lutfi from "../assets/Anggota/Advokasi/Luthfi.png";
import Naoyama from "../assets/Anggota/Advokasi/Naoyama.png";
import Rahma from "../assets/Anggota/Advokasi/Rahma.png";

// RISTEK
import Firman from "../assets/Anggota/Ristek/Firman.png";
import Arkan from "../assets/Anggota/Ristek/Arkan.png";
import Dzaki from "../assets/Anggota/Ristek/Dzaki.png";
import Habib from "../assets/Anggota/Ristek/Habib.png";
import Adna from "../assets/Anggota/Ristek/Adna.png";
import Reza from "../assets/Anggota/Ristek/Reza.png";
import Akbar from "../assets/Anggota/Ristek/Akbar.png";

//PSDM
import Assifa from "../assets/Anggota/PSDM/Assifa.png";
import Reynald from "../assets/Anggota/PSDM/reynald.png";
import Yoga from "../assets/Anggota/PSDM/Yoga.png";
import Himam from "../assets/Anggota/PSDM/Himam.png";
import Kinanti from "../assets/Anggota/PSDM/Kinanti.png";
import Seva from "../assets/Anggota/PSDM/Seva.png";

//KOMINFO
import Fatino from "../assets/Anggota/Kominfo/Fatino.png";
import Haidar from "../assets/Anggota/Kominfo/Haidar.png";
import Ian from "../assets/Anggota/Kominfo/Ian.png";

//Ekraf
import Jona from "../assets/Anggota/Ekraf/Jona.png";
import Nugraha from "../assets/Anggota/Ekraf/Nugraha.png";

//Humas
import Agis from "../assets/Anggota/Humas/Agis.png";
import Nayla from "../assets/Anggota/Humas/Nayla.png";
import Tiara from "../assets/Anggota/Humas/Tiara.png";
import Wildan from "../assets/Anggota/Humas/Wildan.png";

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
      foto: nasha,
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
      foto: Firman,
    },
    {
      id: 8,
      nama: "Habiburrahim Mu’awwadz",
      jabatan: "Staf Divisi Ristek",
      divisi: "RISTEK",
      foto: Habib,
    },
    {
      id: 9,
      nama: "Arkan Rosif Ashshofa",
      jabatan: "Staf Divisi Ristek",
      divisi: "RISTEK",
      foto: Arkan,
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
      nama: "Muhammad Reza Fahlevi",
      jabatan: "Staf Divisi Ristek",
      divisi: "RISTEK",
      foto: Reza,
    },
    {
      id: 12,
      nama: "Muhammad Dzaki Arkaan",
      jabatan: "Staf Divisi Ristek",
      divisi: "RISTEK",
      foto: Dzaki,
    },
    {
      id: 13,
      nama: "Adna Afiansyah",
      jabatan: "Staff Divisi Ristek",
      divisi: "RISTEK",
      foto: Adna,
    },
    {
      id: 14,
      nama: "Akbar Faitu Rahman",
      jabatan: "Staff Divisi Ristek",
      divisi: "RISTEK",
      foto: Akbar,
    },
    {
      id: 15,
      nama: "Agis Aditya",
      jabatan: "Ketua Divisi Humas",
      divisi: "HUMAS",
      foto: Agis,
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
      foto: Wildan,
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
      foto: Tiara,
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
      foto: Nayla,
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
      foto: Ian,
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
      foto: Haidar,
    },
    {
      id: 26,
      nama: "Fatino Aziz Fadhilah",
      jabatan: "Staff Divisi Kominfo",
      divisi: "KOMINFO",
      foto: Fatino,
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
      foto: Reynald,
    },
    {
      id: 30,
      nama: "Kinanti",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      foto: Kinanti,
    },
    {
      id: 31,
      nama: "Assifa Ramadan Kurniawan",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      foto: Assifa,
    },
    {
      id: 32,
      nama: "Yoga Aditia Saputra",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      foto: Yoga,
    },
    {
      id: 33,
      nama: "Hanif Jundi Prasetyo",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      // foto: anggota32,
    },
    {
      id: 34,
      nama: "Seva Ayu Salsabila",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      foto: Seva,
    },
    {
      id: 35,
      nama: "Muhammad Himamul Haq",
      jabatan: "Staff Divisi PSDM",
      divisi: "PSDM",
      foto: Himam,
    },
    {
      id: 36,
      nama: "Raya Putra Indra",
      jabatan: "Ketua Divisi Ekraf",
      divisi: "EKRAF",
      // foto: anggota35,
    },
    {
      id: 37,
      nama: "Rangga Isnata Sibkhan",
      jabatan: "Staff Divisi Ekraf",
      divisi: "EKRAF",
      // foto: anggota36,
    },
    {
      id: 38,
      nama: "Hasna Salsabila",
      jabatan: "Staff Divisi Ekraf",
      divisi: "EKRAF",
      // foto: anggota37,
    },
    {
      id: 39,
      nama: "A Nugraha Hoiri Irobbani",
      jabatan: "Staff Divisi Ekraf",
      divisi: "EKRAF",
      foto: Nugraha,
    },
    {
      id: 40,
      nama: "Zaki Wijdan Rajendra",
      jabatan: "Staff Divisi Ekraf",
      divisi: "EKRAF",
      // foto: anggota39,
    },
    {
      id: 41,
      nama: "Jona Faozan Saputra",
      jabatan: "Staff Divisi Ekraf",
      divisi: "EKRAF",
      foto: Jona,
    },
    {
      id: 42,
      nama: "Aditya Resya Saputra",
      jabatan: "Ketua Divisi Advokasi",
      divisi: "ADVOKASI",
      // foto: anggota41,
    },
    {
      id: 43,
      nama: "Muhammad Lutfi Bachtiar",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      foto: Lutfi,
    },
    {
      id: 44,
      nama: "Agranto Bahy Rahma",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      // foto: anggota43,
    },
    {
      id: 45,
      nama: "Rahma Syariah",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      foto: Rahma,
    },
    {
      id: 46,
      nama: "Muhammad Asif Mardiansyah",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      foto: Asif,
    },
    {
      id: 47,
      nama: "Naoyama Daneela Rahma",
      jabatan: "Staff Divisi Advokasi",
      divisi: "ADVOKASI",
      foto: Naoyama,
    },
    {
      id: 48,
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
                  y: 18,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.05,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.02,
                  ease: "easeOut",
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
