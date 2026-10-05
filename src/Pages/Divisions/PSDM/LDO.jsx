import ProkerDetail from "../../../components/ProkerDetail";

import Himam from "../../../assets/Anggota/PSDM/Himam.png";

function LDO() {
  return (
    <ProkerDetail
      division="PSDM"
      title="LATIHAN DASAR ORGANISASI"
      description="Program pembinaan dasar organisasi untuk meningkatkan pemahaman, keterampilan, dan kemampuan mahasiswa dalam berorganisasi."

      about="Latihan Dasar Organisasi (LDO) merupakan program kerja PSDM yang bertujuan memberikan pemahaman dasar mengenai organisasi kepada mahasiswa. Materi kegiatan dapat mencakup kepemimpinan, kerja sama tim, komunikasi, manajemen organisasi, serta tanggung jawab dalam menjalankan kegiatan organisasi."

      implementation="Sesuai Jadwal PSDM"
      location="Universitas Muhammadiyah Purwokerto"
      participants="Mahasiswa Teknik Informatika"

      pj={[
        {
          name: "Muhammad Himamul Haq",
          position: "Penanggung Jawab Latihan Dasar Organisasi",
          photo: Himam,
        },
      ]}
    />
  );
}

export default LDO;