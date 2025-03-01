const express = require("express");
const MakeShortUrl = require("../../controllers/makeShortUrl");
const { applyDefaults } = require("../../modal/shortUrlSchema");
const shortRoute = express.Router();

shortRoute.use("/shorturl", MakeShortUrl);

module.exports = shortRoute;
