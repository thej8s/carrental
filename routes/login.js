const express = require("express");
const loginRouter = express.Router();
const bcrypt = require("bcrypt");
const adminModel = require("../models/admin");
const jwt = require("jsonwebtoken")


// Login endpoint
loginRouter.post("/", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.hashed_password;
    // console.log("recieved password: ")
    // console.log(password)
    const adminPlainObject={
      username: username
    }
    // Find the user by username
    const admin = await adminModel.findOne({ username: username });

    // Check if the user exists
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Compare the entered password with the hashed password in the database
    const isPasswordMatch = await bcrypt.compare(
    password,
      admin.hashed_password
    );

    // Check if passwords match
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    //check if the admin is verified
    if(!admin.is_verified){
      return res.status(401).json({message:"Please check the inbox of "+ admin.email +" and verify your email. If the verification link has expired, please sign up again."})
    }

    // If everything is correct, you can generate a token or set a session and send a success response
    access_token = jwt.sign(adminPlainObject, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "24h" })
    res.json({ access_token: access_token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = loginRouter;