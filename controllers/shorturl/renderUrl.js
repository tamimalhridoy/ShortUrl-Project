const shortUrlSchema = require("../../modal/shortUrlSchema");

const RenderUrl = async (req, res) => {
  const shortID = req.params.shortID;

  const existUrl = await shortUrlSchema.findOne({ shortID });

  if (!existUrl) {
    return res.status(400).send("This Page not Found!");
  }

  //   res.send(existUrl);
  res.render(existUrl.url);
};

module.exports = RenderUrl;
