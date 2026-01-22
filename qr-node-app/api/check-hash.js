// api/check-hash.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // อ่าน body แบบ async
  const body = await req.json(); 
  const { hash } = body;

  if (!hash) return res.status(400).json({ message: "No hash provided" });

   const users = [
  { "name": "Mac", "surname": "Haddow", "company": "AKA", "hash": "18dc5f3f46a1581ad0258afd8ddd6ee7" },
  { "name": "Mark", "surname": "Willis", "company": "AKA", "hash": "faf88d2c75bbe790c22e0951d3bed8fb" },
  { "name": "Chris", "surname": "Jepson", "company": "NuWave Botanicals", "hash": "2e8d6f60efd5782b59b3162292c634e8" },
  { "name": "Benjamin", "surname": "Brown", "company": "DBZ", "hash": "4a67f67dc7b26f21374de35c698c2946" },
  { "name": "Brandon", "surname": "McLaren", "company": "DBZ", "hash": "3064bbb51245e7b82508d3cba9f3beb5" },
  { "name": "Alexander", "surname": "Karp", "company": "ETHA", "hash": "5572499cc905f5497db99e2ee2b3a796" },
  { "name": "Victor", "surname": "Chung", "company": "ETHA", "hash": "44cc8cb2969f1ecc1fbddad525fac283" },
  { "name": "Por-ngam", "surname": "Murphy", "company": "ETHA", "hash": "ce821e0a7bc4aab95e0b116a04410002" },
  { "name": "Hanif", "surname": "Merchant (TONY)", "company": "CTX DISTRO LLC", "hash": "8fe126bb9388771c780a48e2c98a2597" },
  { "name": "Nooruddin", "surname": "Lalani (MIKE)", "company": "CTX DISTRO LLC", "hash": "bb46405acacac807953ab9a7502502f2" },
  { "name": "Serenenapat", "surname": "Wachitkul", "company": "CTX DISTRO LLC", "hash": "2c85da68619029da84e01516bef60006" },
  { "name": "Ali", "surname": "Sabudin", "company": "Detox Febryanto Tanto", "hash": "ff7b9b35ca0ac5ea3cf4c3b6765ff83e" },
  { "name": "Rita Cristinawaty", "surname": "Phang", "company": "Ferix Febryanto Tanto", "hash": "112aa49846be0245f4174a772dba7915" },
  { "name": "Robert", "surname": "", "company": "Calidior", "hash": "950f2941263b769aa4a9fe95a4e587f7" },
  { "name": "Richard", "surname": "Lynch", "company": "Calidior", "hash": "5ff51c610640ad58c1a1708c72efc559" },
  { "name": "Mendel", "surname": "banon", "company": "Nebraska technologies LLC", "hash": "f6dcf3daa90853fec691cfc0af5aa508" },
  { "name": "AGUS", "surname": "WIDHIYANTO", "company": "Komphar Indonesia", "hash": "0595c8345f4a896b03cfb1bd9cfab752" },
  { "name": "Syarif Achmad", "surname": "Redga alsaggaf", "company": "PT AGROINDO RAMAYASA", "hash": "478c661d3f9413ba24ca1058518118fc" },
  { "name": "Alexa", "surname": "Lindstrom", "company": "Cultcollective", "hash": "c05381e37604216a2aa606eb2d63060f" },
  { "name": "Joshua", "surname": "Medina", "company": "KMJZ Holdings", "hash": "e86a9c87cd359f4e68204eb1adcfd7d2" },
  { "name": "RYAN", "surname": "DAVIDSON", "company": "CROSSPAC VENTURES", "hash": "862ee20947a362a7a2576c4e1b36b80f" },
  { "name": "Demi", "surname": "Uredi", "company": "Cross Pacific Ventures", "hash": "831ade9dc260222e8dff8a98e2c309d5" },
  { "name": "Elizabeth", "surname": "gardner", "company": "Hayling international", "hash": "360d3fecc898d321e01f0fd97fda64f6" },
  { "name": "Maya", "surname": "", "company": "Health104", "hash": "796635225c60b19698835b4ad97cd53a" },
  { "name": "Stephen", "surname": "", "company": "Health105", "hash": "87b4d56e170b9bc1cc35aa35aa844fc2" },
  { "name": "Sheila", "surname": "Tiwan", "company": "AICC", "hash": "b62893a6fb193115d4351fbb4efd6c39" },
  { "name": "เรือตรี", "surname": "ทองสุข ณ ชาติ", "company": "นายกสมาคม TIKTA", "hash": "25f5eacc36dc358daeb680a15714d23c" },
  { "name": "ดร.ฉลวย", "surname": "ขันธ์จำนงค์", "company": "อุปนายกสมาคม TIKTA", "hash": "1eaff7f3020a6566deed849a87c31e1b" },
  { "name": "สมชาย", "surname": "บำรุงศักดิ์", "company": "อุปนายกสมาคม TIKTA", "hash": "df6a72afc48a0bc241fb21e5afef6c0d" },
  { "name": "สิทธิชาติ", "surname": "ณ ชาติ", "company": "TIKTA", "hash": "2b4bb4fc63ea17a76ee71162bb419502" },
  { "name": "อังกูร", "surname": "เพียรแก้ว", "company": "TIKTA", "hash": "04d4597344b3f11f5d58ff471a72116d" },
  { "name": "พลเชษฐ์", "surname": "อาสนะเวศ", "company": "TIKTA", "hash": "214cce43bb9948d8eb51ccf7202f148d" },
  { "name": "ปนิภา", "surname": "พลยา", "company": "TIKTA", "hash": "4e0a3663bc433b4d8c9990084f9eefa7" },
  { "name": "จักรี", "surname": "จินเจตน์", "company": "TIKTA", "hash": "b68a683167ec5ecc1a7803cb61a82326" },
  { "name": "พัชรี", "surname": "รอดขันเมือง", "company": "TIKTA", "hash": "f8795b55a414b89e6ad3ab3c23c30af1" },
  { "name": "อิทธิพัทธ์", "surname": "หนูเย็น", "company": "TIKTA", "hash": "8528408548e639f0bdac4344cd1e17fc" },
  { "name": "มะธุศร", "surname": "โต๊ะเส็น", "company": "TIKTA", "hash": "e976df3200a215e0b631c7e878979439" },
  { "name": "วิลาส", "surname": "นามกร", "company": "TIKTA", "hash": "020cec01515647a6b0c6bbb5ddcc1c46" },
  { "name": "ดร.ดวงกมล", "surname": "ก๊กอึ้ง", "company": "วิสาหกิจชุมชนไทรใหญ่พัฒนา", "hash": "6662f0de82c258373121735172751dcd" },
  { "name": "ณัฐหทัย", "surname": "รอดสำราญ", "company": "วิสาหกิจชุมชนไทรใหญ่พัฒนา", "hash": "fda12e15ccff2057f73dd4275f66f43a" },
  { "name": "ศุภจักร", "surname": "ไตรรัตโนภาส", "company": "PACCAN", "hash": "e626ebfca689fa1d07f76888b0edbc7a" },
  { "name": "กันยา", "surname": "ภูวนนท์", "company": "Siam herbaltech", "hash": "f27ae39b0f8bfcbce4b0a32ff724df1c" },
  { "name": "สหัสชัย", "surname": "คิดตรง", "company": "APAC bioscience", "hash": "8fe81af78c27677a85cfe8eb7c9ff512" },
  { "name": "นารีรัตน์", "surname": "ณ ชาติ", "company": "APAC bioscience", "hash": "249d01902fd9a23f6db747c458ff569c" },
  { "name": "ศรัญญู", "surname": "ชมภูพล", "company": "VELTHRA BIO", "hash": "c26d8e7e896643b1d8a04f74c137d3db" },
  { "name": "ธาวิน", "surname": "บำรุงศักดิ์", "company": "VELTHRA BIO", "hash": "62875bc9488ab074d30e0f5dc56b02ac" },
  { "name": "ณวงศ์", "surname": "บุนนาค", "company": "มหาวิทยาลัยทักษิณ", "hash": "d63ac0b9d4544e621462b31bcd7cd2e5" },
  { "name": "ชุติมา", "surname": "แก้วพิบูลย์", "company": "มหาวิทยาลัยทักษิณ", "hash": "c6574b54b85ae3f8128292edd0f8b0f2" },
  { "name": "พรชัย", "surname": "ปัทมินทร", "company": "Dr. Kratom Bio", "hash": "02f5aac2dbb72b5f218f729441e7ef7d" }
];
  const user = users.find(u => u.hash === hash);
  if (!user) return res.json({ found: false, message: "-" });

  return res.json({ found: true, message: `${user.name} ${user.surname} (${user.company})` });
}
