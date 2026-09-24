import { Link, useLocation, useNavigate } from "react-router-dom";

import logoUmp from "../assets/logo/logo-ump.png";
import logoIf from "../assets/logo/logo-hmti.png";

import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // ============================================
  // PINDAH KE SECTION DI HOME
  // ============================================
  const goToSection = (id) => {
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

    navigate("/", {
      state: {
        scrollTo: id,
      },
    });
  };

  // ============================================
  // HOME
  // ============================================
  const goHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="navbar">

      {/* ========================================
          BRAND
      ======================================== */}

      <div className="brand-container">

        <Link to="/" className="brand-ump">
          <img
            src={logoUmp}
            alt="Logo UMP"
            className="logo-ump"
          />

          <div className="ump-text">
            <strong>Universitas</strong>

            <span className="ump-muhammadiyah">
              Muhammadiyah
            </span>

            <small>Purwokerto</small>
          </div>
        </Link>

        <div className="logo-divider"></div>

        <Link to="/" className="brand-if">
          <img
            src={logoIf}
            alt="Logo HMTI"
            className="logo-if"
          />

          <div className="brand-text">
            <strong>Teknik Informatika</strong>

            <span className="if-tagline">
              smart • creative • progressive
            </span>

            <small>
              Universitas Muhammadiyah Purwokerto
            </small>
          </div>
        </Link>

      </div>


      {/* ========================================
          NAVIGATION
      ======================================== */}

      <div className="nav-links">

        {/* HOME */}
        <button
          type="button"
          onClick={goHome}
        >
          Home
        </button>


        {/* ASPIRASI */}
        <button
          type="button"
          onClick={() => goToSection("aspirasi")}
        >
          Aspirasi
        </button>


        {/* ABOUT */}
        <button
          type="button"
          onClick={() => goToSection("about")}
        >
          About
        </button>


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