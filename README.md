# Bank Sampah Backend API

REST API untuk mengelola data jenis sampah pada sistem Bank Sampah menggunakan Node.js, Express.js, dan PostgreSQL.

# Deskripsi Proyek
Bank Sampah Backend API adalah layanan REST API yang dikembangkan menggunakan Node.js, Express.js, dan PostgreSQL untuk mengelola data jenis sampah. Proyek ini menyediakan fitur melihat, mencari, menambahkan, memperbarui, dan menghapus data jenis sampah beserta deskripsi dan harga per kilogramnya.

## Teknologi yang Digunakan

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- dotenv
- Postman

## Fitur API

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/api/jenis-sampah` | Menampilkan semua jenis sampah |
| GET | `/api/jenis-sampah/:id` | Menampilkan jenis sampah berdasarkan ID |
| GET | `/api/jenis-sampah/nama/:nama` | Mencari jenis sampah berdasarkan nama |
| POST | `/api/jenis-sampah` | Menambahkan jenis sampah |
| PUT | `/api/jenis-sampah/:id` | Memperbarui jenis sampah |
| DELETE | `/api/jenis-sampah/:id` | Menghapus jenis sampah |

## Struktur Proyek

```text
bank-sampah-backend/
├── config/
│   └── db.js
├── routes/
│   └── jenisSampah.js
├── database.sql
├── server.js
├── package.json
├── package-lock.json
├── .gitignore

```

## Persiapan dan Instalasi

### 1. Persyaratan

Pastikan Node.js, npm, dan PostgreSQL sudah terpasang.

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

### 4. Siapkan Database

Buat database PostgreSQL bernama `bank_sampah`, lalu jalankan perintah SQL dari file `database.sql`.

Jika tabel `jenis_sampah` sudah tersedia, jangan menjalankan ulang perintah pembuatan tabel yang sama.

### 5. Konfigurasi Environment

Buat file `.env` di folder utama proyek dan sesuaikan dengan konfigurasi PostgreSQL lokal.

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=bank_sampah
DB_USER=postgres
DB_PASSWORD=password_postgresql_kamu
PORT=3000
```

Ganti `password_postgresql_kamu` dengan kata sandi PostgreSQL milikmu.

### 6. Jalankan Server

```bash
node server.js
```

Jika berhasil, server dapat diakses melalui:

`http://localhost:3000`

Endpoint utama:

`http://localhost:3000/api/jenis-sampah`

## Pengujian API dengan Postman

Pengujian dilakukan menggunakan Postman untuk memastikan keenam endpoint berjalan sesuai fungsinya.

### 1. GET Semua Jenis Sampah

Menampilkan seluruh data jenis sampah.

<img width="1919" height="1079" alt="Screenshot 2026-10-29 000413" src="https://github.com/user-attachments/assets/6b67d237-ac55-40fb-8d04-e908419f5dca" />


### 2. GET Jenis Sampah Berdasarkan ID

Menampilkan data berdasarkan ID tertentu.

<img width="1919" height="1079" alt="Screenshot 2026-10-28 232629" src="https://github.com/user-attachments/assets/d156761d-cd95-4c0a-b3b2-239d3461ac00" />


### 3. GET Jenis Sampah Berdasarkan Nama

Mencari data berdasarkan nama jenis sampah.

<img width="1919" height="1079" alt="Screenshot 2026-10-28 232805" src="https://github.com/user-attachments/assets/ec912d22-98fe-4d30-b038-6de81f4a571a" />


### 4. POST Menambahkan Jenis Sampah

Menambahkan data jenis sampah baru ke database.

<img width="1917" height="1079" alt="Screenshot 2026-10-28 232954" src="https://github.com/user-attachments/assets/8501d83e-ce5e-4a95-bd8d-224e3cd1e648" />


### 5. PUT Memperbarui Jenis Sampah

Memperbarui data jenis sampah berdasarkan ID.

<img width="1919" height="1079" alt="Screenshot 2026-10-28 233111" src="https://github.com/user-attachments/assets/c82b511b-f920-454c-9624-39b58c0075ab" />


### 6. DELETE Menghapus Jenis Sampah

Menghapus data jenis sampah berdasarkan ID.

<img width="1919" height="1079" alt="Screenshot 2026-10-28 233215" src="https://github.com/user-attachments/assets/825d2315-f5ce-48a6-b46a-aa084d1cbb12" />

## Database

Proyek ini menggunakan satu tabel utama, yaitu `jenis_sampah`, dengan kolom:

- `id`
- `nama_sampah`
- `deskripsi`
- `harga_per_kg`
- `created_at`
- `updated_at`

## Diagram Database

Diagram database dibuat menggunakan dbdiagram.io.

**Link diagram:** : https://dbdiagram.io/d/Jenis-Sampah-6ae22580aac33014104a1d54

## Tujuan Proyek

Proyek ini dibuat untuk memenuhi tugas Backend Development mengenai pembuatan database PostgreSQL dan implementasi REST API menggunakan Express.js.
