import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/study-club.jpg";

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
          name: "Nama PJ",
          position: "Penanggung Jawab Study Club",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default StudyClub;