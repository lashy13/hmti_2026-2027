import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/web-hmti.jpg";

function WebHmti() {
  return (
    <ProkerDetail
      division="RISTEK"
      title="WEB HMTI"
      description="Pengembangan dan pengelolaan website HMTI sebagai media informasi dan representasi digital organisasi."
      about="WEB HMTI merupakan program kerja RISTEK yang berfokus pada pengembangan dan pengelolaan website HMTI. Website ini menjadi media informasi, dokumentasi, serta representasi digital HMTI."
      implementation="Berkala"
      location="UMP"
      participants="Anggota HMTI"

      pj={[
        {
          name: "Nama PJ",
          position: "Penanggung Jawab WEB HMTI",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default WebHmti;