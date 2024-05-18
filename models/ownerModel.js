const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const ownerSchema = new mongoose.Schema({
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
  },
  photo:{
    type:String
  },
  license_expiry:{
    type: Date
  }
});

// Hash the password before saving it to the database
ownerSchema.pre("save", async function (next) {
  const owner = this;
  //if block executes if there is any modification on the password field (here it is hashedPassword) otherwise it  exits out of the middleware using next()
  if (!owner.isModified("hashed_password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(owner.hashed_password, salt);
    owner.hashed_password = hashed_password;
    next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model("ownerModel", ownerSchema); 