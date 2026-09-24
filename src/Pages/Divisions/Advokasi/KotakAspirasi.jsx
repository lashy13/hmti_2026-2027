import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/kotak-aspirasi.jpg";

function KotakAspirasi() {
  return (
    <ProkerDetail
      division="ADVOKASI"

      title="KOTAK ASPIRASI"

      description="Media yang menjadi sarana untuk menampung saran, masukan, dan aspirasi mahasiswa Teknik Informatika."

      about="Kotak Aspirasi merupakan media yang menjadi sarana, wadah, atau jembatan untuk menampung saran dan aspirasi yang diberikan oleh mahasiswa Teknik Informatika. Aspirasi dapat berupa saran dan harapan untuk program studi, dosen, himpunan, sarana dan prasarana, maupun berbagai hal lainnya yang berkaitan dengan kehidupan mahasiswa."

      implementation="Melalui pengisian Google Form, kotak aspirasi, serta penyampaian aspirasi secara langsung melalui perwakilan kelas atau angkatan."

      location="Lingkungan Universitas Muhammadiyah Purwokerto"

      participants="Mahasiswa Teknik Informatika FTS UMP"

      pj={[
        {
          name: "Nama PJ",
          position: "Penanggung Jawab Kotak Aspirasi",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default KotakAspirasi;