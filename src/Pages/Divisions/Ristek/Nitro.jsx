import ProkerDetail from "../../../components/ProkerDetail";

import Dzaki from "../../../assets/Anggota/Ristek/Dzaki.png";
import Akbar from "../../../assets/Anggota/Ristek/Akbar.png";

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
          photo: Akbar,
        },
        {
          name: "Muhammad Dzaki Arkaan",
          position: "Penanggung Jawab NITRO",
          photo: Dzaki,
        },
      ]}
    />
  );
}

export default Nitro;
