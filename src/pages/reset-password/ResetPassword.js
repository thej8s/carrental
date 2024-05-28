import React, { useState } from "react";
import "./resetpassword.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import api from "../../api";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [submitBtn, setSubmitBtn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitBtn(true);
    const { oldPassword, newPassword, reenterPassword } = formData;

    if (newPassword !== reenterPassword) {
      setErrorMessage("Passwords do not match.");
      setSubmitBtn(false);
      return;
    }

    try {
      // await api.post("reset-password", formData);
      // Simulate successful password reset
      alert("Password reset successful.");
      navigate("/login");
    } catch (e) {
      alert("Failed to reset password. Please try again.");
      setSubmitBtn(false);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="reset">
        <div className="reset-container">
          <div className="reset-form">
            <h2 className="reset-title">Reset Password</h2>

            <TextField
              className="input-field"
              id="outlined-basic"
              label="Existing Password"
              variant="outlined"
              size="small"
              fullWidth
              name="oldPassword"
              required
              style={{ maxWidth: "250px" }}
              onChange={onInputChange}
            />
            <TextField
              className="input-field"
              id="outlined-basic"
              label="New Password"
              variant="outlined"
              size="small"
              fullWidth
              name="newPassword"
              required
              style={{ maxWidth: "250px" }}
              onChange={onInputChange}
            />
            <TextField
              className="input-field"
              id="outlined-basic"
              label="Re-enter Password"
              variant="outlined"
              size="small"
              fullWidth
              name="reenterPassword"
              required
              style={{ maxWidth: "250px" }}
              onChange={onInputChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={{ maxWidth: "100px", marginTop: "1rem" }}
              disabled={submitBtn}
            >
              {submitBtn ? "Resetting..." : "Reset"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
