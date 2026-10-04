import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/sakti.jpg";

function Sakti() {
  return (
    <ProkerDetail
      division="ADVOKASI"
      title="SAKTI"
      description="Program yang memberikan informasi dan pendampingan mengenai kebutuhan serta tahapan akademik mahasiswa Teknik Informatika."
      about="SAKTI merupakan agenda Departemen Advokasi yang bertujuan memberikan informasi mengenai kebutuhan dan tahapan akademik mahasiswa Teknik Informatika, seperti Kerja Praktik (KP), KKN, dan berbagai informasi akademik lainnya. Program ini diharapkan dapat membantu mahasiswa memperoleh informasi yang jelas dan mudah dipahami mengenai proses akademik yang sedang maupun akan mereka jalani."
      implementation="Dilaksanakan secara online maupun offline melalui penyampaian materi dan sesi diskusi bersama mahasiswa."
      location="Universitas Muhammadiyah Purwokerto"
      participants="Mahasiswa Teknik Informatika FTS UMP"
      pj={[
        {
          name: "Rahma Syariah",
          position: "Penanggung Jawab SAKTI",
          // photo: fotoPJ,
        },
        {
          name: "Maghfira Mani Riaha Putri",
          position: "Penanggung Jawab SAKTI",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default Sakti;
