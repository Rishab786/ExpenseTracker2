const express = require("express");
const signUpController = require("../controllers/signUp");
const router = express.Router();
router.post("/signup",signUpController.postUser);
module.exports = router;