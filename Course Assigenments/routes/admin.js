const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/addProducts", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addProducts.html"));
});

router.post("/addProducts", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
