// api/check-hash.js
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./database.sqlite");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { hash } = req.body;
    if (!hash) return res.status(400).json({ message: "No hash provided" });

    db.get("SELECT * FROM User WHERE hash = ?", [hash], (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      if (!row) return res.json({ found: false, message: "ไม่พบข้อมูล" });
      res.json({ found: true, message: `${row.name} ${row.surname} (${row.company})` });
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
