const getHomepage = (req, res) => {
  res.send("Hello world!");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const hoidanIT = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  hoidanIT,
};
