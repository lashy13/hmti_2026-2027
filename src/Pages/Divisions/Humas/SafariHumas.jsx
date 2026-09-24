import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/safari-humas.jpg";

function SafariHumas() {
  return (
    <ProkerDetail
      division="HUMAS"
      title="SAFARI HUMAS"
      description="Kunjungan resmi dan formal berskala luas dalam bentuk roadtrip atau roadshow luar kota untuk memperluas jaringan relasi HMTI."

      about="Safari Humas dikonsepkan sebagai kunjungan resmi dan formal berskala luas dalam bentuk roadtrip atau roadshow luar kota selama 1–3 hari. Proker ini berfokus mendatangi beberapa kampus luar daerah secara berurutan untuk membangun diplomasi strategis, memperluas ekspansi jaringan relasi HMTI, serta mempelajari dinamika keorganisasian di tingkat regional."

      implementation="1–3 HARI"
      location="LUAR KOTA"
      participants="PENGURUS HMTI"

      pj={[
        {
          name: "Nama PJ",
          position: "Penanggung Jawab Safari Humas",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default SafariHumas;