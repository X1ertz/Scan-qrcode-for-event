const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// สร้าง/เชื่อม database SQLite
const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) console.error("DB Error:", err.message);
  else console.log("Connected to SQLite database.");
});

// สร้าง table User
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    surname TEXT NOT NULL,
    company TEXT NOT NULL,
    hash TEXT NOT NULL UNIQUE
  )`);

  // insert ข้อมูลตัวอย่าง
  const stmt = db.prepare("INSERT OR IGNORE INTO User (name, surname, company, hash) VALUES (?, ?, ?, ?)");
 stmt.run("Mac", "Haddow", "AKA", "18dc5f3f46a1581ad0258afd8ddd6ee7");
stmt.run("Mark", "Willis", "AKA", "faf88d2c75bbe790c22e0951d3bed8fb");
stmt.run("Chris", "Jepson", "NuWave Botanicals", "2e8d6f60efd5782b59b3162292c634e8");
stmt.run("Benjamin", "Brown", "DBZ", "4a67f67dc7b26f21374de35c698c2946");
stmt.run("Brandon", "McLaren", "DBZ", "3064bbb51245e7b82508d3cba9f3beb5");
stmt.run("Alexander", "Karp", "ETHA", "5572499cc905f5497db99e2ee2b3a796");
stmt.run("Victor", "Chung", "ETHA", "44cc8cb2969f1ecc1fbddad525fac283");
stmt.run("Por-ngam", "Murphy", "ETHA", "ce821e0a7bc4aab95e0b116a04410002");
stmt.run("Hanif", "Merchant (TONY)", "CTX DISTRO LLC", "8fe126bb9388771c780a48e2c98a2597");
stmt.run("Nooruddin", "Lalani (MIKE)", "CTX DISTRO LLC", "bb46405acacac807953ab9a7502502f2");
stmt.run("Serenenapat", "Wachitkul", "CTX DISTRO LLC", "2c85da68619029da84e01516bef60006");
stmt.run("Ali", "Sabudin", "Detox Febryanto Tanto", "ff7b9b35ca0ac5ea3cf4c3b6765ff83e");
stmt.run("Rita Cristinawaty", "Phang", "Ferix Febryanto Tanto", "112aa49846be0245f4174a772dba7915");
stmt.run("Robert", "", "Calidior", "950f2941263b769aa4a9fe95a4e587f7");
stmt.run("Richard", "Lynch", "Calidior", "5ff51c610640ad58c1a1708c72efc559");
stmt.run("Mendel", "banon", "Nebraska technologies LLC", "f6dcf3daa90853fec691cfc0af5aa508");
stmt.run("AGUS", "WIDHIYANTO", "Komphar Indonesia", "0595c8345f4a896b03cfb1bd9cfab752");
stmt.run("Syarif Achmad", "Redga alsaggaf", "PT AGROINDO RAMAYASA", "478c661d3f9413ba24ca1058518118fc");
stmt.run("Alexa", "Lindstrom", "Cultcollective", "c05381e37604216a2aa606eb2d63060f");
stmt.run("Joshua", "Medina", "KMJZ Holdings", "e86a9c87cd359f4e68204eb1adcfd7d2");
stmt.run("RYAN", "DAVIDSON", "CROSSPAC VENTURES", "862ee20947a362a7a2576c4e1b36b80f");
stmt.run("Demi", "Uredi", "Cross Pacific Ventures", "831ade9dc260222e8dff8a98e2c309d5");
stmt.run("Elizabeth", "gardner", "Hayling international", "360d3fecc898d321e01f0fd97fda64f6");
stmt.run("Maya", "", "Health104", "796635225c60b19698835b4ad97cd53a");
stmt.run("Stephen", "", "Health105", "87b4d56e170b9bc1cc35aa35aa844fc2");
stmt.run("Sheila", "Tiwan", "AICC", "b62893a6fb193115d4351fbb4efd6c39");
stmt.run("เรือตรี", "ทองสุข ณ ชาติ", "นายกสมาคม TIKTA", "25f5eacc36dc358daeb680a15714d23c");
stmt.run("ดร.ฉลวย", "ขันธ์จำนงค์", "อุปนายกสมาคม TIKTA", "1eaff7f3020a6566deed849a87c31e1b");
stmt.run("สมชาย", "บำรุงศักดิ์", "อุปนายกสมาคม TIKTA", "df6a72afc48a0bc241fb21e5afef6c0d");
stmt.run("สิทธิชาติ", "ณ ชาติ", "TIKTA", "2b4bb4fc63ea17a76ee71162bb419502");
stmt.run("อังกูร", "เพียรแก้ว", "TIKTA", "04d4597344b3f11f5d58ff471a72116d");
stmt.run("พลเชษฐ์", "อาสนะเวศ", "TIKTA", "214cce43bb9948d8eb51ccf7202f148d");
stmt.run("ปนิภา", "พลยา", "TIKTA", "4e0a3663bc433b4d8c9990084f9eefa7");
stmt.run("จักรี", "จินเจตน์", "TIKTA", "b68a683167ec5ecc1a7803cb61a82326");
stmt.run("พัชรี", "รอดขันเมือง", "TIKTA", "f8795b55a414b89e6ad3ab3c23c30af1");
stmt.run("อิทธิพัทธ์", "หนูเย็น", "TIKTA", "8528408548e639f0bdac4344cd1e17fc");
stmt.run("มะธุศร", "โต๊ะเส็น", "TIKTA", "e976df3200a215e0b631c7e878979439");
stmt.run("วิลาส", "นามกร", "TIKTA", "020cec01515647a6b0c6bbb5ddcc1c46");
stmt.run("ดร.ดวงกมล", "ก๊กอึ้ง", "วิสาหกิจชุมชนไทรใหญ่พัฒนา", "6662f0de82c258373121735172751dcd");
stmt.run("ณัฐหทัย", "รอดสำราญ", "วิสาหกิจชุมชนไทรใหญ่พัฒนา", "fda12e15ccff2057f73dd4275f66f43a");
stmt.run("ศุภจักร", "ไตรรัตโนภาส", "PACCAN", "e626ebfca689fa1d07f76888b0edbc7a");
stmt.run("กันยา", "ภูวนนท์", "Siam herbaltech", "f27ae39b0f8bfcbce4b0a32ff724df1c");
stmt.run("สหัสชัย", "คิดตรง", "APAC bioscience", "8fe81af78c27677a85cfe8eb7c9ff512");
stmt.run("นารีรัตน์", "ณ ชาติ", "APAC bioscience", "249d01902fd9a23f6db747c458ff569c");
stmt.run("ศรัญญู", "ชมภูพล", "VELTHRA BIO", "c26d8e7e896643b1d8a04f74c137d3db");
stmt.run("ธาวิน", "บำรุงศักดิ์", "VELTHRA BIO", "62875bc9488ab074d30e0f5dc56b02ac");
stmt.run("ณวงศ์", "บุนนาค", "มหาวิทยาลัยทักษิณ", "d63ac0b9d4544e621462b31bcd7cd2e5");
stmt.run("ชุติมา", "แก้วพิบูลย์", "มหาวิทยาลัยทักษิณ", "c6574b54b85ae3f8128292edd0f8b0f2");
stmt.run("พรชัย", "ปัทมินทร", "Dr. Kratom Bio", "02f5aac2dbb72b5f218f729441e7ef7d");

  stmt.finalize();
});

// API ตรวจ hash
app.post("/check-hash", (req, res) => {
  const { hash } = req.body;
  if (!hash) return res.status(400).json({ message: "No hash provided" });

  db.get("SELECT * FROM User WHERE hash = ?", [hash], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.json({ found: false, message: "ไม่พบข้อมูล" });
    res.json({ found: true, message: ` ${row.name} ${row.surname} (${row.company})` });
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve("public/index.html"));
});

// รัน server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
