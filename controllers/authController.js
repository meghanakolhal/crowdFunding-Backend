const userModel = require("../db/userModel");
const bcrypt = require("bcryptjs");
const users = require("../db/userModel");
const { hashSync } = require("bcrypt");
const jwt = require("jsonwebtoken");
const authController = {
  Register: async (req, res) => {
    const { name, email, phone, role, Helpseekers,password } = req.body;
    const existingUser = "";
    const RegaxEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!RegaxEmail.test(email)) {
      res.json({
        message: "Invalid email id",
      });
      return;
    }
    try {
      existingUser = userModel.findOne({ email: email });
    } catch {
      res.json({
        success: false,
        message: "Something went wrong",
      });
    }
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User already exists! Login Instead" });
    }
    const num = Number(phone);
    const regexNumber = /^[0-9]+$/;
    if (!regexNumber.test(num)) {
      res.json({
        message: "Please enter valid mobile number.",
      });
    }
    const hashedpassword = bcrypt.hashSync(password, 10);
    const isAdmin = email.endsWith("@crowdFund.com");
    const newUser = new userModel({
      name,
      email,
      password: hashedpassword,
      role: isAdmin ? "admin" : "user",
      phone: num,
      Helpseekers,
    });
    try {
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Something Went Wrong",
      });
    }
  },
  Login:async(req,res)=>{
let {email,password}=req.body;
//valid email??
try {
const existingUser=userModel.findOne({email:email})
if(!existingUser){
  res.status(404).json("user not found!!");
  return;
}
const validPwd=bcrypt.compareSync(password,existingUser.password);
if(!validPwd){
  return res.status(404).json("email and password doesn't match!!");
}
var token = jwt.sign({ foo: "bar" }, "shhhhh");
console.log(token)
res.json({
  token
})
  } catch (error) {
      res.status(500).json({ success: false, message: "Something Went Wrong" });
    }
}
}
module.exports = authController;
