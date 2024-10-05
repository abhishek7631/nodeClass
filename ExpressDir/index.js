const express = require("express");

const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

// app.use((req, res) => {
//   //   console.log(req);
//   console.log("request received Abhi");
//   res.send("this is basic response");
// });

app.get("/", (req, res) => {
  res.send("hello i'm root");
});

app.get("/apple", (req, res) => {
  res.send("you connected with apple path");
});

app.get("/orange", (req, res) => {
  res.send("you connected with orange path");
});
