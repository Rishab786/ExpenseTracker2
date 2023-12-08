const db = require("../utils/db");
const bcrypt=require("bcrypt");
async function validateUser(email, pass) {
    const result = await db.execute("SELECT * FROM users WHERE emailid = ?", [
      email,
    ]);
    return result;
  }

async function createUser(name, email, pass) {
    const result = await db.execute("SELECT * FROM `users` WHERE `emailid` = ?", [
        email,
      ]);
    
      if (result[0].length != 0) {
        return false;
      }
      else{
//   await db.execute(
//     "INSERT INTO users (username,emailid,password) VALUES (?, ?,?)",
//     [name, email, pass]
//   );
bcrypt.hash(pass,10, async (err,hash)=>{
    console.log(err);
    await db.execute(
        "INSERT INTO users (username,emailid,password) VALUES (?, ?,?)",
        [name, email, hash]
      );


})
  return true;
}
}

module.exports = {
  registerUser: createUser,
  userValidation: validateUser,
  

};
