import DivisionPage from "../../../components/DivisionPage";
import "../../../styles/Warnadiv.css";
import Jona from "../../../assets/Anggota/Ekraf/Jona.png";
import Nugraha from "../../../assets/Anggota/Ekraf/Nugraha.png";
function Ekraf() {
  return (
    <DivisionPage
      division="EKRAF"
      number="05"
      category="CREATIVE ECONOMY"
      subtitle="EKONOMI KREATIF"
      description="EKRAF merupakan divisi HMTI yang berfokus pada pengembangan kreativitas, minat, bakat, dan potensi anggota melalui kegiatan ekonomi kreatif."
      aboutTitle="CREATIVE ECONOMY"
      aboutText={[
        "EKRAF menjadi ruang bagi mahasiswa untuk mengembangkan kreativitas dan potensi melalui berbagai kegiatan ekonomi kreatif yang dapat memberikan pengalaman serta peluang bagi anggota HMTI.",

        "Melalui berbagai program kerja, EKRAF mengelola kegiatan mulai dari pemesanan PDH/Korsa, pengelolaan media sosial, pembuatan merchandise, hingga usaha kuliner mahasiswa.",
      ]}
      programs={[
        {
          number: "01",
          title: "OPEN PO PDH / KORSA",
          category: "MERCHANDISE MANAGEMENT",
          description:
            "Mengatur proses pemesanan PDH/Korsa mulai dari pendataan hingga distribusi kepada anggota.",
          image: "/images/study-club.jpg",
          link: "/divisions/ekraf/open-po-pdh-korsa",
        },

        {
          number: "02",
          title: "MANAJEMEN MEDIA SOSIAL",
          category: "DIGITAL MEDIA",
          description:
            "Mengelola akun Instagram dan media digital lainnya melalui pembuatan desain konten, penyusunan caption, peningkatan engagement, serta promosi kegiatan Departemen Ekraf.",
          image: "/images/study-club.jpg",
          link: "/divisions/ekraf/manajemen-media-sosial",
        },

        {
          number: "03",
          title: "MERCHANDISE",
          category: "CREATIVE BUSINESS",
          description:
            "Membuat dan memasarkan merchandise resmi himpunan seperti kaos, stiker, dan gantungan kunci.",
          image: "/images/study-club.jpg",
          link: "/divisions/ekraf/merchandise",
        },

        {
          number: "04",
          title: "WAROENG EKRAF",
          category: "CULINARY BUSINESS",
          description:
            "Mengelola usaha kuliner mahasiswa secara online maupun offline sebagai bagian dari kegiatan ekonomi kreatif.",
          image: "/images/study-club.jpg",
          link: "/divisions/ekraf/waroeng-ekraf",
        },
      ]}
      members={[
        {
          id: 1,
          name: "Raya Putra Indra",
          role: "Head of Division",
          photo: "/images/member-1.jpg",
        },

        {
          id: 2,
          name: "Jona Faozan Saputra",
          role: "PJ MANAJEMEN MEDIA SOSIAL",
          photo: Jona,
        },

        {
          id: 3,
          name: "Rangga Isnata Sibkhan",
          role: "PJ WAROENG EKRAF",
          photo: "/images/member-3.jpg",
        },

        {
          id: 4,
          name: "Hasna Salsabila",
          role: "PJ MARCHANDISE",
          photo: "/images/member-4.jpg",
        },

        {
          id: 5,
          name: "A Nugraha Hoiri Irobbani",
          role: "PJ OPEN PO PDH/KORSA",
          photo: Nugraha,
        },

        {
          id: 6,
          name: "Zaki Wijdan Rajendra",
          role: "PJ MANAJEMEN MEDIA SOSIAL",
          photo: "/images/member-4.jpg",
        },
      ]}
    />
  );
}

export default Ekraf;
