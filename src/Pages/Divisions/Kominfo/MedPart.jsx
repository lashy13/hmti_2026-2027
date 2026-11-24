import ProkerDetail from "../../../components/ProkerDetail";
import Ian from "../../../assets/Anggota/Kominfo/Ian.png";
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
          name: "Dwi Safira Aulia",
          position: "Penanggung Jawab Media Partner",
          // photo: fotoPJ,
        },
        {
          name: "Muhammad Diva Iyan Nur Alif",
          position: "Penanggung Jawab Media Partner",
          photo: Ian,
        },
      ]}
    />
  );
}

export default MedPart;
