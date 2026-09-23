
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoUmp from "../assets/logo/logo-ump.png";
import logoIf from "../assets/logo/logo-hmti.png";

import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // =====================================================
  // SCROLL KE SECTION
  // =====================================================

  const goToSection = (id) => {
    // Kalau sudah berada di Home
    if (location.pathname === "/") {
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Kalau sedang di halaman lain,
    // pindah ke Home sambil membawa tujuan section
    navigate("/", {
      state: {
        scrollTo: id,
      },
    });
  };

  return (
    <nav className="navbar">

      {/* =================================================
          BRAND
      ================================================= */}

      <div className="brand-container">

        {/* LOGO UMP */}

        <Link to="/" className="brand-ump">

          <img
            src={logoUmp}
            alt="Logo UMP"
            className="logo-ump"
          />

          <div className="ump-text">

            <strong>
              Universitas
            </strong>

            <span className="ump-muhammadiyah">
              Muhammadiyah
            </span>

            <small>
              Purwokerto
            </small>

          </div>

        </Link>


        {/* DIVIDER */}

        <div className="logo-divider"></div>


        {/* LOGO HMTI */}

        <Link to="/" className="brand-if">

          <img
            src={logoIf}
            alt="Logo HMTI"
            className="logo-if"
          />

          <div className="brand-text">

            <strong>
              Teknik Informatika
            </strong>

            <span className="if-tagline">
              smart • creative • progressive
            </span>

            <small>
              Universitas Muhammadiyah Purwokerto
            </small>

          </div>

        </Link>

      </div>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <div className="nav-links">

        {/* HOME */}

        <Link
          to="/"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Home
        </Link>


        {/* ASPIRASI */}

        <button
          type="button"
          onClick={() => goToSection("aspirasi")}
        >
          Aspirasi
        </button>


        {/* ABOUT */}
        {/* DIVISI */}

        <Link to="/divisions">
          Divisi
        </Link>


        {/* PRESTASI */}

        <Link to="/prestasi">
          Prestasi
        </Link>


        {/* EVENT */}

        <button
          type="button"
          onClick={() => goToSection("events")}
        >
          Event
        </button>


        {/* CONTACT */}

        <button
          type="button"
          onClick={() => goToSection("contact")}
        >
          Contact
        </button>


        {/* ANGGOTA */}

        <Link to="/anggota">
          Anggota
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;
