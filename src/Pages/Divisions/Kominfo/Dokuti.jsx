import ProkerDetail from "../../../components/ProkerDetail";
import Arkan from "../../../assets/Anggota/Ristek/Arkan.png";

import Fatino from "../../../assets/Anggota/Kominfo/Fatino.png";
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
          name: "Arkan Roshif Ashshofa",
          position: "Penanggung Jawab DOKUTI",
          photo: Arkan,
        },
        {
          name: "Fatino Aziz Fadhilah",
          position: "Penanggung Jawab DOKUTI",
          photo: Fatino,
        },
      ]}
    />
  );
}

export default Dokuti;
