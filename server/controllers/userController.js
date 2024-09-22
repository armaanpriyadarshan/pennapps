const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const User = require("../models/User");


const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  
  // all fields required
  if (!name||!email||!password) {
    res.status(400);
    throw new Error("Missing fields.");
  }

  // email already registered
  if (await User.findOne({email})) {
    res.status(409);
    throw new Error("Email is registered to an existing account.");
  }

  // hash & salt password
  const hashedPassword = await bcrypt.hash(password, 10); // 10 round salt

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    /* return newly created user */
    res.status(201).json({
      token
    });
  } else {
    res.status(400); // validation failed
    throw new Error("User data invalid.");
  }
});


const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  // all fields required
  if (!email||!password) {
    res.status(400);
    throw new Error("Missing fields.");
  }

  const user = await User.findOne({email});

  // check password
  if (user && (await bcrypt.compare(password, user.password))) {

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({
      token
    });
  } else {
    res.status(401);
    throw new Error("Incorrect email or password.");
  }
});

const setUserAvatar = asyncHandler(async (req, res) => {
  const { newAvatar } = req;
  const user = req.user;
  user.avatar = newAvatar;
  user.save();
  res.json({ user });
});


const getUser = asyncHandler(async (req, res) => {
  let user = req.user;
  res.json({ user });
});


module.exports = {
  registerUser,
  loginUser,
  setUserAvatar,
  getUser,
}