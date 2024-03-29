const PORT = process.env.PORT || 3001;
const { notes } = require('./db/db');
const express = require('express');
const app = express();

app.get('/api/notes', (req, res) => {
  res.json(notes);
});
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});