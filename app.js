const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/works", (req, res) => {
  res.send("Works");
});

app.listen(port, () => {
  console.log("Whatever here.");
});
