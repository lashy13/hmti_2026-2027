import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/waroeng-ekraf.jpg";

function WaroengEkraf() {
  return (
    <ProkerDetail
      division="EKRAF"

      title="WAROENG EKRAF"

      description="Program usaha kuliner mahasiswa yang dikelola secara online maupun offline sebagai bagian dari kegiatan ekonomi kreatif."

      about="Waroeng Ekraf merupakan program kerja yang berfokus pada pengelolaan usaha kuliner mahasiswa. Kegiatan dilakukan secara online maupun offline dengan tujuan memberikan ruang bagi mahasiswa untuk mengembangkan pengalaman dalam pengelolaan usaha dan ekonomi kreatif."

      implementation="Online dan Offline"

      location="Universitas Muhammadiyah Purwokerto"

      participants="Mahasiswa Teknik Informatika"

      pj={[
        {
          name: "Nama PJ",
          position: "Penanggung Jawab Waroeng Ekraf",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default WaroengEkraf;