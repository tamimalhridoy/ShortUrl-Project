const express = require("express");
const registration = require("../../controllers/auth/registration");
const login = require("./login");
const authRouther = express.Router();

authRouther.get("/registration", registration);

authRouther.get("/login", login);

module.exports = authRouther;
