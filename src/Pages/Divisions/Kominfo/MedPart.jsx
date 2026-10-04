import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/med-part.jpg";

function MedPart() {
  return (
    <ProkerDetail
      division="KOMINFO"
      title="MEDPART (MEDIA PARTNER)"
      description="Kerja sama publikasi antara HMTI dengan organisasi, komunitas, dan pihak eksternal untuk memperluas jangkauan informasi serta membangun relasi."
      about="Program ini berfokus pada kerja sama publikasi, mulai dari komunikasi dan penyesuaian bentuk kerja sama hingga pelaksanaan publikasi sesuai kesepakatan."
      activityImage=""
      pj={[
        {
          name: "Lukman Nur Fadhilah",
          position: "Penanggung Jawab Media Partner",
          // photo: fotoPJ,
        },
        {
          name: "Fatino Aziz Fadhilah",
          position: "Penanggung Jawab Media Partner",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default MedPart;
