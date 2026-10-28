
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const jenisSampahRoutes = require('./routes/jenisSampah');

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'API Bank Sampah berhasil berjalan',
  });
});

app.use('/api/jenis-sampah', jenisSampahRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
