const express = require("express");
const MakeShortUrl = require("../../controllers/makeShortUrl");
const shortRoute = express.Router();

shortRoute.use("/shorturl", MakeShortUrl);

module.exports = shortRoute;
