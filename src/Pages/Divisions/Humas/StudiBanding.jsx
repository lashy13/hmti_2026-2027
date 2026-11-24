import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/studi-banding.jpg";

function StudiBanding() {
  return (
    <ProkerDetail
      division="HUMAS"
      title="STUDI BANDING"
      description="Kunjungan resmi dan formal ke himpunan mahasiswa di kampus lain untuk saling berbagi program kerja, bertukar ilmu, dan membandingkan sistem keorganisasian."
      about="Studi Banding (Stuban) berfokus pada kunjungan resmi dan formal ke himpunan mahasiswa di kampus lain. Tujuannya adalah untuk saling sharing program kerja, bertukar ilmu, dan membandingkan sistem keorganisasian demi kemajuan internal kita."
      implementation="BERKALA"
      location="KAMPUS MITRA"
      participants="PENGURUS HMTI"
      pj={[
        {
          name: "Muhammad Bintang Adien",
          position: "Penanggung Jawab Studi Banding",
          // photo: fotoPJ,
        },
        {
          name: "Sania Salsabila",
          position: "Penanggung Jawab Studi Banding",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default StudiBanding;
