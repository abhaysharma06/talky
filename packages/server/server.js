const express = require("express");
const app = express();
const PORT = 3021;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
