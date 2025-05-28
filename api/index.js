const express = require('express');
const path = require('path');

const app = express();

// Отдаём статические файлы из папки public (которая лежит рядом с папкой api)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Для SPA — все запросы отдаем index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// НЕ запускаем app.listen — Vercel управляет этим сам

module.exports = app;
