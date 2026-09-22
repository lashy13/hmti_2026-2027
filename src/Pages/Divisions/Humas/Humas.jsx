import DivisionPage from "../../../components/DivisionPage";
import "../../../styles/Warnadiv.css";

import humasImage from "../../../assets/image.png";

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
          name: "Nama Anggota 1",
          role: "Head of Division",
          photo: "/images/member-1.jpg",
        },

        {
          id: 2,
          name: "Nama Anggota 2",
          role: "Secretary",
          photo: "/images/member-2.jpg",
        },

        {
          id: 3,
          name: "Nama Anggota 3",
          role: "Public Relations Staff",
          photo: "/images/member-3.jpg",
        },

        {
          id: 4,
          name: "Nama Anggota 4",
          role: "Partnership Staff",
          photo: "/images/member-4.jpg",
        },
      ]}
    />
  );
}

export default Humas;