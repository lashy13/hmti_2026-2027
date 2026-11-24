import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-glow"></div>

      {/* =========================
          CONTACT
      ========================== */}
      <div className="contact-content">

        {/* KIRI */}
        <div className="contact-title">
          <span>
            HIMPUNAN MAHASISWA TEKNIK INFORMATIKA
          </span>

          <h2>
            LET'S
            <br />
            <span>CONNECT.</span>
          </h2>
        </div>

        {/* KANAN */}
        <div className="contact-info">

          <p>
            Punya pertanyaan, ingin berkolaborasi,
            atau ingin mengetahui lebih jauh tentang
            HMTI? Mari terhubung bersama kami.
          </p>

          <div className="contact-links">

            <span className="contact-label">
              CONNECT WITH US
            </span>

            <a
              href="https://instagram.com/hmtiftsump"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>INSTAGRAM</span>
              <strong>@HMTIFTSUMP</strong>
            </a>

            <a
              href="https://www.youtube.com/@hmtiftsump1490"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>YOUTUBE</span>
              <strong>HMTI FTS UMP</strong>
            </a>

            <a
              href="mailto:hmtiump@gmail.com"
              className="contact-link"
            >
              <span>EMAIL</span>
              <strong>HMTIUMP@GMAIL.COM</strong>
            </a>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <span>CAMPUS</span>
              <strong>UMP • PURWOKERTO</strong>
            </a>

          </div>
        </div>

      </div>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="footer-section">

        <div className="footer-container">

          <div className="footer-grid">

            {/* BRAND */}
            <div className="footer-col brand-col">

              <div className="footer-brand">
                <img
                  src="/ti-logo.png"
                  alt="HMTI Informatika"
                />

                <div>
                  <strong>HMTI UMP</strong>
                  <span>TEKNIK INFORMATIKA</span>
                </div>
              </div>

              <div className="footer-address">

                <p>
                  <strong>📍 Alamat</strong>
                  <br />
                  Jl. KH. Ahmad Dahlan,
                  Purwokerto, Banyumas,
                  Jawa Tengah 53182
                </p>

                <p>
                  <strong>✉ Email</strong>
                  <br />
                  hmtiump@gmail.com
                </p>

              </div>

            </div>


            {/* NAVIGATION */}
            <div className="footer-col">

              <h4>Navigation</h4>

              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>

                <li>
                  <a href="/hmti">About</a>
                </li>

                <li>
                  <a href="/divisions">Division</a>
                </li>

                <li>
                  <a href="/events">Events</a>
                </li>

                <li>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>

            </div>


            {/* SOCIAL */}
            <div className="footer-col">

              <h4>Social Links</h4>

              <ul className="footer-links">

                <li>
                  <a
                    href="https://instagram.com/hmtiftsump"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/@hmtiftsump1490"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Youtube
                  </a>
                </li>

                <li>
                  <a href="mailto:hmtiump@gmail.com">
                    Email
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>


        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">

          <p>
            © 2026 HMTI UMP. All rights reserved.
          </p>

          <p className="made-with">
            Made with ❤️ by RISTEK HMTI
          </p>

        </div>

      </footer>

    </section>
  );
}

export default Contact;