const express = require("express");
const router = express.Router();
const {
  getPortfolioCoins,
  setPortfolioCoins,
  updatePortfolioCoins,
  deletePortfolioCoins,
} = require("../controllers/portfolioController");

router.route("/").get(getPortfolioCoins).post(setPortfolioCoins);
router.route("/:id").put(updatePortfolioCoins).delete(deletePortfolioCoins);

module.exports = router;
