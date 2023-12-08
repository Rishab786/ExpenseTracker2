const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const signUpRouter = require("./routes/signUp");
app.get("/loginAndSignUpcss",(req,res)=>{
    res.sendFile(path.join(__dirname, "css", "loginAndSignUpPage.css"));
})
app.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "signUp.html"));
  });
app.post("/signup", signUpRouter);
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
  });
app.get("", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "home.html"));
  });
  

app.listen(3000, () => {
  console.log("server started");
});