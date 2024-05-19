import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import api from "../../api";

export default function Login() {
  const navigate = useNavigate();

  let [formData, setFormData] = useState({});
  const [submitBtn, setSubmitBtn] = useState(0);

  let onInputChange = async (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  let onFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitBtn(1);
    try {
      // await api.post("login", formData);
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } catch (e) {
      alert("Invalid Credentials!");
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="login">
        <div className="login-container">
          <div className="login-img">
            <img src="images/login-image.png" alt="" />
          </div>
          <div className="vertical-line"></div>
          <div className="login-form">
            <h2 className="login-title">Login</h2>
            <TextField
              className="input-field"
              id="outlined-basic"
              label="Username"
              variant="outlined"
              size="small"
              fullWidth
              name="username"
              required
              onChange={onInputChange}
            />
            <TextField
              className="input-field"
              id="outlined-basic"
              label="Password"
              variant="outlined"
              size="small"
              fullWidth
              name="password"
              required
              onChange={onInputChange}
            />
            <Button type="submit" variant="contained" fullWidth>
              {submitBtn ? "loggin in..." : "Login"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
