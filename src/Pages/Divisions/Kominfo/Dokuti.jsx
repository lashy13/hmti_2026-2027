import ProkerDetail from "../../../components/ProkerDetail";

import kominfoImage from "../../../assets/image.png";

function Dokuti() {
  return (
    <ProkerDetail
      number="02"

      title="DOKUTI (Dokumentasi & Publikasi)"

      category="DOCUMENTATION & PUBLICATION"

      description="DOKUTI merupakan program Departemen Kominfo yang berfokus pada dokumentasi dan publikasi seluruh kegiatan HMTI. Program ini dilakukan melalui pengambilan foto dan video pada setiap kegiatan, kemudian dilanjutkan dengan proses seleksi, editing, dan publikasi sesuai dengan kebutuhan. Selain mendukung kebutuhan publikasi, DOKUTI juga menjadi bagian dari upaya membangun arsip dokumentasi HMTI yang tersusun secara rapi dan dapat digunakan kembali untuk kebutuhan laporan, publikasi, maupun dokumentasi organisasi. Pada saat kegiatan berlangsung, dokumentasi difokuskan pada momen-momen utama serta suasana kegiatan. Setelah kegiatan selesai, hasil dokumentasi akan diseleksi, diedit, diarsipkan, dan digunakan sebagai bahan publikasi sesuai kebutuhan."

      image={kominfoImage}

      person="Iyan Nadhif"
    />
  );
}

export default Dokuti;