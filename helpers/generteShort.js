const generateShortID = (characters) => {
  const patternCharecter =
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890@#$%^%^&*";

  let shortId = "";
  for (let i = 0; i < 6; i++) {
    const rendomIndex = Math.floor(Math.random() * characters.length);
    shortId += characters[rendomIndex];
  }
  return shortId;
};

module.exports = generateShortID;


const = 