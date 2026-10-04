import DivisionPage from "../../../components/DivisionPage";
import "../../../styles/Warnadiv.css";

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
          photo: "/images/member-1.jpg",
        },

        {
          id: 2,
          name: "Rafi Ikhwan Ma’ruf",
          role: "Secretary",
          photo: "/images/member-2.jpg",
        },

        {
          id: 3,
          name: "Kinanti",
          role: "PJ PENGURUS MUDA",
          photo: "/images/member-3.jpg",
        },

        {
          id: 4,
          name: "Assifa Ramadan Kurniawan",
          role: "PJ IT ESPORT",
          photo: "/images/member-4.jpg",
        },
        {
          id: 5,
          name: "Yoga Aditia Saputra",
          role: "Training Staff",
          photo: "/images/member-4.jpg",
        },
        {
          id: 6,
          name: "Hanif Jundi Prasetyo",
          role: "Training Staff",
          photo: "/images/member-4.jpg",
        },
        {
          id: 7,
          name: "Seva Ayu Salsabila",
          role: "Sekertaris LPJ",
          photo: "/images/member-4.jpg",
        },
        {
          id: 8,
          name: "Muhammad Himamul Haq",
          role: "PJ LATIHAN DASAR ORGANISASI",
          photo: "/images/member-4.jpg",
        },
      ]}
    />
  );
}

export default PSDM;
