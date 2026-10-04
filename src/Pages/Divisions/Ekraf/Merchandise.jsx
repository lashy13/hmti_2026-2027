import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/merchandise.jpg";

function Merchandise() {
  return (
    <ProkerDetail
      division="EKRAF"

      title="MERCHANDISE"

      description="Program pembuatan dan pemasaran merchandise resmi himpunan sebagai bagian dari kegiatan ekonomi kreatif."

      about="Merchandise merupakan program kerja EKRAF yang berfokus pada pembuatan dan pemasaran merchandise resmi HMTI. Produk yang dapat dikembangkan antara lain kaos, stiker, gantungan kunci, dan berbagai produk kreatif lainnya."

      implementation="Sesuai Perencanaan Produk"

      location="Universitas Muhammadiyah Purwokerto"

      participants="Mahasiswa dan Anggota HMTI"

      pj={[
        {
          name: "Hasna Salsabila",
          position: "Penanggung Jawab Merchandise",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default Merchandise;