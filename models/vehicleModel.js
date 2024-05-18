const mongoose = require("mongoose");


const vehicleSchema = new mongoose.Schema({
  name:{
    type:String
  },
  no_plate:{
    type:String
  },
  is_available:{
    type:Boolean
  },
  owner:{
    type:String
  },  
  rent_per_hour:{
    type:Number
  },
  rent_per_day:{
    type:Number
  },
  rent_per_month:{
    type:Number
  }
});

module.exports = mongoose.model("vehicleModel", vehicleSchema); //CustomModel=the name of the model