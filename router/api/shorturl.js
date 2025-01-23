const express = require("express");
const shortRoute = express.Router();

shortRoute.post("shorturl", (req, res) => {
  res.send("shorturl pages");
});


  

module.exports = shortRoute;