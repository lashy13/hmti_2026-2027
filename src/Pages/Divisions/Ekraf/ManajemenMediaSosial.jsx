import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/manajemen-media-sosial.jpg";

function ManajemenMediaSosial() {
  return (
    <ProkerDetail
      division="EKRAF"
      title="MANAJEMEN MEDIA SOSIAL"
      description="Pengelolaan akun Instagram dan media digital lainnya untuk mendukung komunikasi dan promosi kegiatan Departemen Ekraf."
      about="Manajemen Media Sosial merupakan program EKRAF yang berfokus pada pengelolaan media digital. Kegiatannya meliputi pembuatan desain konten, penyusunan caption, peningkatan engagement, serta promosi berbagai kegiatan Departemen Ekraf melalui media sosial."
      implementation="Berjalan Secara Berkala"
      location="Media Digital HMTI"
      participants="Anggota EKRAF"
      pj={[
        {
          name: "Jona Faozan Saputra",
          position: "Penanggung Jawab Manajemen Media Sosial",
          // photo: fotoPJ,
        },
        {
          name: "Zaki Wijdan Rajendra",
          position: "Penanggung Jawab Manajemen Media Sosial",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default ManajemenMediaSosial;
