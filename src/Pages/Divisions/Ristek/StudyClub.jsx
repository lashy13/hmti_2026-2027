import ProkerDetail from "../../../components/ProkerDetail";

import Reza from "../../../assets/Anggota/Ristek/Reza.png";
import Ega from "../../../assets/Anggota/Ristek/Ega.png";

function StudyClub() {
  return (
    <ProkerDetail
      division="RISTEK"
      title="STUDY CLUB"
      description="Wadah belajar bersama untuk meningkatkan kemampuan dan pengetahuan mahasiswa di bidang informatika."
      about="Study Club merupakan program kerja RISTEK yang menjadi ruang bagi mahasiswa untuk belajar, berdiskusi, dan mengembangkan kemampuan di bidang informatika. Kegiatan dapat mencakup berbagai bidang seperti Rekayasa Perangkat Lunak, Cybersecurity, dan Artificial Intelligence."
      implementation="Berkala"
      location="UMP"
      participants="Mahasiswa TI"
      pj={[
        {
          name: "Muhammad Reza Fahlevi",
          position: "Penanggung Jawab Study Club",
          photo: Reza,
        },
        {
          name: "Ega Juanda Putra",
          position: "Penanggung Jawab Study Club",
          photo: Ega,
        },
      ]}
    />
  );
}

export default StudyClub;
