const express = require("express");
const apiRouter = require("./api");
const RenderUrl = require("../controllers/shorturl/renderUrl");
const { homePage, registrationPage, LoginPage } = require("./staicSides");
const router = express.Router();

router.use("/api/v1", apiRouter);

router.get("/:shortID", RenderUrl);

router.use("/", homePage);
router.use("/registration", registrationPage);
router.use("/login", LoginPage);

router.use((req, res) => {
  res.send("pages not found.");
});

module.exports = router;
