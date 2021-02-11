const express = require("express");
const router = express.Router();
const BusinessSearchController = require("../controllers/BusinessSearchController");

const businessSearchController = new BusinessSearchController();

router.get("/businesses", async (req, res) => {
  const formatedBusinesses = await businessSearchController.getFormatedBusinesses();

  res.send(formatedBusinesses);
});

module.exports = router;
