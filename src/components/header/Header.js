import React, { Fragment } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <div className="header">
        <Link to="/" className="logo">
          <img className="logo-img" src="/images/logo.png" alt="Logo" />
        </Link>

        <div className="logout">Logout</div>
      </div>
    </Fragment>
  );
}

export default Header;
