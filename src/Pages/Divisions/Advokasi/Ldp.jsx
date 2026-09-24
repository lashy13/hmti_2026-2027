import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/ldp.jpg";

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
          name: "Nama PJ",
          position: "Penanggung Jawab LDP",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default Ldp;