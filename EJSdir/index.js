const express = require("express");

const app = express();

const port = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  const instaData = require("./data.json");
  const data = instaData[username];
  res.render("instagram.ejs", { data });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
