const userDb = require("../models/user");
exports.postUser = async (req, res) => {
  const userName = req.body.txt;
  const email = req.body.email;
  const password = req.body.pswd;
  let flag = 1;
  if (password.length < 8) {
    flag = 0;
    res.send({ message: "Password should be atleast 8 characters" });
  }

  if (flag == 0) {
  } else {
    const result =await userDb.registerUser(userName, email, password);
    if (!result) {
        res.send("Already Registeres");
      } else {
        res.send("successfully registered");
      }
    
  }
};
