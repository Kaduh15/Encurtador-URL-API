const express = require('express');
require('express-async-errors');

const main = require('./routes/main');
const addURL = require('./routes/addURL');

const app = express();
app.use(express.json());

// Routes
app.use('/', main);
app.use('/add-url', addURL);

// Middleware de Error
app.use((err, _req, res, _next) => {
  res
    .status(err.status || 500)
    .json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;
