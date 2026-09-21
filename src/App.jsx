import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutHmti from "./components/AboutHmti";
import Divisions from "./components/Divisions";
import Events from "./components/events";
import Contact from "./components/Contact";
import Aspirasi from "./components/Aspirasi";

// =========================
// DIVISION PAGES
// =========================
import Ristek from "./Pages/Divisions/Ristek";
import Humas from "./Pages/Divisions/Humas";
import Kominfo from "./Pages/Divisions/Kominfo";
import PSDM from "./Pages/Divisions/PSDM";
import Advokasi from "./Pages/Divisions/Advokasi";
import Ekraf from "./Pages/Divisions/Ekraf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* =========================
            HOME
        ========================= */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <AboutHmti />
              <Events />
              <Aspirasi />
              <Contact />
            </>
          }
        />

        {/* =========================
            DIVISIONS
        ========================= */}
        <Route
          path="/divisions"
          element={
            <>
              <Navbar />
              <Divisions />
            </>
          }
        />

        {/* =========================
            RISTEK
        ========================= */}
        <Route
          path="/divisions/ristek"
          element={
            <>
              <Navbar />
              <Ristek />
            </>
          }
        />

        {/* =========================
            HUMAS
        ========================= */}
        <Route
          path="/divisions/humas"
          element={
            <>
              <Navbar />
              <Humas />
            </>
          }
        />

        {/* =========================
            KOMINFO
        ========================= */}
        <Route
          path="/divisions/kominfo"
          element={
            <>
              <Navbar />
              <Kominfo />
            </>
          }
        />

        {/* =========================
            PSDM
        ========================= */}
        <Route
          path="/divisions/psdm"
          element={
            <>
              <Navbar />
              <PSDM />
            </>
          }
        />

        {/* =========================
            ADVOKASI
        ========================= */}
        <Route
          path="/divisions/advokasi"
          element={
            <>
              <Navbar />
              <Advokasi />
            </>
          }
        />

        {/* =========================
            EKRAF
        ========================= */}
        <Route
          path="/divisions/ekraf"
          element={
            <>
              <Navbar />
              <Ekraf />
            </>
          }
        />

        {/* =========================
            EVENTS
        ========================= */}
        <Route
          path="/events"
          element={
            <>
              <Navbar />
              <Events />
            </>
          }
        />

        {/* =========================
            404
        ========================= */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
