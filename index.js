const express = require("express");
const dbConnect = require("./config/dbConnect");
const router = require("./router");
const app = express();
app.use(express.json());
app.use(router);
dbConnect();




app.listen(3000, () => console.log("server is running!"));
