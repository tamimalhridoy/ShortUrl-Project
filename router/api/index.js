const express = require("express");
const authRouther = require("./auth");
const shortRoute = require("./shorturl");
const apiRouter = express.Router();

apiRouter.use("/auth", authRouther);

apiRouter.use("/generate", shortRoute);

module.exports = apiRouter;
