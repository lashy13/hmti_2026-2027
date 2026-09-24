import ProkerDetail from "../../../components/ProkerDetail";


// import foto PJ
// import fotoPJ from "../../../assets/pj/med-part.jpg";

function MedPart() {
  return (
    <ProkerDetail
      division="KOMINFO"
      title="MedPart (Media Partner)"

      description="Media Partner merupakan program yang bertujuan membangun hubungan kerja sama publikasi antara HMTI dengan organisasi, komunitas, maupun pihak eksternal. Melalui kerja sama ini, HMTI dapat saling membantu dalam memperluas jangkauan informasi dan meningkatkan eksistensi masing-masing pihak. Setiap penawaran media partner akan dikoordinasikan dan disesuaikan dengan kebutuhan serta kapasitas publikasi HMTI sebelum mencapai kesepakatan kerja sama. Pelaksanaan Media Partner dimulai dari penerimaan penawaran kerja sama, kemudian dilanjutkan dengan proses komunikasi, peninjauan bentuk kerja sama, dan penyesuaian benefit yang dapat diberikan oleh masing-masing pihak. Setelah kesepakatan tercapai, Departemen Kominfo akan melaksanakan publikasi sesuai dengan ketentuan yang telah disepakati serta melakukan dokumentasi terhadap hasil kerja sama sebagai bahan arsip dan evaluasi."

      about="Media Partner merupakan program Departemen Kominfo yang berfokus pada kerja sama publikasi antara HMTI dengan organisasi, komunitas, maupun pihak eksternal. Kegiatan mencakup penerimaan penawaran, komunikasi, peninjauan bentuk kerja sama, penyesuaian benefit, hingga pelaksanaan publikasi sesuai kesepakatan."

      implementation="SESUAI KERJA SAMA"
      location="MEDIA DIGITAL HMTI"
      participants="ANGGOTA KOMINFO"

      pj={[
        {
          name: "Fadhil Fatino",
          position: "Penanggung Jawab Media Partner",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default MedPart;