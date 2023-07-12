const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  updatedUser,
  userCart,
  // createProductOrder,
  getUserCart,
  updateProductQuantityFromCart,
  removeProductFromCart,
  emptyCart,
  logout,
  handleRefreshToken,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
} = require("../controller/userCtrl");
const { authMiddleware, isOperator } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword); //post-man
router.post("/login", loginUserCtrl);
router.post("/addcart", authMiddleware, userCart);
// router.post("/cart/create-product-order", authMiddleware, createProductOrder);
router.get("/getcart", authMiddleware, getUserCart);

router.get("/all-users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isOperator, getaUser);
router.put(
  "/update-product-cart/:cartItemId/:newQuantity",
  authMiddleware,
  updateProductQuantityFromCart
);
router.delete(
  "/delete-product-cart/:cartItemId",
  authMiddleware,
  removeProductFromCart
);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.put("/edit-user", authMiddleware, updatedUser);

module.exports = router;
