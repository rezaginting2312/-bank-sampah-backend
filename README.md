# Bank Sampah Backend API

REST API untuk mengelola data jenis sampah pada sistem Bank Sampah. Proyek ini dibuat menggunakan **Node.js, Express.js, dan PostgreSQL**.

## Teknologi yang Digunakan

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- dotenv
- Postman untuk pengujian API

## Fitur API

API menyediakan enam endpoint untuk mengelola data jenis sampah:

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/jenis-sampah` | Menampilkan semua jenis sampah |
| GET | `/api/jenis-sampah/:id` | Menampilkan jenis sampah berdasarkan ID |
| GET | `/api/jenis-sampah/nama/:nama` | Mencari jenis sampah berdasarkan nama |
| POST | `/api/jenis-sampah` | Menambahkan jenis sampah baru |
| PUT | `/api/jenis-sampah/:id` | Memperbarui data jenis sampah |
| DELETE | `/api/jenis-sampah/:id` | Menghapus data jenis sampah |

## Struktur Proyek

```text
bank-sampah-backend/
├── config/
│   └── db.js
├── routes/
│   └── jenisSampah.js
├── .env
├── .gitignore
├── database.sql
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

File `.env` dan folder `node_modules` tidak disertakan dalam repository publik.

## Persiapan dan Instalasi

### 1. Persyaratan

Pastikan Node.js, npm, dan PostgreSQL sudah terpasang di komputer.

### 2. Clone Repository

```bash
git clone URL_REPOSITORY_KAMU
cd bank-sampah-backend
```

Ganti `URL_REPOSITORY_KAMU` dengan URL repository GitHub proyek ini.

### 3. Instal Dependensi

```bash
npm install
```

### 4. Buat Database

Buat database PostgreSQL bernama `bank_sampah`, lalu jalankan isi file `database.sql` pada database tersebut.

Jika tabel `jenis_sampah` sudah tersedia, jangan menjalankan ulang perintah pembuatan tabel yang sama.

### 5. Konfigurasi Environment

Buat file `.env` di folder utama proyek dan sesuaikan nilainya dengan konfigurasi PostgreSQL lokal.

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=bank_sampah
DB_USER=postgres
DB_PASSWORD=password_postgresql_kamu
PORT=3000
```

Ganti `password_postgresql_kamu` dengan kata sandi PostgreSQL milikmu. Jangan mengunggah file `.env` ke GitHub.

### 6. Jalankan Server

```bash
node server.js
```

Jika berhasil, server berjalan di:

`http://localhost:3000`

Endpoint utama API:

`http://localhost:3000/api/jenis-sampah`

## Contoh Request

### Menambahkan Jenis Sampah

**Method:** `POST`

**URL:** `/api/jenis-sampah`

**Body (JSON):**

```json
{
  "nama_sampah": "Minyak Jelantah",
  "deskripsi": "Minyak goreng bekas yang dapat didaur ulang",
  "harga_per_kg": 3000
}
```

### Memperbarui Jenis Sampah

**Method:** `PUT`

**URL:** `/api/jenis-sampah/1`

**Body (JSON):**

```json
{
  "nama_sampah": "Plastik",
  "deskripsi": "Sampah plastik yang dapat didaur ulang",
  "harga_per_kg": 2500
}
```

Sesuaikan ID dengan data yang tersedia di database.

## Pengujian API

Pengujian endpoint dilakukan menggunakan Postman, meliputi:

1. GET semua jenis sampah.
2. GET jenis sampah berdasarkan ID.
3. GET jenis sampah berdasarkan nama.
4. POST untuk menambahkan jenis sampah.
5. PUT untuk memperbarui jenis sampah.
6. DELETE untuk menghapus jenis sampah.

## Database

Database menggunakan satu tabel utama, yaitu `jenis_sampah`, dengan kolom:

- `id`
- `nama_sampah`
- `deskripsi`
- `harga_per_kg`
- `created_at`
- `updated_at`

## Tujuan Proyek

Proyek ini dibuat untuk memenuhi latihan Backend Development mengenai perancangan database PostgreSQL dan implementasi REST API menggunakan Express.js.

