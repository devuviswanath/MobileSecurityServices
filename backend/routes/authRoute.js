const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  updatedUser,
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
router.put("/reset-password/:token", resetPassword);
router.post("/login", loginUserCtrl);
router.get("/all-users", getallUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isOperator, getaUser);
router.put("/edit-user", authMiddleware, updatedUser);

module.exports = router;
