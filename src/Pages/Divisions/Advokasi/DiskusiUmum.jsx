import ProkerDetail from "../../../components/ProkerDetail";
// import foto PJ
// import fotoPJ from "../../../assets/pj/hari-wajib-pdh.jpg";
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
          name: "Nama PJ 1",
          position: "Ketua PJ",
          // photo: fotoPJ1,
        },
        {
          name: "Nama PJ 2",
          position: "Anggota PJ",
          // photo: fotoPJ2,
        },
      ]}
    />
  );
}

export default Sakti;