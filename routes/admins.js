//imports.................
//models
const adminModel = require("../models/admin", {useNewUrlParser: true,useUnifiedTopology: true,});
const admin_verificationModel =require("../models/admin_verification")
//others
const nodemailer = require("nodemailer")
const {v4: uuidv4}= require("uuid")
require("dotenv").config()
const path = require ("path")
const express = require("express");
const adminsRouter = express.Router();
const bcrypt = require("bcrypt");
const { reset } = require("nodemon");
const jwt = require("jsonwebtoken")


var transport = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 2525,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS
  }
});

//TESTING SUCCESS
transport.verify((error,success)=>{
  if(error){
    console.log(error);
  }else{
    console.log("Ready for messages")
    console.log(success)
  }
})


//subroutines....................................................................................................
//send verification/reset email and store the uniquestring(token) in database (admin_verificationModel)
const send_verification_email =({_id,email,username,flag,is_email_in_use,is_username_in_use},res)=>{
  const current_url ="http://localhost:5000"
  const unique_string = uuidv4()+_id
  console.log("unique string just generated ="+unique_string)
  if(flag==1){
    //verification mode
    subject = "Verify Your Email"
    html =`<p>Verify your email to complete signup and login into your account</p><p>This link expires in 6 hours.</p><p>Press <a href=${current_url+"/api/admins/verify/"+_id+"/"+unique_string+"/"+0}>here</a>to proceed</p>`
  }else{
    //password reset mode
    subject = "Reset Your Password"
    html =`<p>we recieved a password reset request</p><p>This link expires in 6 hours.</p><p>Press <a href=${current_url+"/api/admins/verify/"+_id+"/"+unique_string+"/"+1}>here</a>to proceed</p>` 
  }
  const mail_options ={
    from:process.env.AUTH_EMAIL,
    to:email,
    subject: subject ,
    html: html
  }

  //hash the unique string
  const salt_rounds=10
  bcrypt.hash(unique_string, salt_rounds)
        .then((hashed_unique_string)=>{
          //set values in admin_verification collection
          const new_verification = new admin_verificationModel({
              admin_id: _id,
              unique_string: hashed_unique_string,
              created_at: Date.now(),
              expires_at: Date.now()+21600000
          })

          console.log("unique string just after hashing = "+hashed_unique_string)

          new_verification
              .save()
              .then(()=>{
                transport.sendMail(mail_options)
                         .then( ()=>{
                            //email sent and verification record saved
                            if(is_email_in_use)
                              return res.json("email "+email+" already in use.")
                            if(is_username_in_use)
                              return res.json("username "+username +" is already registered. ")
                            res.json({
                              status:"PENDING",
                              message:"verification email sent to " + email
                            })
                         })
                         .catch((error)=>{
                          res.json({
                            status: "FAILED"  ,
                            message:"email verification failed"
                          })
                         })
              })
              .catch((error)=>{
                console.log(error)
                res.json({
                  message:"couldnt save verification email data"
                })
              })
        }).catch(()=>{
    res.json({
      satus:"FAILED",
      message:"an error occured while hashing email data!",
    })
  })
}

