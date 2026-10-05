import ProkerDetail from "../../../components/ProkerDetail";
import Naoyama from "../../../assets/Anggota/Advokasi/Naoyama.png";
function Sakti() {
  return (
    <ProkerDetail
      division="ADVOKASI"

      title="SAKTI"

      description="Program yang memberikan informasi dan pendampingan mengenai kebutuhan serta tahapan akademik mahasiswa Teknik Informatika."

      about="SAKTI merupakan agenda Departemen Advokasi yang bertujuan memberikan informasi mengenai kebutuhan dan tahapan akademik mahasiswa Teknik Informatika, seperti Kerja Praktik (KP), KKN, dan berbagai informasi akademik lainnya."

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