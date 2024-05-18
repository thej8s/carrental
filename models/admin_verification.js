const mongoose = require("mongoose");

const admin_verificationSchema = new mongoose.Schema({
  admin_id: String,
  unique_string:String,
  created_at:Date,
  expires_at:Date, 
    
});

module.exports = mongoose.model("admin_verificationModel", admin_verificationSchema); //CustomModel=the name of the model