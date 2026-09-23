// Aspirasi.jsx

import { useState } from "react";

import "../styles/aspirasi.css";

function Aspirasi() {
  const [formData, setFormData] = useState({
    nama: "",
    nim: "",
    email: "",
    aspirasi: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/aspirasi",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Gagal mengirim aspirasi"
        );
      }

      setStatus("✓ Aspirasi berhasil dikirim!");

      setFormData({
        nama: "",
        nim: "",
        email: "",
        aspirasi: "",
      });

    } catch (error) {
      console.error(error);

      setStatus(
        "✕ Gagal mengirim aspirasi. Coba lagi."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="aspirasi-page"
      id="aspirasi"
    >

      {/* BACKGROUND */}

      <div className="aspirasi-glow glow-one"></div>
      <div className="aspirasi-glow glow-two"></div>


      {/* MAIN */}

      <main className="aspirasi-main">

        {/* HEADER */}

        <div className="aspirasi-heading">

          <span className="aspirasi-eyebrow">
            YOUR VOICE MATTERS
          </span>

          <h1>
            Sampaikan
            <br />
            <span>Aspirasi Kamu.</span>
          </h1>

          <p>
            Punya ide, kritik, saran, atau masukan
            untuk HMTI? Sampaikan pendapatmu melalui
            form di bawah.
          </p>

        </div>


        {/* FORM */}

        <section className="aspirasi-card">

          <div className="aspirasi-card-header">

            <div>

              <span>
                ASPIRATION FORM
              </span>

              <h2>
                Ceritakan kepada kami.
              </h2>

            </div>

            <div className="aspirasi-number">
              01
            </div>

          </div>


          <form
            className="aspirasi-form"
            onSubmit={handleSubmit}
          >

            {/* NAMA + NIM */}

            <div className="aspirasi-form-row">

              <div className="aspirasi-field">

                <label htmlFor="nama">
                  NAMA
                </label>

                <input
                  id="nama"
                  name="nama"
                  type="text"
                  placeholder="Masukkan nama kamu"
                  value={formData.nama}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="aspirasi-field">

                <label htmlFor="nim">
                  NIM
                </label>

                <input
                  id="nim"
                  name="nim"
                  type="text"
                  placeholder="Masukkan NIM kamu"
                  value={formData.nim}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* EMAIL */}

            <div className="aspirasi-field">

              <label htmlFor="email">
                EMAIL
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="nama@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* ASPIRASI */}

            <div className="aspirasi-field">

              <label htmlFor="aspirasi">
                ASPIRASI / PESAN
              </label>

              <textarea
                id="aspirasi"
                name="aspirasi"
                placeholder="Tuliskan aspirasi, kritik, saran, atau ide kamu..."
                value={formData.aspirasi}
                onChange={handleChange}
                rows="9"
                required
              />

            </div>


            {/* BOTTOM */}

            <div className="aspirasi-form-bottom">

              <p>
                Masukan kamu akan membantu HMTI
                berkembang menjadi lebih baik.
              </p>

              <button
                type="submit"
                className="aspirasi-submit"
                disabled={loading}
              >

                {loading
                  ? "MENGIRIM..."
                  : "KIRIM ASPIRASI"
                }

                <span>
                  →
                </span>

              </button>

            </div>


            {/* STATUS */}

            {status && (
              <div
                className={`aspirasi-status ${
                  status.startsWith("✓")
                    ? "success"
                    : "error"
                }`}
              >
                {status}
              </div>
            )}

          </form>

        </section>

      </main>

    </section>
  );
}

export default Aspirasi;