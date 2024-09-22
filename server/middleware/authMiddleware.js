const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");


const User = require("../models/User");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  let user;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const info = jwt.verify(token, process.env.JWT_SECRET);
      user = await User.findById(info.id).select("-password");
      req.user = user;
    } catch (err) {
      throw new Error(err);
    }
    if (!token||!user) {
      throw new Error(err);
    }
    next();
  }
});

module.exports = {
  protect,
}