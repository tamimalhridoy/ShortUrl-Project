const isUrlValid = require("../helpers/isUrlValid");
const shortUrlSchema = require("../modal/shortUrlSchema");
const generateShortID = require("./generteShort");

const MakeShortUrl = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).send({ error: "Url Is Required!" });
  }
  if (!isUrlValid(url)) {
    return res.status(400).send({ error: "Url is not lValid!" });
  }
  const shorted = generateShortID(url);
  const existUrl = await shortUrlSchema.findOneAndUpdate(
    { url },
    { $set: { shortID: shorted } },
    { new: true }
  );

  if (existUrl) {
    return res.send(existUrl);
  }

  const shortUrl = new shortUrlSchema({
    url: url,
    shortID: shorted,
  });

  shortUrl.save();

  res.send(shortUrl);
};

module.exports = MakeShortUrl;
