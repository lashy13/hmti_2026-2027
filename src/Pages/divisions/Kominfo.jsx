import DivisionPage from "../../components/DivisionPage";
import "../../styles/Warnadiv.css";

function Kominfo() {
  return (
    <DivisionPage
      division="KOMINFO"
      number="02"
      category="INFORMATION & MEDIA"
      subtitle="KOMUNIKASI DAN INFORMASI"
      description="KOMINFO merupakan divisi HMTI yang berfokus pada pengelolaan informasi, media digital, dan dokumentasi kegiatan organisasi."
      aboutTitle="DIGITAL MEDIA"
      aboutText={[
        "KOMINFO bertanggung jawab dalam mengelola informasi dan media digital HMTI agar dapat tersampaikan secara efektif.",
        "Melalui pengelolaan konten dan dokumentasi, KOMINFO menjadi pusat informasi digital organisasi.",
      ]}
      programs={[
        {
          number: "01",
          title: "CONTENT",
          category: "DIGITAL MEDIA",
          description:
            "Membuat dan mengembangkan konten informasi mengenai kegiatan HMTI.",
          image: "/images/study-club.jpg",
        },
        {
          number: "02",
          title: "DOCUMENTATION",
          category: "MEDIA",
          description:
            "Melakukan dokumentasi kegiatan HMTI dalam bentuk foto dan video.",
          image: "/images/study-club.jpg",
        },
        {
          number: "03",
          title: "SOCIAL MEDIA",
          category: "DIGITAL PLATFORM",
          description:
            "Mengelola media sosial sebagai sarana informasi dan komunikasi HMTI.",
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
          role: "Content Creator",
          photo: "/images/member-3.jpg",
        },
        {
          id: 4,
          name: "Nama Anggota 4",
          role: "Documentation Staff",
          photo: "/images/member-4.jpg",
        },
      ]}
    />
  );
}

export default Kominfo;
