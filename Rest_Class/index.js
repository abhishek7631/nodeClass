const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

let posts = [
  {
    username: "@abhishek",
    content: "i love coding",
  },
  {
    username: "@ayush",
    content: "Hard work is important to achieve success",
  },
  {
    username: "@yogesh",
    content: "i got selected for my first internship",
  },
];

app.get("/", (req, res) => {
  res.send("server working well!");
});

app.listen(port, () => {
  console.log("listening to port : 8080");
});