//jwt authentication
async function authenticateToken (req, res, next){
  admin = await adminModel.findById(req.params.id);
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split( ' ')[1]
  if (token == null) return res.status(401)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,adminPlainObject)=>{
  if(err)return res.status(403)
  req.admin =adminPlainObject
    if (admin == null) {
      return res.status(404).json({ message: "cannot find admin" }); //404 couldnt fnd something return exits out of the function
    }
    res.admin = admin;
  next()
})
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//creating one
adminsRouter.post("/", async (req, res) => {
  try {
    const adminData = new adminModel(req.body);
    console.log("Received Admin Data:", adminData);
    username = adminData.username
    email= adminData.email
    username_exists = await adminModel.findOne({ username })
    console.log("admin with username already exists:")
    console.log(username_exists)
    email_exists = await adminModel.findOne({ email})
    console.log("admin with the email already exists:")
    console.log(email_exists)
    if(username_exists )
      is_username_verified = username_exists.is_verified
    else
      is_username_verified= false
    if(email_exists)
      is_email_verified = email_exists.is_verified
    else
      is_email_verified = false
    if( (username_exists|| email_exists) && ( is_username_verified || is_email_verified ) ){
      console.log("unverified admin exists:")
      if(username_exists){
       mailparameters=username_exists 
       mailparameters.flag=1
       username_exists.is_username_in_use =true
       send_verification_email(username_exists,res)
      }
      else{
        mailparameters = email_exists
        mailparameters.flag=1
        email_exists.is_email_in_use =true
        send_verification_email(email_exists,res)
      }      
      
      // res.json({message:"Admin already exists.\nPlease check the inbox of "+ alreadyAdmin.email +" for email verification"})
    }
    
    else if( username_exists ){
      console.log(adminModel.findOne({ username }) )
      res.json({message:"username is already regitered with the email "+ email +". Please check the inbox and verify the email."})
    }   
     else if(email_exists){
      res.json({message:"email already exists with the username "+ username+"."})
    }
    else
{    await adminData.save().then((result)=>{
      mailparameters=result
      mailparameters.flag=1
      send_verification_email(result,res)
                           });}
    // res.json(adminData);
  } catch (err) {
    res.status(500).json({ message: err.message }); // Internal Server Error
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//email verification
adminsRouter.get("/verify/:admin_id/:unique_string/:pass_reset",(req,res)=>{
  let {admin_id, unique_string,pass_reset}= req.params
  admin_verificationModel.find({admin_id})
                         .then((result)=>{
                            if(result.length>0){
                              //admin verification record exists so we proceed
                              console.log("result="+result)
                              l= result.length
                              const{expires_at}= result[l-1]
                              const hashed_unique_string =result[l-1].unique_string
                              if(expires_at < Date.now()){
                                //record has expired so we delete it
                                console.log("email expired")
                                admin_verificationModel.deleteOne({admin_id})
                                                       .then(result =>{
                                                          adminModel.deleteOne({_id: admin_id})
                                                                    .then(()=>{
                                                                      let message="limk has expired. Please signup again"
                                                                      res.redirect(`/admin/verified/error=true&message=${message}`)
                                                                    })
                                                                    .catch(error=>{
                                                                      let message="error while clearing admin with expired unique string"
                                                                      res.redirect(`/admin/verified/error=true&message=${message}`)
                                                                    })
                                                       })
                                                       .catch((error)=>{
                                                          console.log(error)
                                                          let message="error while clearing expired admin verification record"
                                                          res.redirect(`/admin/verified/error=true&message=${message}`)
                                                       })
                              }else{
                                // valid record exists so we validate the admin string
                                //first compare the hashed unique string
                                bcrypt.compare(unique_string, hashed_unique_string)
                                      .then(result =>{
                                        if(result){
                                          //string match
                                          console.log("strings matched")
                                          adminModel.updateOne({_id: admin_id},{is_verified:true})
                                                    .then(()=>{
                                                      console.log("adminModel updated")
                                                      if(pass_reset==0)
                                                      {admin_verificationModel.deleteOne({admin_id})
                                                                             .then(()=>{
                                                                                res.sendFile(path.join(__dirname,"../dist/index.html"))
                                                                             })
                                                                             .catch(error=>{
                                                                                console.log(error)
                                                                                let message="error while finalizing successful verification"
                                                                                res.redirect(`/admin/verified/error=true&message=${message}`)
                                                                              })
                                                       }
                                                      else{
                                                        res.sendFile(path.join(__dirname,"../dist/reset.html"))
                                                       }
                                                    })
                                                    .catch(error =>{
                                                      console.log(error)
                                                      let message="error while updating admin record to show verified"
                                                      res.redirect(`/admin/verified/error=true&message=${message}`)
                                                    })

                                        }else{
                                          //existing record but incorrect verification details passed
                                          let message="invalid verification details passed. Check your inbox"
                                          res.redirect(`/admin/verified/error=true&message=${message}`)
                                        }
                                      })
                                      .catch(error=>{
                                        let message="error while comparing unique strings"
                                        res.redirect(`/admin/verified/error=true&message=${message}`)
                                      })
                              }
                            }else{
                              // admin verification record doesnt exist
                              let message="account record does not exist or has been verified already. Please sign up or login"
                              res.redirect(`/admin/verified/error=true&message=${message}`)
                            }
                         })
                         .catch((error) =>{
                          console.log(error)
                          let message="error while checking for existing admin verification record"
                          res.redirect(`/admin/verified/error=true&message=${message}`)
                         })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//verified page route
adminsRouter.get("/verified",(req,res)=>{
  res.sendFile(path.join(__dirname,"../dist/index.html"))
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//async getting all
adminsRouter.get("/", async (req, res) => {
  try {
    const all_admins_data = await adminModel.find();
    res.json(all_admins_data); //filenameofcustommodelmodelname
  } catch (err) {
    res.status(500).json({ messsage: err.message }); //to find the error in database,the error is not users fault
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//geting one
adminsRouter.get("/:id", authenticateToken, (req, res) => {
  //middleware gets activated;
  res.json(res.admin);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//updating one
adminsRouter.patch("/:id", authenticateToken, async (req, res) => {
  if (req.body.hashed_password != null) {
    //checks if request body contains name
    res.admin.hashed_password = req.body.hashed_password;
  }
  if (req.body.username != null) {
    //checks if request body contains name
    res.admin.username = req.body.username;
  }
  if (req.body.name != null) {
    //checks if request body contains name
    res.admin.name = req.body.name;
  }
  if (req.body.phone_no != null) {
    //checks if request body contains name
    res.admin.phone_no = req.body.phone_no;
  }
  if (req.body.email != null) {
    //checks if request body contains name
    res.admin.email = req.body.email;
  }

  try {
    updatedAdmin = await res.admin.save();
    res.json(updatedAdmin);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//deleting one
adminsRouter.delete("/:id",authenticateToken, async (req, res) => {
  try {
    //await res.member.remove(); // This line might be causing the error
    await adminModel.deleteOne({ _id: req.params.id }); //customModel
    res.json({ message: "Deleted admin" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//reset password request
adminsRouter.post("/reset_password",async(req,res)=>{
  try{
    email = req.body.email
    await adminModel
            .findOne({email})
            .then((result)=>{
              console.log("result="+result)              
              mailparameters=result
              mailparameters.flag=0
              console.log(mailparameters)
              send_verification_email(mailparameters,res)
            });
              
  }catch(error){
    res.status(500).json({message:error.message})
  }
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//reset password route
adminsRouter.patch("/verify/:admin_id/:unique_string/:pass_reset",(req,res)=>{
  let {admin_id, unique_string}= req.params
  admin_verificationModel.find({admin_id})
                         .then((result)=>{
                            if(result.length>0){
                              //admin verification record exists so we proceed
                              l= result.length
                              console.log("result="+result)
                              const{expires_at}= result[l-1]
                              const hashed_unique_string =result[l-1].unique_string

                              if(expires_at < Date.now()){
                                //record has expired so we delete it
                                console.log("email expired")
                                admin_verificationModel.deleteOne({admin_id})
                                                       .then(result =>{
                                                          adminModel.deleteOne({_id: admin_id})
                                                                    .then(()=>{
                                                                      let message="limk has expired. Please signup again"
                                                                      res.redirect(`/admin/verified/error=true&message=${message}`)
                                                                    })
                                                                    .catch(error=>{
                                                                      let message="error while clearing admin with expired unique string"
                                                                      res.redirect(`/admin/verified/error=true&message=${message}`)
                                                                    })
                                                       })
                                                       .catch((error)=>{
                                                          console.log(error)
                                                          let message="error while clearing expired admin verification record"
                                                          res.redirect(`/admin/verified/error=true&message=${message}`)
                                                       })
                              }else{
                                // valid record exists so we validate the admin string
                                //first compare the hashed unique string
                                console.log({
                                  unique_string: unique_string,
                                  result0_unique_string:result[0].unique_string,
                                  hashed_unique_string: hashed_unique_string
                                })
                                console.log(bcrypt.compare(unique_string, hashed_unique_string))
                                 bcrypt.compare(unique_string, hashed_unique_string)
                                      .then(result =>{
                                        if(result){
                                          //string match
                                          console.log("password reset token verified = "+result)
                                          console.log("strings matched")
                                          adminModel.updateOne({_id: admin_id},{is_verified:true})
                                                    .then(async()=>{
                                                      console.log("adminModel updated")
                                                      admin_verificationModel.deleteOne({admin_id})
                                                      admin = await adminModel.findById(admin_id)
                                                      admin.hashed_password = req.body.hashed_password
                                                      admin.save()                                                      
                                                      res.json(admin)
                                                    })
                                                    .catch(error =>{
                                                      console.log(error)
                                                      let message="error while updating admin record to show verified"
                                                      res.redirect(`/admin/verified/error=true&message=${message}`)
                                                    })
                                        }else{
                                          //existing record but incorrect verification details passed
                                          let message="invalid verification details passed. Check your inbox"
                                          res.redirect(`/admin/verified/error=true&message=${message}`)
                                        }
                                      })
                                      .catch(error=>{
                                        let message="error while comparing unique strings"
                                        res.redirect(`/admin/verified/error=true&message=${message}`)
                                      })
                              }
                            }else{
                              // admin verification record doesnt exist
                              let message="account record does not exist or has been verified already. Please sign up or login"
                              res.redirect(`/admin/verified/error=true&message=${message}`)
                            }
                         })
                         .catch((error) =>{
                          console.log(error)
                          let message="error while checking for existing admin verification record"
                          res.redirect(`/admin/verified/error=true&message=${message}`)
                         })
})

module.exports = adminsRouter;