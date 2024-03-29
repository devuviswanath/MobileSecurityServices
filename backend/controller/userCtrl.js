const User = require("../models/userModel");
const Cart = require("../models/cartModel");
const ProductOrder = require("../models/productorderModel");
const ServiceOrder = require("../models/serviceorderModel");
const { generateToken } = require("../config/jwtToken");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const { generateRefreshToken } = require("../config/refreshtoken");
const sendEmail = require("./emailCtrl");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const redisClient = require("../config/redis");
//create user
const createUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const findUser = await User.findOne({ email: email });
  if (!findUser) {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});
// user login
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //check if user exists or not
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateuser = await User.findByIdAndUpdate(
      findUser.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser?._id,
      fullname: findUser?.fullname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});
//loginOperator
const loginOperator = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // check if user exists or not
  const findOperator = await User.findOne({ email });
  if (findOperator.role !== "operator") throw new Error("Not Authorised");
  if (findOperator && (await findOperator.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findOperator?._id);
    const updateoperator = await User.findByIdAndUpdate(
      findOperator.id,
      {
        refreshToken: refreshToken,
      },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findOperator?._id,
      fullname: findOperator?.fullname,
      email: findOperator?.email,
      mobile: findOperator?.mobile,
      token: generateToken(findOperator?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});
// Get all users

const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find({ role: "user" });
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});
//Get all Operators
const getallOperators = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find({ role: "operator" });
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a single user

const getaUser = asyncHandler(async (req, res) => {
  console.log("req", req.params);
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaUser = await User.findById(id);
    res.json({
      getaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});
// Update a user

const updatedUser = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        fullname: req?.body?.fullname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});

const updatedOperator = asyncHandler(async (req, res) => {
  const { id } = req.user;
  validateMongoDbId(id);
  try {
    const updatedOperator = await User.findByIdAndUpdate(
      id,
      {
        fullname: req?.body?.fullname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
      },
      {
        new: true,
      }
    );
    res.json(updatedOperator);
  } catch (error) {
    throw new Error(error);
  }
});
// handle refresh token

const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error(" No Refresh token present in db or not matched");
  jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err || user.id !== decoded.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateToken(user?.id);
    res.json({ accessToken });
  });
});
//logout
const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204);
  }
  await User.findOneAndUpdate(
    { refreshToken },
    {
      refreshToken: "",
    }
  );
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204);
});
//update password
const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoDbId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});
//forgot password link
const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found with this email");
  try {
    const token = await user.createPasswordResetToken();

    await user.save();
    const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:3000/ResetPassword/${token}'>Click Here</>`;
    const data = {
      to: email,
      text: "Hey User",
      subject: "Forgot Password Link",
      htm: resetURL,
    };
    sendEmail(data);
    const respo = { token: token, userId: user._id };
    res.json(respo);
  } catch (error) {
    throw new Error(error);
  }
});
//reset password
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error(" Token Expired, Please try again later");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});
//cart
const userCart = asyncHandler(async (req, res) => {
  const { productId, quantity, price } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    let newCart = await new Cart({
      userId: _id,
      productId,
      quantity,
      price,
    }).save();
    res.json(newCart);
  } catch (error) {
    throw new Error(error);
  }
});
const updateProductQuantityFromCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { cartItemId, newQuantity } = req.params;
  validateMongoDbId(_id);
  try {
    const cartItem = await Cart.findOne({
      userId: _id,
      _id: cartItemId,
    });
    cartItem.quantity = newQuantity;
    cartItem.save();
    res.json(cartItem);
  } catch (error) {
    throw new Error(error);
  }
});
const getUserCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  console.log("++++++++====", req.user._id);
  validateMongoDbId(_id);
  try {
    const cart = await Cart.find({ userId: req.user._id }).populate(
      "productId"
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});
const removeProductFromCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { cartItemId } = req.params;
  validateMongoDbId(_id);
  try {
    const deleteProductFromCart = await Cart.deleteOne({
      userId: _id,
      _id: cartItemId,
    });
    res.json(deleteProductFromCart);
  } catch (error) {
    throw new Error(error);
  }
});
const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user._id;
  validateMongoDbId(_id);
  try {
    const user = await User.findOne({ _id });
    const cart = await Cart.deleteMany({ userId: user });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});
const createProductOrder = asyncHandler(async (req, res) => {
  const { shippingInfo, orderItems, totalPrice } = req.body;
  const { _id } = req.user._id;
  try {
    const product_order = await ProductOrder.create({
      shippingInfo,
      orderItems,
      totalPrice,
      user: _id,
    });
    res.json({ product_order, success: true });
  } catch (error) {
    throw new Error(error);
  }
});
const createServiceOrder = asyncHandler(async (req, res) => {
  const { billingInfo, orderItems, totalPrice, expiredDate } = req.body;
  const { _id } = req.user._id;
  try {
    const service_order = await ServiceOrder.create({
      billingInfo,
      orderItems,
      totalPrice,
      expiredDate,
      user: _id,
    });
    res.json({ service_order, success: true });
  } catch (error) {
    throw new Error(error);
  }
});

// const getOrderByUserId = asyncHandler(async (req, res) => {
//   const { id } = req.params;
//   validateMongoDbId(id);
//   try {
//     let cachedOrders = await redisClient.get("orders");

//     if (cachedOrders) {
//       const userorders = JSON.parse(cachedOrders);
//       console.log("Orders from Cache");
//       res.json(userorders);
//     } else {
//       const userorders = await ProductOrder.find({ user: id })
//         .populate("orderItems.product")
//         .populate("user")
//         .exec();
//       res.json(userorders);
//       console.log("User orders from Database");
//       redisClient.set("orders", JSON.stringify(userorders));
//     }
//   } catch (error) {
//     throw new Error(error);
//   }
// });

const getOrderByUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const userorders = await ProductOrder.find({ user: id })
      .populate("orderItems.product")
      .populate("user")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
});

const getServiceOrderByUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const userorders = await ServiceOrder.find({ user: id })
      .populate("orderItems.service")
      .populate("user")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  createUser,
  loginUserCtrl,
  loginOperator,
  getallUser,
  getallOperators,
  getaUser,
  updatedUser,
  handleRefreshToken,
  userCart,
  createProductOrder,
  createServiceOrder,
  getOrderByUserId,
  getServiceOrderByUserId,
  getUserCart,
  updateProductQuantityFromCart,
  removeProductFromCart,
  emptyCart,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  updatedOperator,
};
