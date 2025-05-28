const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Папка с сайтом (HTML, CSS и т.д.)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен: http://localhost:${PORT}`);
});
