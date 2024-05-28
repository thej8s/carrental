import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.scss";
import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  // const isLoginPage = location.pathname === ("/login" || "/reset");
  const isLoginPage = ["/login", "/reset"].includes(location.pathname);

  return (
    <Fragment>
      <div className="layout">
        {!isLoginPage && <Header />}
        <div className="main-body">
          {!isLoginPage && <Sidebar />}
          <div className={`contents ${isLoginPage ? "login-content" : ""}`}>
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
