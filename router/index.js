const express = require("express");
const apiRouter = require("./api");
const RenderUrl = require("../controllers/shorturl/renderUrl");
const router = express.Router();

router.use("/api/v1", apiRouter);

router.get("/:shortID", RenderUrl);

router.use((req, res) => {
  res.send("pages not found.");
});

module.exports = router;
