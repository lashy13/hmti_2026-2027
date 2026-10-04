import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/it-esport.jpg";

function ITEsport() {
  return (
    <ProkerDetail
      division="PSDM"
      title="IT ESPORT"
      description="Program kegiatan yang memanfaatkan bidang esports sebagai sarana hiburan, interaksi, dan membangun kebersamaan mahasiswa Teknik Informatika."

      about="IT Esport merupakan program kerja PSDM yang menjadi wadah bagi mahasiswa untuk berinteraksi dan membangun kebersamaan melalui kegiatan esports. Program ini diharapkan dapat menjadi sarana hiburan sekaligus mempererat hubungan antar mahasiswa Teknik Informatika."

      implementation="Sesuai Jadwal PSDM"
      location="Universitas Muhammadiyah Purwokerto"
      participants="Mahasiswa Teknik Informatika"

      pj={[
        {
          name: "Assifa Ramadan Kurniawan",
          position: "Penanggung Jawab IT Esport",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default ITEsport;