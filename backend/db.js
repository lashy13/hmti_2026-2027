import mysql from "mysql2";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "hmti_db",
  port: 3306,
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Gagal terhubung ke MySQL:", err.message);
    return;
  }

  console.log("✅ MySQL berhasil terhubung");

  connection.release();
});

export default db;