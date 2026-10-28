
const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// GET 1. Mengambil semua jenis sampah
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM jenis_sampah ORDER BY id'
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data', error: error.message });
  }
});

// GET 2. Mengambil jenis sampah berdasarkan nama
router.get('/nama/:nama', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM jenis_sampah WHERE nama_sampah ILIKE $1',
      [req.params.nama]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Jenis sampah tidak ditemukan' });
    }

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mencari data', error: error.message });
  }
});

// GET 3. Mengambil jenis sampah berdasarkan ID
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM jenis_sampah WHERE id = $1',
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Jenis sampah tidak ditemukan' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data', error: error.message });
  }
});

// POST 4. Menambahkan jenis sampah
router.post('/', async (req, res) => {
  try {
    const { nama_sampah, deskripsi, harga_per_kg } = req.body;

    if (!nama_sampah || harga_per_kg === undefined ||
        !Number.isFinite(Number(harga_per_kg)) ||
        Number(harga_per_kg) < 0) {
      return res.status(400).json({
        message: 'Nama sampah dan harga valid wajib diisi'
      });
    }

    const result = await pool.query(
      `INSERT INTO jenis_sampah (nama_sampah, deskripsi, harga_per_kg)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [nama_sampah, deskripsi || null, harga_per_kg]
    );

    res.status(201).json({
      message: 'Jenis sampah berhasil ditambahkan',
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menambahkan data', error: error.message });
  }
});

// PUT 5. Memperbarui jenis sampah
router.put('/:id', async (req, res) => {
  try {
    const { nama_sampah, deskripsi, harga_per_kg } = req.body;

    if (!nama_sampah || harga_per_kg === undefined ||
        !Number.isFinite(Number(harga_per_kg)) ||
        Number(harga_per_kg) < 0) {
      return res.status(400).json({
        message: 'Nama sampah dan harga valid wajib diisi'
      });
    }

    const result = await pool.query(
      `UPDATE jenis_sampah
       SET nama_sampah = $1,
           deskripsi = $2,
           harga_per_kg = $3,
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $4
       RETURNING *`,
      [nama_sampah, deskripsi || null, harga_per_kg, req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Jenis sampah tidak ditemukan' });
    }

    res.json({
      message: 'Jenis sampah berhasil diperbarui',
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ message: 'Gagal memperbarui data', error: error.message });
  }
});

// DELETE 6. Menghapus jenis sampah
router.delete('/:id', async (req, res) => {
  try {
    const result = await pool.query(
      'DELETE FROM jenis_sampah WHERE id = $1 RETURNING *',
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Jenis sampah tidak ditemukan' });
    }

    res.json({
      message: 'Jenis sampah berhasil dihapus',
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ message: 'Gagal menghapus data', error: error.message });
  }
});

module.exports = router;
