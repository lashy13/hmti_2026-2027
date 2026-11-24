import ProkerDetail from "../../../components/ProkerDetail";

import Dzaki from "../../../assets/Anggota/Ristek/Dzaki.png";
import Akbar from "../../../assets/Anggota/Ristek/Akbar.png";

function Nitro() {
  return (
    <ProkerDetail
      division="RISTEK"
      title="NITRO"
      description="NITRO (National Information Technology Roll Out) merupakan program kerja Departemen Riset dan Teknologi (RISTEK) HMTI yang berbentuk kegiatan kompetisi teknologi informasi berskala nasional. Kegiatan ini bertujuan menjadi wadah untuk mengembangkan kemampuan, kreativitas, dan pengetahuan di bidang teknologi informasi melalui berbagai cabang perlombaan. Selain itu, NITRO diharapkan dapat mendorong semangat inovasi, meningkatkan daya saing di bidang teknologi, serta memperkenalkan HMTI dan Program Studi Teknik Informatika UMP ke tingkat nasional."
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
