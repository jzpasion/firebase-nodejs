const dbhandler = require("./firebase");
const express = require("express");
const router = express.Router();
var bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: false }));

router.get("/getAll", (req, res, next) => {
  dbhandler.GetAllFirebase(function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(data);
    }
  });
});
router.get("/getInfo/:rfid", (req, res, next) => {
  const rfid = req.params.rfid;
  dbhandler.GetRFID(rfid, function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(data);
    }
  });
});

router.post("/add", (req, res, next) => {
  const rfid = req.body.rfid;
  const name = req.body.name;
  const balance = req.body.balance;
  const points = req.body.points;
  dbhandler.AddFirebase(rfid, name, balance, points, function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Add Success!" });
    }
  });
});

router.put("/updateBalance/:rfid", (req, res, next) => {
  const rfid = req.params.rfid;
  const balance = req.body.balance;
  dbhandler.UpdateBalance(rfid, balance, function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json({ message: "Update Success!" });
    }
  });
});

router.put("/updatePointsBalance/:rfid", (req, res, next) => {
  const rfid = req.params.rfid;
  const balance = req.body.balance;
  const points = req.body.points;
  dbhandler.UpdatePointsBalance(rfid, balance, points, function(err, data) {
    if (err) {
      res.status(500).json({ err: error });
    } else {
      res.status(200).json({ message: "Points Updated! Balance Updated!" });
    }
  });
});

module.exports = router;
