const express = require('express');
const path = require('path');
const app = express();

// Статические файлы из папки public
app.use(express.static(path.join(__dirname, '..', 'public')));

// Отдача index.html на все маршруты
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// НЕ запускаем сервер — экспортируем обработчик для Vercel
module.exports = app;
