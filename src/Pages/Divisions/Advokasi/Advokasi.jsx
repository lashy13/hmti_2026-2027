import DivisionPage from "../../../components/DivisionPage";

import "../../../styles/Warnadiv.css";

function Advokasi() {
  return (
    <DivisionPage

      division="ADVOKASI"

      number="04"

      category="STUDENT ADVOCACY"

      subtitle="ADVOKASI MAHASISWA"

      description="ADVOKASI merupakan divisi HMTI yang berfokus pada penyaluran aspirasi, pendampingan, dan penyampaian informasi yang berkaitan dengan mahasiswa."

      aboutTitle="STUDENT VOICE"

      aboutText={[
        "ADVOKASI menjadi wadah bagi mahasiswa untuk menyampaikan aspirasi, keluhan, dan berbagai kebutuhan yang berkaitan dengan kehidupan akademik.",

        "Divisi ini membantu menjembatani komunikasi mahasiswa dengan pihak terkait melalui penyampaian aspirasi yang terarah.",
      ]}

      programs={[
        {
          number: "01",

          title: "DISKUSI UMUM",

          category: "STUDENT VOICE",

          description:
            "Forum diskusi untuk menampung dan menyampaikan aspirasi mahasiswa kepada pihak terkait.",

          image: "/images/study-club.jpg",

          link: "/divisions/advokasi/diskusi-umum",
        },

        {
          number: "02",

          title: "SAKTI",

          category: "ACADEMIC INFORMATION",

          description:
            "Memberikan informasi mengenai kebutuhan dan tahapan akademik mahasiswa Teknik Informatika.",

          image: "/images/study-club.jpg",

          link: "/divisions/advokasi/sakti",
        },

        {
          number: "03",

          title: "HARI WAJIB PDH",

          category: "STUDENT ACTIVITIES",

          description:
            "Program untuk menguatkan kebersamaan dan identitas mahasiswa Teknik Informatika.",

          image: "/images/study-club.jpg",

          link: "/divisions/advokasi/hari-wajib-pdh",
        },

        {
          number: "04",

          title: "LDP",

          category: "ORGANIZATIONAL DEVELOPMENT",

          description:
            "Latihan Dasar Persidangan untuk memberikan pemahaman mengenai mekanisme persidangan organisasi.",

          image: "/images/study-club.jpg",

          link: "/divisions/advokasi/ldp",
        },

        {
          number: "05",

          title: "KOTAK ASPIRASI",

          category: "ASPIRATION",

          description:
            "Media untuk menampung saran, masukan, dan aspirasi mahasiswa Teknik Informatika.",

          image: "/images/study-club.jpg",

          link: "/divisions/advokasi/kotak-aspirasi",
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
          role: "Advocacy Staff",
          photo: "/images/member-3.jpg",
        },

        {
          id: 4,
          name: "Nama Anggota 4",
          role: "Aspirations Staff",
          photo: "/images/member-4.jpg",
        },
      ]}

    />
  );
}

export default Advokasi;