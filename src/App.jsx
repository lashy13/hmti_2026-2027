import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

// =====================================================
// COMPONENTS
// =====================================================

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutHmti from "./components/AboutHmti";
import Events from "./components/events";
import Contact from "./components/Contact";
import Aspirasi from "./components/Aspirasi";
import Divisions from "./components/Divisions";
import Anggota from "./components/Anggota";

// =====================================================
// PRESTASI
// =====================================================

import Prestasi from "./Pages/Prestasi/Prestasi";
import PrestasiDetail from "./Pages/Prestasi/PrestasiDetail";

// =====================================================
// DIVISIONS
// =====================================================

import Ristek from "./Pages/Divisions/Ristek/Ristek";
import Humas from "./Pages/Divisions/Humas/Humas";
import Kominfo from "./Pages/Divisions/Kominfo/Kominfo";
import Advokasi from "./Pages/Divisions/Advokasi/Advokasi";
import PSDM from "./Pages/Divisions/PSDM/PSDM";
import Ekraf from "./Pages/Divisions/Ekraf/Ekraf";

// =====================================================
// RISTEK PROGRAMS
// =====================================================

import WebHmti from "./Pages/Divisions/Ristek/WebHmti";
import Nitro from "./Pages/Divisions/Ristek/Nitro";
import StudyClub from "./Pages/Divisions/Ristek/StudyClub";

// =====================================================
// HUMAS PROGRAMS
// =====================================================

import StudiBanding from "./Pages/Divisions/Humas/StudiBanding";
import SafariHumas from "./Pages/Divisions/Humas/SafariHumas";
import BaktiSosial from "./Pages/Divisions/Humas/BaktiSosial";

// =====================================================
// ADVOKASI PROGRAMS
// =====================================================

import DiskusiUmum from "./Pages/Divisions/Advokasi/DiskusiUmum";
import SAKTI from "./Pages/Divisions/Advokasi/Sakti";
import HariWajibPDH from "./Pages/Divisions/Advokasi/HariWajibPDH";
import LDP from "./Pages/Divisions/Advokasi/Ldp";
import KotakAspirasi from "./Pages/Divisions/Advokasi/KotakAspirasi";

// =====================================================
// PSDM PROGRAMS
// =====================================================

import OSMA from "./Pages/Divisions/PSDM/OSMA";
import PengurusMuda from "./Pages/Divisions/PSDM/PengurusMuda";
import LDO from "./Pages/Divisions/PSDM/LDO";
import ITEsport from "./Pages/Divisions/PSDM/ITEsport";

// =====================================================
// EKRAF PROGRAMS
// =====================================================

import OpenPoPdhKorsa from "./Pages/Divisions/Ekraf/OpenPoPdhKorsa";
import ManajemenMediaSosial from "./Pages/Divisions/Ekraf/ManajemenMediaSosial";
import Merchandise from "./Pages/Divisions/Ekraf/Merchandise";
import WaroengEkraf from "./Pages/Divisions/Ekraf/WaroengEkraf";


// =====================================================
// HOME PAGE
// =====================================================

function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;

    if (!target) {
      return;
    }

    // Beri waktu React untuk menyelesaikan render
    const timer = setTimeout(() => {
      const element = document.getElementById(target);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Hapus state setelah digunakan
      window.history.replaceState(
        {},
        document.title,
        window.location.pathname
      );
    }, 150);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <main>

      <Hero />

      <AboutHmti />

      <Events />

      <Aspirasi />

      <Contact />

    </main>
  );
}


// =====================================================
// APP
// =====================================================

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* =================================================
            HOME
        ================================================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =================================================
            HMTI
        ================================================= */}

        <Route
          path="/hmti"
          element={<Navigate to="/" replace />}
        />


        {/* =================================================
            DIVISIONS
        ================================================= */}

        <Route
          path="/divisions"
          element={<Divisions />}
        />


        {/* =================================================
            PRESTASI
        ================================================= */}

        <Route
          path="/prestasi"
          element={<Prestasi />}
        />

        <Route
          path="/prestasi/:id"
          element={<PrestasiDetail />}
        />


        {/* =================================================
            ANGGOTA
        ================================================= */}

        <Route
          path="/anggota"
          element={<Anggota />}
        />


        {/* =================================================
            RISTEK
        ================================================= */}

        <Route
          path="/divisions/ristek"
          element={<Ristek />}
        />

        <Route
          path="/divisions/ristek/web-hmti"
          element={<WebHmti />}
        />

        <Route
          path="/divisions/ristek/nitro"
          element={<Nitro />}
        />

        <Route
          path="/divisions/ristek/study-club"
          element={<StudyClub />}
        />


        {/* =================================================
            HUMAS
        ================================================= */}

        <Route
          path="/divisions/humas"
          element={<Humas />}
        />

        <Route
          path="/divisions/humas/studi-banding"
          element={<StudiBanding />}
        />

        <Route
          path="/divisions/humas/safari-humas"
          element={<SafariHumas />}
        />

        <Route
          path="/divisions/humas/bakti-sosial"
          element={<BaktiSosial />}
        />


        {/* =================================================
            KOMINFO
        ================================================= */}

        <Route
          path="/divisions/kominfo"
          element={<Kominfo />}
        />


        {/* =================================================
            ADVOKASI
        ================================================= */}

        <Route
          path="/divisions/advokasi"
          element={<Advokasi />}
        />

        <Route
          path="/divisions/advokasi/diskusi-umum"
          element={<DiskusiUmum />}
        />

        <Route
          path="/divisions/advokasi/sakti"
          element={<SAKTI />}
        />

        <Route
          path="/divisions/advokasi/hari-wajib-pdh"
          element={<HariWajibPDH />}
        />

        <Route
          path="/divisions/advokasi/ldp"
          element={<LDP />}
        />

        <Route
          path="/divisions/advokasi/kotak-aspirasi"
          element={<KotakAspirasi />}
        />


        {/* =================================================
            PSDM
        ================================================= */}

        <Route
          path="/divisions/psdm"
          element={<PSDM />}
        />

        <Route
          path="/divisions/psdm/osma-ospek"
          element={<OSMA />}
        />

        <Route
          path="/divisions/psdm/pengurus-muda"
          element={<PengurusMuda />}
        />

        <Route
          path="/divisions/psdm/ldo"
          element={<LDO />}
        />

        <Route
          path="/divisions/psdm/it-esport"
          element={<ITEsport />}
        />


        {/* =================================================
            EKRAF
        ================================================= */}

        <Route
          path="/divisions/ekraf"
          element={<Ekraf />}
        />

        <Route
          path="/divisions/ekraf/open-po-pdh-korsa"
          element={<OpenPoPdhKorsa />}
        />

        <Route
          path="/divisions/ekraf/manajemen-media-sosial"
          element={<ManajemenMediaSosial />}
        />

        <Route
          path="/divisions/ekraf/merchandise"
          element={<Merchandise />}
        />

        <Route
          path="/divisions/ekraf/waroeng-ekraf"
          element={<WaroengEkraf />}
        />


        {/* =================================================
            404
        ================================================= */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;