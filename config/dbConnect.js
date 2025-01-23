const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://userData:yXK3AYl5kjPaMYtV@cluster0.bh4tq.mongodb.net/ShortUrl?retryWrites=true&w=majority&appName=Cluster0"
    )
    .then(() => console.log("Database Connected!"));
};

module.exports = dbConnect;
