import DivisionPage from "../../components/DivisionPage";
import "../../styles/Warnadiv.css";

function Ekraf() {
  return (
    <DivisionPage
      division="EKRAF"
      number="05"
      category="CREATIVE ECONOMY"
      subtitle="EKONOMI KREATIF"
      description="EKRAF merupakan divisi HMTI yang berfokus pada pengembangan kreativitas, minat, bakat, dan potensi anggota."
      aboutTitle="CREATIVE SPACE"
      aboutText={[
        "EKRAF menjadi ruang bagi mahasiswa untuk mengembangkan kreativitas dan potensi melalui berbagai kegiatan kreatif.",
        "Melalui program kerja yang kolaboratif, EKRAF mendorong anggota untuk menghasilkan karya dan pengalaman baru.",
      ]}
      programs={[
        {
          number: "01",
          title: "CREATIVE PROJECT",
          category: "CREATIVITY",
          description:
            "Mengembangkan berbagai proyek kreatif yang melibatkan anggota HMTI.",
          image: "/images/study-club.jpg",
        },
        {
          number: "02",
          title: "TALENT",
          category: "INTEREST & TALENT",
          description: "Menjadi wadah pengembangan minat dan bakat mahasiswa.",
          image: "/images/study-club.jpg",
        },
        {
          number: "03",
          title: "CREATIVE EVENT",
          category: "EVENT",
          description:
            "Mengadakan kegiatan kreatif untuk membangun pengalaman dan kolaborasi.",
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
          role: "Creative Staff",
          photo: "/images/member-3.jpg",
        },
        {
          id: 4,
          name: "Nama Anggota 4",
          role: "Event Staff",
          photo: "/images/member-4.jpg",
        },
      ]}
    />
  );
}

export default Ekraf;
