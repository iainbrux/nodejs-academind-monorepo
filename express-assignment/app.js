const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("In the first middleware!");
  next();
});

app.use((req, res, next) => {
  console.log("In the second middleware!");
});

app.listen(3000);
