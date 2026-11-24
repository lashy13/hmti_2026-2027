import ProkerDetail from "../../../components/ProkerDetail";
import Naoyama from "../../../assets/Anggota/Advokasi/Naoyama.png";
function Sakti() {
  return (
    <ProkerDetail
      division="ADVOKASI"

      title="DISKUSI UMUM"

      description=" Diskusi Umum merupakan program kerja departemen Advokasi yang bertujuan sebagai platform untuk mengkomodasi aspirasi mahasiswa yang sebelumnya sudah dikumpulkan melalui kotak Aspirasi."
      about="Penyampaian aspirasi secara langsung melalui acara yang dihadiri bersama mahasiswa TI UMP, dan menyampaikan berkala dengan bertemu langsung dengan kaprodi."
      implementation="Dilaksanakan secara online maupun offline melalui penyampaian materi dan sesi diskusi bersama mahasiswa."

      location="Universitas Muhammadiyah Purwokerto"

      participants="Mahasiswa Teknik Informatika FTS UMP"

      pj={[
        {
          name: "Naoyama Daneela Rahma",
          position: "Penanggung Jawab Diskusi Umum",
          photo: Naoyama,
        },
      ]}
    />
  );
}

export default Sakti;