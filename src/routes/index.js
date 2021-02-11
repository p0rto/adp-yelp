const express = require("express");
const router = express.Router();
const BusinessSearchController = require("../controllers/BusinessSearchController");

router.get("/businesses", async (req, res) => {
  const formatedBusinesses = await BusinessSearchController.getFormatedBusinesses();

  res.send(formatedBusinesses);
});

module.exports = router;
