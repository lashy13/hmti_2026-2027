import DivisionPage from "../../../components/DivisionPage";
import "../../../styles/Warnadiv.css";

import kominfoImage from "../../../assets/logo/image.png";
import Fatino from "../../../assets/Anggota/Kominfo/Fatino.png";

function Kominfo() {
  return (
    <DivisionPage
      division="KOMINFO"
      number="02"
      category="INFORMATION & MEDIA"
      subtitle="KOMUNIKASI DAN INFORMASI"
      description="KOMINFO merupakan divisi HMTI yang berfokus pada pengelolaan informasi, media digital, dokumentasi, dan publikasi kegiatan organisasi."
      aboutTitle="DIGITAL MEDIA"
      aboutText={[
        "KOMINFO bertanggung jawab dalam mengelola informasi dan media digital HMTI agar dapat tersampaikan secara efektif kepada mahasiswa maupun masyarakat umum.",

        "Melalui pengelolaan media sosial, dokumentasi, dan hubungan media partner, KOMINFO menjadi pusat informasi sekaligus representasi digital HMTI.",
      ]}
      programs={[
        {
          number: "01",

          title: "PENGELOLAAN SOSIAL MEDIA HMTI",

          category: "DIGITAL MEDIA",

          description:
            "Program yang berfokus pada pengelolaan media sosial HMTI, mulai dari perencanaan, pembuatan, hingga publikasi konten informasi, edukasi, dokumentasi, dan hiburan yang relevan.",

          image: kominfoImage,

          link: "/divisions/kominfo/pengelolaan-sosial-media",
        },

        {
          number: "02",

          title: "DOKUTI",

          category: "DOCUMENTATION & PUBLICATION",

          description:
            "Program yang berfokus pada dokumentasi dan publikasi seluruh kegiatan HMTI melalui pengambilan foto dan video, proses editing, hingga pengarsipan dokumentasi.",

          image: kominfoImage,

          link: "/divisions/kominfo/dokuti",
        },

        {
          number: "03",

          title: "MEDPART",

          category: "MEDIA PARTNER",

          description:
            "Program yang bertujuan membangun hubungan kerja sama publikasi antara HMTI dengan organisasi, komunitas, maupun pihak eksternal.",

          image: kominfoImage,

          link: "/divisions/kominfo/medpart",
        },
      ]}
      members={[
        {
          id: 1,
          name: "Bondan Pratama Firdaus",
          role: "Head of Division",
          photo: "/images/member-1.jpg",
        },

        {
          id: 2,
          name: "Muhammad Diva Iyan Nur Alif",
          role: "PJ DOKUTI",
          photo: "/images/member-2.jpg",
        },

        {
          id: 3,
          name: "Nadhif Aufaa Pratama",
          role: "PJ DOKUTI",
          photo: "/images/member-3.jpg",
        },

        {
          id: 4,
          name: "Haidar Aflathun",
          role: "PJ KOMINFO SOSIAL MEDIA",
          photo: "/images/member-4.jpg",
        },

        {
          id: 5,
          name: "Fatino Aziz Fadhilah",
          role: "PJ MEDPART",
          photo: Fatino,
        },

        {
          id: 6,
          name: "Dwi Safira Aulia",
          role: "PJ KOMINFO SOSIAL MEDIA",
          photo: "/images/member-6.jpg",
        },
        {
          id: 7,
          name: "Lukman Nur Fadhilah",
          role: "PJ MEDPART",
          photo: "/images/member-6.jpg",
        },
      ]}
    />
  );
}

export default Kominfo;
