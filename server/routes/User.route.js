const express = require("express");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/Users.model");
const jwt_decode = require("jwt-decode");

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

userRouter.post("/add", async (req, res) => {
  const data = req.body;
  try {
    const user = new UserModel(data);
    await user.save();
    res.status(200).send({ msg: "added" });
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

userRouter.post("/register", async (req, res) => {
  const { username, email, password, role, avatar } = req.body;
  try {
    const users=await UserModel.find({email});
    if(users.length>0){
       res.status(200).send({"msg":"already registered"})
    }
    else{
        bcrypt.hash(password, 5, async (err, secured_pass) => {
            if (err) {
              res.status(404).send({ msg: "failed to register" });
            } else {
              const user = new UserModel({
                username,
                email,
                password: secured_pass,
                role,
                avatar,
              });
              await user.save();
              res.send({ msg: "registered" });
            }
          });  
    }
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email });
    const hashed_pass = user[0].password;
    if (user.length > 0) {
      bcrypt.compare(password, hashed_pass, (err, result) => {
        if (result) {
          const token = jwt.sign({ course: "backend" }, process.env.secret);
          res
            .status(200)
            .send({
              msg: "logged in",
              token: token,
              username: user[0].username,
              avatar:user[0].avatar,
              id: user[0]._id,
            });
        } else {
          res.status(404).send({ msg: "wrongcred" });
        }
      });
    } else {
      res.status(200).send({ msg: "newuser" });
    }
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

userRouter.post("/googlelogin", async (req, res) => {
  const { googletoken } = req.body;
  try {
    const decoded = jwt.decode(googletoken);
    // console.log(decoded)
    const email = decoded.email;
    const user = await UserModel.find({ email });
    // console.log(user)
    if (user.length > 0) {
       
      const users = await UserModel.findByIdAndUpdate({_id:user[0]._id},{
        username: decoded.name,
        avatar: decoded.picture,
      });
      
      const token = jwt.sign({ course: "backend" }, process.env.secret);
      res
        .status(200)
        .send({
          msg: "logged in",
          token: token,
          username: user[0].username,
          avatar:user[0].avatar,
          id: user[0]._id,
        });
    } else {
        let role;
      if(decoded.email=="ankitpatil2341@gmail.com"){
          role="Admin"
      }
      else{
        role="Guest"
      }
      const newuser = new UserModel({
        username: decoded.name,
        email: decoded.email,
        password: "*",
        avatar: decoded.picture,
        role: role,
      });
      await newuser.save();
      const token = jwt.sign({ course: "backend" }, process.env.secret);
      res
        .status(200)
        .send({
          msg: "logged in",
          token: token,
          username: user[0].username,
          avatar:user[0].avatar,
          id: user[0]._id,
        });
    }
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

userRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "user deleted" });
  } catch (err) {
    res.status(404).send({ msg: "404 error" });
  }
});

module.exports = {
  userRouter,
};
