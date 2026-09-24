import ProkerDetail from "../../../components/ProkerDetail";


// import foto PJ
// import fotoPJ from "../../../assets/pj/dokuti.jpg";

function Dokuti() {
  return (
    <ProkerDetail
      division="KOMINFO"
      title="DOKUTI (Dokumentasi & Publikasi)"

      description="DOKUTI merupakan program Departemen Kominfo yang berfokus pada dokumentasi dan publikasi seluruh kegiatan HMTI. Program ini dilakukan melalui pengambilan foto dan video pada setiap kegiatan, kemudian dilanjutkan dengan proses seleksi, editing, dan publikasi sesuai dengan kebutuhan. Selain mendukung kebutuhan publikasi, DOKUTI juga menjadi bagian dari upaya membangun arsip dokumentasi HMTI yang tersusun secara rapi dan dapat digunakan kembali untuk kebutuhan laporan, publikasi, maupun dokumentasi organisasi. Pada saat kegiatan berlangsung, dokumentasi difokuskan pada momen-momen utama serta suasana kegiatan. Setelah kegiatan selesai, hasil dokumentasi akan diseleksi, diedit, diarsipkan, dan digunakan sebagai bahan publikasi sesuai kebutuhan."

      about="DOKUTI merupakan program Departemen Kominfo yang berfokus pada dokumentasi dan publikasi seluruh kegiatan HMTI. Program ini dilakukan melalui pengambilan foto dan video, proses seleksi dan editing, pengarsipan, serta publikasi sesuai dengan kebutuhan organisasi."

      implementation="SETIAP KEGIATAN"
      location="LINGKUNGAN HMTI"
      participants="ANGGOTA KOMINFO"

      pj={[
        {
          name: "Iyan Nadhif",
          position: "Penanggung Jawab DOKUTI",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default Dokuti;