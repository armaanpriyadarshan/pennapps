const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const { 
  registerUser, 
  loginUser, 
  setUserAvatar,
  getUser 
} = require("../controllers/userController");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.put("/avatar", protect, setUserAvatar);
router.get("/me", protect, getUser);

module.exports = router;