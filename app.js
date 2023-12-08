const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const signUpRouter = require("./routes/signUp");

 app.post("/signup", signUpRouter);
app.listen(3000, () => {
  console.log("server started");
});