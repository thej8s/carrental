const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hashed_password: {
    type: String,
    required: true,
  },
  name:{
    type:String
  },
  phone_no:{
    type:String
  },
  email:{
    type:String,
    unique:true
  },
  is_verified: {
    type:Boolean,
    default:false
  }
});

// Hash the password before saving it to the database
adminSchema.pre("save", async function (next) {
  const admin = this;
  //if block executes if there is any modification on the password field (here it is hashed_password) otherwise it  exits out of the middleware using next()
  if (!admin.isModified("hashed_password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(admin.hashed_password, salt);
    admin.hashed_password = hashed_password;
    next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("adminModel", adminSchema); //CustomModel=the name of the model
