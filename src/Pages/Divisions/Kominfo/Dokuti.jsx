import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/dokuti.jpg";

function Dokuti() {
  return (
    <ProkerDetail
      division="KOMINFO"
      title="DOKUTI"
      description="Dokumentasi dan publikasi kegiatan HMTI melalui foto, video, dan pengelolaan konten digital."
      about="DOKUTI berfokus pada pengambilan, pengolahan, dan pengarsipan dokumentasi setiap kegiatan HMTI untuk mendukung kebutuhan publikasi dan dokumentasi organisasi."
      activityImage=""
      pj={[
        {
          name: "Muhammad Diva Iyan Nur Alif",
          position: "Penanggung Jawab DOKUTI",
          // photo: fotoPJ,
        },
        {
          name: "Nadhif Aufaa Pratama",
          position: "Penanggung Jawab DOKUTI",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default Dokuti;
