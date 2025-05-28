const express = require('express');
const path = require('path');

const app = express();

// Отдаём статику
app.use(express.static(path.join(__dirname, '..', 'public')));

// SPA fallback — все запросы отдаем index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
