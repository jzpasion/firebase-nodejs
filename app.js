const express = require("express");
const app = express();

const routfire = require("./api/route");

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTION");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With-content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use(express.json());
app.use("/api/firebase", routfire);
module.exports = app;
