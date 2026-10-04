import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/nitro.jpg";

function Nitro() {
  return (
    <ProkerDetail
      division="RISTEK"
      title="NITRO"
      description="Wadah kegiatan dan kompetisi teknologi untuk mengembangkan kemampuan, kreativitas, dan pengalaman di bidang teknologi."
      about="NITRO merupakan program kerja RISTEK yang menjadi wadah kegiatan dan kompetisi teknologi. Program ini dirancang untuk mendorong mahasiswa dan peserta untuk mengembangkan kemampuan, kreativitas, serta pengalaman mereka di bidang teknologi."
      implementation="Berkala"
      location="UMP"
      participants="Mahasiswa dan Pelajar"
      pj={[
        {
          name: "Akbar Faitu Rahman",
          position: "Penanggung Jawab NITRO",
          // photo: fotoPJ,
        },
        {
          name: "Muhammad Dzaki Arkaan",
          position: "Penanggung Jawab NITRO",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default Nitro;
