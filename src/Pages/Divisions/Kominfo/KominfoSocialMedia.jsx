import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/kominfo-social-media.jpg";

function KominfoSocialMedia() {
  return (
    <ProkerDetail
      division="KOMINFO"
      title="PENGELOLAAN SOSIAL MEDIA HMTI"

      description="Pengelolaan media sosial HMTI sebagai media informasi, publikasi, edukasi, dan komunikasi digital organisasi."

      about="Program ini berfokus pada perencanaan, pembuatan, dan publikasi konten HMTI melalui media sosial secara kreatif, informatif, dan konsisten."

      activityImage=""

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