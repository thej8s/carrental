const mongoose = require("mongoose");


const vehicleSchema = new mongoose.Schema({
  make:{
    type:String
  },
  model:{
    type:String
  },
  year:{
    type:String
  },
  photo:{
    type:String
  },
  tranmission:{
    type:Boolean
  },
  odometer:{
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