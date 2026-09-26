import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import logoUmp from "../assets/logo/logo-ump.png";
import logoIf from "../assets/logo/logo-hmti.png";

import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // ============================================
  // STATE NAVBAR
  // ============================================
  const [showNavbar, setShowNavbar] = useState(true);

  // ============================================
  // DETEKSI ARAH SCROLL
  // ============================================
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Selalu tampil di bagian paling atas
      if (currentScrollY <= 20) {
        setShowNavbar(true);
      }
      // Scroll ke bawah
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }
      // Scroll ke atas
      else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav
      className={`navbar ${
        showNavbar ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      {/* ========================================
          BRAND
      ======================================== */}

      <div className="brand-container">

        {/* UMP */}
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

        {/* DIVIDER */}
        <div className="logo-divider"></div>

        {/* HMTI */}
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