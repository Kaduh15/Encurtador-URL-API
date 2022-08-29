// src/app.js

const express = require("express");

const { insertURL, getOriginalURL } = require("./utils/DB");

const app = express();
app.use(express.json());

app.post("/add-url", async (req, res) => {
  const { body } = req;

  const result = await insertURL(body);

  res.status(201).json(result);
});

app.get("/:shortURL", async (req, res) => {
  const { shortURL } = req.params;

  const urlOriginal = await getOriginalURL(shortURL);

  res.status(200).redirect(urlOriginal);

});

app.use((err, req, res, _next) => {
  res
    .status(500)
    .json({ message: `Algo deu errado! Mensagem: ${err.message}` });

module.exports = app;
