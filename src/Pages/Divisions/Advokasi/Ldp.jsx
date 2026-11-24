import ProkerDetail from "../../../components/ProkerDetail";

import Lutfi from "../../../assets/Anggota/Advokasi/Luthfi.png";

function Ldp() {
  return (
    <ProkerDetail
      division="ADVOKASI"

      title="LDP"

      description="Latihan Dasar Persidangan untuk memberikan pemahaman mengenai mekanisme persidangan organisasi kepada pengurus HMTI."

      about="Latihan Dasar Persidangan (LDP) bertujuan untuk memberikan pemahaman dasar mengenai mekanisme persidangan organisasi kepada pengurus HMTI. Kegiatan ini diharapkan dapat meningkatkan kemampuan pengurus dalam memahami tata cara forum, penyampaian pendapat, serta pengambilan keputusan secara tertib dan profesional."

      implementation="Dilaksanakan secara offline melalui penyampaian materi, diskusi, dan simulasi persidangan."

      location="Ruangan yang telah ditentukan"

      participants="Pengurus HMTI"

      pj={[
        {
          name: "Muhammad Lutfi Bachtiar",
          position: "Penanggung Jawab LDP",
          photo: Lutfi,
        },
      ]}
    />
  );
}

export default Ldp;