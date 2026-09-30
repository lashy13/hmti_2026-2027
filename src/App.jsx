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
import Acara from "./components/Acara";
import Contact from "./components/Contact";
import Aspirasi from "./components/Aspirasi";
import Divisions from "./components/Divisions";
import Anggota from "./components/Anggota";
import Cerenity from "./components/Cerenity";

// =====================================================
// PRESTASI
// =====================================================

import Prestasi from "./Pages/Prestasi/Prestasi";
import PrestasiDetail from "./Pages/Prestasi/PrestasiDetail";

// =====================================================
// EVENTS
// =====================================================

import Event1 from "./Pages/Events/Event1";
import Event2 from "./Pages/Events/Event2";
import Event3 from "./Pages/Events/Event3";
import Event4 from "./Pages/Events/Event4";
import Event5 from "./Pages/Events/Event5";

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
// KOMINFO PROGRAMS
// =====================================================

import Dokuti from "./Pages/Divisions/Kominfo/Dokuti";
import KominfoSocialMedia from "./Pages/Divisions/Kominfo/KominfoSocialMedia";
import MedPart from "./Pages/Divisions/Kominfo/MedPart";

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
// HOME
// =====================================================

function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;

    if (!target) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(target);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

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
      <Acara />
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

        {/* ================= HOME ================= */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/hmti"
          element={<Navigate to="/" replace />}
        />


        {/* ================= DIVISIONS ================= */}

        <Route
          path="/divisions"
          element={<Divisions />}
        />


        {/* ================= PRESTASI ================= */}

        <Route
          path="/prestasi"
          element={<Prestasi />}
        />

        <Route
          path="/prestasi/:id"
          element={<PrestasiDetail />}
        />


        {/* ================= EVENTS ================= */}

        <Route
          path="/events/event-1"
          element={<Event1 />}
        />

        <Route
          path="/events/event-2"
          element={<Event2 />}
        />

        <Route
          path="/events/event-3"
          element={<Event3 />}
        />

        <Route
          path="/events/event-4"
          element={<Event4 />}
        />

        <Route
          path="/events/event-5"
          element={<Event5 />}
        />


        {/* ================= ANGGOTA ================= */}

        <Route
          path="/anggota"
          element={<Anggota />}
        />


        {/* ================= RISTEK ================= */}

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


        {/* ================= CERENITY ================= */}

        <Route
          path="/cerenity"
          element={<Cerenity />}
        />


        {/* ================= HUMAS ================= */}

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


        {/* ================= KOMINFO ================= */}

        <Route
          path="/divisions/kominfo"
          element={<Kominfo />}
        />

        <Route
          path="/divisions/kominfo/pengelolaan-sosial-media"
          element={<KominfoSocialMedia />}
        />

        <Route
          path="/divisions/kominfo/dokuti"
          element={<Dokuti />}
        />

        <Route
          path="/divisions/kominfo/medpart"
          element={<MedPart />}
        />


        {/* ================= ADVOKASI ================= */}

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


        {/* ================= PSDM ================= */}

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


        {/* ================= EKRAF ================= */}

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


        {/* ================= 404 ================= */}

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;