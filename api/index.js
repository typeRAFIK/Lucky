const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

// Статические файлы из папки public
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.send('Привет! Это LuckyZone.');
});

module.exports.handler = serverless(app);
