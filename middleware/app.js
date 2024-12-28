const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   console.log("Hi, i am a middleware");
//   next();
// });

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.path, req.hostname, req.time);
  next();
});

app.get("/", (req, res) => {
  res.send("Hi, i am root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(8080, () => {
  console.log("server is listing");
});

//extra code
//extra code
//extra code
