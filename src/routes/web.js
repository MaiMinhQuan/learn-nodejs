const express = require("express");
const {
  getHomepage,
  getABC,
  hoidanIT,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomepage);

router.get("/hoidanit", hoidanIT);

router.get("/abc", getABC);

module.exports = router; //export default
