import DivisionPage from "../../components/DivisionPage";
import "../../styles/Warnadiv.css";

function PSDM() {
  return (
    <DivisionPage
      division="PSDM"
      number="03"
      category="HUMAN RESOURCE"
      subtitle="PENGEMBANGAN SUMBER DAYA MAHASISWA"
      description="PSDM merupakan divisi HMTI yang berfokus pada pengembangan potensi, kapasitas, dan kualitas anggota organisasi."
      aboutTitle="HUMAN DEVELOPMENT"
      aboutText={[
        "PSDM menjadi ruang pengembangan anggota HMTI melalui kegiatan yang mendukung peningkatan kemampuan dan pengalaman organisasi.",
        "Program PSDM dirancang untuk membangun anggota yang aktif, bertanggung jawab, dan mampu berkembang bersama organisasi.",
      ]}
      programs={[
        {
          number: "01",
          title: "UPGRADING",
          category: "DEVELOPMENT",
          description:
            "Kegiatan peningkatan kemampuan dan wawasan anggota HMTI.",
          image: "/images/study-club.jpg",
        },
        {
          number: "02",
          title: "TRAINING",
          category: "LEARNING",
          description:
            "Pelatihan untuk meningkatkan keterampilan dan kapasitas anggota.",
          image: "/images/study-club.jpg",
        },
        {
          number: "03",
          title: "ORGANIZATIONAL",
          category: "LEADERSHIP",
          description:
            "Kegiatan yang mendukung pengembangan kemampuan berorganisasi dan kepemimpinan.",
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
          role: "Development Staff",
          photo: "/images/member-3.jpg",
        },
        {
          id: 4,
          name: "Nama Anggota 4",
          role: "Training Staff",
          photo: "/images/member-4.jpg",
        },
      ]}
    />
  );
}

export default PSDM;
