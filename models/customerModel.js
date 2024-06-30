const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  owner_id: {
    type: String,
  },
  name: {
    type: String,
  },
  phone_no: {
    type: String,
  },
  emergeny_contact_no: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  photo: {
    type: String,
  },
  license_no: {
    type: String,
  },
  license_category: {
    type: String,
  },
  license_expiry: {
    type: Date,
  },
  license_issue_date: {
    type: Date,
  },
  company_name: {
    type: String,
  },
  company_reg_no: {
    type: String,
  },
  address: {
    type: String,
  },
  passport_no: {
    type: String,
  },
  passport_issue_date: {
    type: Date,
  },
  passport_excpiry_date: {
    type: Date,
  },
  account_no: {
    type: String,
  },
  bank_name: {
    type: String,
  },
  bank_swift_code: {
    type: String,
  },
  DOB: {
    type: Date,
  },
  driving_experience: {
    type: String,
  },
});

module.exports = mongoose.model("customerModel", customerSchema);
