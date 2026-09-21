import DivisionPage from "../../components/DivisionPage";
import "../../styles/Warnadiv.css";

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
          title: "ASPIRATION",
          category: "STUDENT VOICE",
          description:
            "Menghimpun dan menyampaikan aspirasi mahasiswa kepada pihak terkait.",
          image: "/images/study-club.jpg",
        },
        {
          number: "02",
          title: "DISCUSSION",
          category: "DIALOGUE",
          description:
            "Membuka ruang diskusi mengenai isu dan kebutuhan mahasiswa.",
          image: "/images/study-club.jpg",
        },
        {
          number: "03",
          title: "INFORMATION",
          category: "STUDENT SERVICE",
          description:
            "Menyediakan informasi yang berkaitan dengan kebutuhan mahasiswa.",
          image: "/images/study-club.jpg",
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
