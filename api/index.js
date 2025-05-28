const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Привет от LuckyZone!' });
});

module.exports.handler = serverless(app);
