import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/osma-ospek-prodi.jpg";

function OSMA() {
  return (
    <ProkerDetail
      division="PSDM"
      title="OSMA / OSPEK PRODI"
      description="Program pengenalan mahasiswa baru Teknik Informatika untuk membantu mahasiswa mengenal lingkungan akademik, organisasi, dan kehidupan perkuliahan."

      about="OSMA / OSPEK Prodi merupakan program kerja PSDM yang berfokus pada pengenalan mahasiswa baru terhadap lingkungan Program Studi Teknik Informatika. Kegiatan ini menjadi tahap awal bagi mahasiswa untuk mengenal sistem perkuliahan, lingkungan kampus, organisasi mahasiswa, serta membangun hubungan dengan mahasiswa lainnya."

      implementation="Awal Tahun Akademik"
      location="Universitas Muhammadiyah Purwokerto"
      participants="Mahasiswa Baru Teknik Informatika"

      pj={[
        {
          name: "Raynald Salsa Saputra",
          position: "Penanggung Jawab OSMA / OSPEK Prodi",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default OSMA;