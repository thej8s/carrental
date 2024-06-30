require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));
mongoose.connect(process.env.DATABASE_URL);
app.use(express.json());
const path = require("path");
app.use(express.static(path.join(__dirname, "dist")));
const upload = require("express-fileupload");
app.use(upload());

//importing routers
const adminsRouter = require("./routes/admins.js");
app.use("/api/admins", adminsRouter);
const loginRouter = require("./routes/login.js");
app.use("/api/login", loginRouter);
const forgot_passwordRouter = require("./routes/forgot_password.js");
app.use("/api/forgot_password", forgot_passwordRouter);
const reset_passwordRouter = require("./routes/reset_password.js");
app.use("/api/reset_password", reset_passwordRouter);
// const fileRouter = require("./routes/file.js");
// app.use("/api/file", fileRouter);

// Serving the react build
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

//starting the server
port = 4000;
app.listen(process.env.port || {port}, () => console.log("Server Started at http://localhost:"+port));