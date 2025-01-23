const express = require("express");
const apiRouter = require("./api");
const router = express.Router();

router.use("/api/v1", apiRouter);

router.use((req, res) => {
  res.send("pages not found.");
});

module.exports = router;
