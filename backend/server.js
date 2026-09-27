import express from "express";
import cors from "cors";
import "dotenv/config";
import db from "./db.js";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Backend HMTI berhasil berjalan",
  });
});

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
        });
      }

      res.status(201).json({
        message: "Aspirasi berhasil dikirim!",
        id: result.insertId,
      });
    }
  );
});

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
      });
    }

    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `🚀 Backend berjalan di port ${PORT}`
  );
});