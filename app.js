const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/view/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/view/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/view/works.html");
});

app.listen(port, () => {
  console.log("Whatever here.");
});
