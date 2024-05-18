const express = require("express");
const forgot_passwordRouter = express.Router();
const crypto = require ("crypto")
//importing models
const adminModel = require("../models/admin", {useNewUrlParser: true,useUnifiedTopology: true,});

//subroutines
async function createResetPasswordToken(admin){
  const resetToken = crypto.randomBytes(32,this.toString('hex'))
  admin.password_reset_token=crypto.createHash("sha256").update(resetToken).digest("hex")
  admin.password_reset_token_expire= Date.now()+10*60*1000

  return resetToken
}

//main
forgot_passwordRouter.post('/', async (req, res) => {
const admin = await adminModel.findOne({email:req.body.email})
    if(!admin){
         res.json({ message: "email not found"})
    }
   const reset_token = createResetPasswordToken(admin)
   await admin.save()
})
 
module.exports = forgot_passwordRouter;