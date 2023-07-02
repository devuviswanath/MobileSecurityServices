const express = require("express");
const {
  createService,
  getaService,
  getAllService,
} = require("../controller/serviceCtrl");
const router = express.Router();
router.post("/create-service", createService); //post-man
router.get("/all-service", getAllService);
router.get("/:id", getaService);

module.exports = router;
