import ProkerDetail from "../../../components/ProkerDetail";


// import foto PJ
// import fotoPJ from "../../../assets/pj/kominfo-social-media.jpg";

function KominfoSocialMedia() {
  return (
    <ProkerDetail
      division="KOMINFO"
      title="Pengelolaan Sosial Media HMTI"

      description="Pengelolaan Media Sosial HMTI merupakan salah satu fokus utama Departemen Kominfo dalam menyampaikan informasi dan membangun citra organisasi melalui media digital. Program ini mencakup perencanaan, pembuatan, hingga publikasi berbagai konten HMTI, mulai dari informasi kegiatan, publikasi program kerja, edukasi, dokumentasi, konten interaktif, hingga konten hiburan yang relevan dengan mahasiswa Teknik Informatika. Pengelolaan media sosial dilakukan secara terarah dan konsisten dengan memperhatikan identitas visual serta karakter komunikasi HMTI. Program ini bertujuan menjadikan media sosial HMTI sebagai pusat informasi yang aktif, informatif, dan mudah diakses oleh mahasiswa Teknik Informatika maupun masyarakat umum. Selain sebagai sarana penyampaian informasi, media sosial juga diharapkan mampu memperkuat identitas dan eksistensi HMTI melalui konten yang kreatif, konsisten, dan sesuai dengan kebutuhan audiens."

      about="Pengelolaan Media Sosial HMTI merupakan program Departemen Kominfo yang berfokus pada perencanaan, pembuatan, dan publikasi berbagai konten HMTI melalui media digital. Program ini mencakup informasi kegiatan, publikasi program kerja, edukasi, dokumentasi, konten interaktif, hingga konten hiburan yang relevan dengan mahasiswa Teknik Informatika."

      implementation="BERKALA"
      location="MEDIA SOSIAL HMTI"
      participants="ANGGOTA KOMINFO"

      pj={[
        {
          name: "Dewi Safira Haidar",
          position: "Penanggung Jawab Pengelolaan Sosial Media HMTI",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default KominfoSocialMedia;