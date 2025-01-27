const isUrlValid = require("../helpers/isUrlValid");

const MakeShortUrl = (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send({ error: "Url Is Required!" });
  }
  if (!isUrlValid(url)) {
    return res.status(400).send({ error: "Url is not lValid!" });
  }

  const generateShortID = (characters) => {
    let shortId = "";
    for (let i = 0; i < 6; i++) {
      const rendomIndex = Math.floor(Math.random() * characters.length);
      shortId += characters[rendomIndex];
    }

    return shortId;
  };
  res.send(generateShortID(url));
};

module.exports = MakeShortUrl;
