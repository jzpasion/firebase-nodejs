const dbhandler = require("./firebase");
const express = require("express");
const router = express.Router();
var bodyparser = require("body-parser");
router.use(bodyparser.urlencoded({ extended: false }));

router.get("/get", (req, res, next) => {
  dbhandler.GetAll(function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(data);
    }
  });
});

router.post("/add", (req, res, next) => {
  const val = req.body.val;
  dbhandler.AddFirebase(val, function(err, data) {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      res.status(200).json(data);
    }
  });
});

module.exports = router;
