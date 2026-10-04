import ProkerDetail from "../../../components/ProkerDetail";

// import foto PJ
// import fotoPJ from "../../../assets/pj/hari-wajib-pdh.jpg";

function HariWajibPDH() {
  return (
    <ProkerDetail
      division="ADVOKASI"

      title="HARI WAJIB PDH"

      description="Program yang bertujuan untuk menguatkan kebersamaan dan identitas mahasiswa Teknik Informatika."

      about="Hari Wajib PDH merupakan program kerja yang bertujuan untuk menguatkan kebersamaan antar mahasiswa Teknik Informatika FTS UMP. Program ini dilaksanakan melalui penggunaan PDH Korsa TI sebagai bentuk identitas bersama serta sarana untuk membangun rasa kebersamaan dan solidaritas mahasiswa Teknik Informatika."

      implementation="Penyebaran informasi dan himbauan penggunaan PDH melalui Instagram HMTI serta WhatsApp Group angkatan."

      location="Lingkungan Universitas Muhammadiyah Purwokerto"

      participants="Mahasiswa Teknik Informatika FTS UMP"

      pj={[
        {
          name: "Agranto Bahy Rahma",
          position: "Penanggung Jawab Hari Wajib PDH",
          // photo: fotoPJ,
        },
      ]}
    />
  );
}

export default HariWajibPDH;