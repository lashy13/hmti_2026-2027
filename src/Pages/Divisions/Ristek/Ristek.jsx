import DivisionPage from "../../../components/DivisionPage";
import "../../../styles/Warnadiv.css";

import webHmti from "../../../assets/logo/image.png";
import Firman from "../../../assets/Anggota/Ristek/Firman.png";
import Arkan from "../../../assets/Anggota/Ristek/Arkan.png";
import Dzaki from "../../../assets/Anggota/Ristek/Dzaki.png";
import Habib from "../../../assets/Anggota/Ristek/Habib.png";
import Reza from "../../../assets/Anggota/Ristek/Reza.png";
import Adna from "../../../assets/Anggota/Ristek/Adna.png";
import Akbar from "../../../assets/Anggota/Ristek/Akbar.png";
import Ega from "../../../assets/Anggota/Ristek/Ega.png";
function Ristek() {
  return (
    <DivisionPage
      division="RISTEK"
      number="06"
      category="TECHNOLOGY"
      subtitle="RISET DAN TEKNOLOGI"
      description="RISTEK merupakan divisi HMTI yang berfokus pada pengembangan teknologi, riset, dan peningkatan kemampuan mahasiswa dalam bidang informatika."

      aboutTitle="TECHNOLOGY"

      aboutText={[
        "RISTEK menjadi bagian dari HMTI yang mendorong mahasiswa untuk tidak hanya menggunakan teknologi, tetapi juga memahami dan mengembangkan teknologi.",

        "Melalui berbagai kegiatan dan program kerja, RISTEK menjadi ruang bagi mahasiswa untuk belajar, bereksperimen, dan berkolaborasi.",
      ]}

      programs={[
        {
          number: "01",
          title: "WEB HMTI",
          category: "DIGITAL DEVELOPMENT",

          description:
            "Pengembangan dan pengelolaan website HMTI sebagai media informasi, dokumentasi, dan representasi digital organisasi.",

          image: webHmti,

          link: "/divisions/ristek/web-hmti",
        },

        {
          number: "02",
          title: "NITRO",
          category: "TECHNOLOGY & COMPETITION",

          description:
            "Wadah kegiatan dan kompetisi teknologi untuk mengembangkan kemampuan, kreativitas, dan pengalaman di bidang teknologi.",

          image: webHmti,

          link: "/divisions/ristek/nitro",
        },

        {
          number: "03",
          title: "STUDY CLUB",
          category: "LEARNING",

          description:
            "Kegiatan belajar bersama untuk meningkatkan kemampuan dan pengetahuan mahasiswa di bidang informatika.",

          image: webHmti,

          link: "/divisions/ristek/study-club",
        },
      ]}

      members={[
        {
          id: 1,
          name: "Firman Hidayah",
          role: "Head of Division",
          photo: Firman,
        },

        {
          id: 2,
          name: "Habiburrahim Mu’awwadz",
          role: "PJ WEB HMTI",
          photo: Habib,
        },

        {
          id: 3,
          name: "Arkan Rosif Ashshofa",
          role: "PJ WEB HMTI",
          photo: Arkan,
        },

        {
          id: 4,
          name: "Adna Afiansyah",
          role: "PJ WEB HMTI",
          photo: Adna,
        },

        {
          id: 5,
          name: "Muhammad Reza Fahlevi",
          role: "PJ STUDY CLUB",
          photo: Reza,
        },

        {
          id: 6,
          name: "Ega Juanda Putra",
          role: "PJ STUDY CLUB",
          photo: Ega,
        },

        {
          id: 7,
          name: "Akbar Faitu Rahman",
          role: "PJ NITRO",
          photo: Akbar,
        },

        {
          id: 8,
          name: "Muhammad Dzaki Arkaan",
          role: "PJ NITRO",
          photo: Dzaki,
        },
      ]}
    />
  );
}

export default Ristek;