import DivisionPage from "../../../components/DivisionPage";
import "../../../styles/Warnadiv.css";

import humasImage from "../../../assets/logo/image.png";
import Agis from "../../../assets/Anggota/Humas/Agis.png";
import Nayla from "../../../assets/Anggota/Humas/Nayla.png";
import Tiara from "../../../assets/Anggota/Humas/Tiara.png";
import Wildan from "../../../assets/Anggota/Humas/Wildan.png";
function Humas() {
  return (
    <DivisionPage
      division="HUMAS"
      number="05"
      category="PUBLIC RELATIONS"
      subtitle="HUBUNGAN MASYARAKAT"
      description="HUMAS merupakan divisi HMTI yang berfokus pada komunikasi, hubungan eksternal, dan membangun hubungan yang baik antara HMTI dengan berbagai pihak."
      aboutTitle="COMMUNICATION"
      aboutText={[
        "HUMAS menjadi penghubung antara HMTI dengan pihak internal maupun eksternal untuk membangun komunikasi yang baik.",

        "Melalui berbagai kegiatan, HUMAS menjaga hubungan, menyampaikan informasi, dan memperluas jaringan organisasi.",
      ]}
      programs={[
        {
          number: "01",
          title: "STUDI BANDING",
          category: "EXTERNAL RELATIONS",
          description:
            "Program yang berfokus pada kunjungan resmi dan formal ke himpunan mahasiswa di kampus lain untuk saling sharing program kerja, bertukar ilmu, dan membandingkan sistem keorganisasian.",
          image: humasImage,
          link: "/divisions/humas/studi-banding",
        },

        {
          number: "02",
          title: "SAFARI HUMAS",
          category: "RELATIONSHIP & NETWORKING",
          description:
            "Kunjungan resmi dan formal berskala luas dalam bentuk roadtrip atau roadshow luar kota untuk membangun diplomasi strategis dan memperluas jaringan relasi HMTI.",
          image: humasImage,
          link: "/divisions/humas/safari-humas",
        },

        {
          number: "03",
          title: "BAKTI SOSIAL",
          category: "SOCIAL SERVICE",
          description:
            "Kegiatan nyata sebagai bentuk pengabdian dan kepedulian sosial dari himpunan kepada masyarakat yang membutuhkan.",
          image: humasImage,
          link: "/divisions/humas/bakti-sosial",
        },
      ]}
      members={[
        {
          id: 1,
          name: "Agis Aditya Putra",
          role: "Head of Division",
          photo: Agis,
        },

        {
          id: 2,
          name: "Tiara Ayuningtyas",
          role: "PJ BAKTI SOSIAL",
          photo: Tiara,
        },

        {
          id: 3,
          name: "Nayla Cikha Safira",
          role: "PJ SAFARI HUMAS",
          photo: Nayla,
        },

        {
          id: 4,
          name: "Muhammad Bintang Adien",
          role: "PJ STUDI BANDING",
          photo: "/images/member-4.jpg",
        },
        {
          id: 5,
          name: "Wildan Imanuddin",
          role: "PJ SAFARI HUMAS",
          photo: Wildan,
        },
        {
          id: 6,
          name: "Sania Salsabila",
          role: "PJ STUDI BANDING",
          photo: "/images/member-4.jpg",
        },
        {
          id: 7,
          name: "Fakhrul Zakaria",
          role: "PJ BAKTI SOSIAL",
          photo: "/images/member-4.jpg",
        },
      ]}
    />
  );
}

export default Humas;
