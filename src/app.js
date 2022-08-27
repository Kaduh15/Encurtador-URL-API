// src/app.js

const express = require("express");
const { insertURL } = require("./utils/DB");

const app = express();
app.use(express.json());

app.post("/add-url", async (req, res) => {
  const { body } = req;
  console.log("body", body);

  const result = await insertURL(body);

  res.status(201).json(result);
});

module.exports = app;
