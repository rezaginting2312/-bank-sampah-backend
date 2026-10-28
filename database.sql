CREATE TABLE jenis_sampah (
    id SERIAL PRIMARY KEY,
    nama_sampah VARCHAR(100) NOT NULL,
    deskripsi TEXT,
    harga_per_kg NUMERIC(12,2) NOT NULL
        CHECK (harga_per_kg >= 0),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO jenis_sampah
    (nama_sampah, deskripsi, harga_per_kg)
VALUES
    ('Plastik',
     'Sampah plastik yang dapat didaur ulang',
     2000.00),
    ('Kertas dan Kardus',
     'Kertas bekas dan kardus',
     1500.00),
    ('Logam dan Kaleng',
     'Sampah logam dan kaleng bekas',
     4000.00),
    ('Kaca',
     'Botol dan pecahan kaca yang dapat didaur ulang',
     500.00);
