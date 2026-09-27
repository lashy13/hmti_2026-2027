import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./db.js";

const app = express();

// ========================================
// MIDDLEWARE
// ========================================

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// ========================================
// TEST BACKEND
// ========================================

app.get("/", (req, res) => {
  res.json({
    message: "Backend HMTI berhasil berjalan",
  });
});

// ========================================
// TEST DATABASE
// ========================================

app.get("/api/test-db", (req, res) => {
  db.query("SHOW TABLES", (err, results) => {
    if (err) {
      console.error(
        "❌ Database error:",
        err.message
      );

      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.json({
      success: true,
      message: "Database berhasil diakses.",
      tables: results,
    });
  });
});

// ========================================
// POST ASPIRASI
// ========================================

app.post("/api/aspirasi", (req, res) => {
  const {
    nama,
    nim,
    email,
    aspirasi,
  } = req.body;

  if (!nama || !nim || !email || !aspirasi) {
    return res.status(400).json({
      message: "Semua data wajib diisi.",
    });
  }

  const sql = `
    INSERT INTO aspirasi
    (nama, nim, email, aspirasi)
    VALUES (?, ?, ?, ?)
  `;

  db.query(
    sql,
    [nama, nim, email, aspirasi],
    (err, result) => {
      if (err) {
        console.error(
          "❌ Gagal menyimpan aspirasi:",
          err.message
        );

        return res.status(500).json({
          message: "Gagal menyimpan aspirasi.",
          error: err.message,
        });
      }

      res.status(201).json({
        message: "Aspirasi berhasil dikirim!",
        id: result.insertId,
      });
    }
  );
});

// ========================================
// GET SEMUA ASPIRASI
// ========================================

app.get("/api/aspirasi", (req, res) => {
  const sql = `
    SELECT *
    FROM aspirasi
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(
        "❌ Gagal mengambil data:",
        err.message
      );

      return res.status(500).json({
        message: "Gagal mengambil data.",
        error: err.message,
      });
    }

    res.json(results);
  });
});

// ========================================
// START SERVER
// ========================================

const PORT = process.env.PORT || 8080;

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `🚀 Backend HMTI berjalan di port ${PORT}`
  );
});