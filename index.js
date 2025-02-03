const express = require("express");
const dbConnect = require("./config/dbConnect");
const router = require("./router");
const app = express();
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(router);
dbConnect();

app.listen(3000, () => console.log("server is running!"));
