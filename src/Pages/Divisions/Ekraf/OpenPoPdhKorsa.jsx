import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/open-po-pdh-korsa.jpg";

function OpenPoPdhKorsa() {
  return (
    <ProkerDetail
      division="EKRAF"

      title="OPEN PO PDH / KORSA"

      description="Program pengelolaan pemesanan PDH/Korsa mulai dari proses pendataan hingga distribusi."

      about="Open PO PDH/Korsa merupakan program kerja EKRAF yang mengatur proses pemesanan PDH/Korsa bagi anggota HMTI. Kegiatan ini mencakup pendataan kebutuhan pemesan, pengelolaan proses pemesanan, hingga distribusi PDH/Korsa kepada anggota."

      implementation="Sesuai Periode Pemesanan"

      location="Universitas Muhammadiyah Purwokerto"

      participants="Anggota HMTI"

      pj={[
        {
          name: "A Nugraha Hoiri Irobbani",
          position: "Penanggung Jawab Open PO PDH / Korsa",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default OpenPoPdhKorsa;