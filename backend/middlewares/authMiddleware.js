// Checking for admin
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not Authorized token expired, Please Login again");
    }
  } else {
    throw new Error(" There is no token attached to header");
  }
});
const isOperator = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const operatorUser = await User.findOne({ email });
  if (operatorUser.role !== "operator") {
    throw new Error("You are not an operator");
  } else {
    next();
  }
});
module.exports = { authMiddleware, isOperator };
