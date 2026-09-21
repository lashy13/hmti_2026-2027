import DivisionPage from "../../components/DivisionPage";
import "../../styles/Warnadiv.css";

function Humas() {
  return (
    <DivisionPage
      division="HUMAS"
      number="01"
      category="PUBLIC RELATIONS"
      subtitle="HUBUNGAN MASYARAKAT"
      description="HUMAS merupakan divisi HMTI yang berfokus pada komunikasi, hubungan eksternal, dan membangun citra positif organisasi."
      aboutTitle="COMMUNICATION"
      aboutText={[
        "HUMAS menjadi penghubung antara HMTI dengan pihak internal maupun eksternal untuk membangun komunikasi yang baik.",
        "Melalui berbagai kegiatan, HUMAS menjaga hubungan, menyampaikan informasi, dan memperluas jaringan organisasi.",
      ]}
      programs={[
        {
          number: "01",
          title: "MEDIA RELATION",
          category: "PUBLIC RELATIONS",
          description:
            "Membangun dan menjaga hubungan komunikasi HMTI dengan pihak eksternal.",
          image: "/images/study-club.jpg",
        },
        {
          number: "02",
          title: "PARTNERSHIP",
          category: "COLLABORATION",
          description:
            "Membangun kerja sama dengan organisasi, komunitas, dan pihak terkait.",
          image: "/images/study-club.jpg",
        },
        {
          number: "03",
          title: "PUBLICATION",
          category: "COMMUNICATION",
          description:
            "Menyampaikan informasi dan kegiatan HMTI kepada mahasiswa dan masyarakat.",
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
