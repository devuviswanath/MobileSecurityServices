const express = require("express");

const {
  createUser,
  loginUserCtrl,
  loginOperator,
  getallUser,
  getallOperators,
  getaUser,
  updatedUser,
  userCart,
  createProductOrder,
  createServiceOrder,
  getUserCart,
  updateProductQuantityFromCart,
  removeProductFromCart,
  emptyCart,
  logout,
  handleRefreshToken,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  getOrderByUserId,
  getServiceOrderByUserId,
  updatedOperator,
} = require("../controller/userCtrl");
const { authMiddleware, isOperator } = require("../middlewares/authMiddleware");
const router = express.Router();

var cacheService = require("express-api-cache");
var cache = cacheService.cache;

router.post("/register", createUser);
router.put("/password", authMiddleware, updatePassword); //postman
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.post("/login", loginUserCtrl);
router.post("/operator-login", loginOperator);
router.post("/addcart", authMiddleware, userCart);
router.post("/cart/create-product-order", authMiddleware, createProductOrder);
router.post("/cart/create-service-order", authMiddleware, createServiceOrder);

router.get("/getcart", authMiddleware, getUserCart);
router.get("/getorderdetails/:id", authMiddleware, getOrderByUserId);
router.get(
  "/getserviceorderdetails/:id",
  authMiddleware,
  getServiceOrderByUserId
);

router.get("/all-operators", cache("10 minutes"), getallOperators);
router.get("/all-users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", getaUser);
router.delete(
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
router.put("/edit-operator", authMiddleware, isOperator, updatedOperator);

module.exports = router;
