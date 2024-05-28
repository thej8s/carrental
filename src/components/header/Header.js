import React, { useState } from "react";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./logout/Logout";

function Header() {
  const navigate = useNavigate();
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleLogout = () => {
    // Open the logout confirmation dialog
    setLogoutDialogOpen(true);
  };

  const confirmLogout = () => {
    // Perform logout action
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const cancelLogout = () => {
    // Close the logout confirmation dialog
    setLogoutDialogOpen(false);
  };

  return (
    <div className="header">
      <Link to="/" className="logo">
        <img className="logo-img" src="/images/logo.png" alt="Logo" />
      </Link>

      <div className="logout" onClick={handleLogout}>
        Logout
      </div>

      <Logout
        open={logoutDialogOpen}
        onClose={cancelLogout}
        onConfirm={confirmLogout}
      />
    </div>
  );
}

export default Header;
