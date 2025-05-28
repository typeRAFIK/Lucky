const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Можно добавить парсер JSON, если нужен
app.use(express.json());

// Пример простого роута
app.get('/', (req, res) => {
  res.send('Hello from LuckyZone API!');
});

// Другие роуты здесь, например:
// app.get('/api/some', (req, res) => { ... });

module.exports.handler = serverless(app);
