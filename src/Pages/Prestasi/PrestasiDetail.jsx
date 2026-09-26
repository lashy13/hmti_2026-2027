import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import "../../styles/Prestasi.css";

// import prestasi1 from "../../assets/prestasi/prestasi-1.jpg";
// import prestasi2 from "../../assets/prestasi/prestasi-2.jpg";
// import prestasi3 from "../../assets/prestasi/prestasi-3.jpg";

function PrestasiDetail() {

  const { id } = useParams();

  const prestasiData = [
    {
      id: "1",
      title: "Juara 1 Hackathon",
      year: "2026",
      category: "Technology Competition",
      competition: "National Hackathon Competition",

      // image: prestasi1,

      description:
        "Tim mahasiswa Teknik Informatika berhasil meraih juara pertama dalam kompetisi hackathon. Pencapaian ini menjadi salah satu bentuk kontribusi mahasiswa dalam mengembangkan solusi berbasis teknologi.",

      details:
        "Dalam kompetisi ini, tim mengembangkan sebuah solusi digital dengan menggabungkan kemampuan pemrograman, problem solving, UI/UX, dan kerja sama tim.",
    },

    {
      id: "2",
      title: "Juara 2 Web Development",
      year: "2026",
      category: "Web Development",
      competition: "Web Development Competition",

      // image: prestasi2,

      description:
        "Mahasiswa Teknik Informatika berhasil meraih juara kedua dalam kompetisi pengembangan website.",

      details:
        "Kompetisi ini menjadi kesempatan bagi mahasiswa untuk menerapkan kemampuan pengembangan website serta menghasilkan solusi digital yang inovatif.",
    },

    {
      id: "3",
      title: "Juara 3 Cybersecurity Competition",
      year: "2026",
      category: "Cybersecurity",
      competition: "Cybersecurity Competition",

      // image: prestasi3,

      description:
        "Tim mahasiswa Teknik Informatika berhasil meraih juara ketiga dalam kompetisi cybersecurity.",

      details:
        "Kompetisi ini menguji kemampuan peserta dalam memahami keamanan sistem, analisis masalah, dan penerapan konsep cybersecurity.",
    },
  ];


  const selectedPrestasi = prestasiData.find(
    (item) => item.id === id
  );


  // =========================================
  // JIKA DATA TIDAK DITEMUKAN
  // =========================================

  if (!selectedPrestasi) {
    return (
      <main className="prestasi-not-found">

        <h1>
          Prestasi Tidak Ditemukan
        </h1>

        <p>
          Data prestasi yang kamu cari tidak tersedia.
        </p>

        <Link to="/prestasi">
          ← Kembali ke Prestasi
        </Link>

      </main>
    );
  }


  return (
    <main className="prestasi-detail-page">

      {/* =========================================
          BACK BUTTON
      ========================================= */}

      <div className="prestasi-back prestasi-detail-back">

        <Link
          to="/prestasi"
          className="prestasi-back-button"
        >

          <span>
            ←
          </span>

          <span>
            BACK TO PRESTASI
          </span>

        </Link>

      </div>


      {/* =========================================
          DETAIL
      ========================================= */}

      <section className="prestasi-detail">

        <motion.div
          className="prestasi-detail-image"

          initial={{
            opacity: 0,
            x: -40,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
          }}
        >

          <img
            src={selectedPrestasi.image}
            alt={selectedPrestasi.title}
          />

        </motion.div>


        <motion.div
          className="prestasi-detail-content"

          initial={{
            opacity: 0,
            x: 40,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >

          <span className="detail-category">
            {selectedPrestasi.category}
          </span>


          <span className="detail-year">
            {selectedPrestasi.year}
          </span>


          <h1>
            {selectedPrestasi.title}
          </h1>


          <h3>
            {selectedPrestasi.competition}
          </h3>


          <p>
            {selectedPrestasi.description}
          </p>


          <p>
            {selectedPrestasi.details}
          </p>


          <Link
            to="/prestasi"
            className="detail-back-button"
          >
            ← LIHAT PRESTASI LAINNYA
          </Link>

        </motion.div>

      </section>

    </main>
  );
}

export default PrestasiDetail;