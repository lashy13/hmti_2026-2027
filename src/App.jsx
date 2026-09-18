import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Divisions from "./components/Divisions";
import Contact from "./components/Contact";
import Events from "./components/events";
import AboutHmti from "./components/AboutHmti";
import Aspirasi from "./components/Aspirasi";

// ================= DIVISION PAGES =================
import Ristek from "./Pages/divisions/RISTEK";
import PSDM from "./Pages/divisions/PSDM";
import Ekraf from "./Pages/divisions/Ekraf";
import Advokasi from "./Pages/divisions/Advokasi";
import Kominfo from "./Pages/divisions/Kominfo";
import Humas from "./Pages/divisions/Humas";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <AboutHmti />
              <Events />
              <Contact />
              <Aspirasi />
            </>
          }
        />

        {/* ================= HMTI ================= */}
        <Route
          path="/hmti"
          element={
            <>
              <Navbar />
              <Contact />
              <Aspirasi />
            </>
          }
        />

        {/* ================= DIVISIONS ================= */}
        <Route
          path="/divisions"
          element={
            <>
              <Navbar />
              <Divisions />
            </>
          }
        />

        {/* ================= RISTEK ================= */}
        <Route
          path="/divisions/ristek"
          element={
            <>
              <Navbar />
              <Ristek />
            </>
          }
        />

        {/* ================= PSDM ================= */}
        <Route
          path="/divisions/psdm"
          element={
            <>
              <Navbar />
              <PSDM />
            </>
          }
        />

        {/* ================= EKRAF ================= */}
        <Route
          path="/divisions/ekraf"
          element={
            <>
              <Navbar />
              <Ekraf />
            </>
          }
        />

        {/* ================= ADVOKASI ================= */}
        <Route
          path="/divisions/advokasi"
          element={
            <>
              <Navbar />
              <Advokasi />
            </>
          }
        />

        {/* ================= KOMINFO ================= */}
        <Route
          path="/divisions/kominfo"
          element={
            <>
              <Navbar />
              <Kominfo />
            </>
          }
        />

        {/* ================= HUMAS ================= */}
        <Route
          path="/divisions/humas"
          element={
            <>
              <Navbar />
              <Humas />
            </>
          }
        />

        {/* ================= EVENTS ================= */}
        <Route
          path="/events"
          element={
            <>
              <Navbar />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;