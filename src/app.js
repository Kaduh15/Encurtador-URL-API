// src/app.js

const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).redirect('/admin'));

app.post('/add' )

module.exports = app