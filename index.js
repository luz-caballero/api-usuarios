const express = require('express');
const app = express();
const db = require('./db');
const port = process.env.PORT || 8081;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.get('/usuarios', async (req, res) => {
  const result = await db.query('SELECT * FROM usuarios');
  res.json(result.rows);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

