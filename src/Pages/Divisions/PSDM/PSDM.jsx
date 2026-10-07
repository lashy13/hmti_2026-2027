import DivisionPage from "../../../components/DivisionPage";
import "../../../styles/Warnadiv.css";
import Assifa from "../../../assets/Anggota/PSDM/Assifa.png";
import Reynald from "../../../assets/Anggota/PSDM/reynald.png";
import Yoga from "../../../assets/Anggota/PSDM/Yoga.png";
import Himam from "../../../assets/Anggota/PSDM/Himam.png";
import Kinanti from "../../../assets/Anggota/PSDM/Kinanti.png";
import Seva from "../../../assets/Anggota/PSDM/Seva.png";

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
        "PSDM menjadi ruang pengembangan anggota HMTI melalui kegiatan yang mendukung peningkatan kemampuan, pengalaman, dan proses pengembangan mahasiswa.",

        "Melalui berbagai program kerja, PSDM berupaya membangun anggota yang aktif, bertanggung jawab, memiliki kemampuan berorganisasi, serta mampu berkembang bersama HMTI.",
      ]}
      programs={[
        {
          number: "01",
          title: "OSMA / OSPEK PRODI",
          category: "STUDENT DEVELOPMENT",
          description:
            "Pengenalan mahasiswa baru terhadap lingkungan akademik, organisasi, dan kehidupan perkuliahan Teknik Informatika.",
          image: "/images/study-club.jpg",
          link: "/divisions/psdm/osma-ospek",
        },

        {
          number: "02",
          title: "PENGURUS MUDA",
          category: "ORGANIZATIONAL DEVELOPMENT",
          description:
            "Program pengenalan dan pembinaan mahasiswa untuk mempersiapkan calon pengurus HMTI.",
          image: "/images/study-club.jpg",
          link: "/divisions/psdm/pengurus-muda",
        },

        {
          number: "03",
          title: "LATIHAN DASAR ORGANISASI",
          category: "LEADERSHIP",
          description:
            "Latihan dasar organisasi untuk meningkatkan pemahaman dan kemampuan mahasiswa dalam berorganisasi.",
          image: "/images/study-club.jpg",
          link: "/divisions/psdm/ldo",
        },

        {
          number: "04",
          title: "IT ESPORT",
          category: "ESPORT",
          description:
            "Kegiatan esports sebagai sarana hiburan, interaksi, dan membangun kebersamaan mahasiswa Teknik Informatika.",
          image: "/images/study-club.jpg",
          link: "/divisions/psdm/it-esport",
        },
      ]}
      members={[
        {
          id: 1,
          name: "Raynald Salsa Saputra",
          role: "Head of Division And PJ OSMA / OSPEK Prodi",
          photo: Reynald,
        },

        {
          id: 2,
          name: "Kinanti",
          role: "PJ PENGURUS MUDA",
          photo: Kinanti,
        },

        {
          id: 3,
          name: "Assifa Ramadan Kurniawan",
          role: "PJ IT ESPORT",
          photo: Assifa,
        },
        {
          id: 4,
          name: "Yoga Aditia Saputra",
          role: "PJ AGENDA UPGRADING",
          photo: Yoga,
        },
        {
          id: 5,
          name: "Hanif Jundi Prasetyo",
          role: "PJ AGENDA UPGRADING",
          photo: "/images/member-4.jpg",
        },
        {
          id: 6,
          name: "Seva Ayu Salsabila",
          role: "Sekertaris LPJ",
          photo: Seva,
        },
        {
          id: 7,
          name: "Muhammad Himamul Haq",
          role: "PJ LATIHAN DASAR ORGANISASI",
          photo: Himam,
        },
      ]}
    />
  );
}

export default PSDM;
