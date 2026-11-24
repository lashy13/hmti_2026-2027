import ProkerDetail from "../../../components/ProkerDetail";

import Tiara from "../../../assets/Anggota/Humas/Tiara.png";

function BaktiSosial() {
  return (
    <ProkerDetail
      division="HUMAS"
      title="BAKTI SOSIAL"
      description="Kegiatan nyata sebagai bentuk pengabdian dan kepedulian sosial dari himpunan kepada masyarakat yang membutuhkan."
      about="Bakti Sosial (Baksos) adalah aksi nyata pengabdian dan kepedulian sosial dari himpunan kita langsung kepada masyarakat yang membutuhkan."
      implementation="BERKALA"
      location="MASYARAKAT"
      participants="ANGGOTA HMTI"
      pj={[
        {
          name: "Tiara Ayuningtyas",
          position: "Penanggung Jawab Bakti Sosial",
          photo: Tiara,
        },
        {
          name: "Fakhrul Zakaria",
          position: "Penanggung Jawab Bakti Sosial",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default BaktiSosial;
