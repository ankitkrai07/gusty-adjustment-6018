const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/user.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const passwordReq =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if (!passwordReq.test(password)) {
  return res.status(200).json({
    msg: "Invalid password format! Password format Should contain atleast one uppercase character, one number, special character and length greater then 8.",
  });
}

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.status(400).json({ message: "Something Went wrong!" });
        } else {
          const newUser = new UserModel({ username, email, password: hash });
          await newUser.save();
          res.status(200).json({
            message: "Sweethome Account has been Created Successfully",
          });
        }
      });
    } else {
      res
        .status(400)
        .json({ message: "Email already registered, try to login." });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error , try again later." });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userID: user._id, name: user.username },
            process.env.loginpass,
            { expiresIn: "6d" }
          );
          const username = user.username;
          const id = user._id
          res
            .status(200)
            .json({ message: "Logged In Sucessfully",token, username ,id});
        } else {
          res.status(400).json({ warning: "Wrong Password!" });
        }
      });
    } else {
      res.status(400).json({ warning: "Email is not registered or Wrong" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error , Try again" });
  }
});


userRouter.get("/",async(req,res)=>{
  try {
    const users = await UserModel.find();
    res.status(200).json({"message":"Details of users",users})
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error , Try again" });
  }
})

userRouter.patch("/update/:id",async(req,res)=>{
  const payload = req.body;
  const {id} = req.params;
  try {
    if(id){
      let update = await UserModel.findByIdAndUpdate({_id:id},payload);
      res.status(200).json({"msg":"Profile has been Updated",update})
    }else{
      res.status(400).json({"msg":"Something went wrong, please try again!"})
    }
  } catch (error) {
    res.status(500).json("Internal Server Error")
  }
})

module.exports = { userRouter };