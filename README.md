# 🧑‍💻 Backend API – Data Siswa

Backend ini dibuat untuk kebutuhan **Uji Kompetensi (UJK) BNSP** program **Pengembangan Web dengan React & Node.js – BBPVP Bekasi**.  
Proyek ini menyediakan REST API untuk mengelola **Data Siswa** menggunakan **Express**, **MySQL**, dan **Prisma ORM**.

---

## 🚀 Teknologi yang Digunakan

- **Node.js v18+**
- **Express v4.18.2**
- **MySQL**
- **Prisma ORM v5.0.0**
- **Nodemon v3.1.0**
- **CORS Middleware**
- **Dotenv**

---

## 📦 Fitur CRUD Data Siswa

API ini mendukung operasi berikut:

| Fitur      | Deskripsi                                    |
| ---------- | -------------------------------------------- |
| Create     | Menambahkan data siswa baru                  |
| Read       | Mengambil semua data siswa                   |
| Read By ID | Mengambil detail satu siswa menggunakan `id` |
| Update     | Mengubah data siswa                          |
| Delete     | Menghapus data siswa                         |

---

## 🗂 Struktur Folder Backend

```

src/
│── controllers/
│ └── siswa.controller.js
│── services/
│ └── siswa.service.js
│── routes/
│ └── siswa.route.js
│── utils/
│ └── response.js
│── config/
│ └── prisma.js
│── app.js
│── server.js

```

---

## 🛠 Instalasi & Setup

### 1️⃣ Clone project

```bash
git clone https://github.com/rizkilabs/siswa-backend.git
cd siswa-backend
```

### 2️⃣ Install dependency

```bash
npm install
```

### 3️⃣ Buat file `.env`

```
DATABASE_URL="mysql://root:password@localhost:3306/siswa_db"
PORT=3000
```

### 4️⃣ Generate Prisma Client

```bash
npx prisma generate
```

### 5️⃣ Migrasi database (jika diperlukan)

```bash
npx prisma db push
```

---

## 🗄 Struktur Database (Prisma Schema)

```prisma
model Siswa {
  id           Int       @id @default(autoincrement())
  kodeSiswa    String    @unique
  namaSiswa    String
  alamatSiswa  String?
  tglSiswa     DateTime
  jurusanSiswa String
  createdAt    DateTime  @default(now())
  updatedAt    DateTime  @updatedAt
}
```

---

## ▶ Menjalankan Server

### Mode development

```bash
npm run dev
```

Server berjalan di:

```
http://localhost:3000
```

---

## 📡 Daftar Endpoint API

### ➤ Mendapatkan semua data siswa

```
GET /api/siswa
```

### ➤ Mendapatkan data siswa berdasarkan ID

```
GET /api/siswa/:id
```

### ➤ Menambah data siswa baru

```
POST /api/siswa
```

**Contoh Body JSON**

```json
{
  "kodeSiswa": "S001",
  "namaSiswa": "Budi",
  "alamatSiswa": "Bogor",
  "tglSiswa": "2024-01-01",
  "jurusanSiswa": "RPL"
}
```

### ➤ Update data siswa

```
PUT /api/siswa/:id
```

### ➤ Hapus data siswa

```
DELETE /api/siswa/:id
```

---

## 🔧 Response Format (Standar API)

Semua response menggunakan format:

```json
{
  "status": true,
  "message": "Siswa created",
  "data": { ... }
}
```

Error:

```json
{
  "status": false,
  "message": "id is required"
}
```

---

## 🧪 Testing API

Gunakan tools berikut:

- **Thunder Client**
- **Postman**
- **Prisma Studio**

```bash
npx prisma studio
```

---

## 📘 Catatan Penting

- Primary key utama menggunakan **id (autoincrement)**
- `kodeSiswa` tetap **unique** namun bukan primary key
- Backend ini siap dihubungkan ke **Frontend React (Vite)**

---

## 🏆 Dibuat Untuk

**Uji Kompetensi (UJK) – Sertifikasi BNSP**
Program: _Pengembangan Web dengan React & Node.js_
Lembaga: **BBPVP Bekasi**
Tahun: **2025**

---

## ✨ Author

**Mochamad Rizki**
Fullstack Developer – React & Node.js

---
