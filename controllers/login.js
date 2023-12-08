const path = require("path");
const userDb = require("../models/user");
const bcrypt = require("bcrypt");

exports.postLogin = async (req, res, next) => {
  const inputEmail = req.body.email;
  const inputPass = req.body.pswd;
  const result = await userDb.userValidation(inputEmail, inputPass);
  const resultantArray = result[0];
  const dataArray = resultantArray[0];
  if (dataArray == undefined) {
    res.status(404).send("<h1>You Are Not a Valid User</h1>");
    return;
  }
  const fethcingAllValues = Object.values(dataArray);
  const actualPass = fethcingAllValues[1];
  bcrypt.compare(inputPass, actualPass, (err, response) => {
    if (!err) {
      res.send("<h1> Welcome </h1>");
    } else {
      res.status(401).send("<h1>Please check your password</h1>");
    }
  });
};
