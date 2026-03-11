const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser
} = require("c://Users/chhot//Documents//mern//backend//controllers//authcontroller");

router.post("C:\\Users\\chhot\\Documents\\mern\\frontend\\src\\pages\\register.js", registerUser);
router.post("C:\\Users\\chhot\\Documents\\mern\\frontend\\src\\pages\\login.js", loginUser);

module.exports = router;