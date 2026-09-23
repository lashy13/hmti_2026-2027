import DivisionPage from "../../../components/DivisionPage";
import "../../../styles/Warnadiv.css";

import webHmti from "../../../assets/logo/image.png";

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
          name: "Ahmad Fauzi",
          role: "Head of Division",
          photo: webHmti,
        },

        {
          id: 2,
          name: "Siti Rahma",
          role: "Secretary & Treasurer",
          photo: "/images/member-2.jpg",
        },

        {
          id: 3,
          name: "Rizky Pratama",
          role: "Ketua PJ Web HMTI",
          photo: "/images/member-3.jpg",
        },

        {
          id: 4,
          name: "Dinda Lestari",
          role: "UI/UX Designer",
          photo: "/images/member-4.jpg",
        },

        {
          id: 5,
          name: "Budi Santoso",
          role: "Research Lead",
          photo: "/images/member-5.jpg",
        },

        {
          id: 6,
          name: "Anisa Putri",
          role: "Nitro Competition Staff",
          photo: "/images/member-6.jpg",
        },

        {
          id: 7,
          name: "Fajar Nugraha",
          role: "Study Club Coordinator",
          photo: "/images/member-7.jpg",
        },

        {
          id: 8,
          name: "Dewi Melati",
          role: "Technology Staff",
          photo: "/images/member-8.jpg",
        },
      ]}
    />
  );
}

export default Ristek;