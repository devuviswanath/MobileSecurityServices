const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProduct,
} = require("../controller/productCtrl");
const router = express.Router();

router.post("/add-products", createProduct); //post-man
router.get("/all-products", getAllProduct);
router.get("/:id", getaProduct);

module.exports = router;
