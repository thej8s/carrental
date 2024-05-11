import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.scss";

function Layout({ children }) {
  return (
    <Fragment>
      <div className="layout">
        <Header />
        <div className="main-body">
          <Sidebar />
          <div className="contents">{children}</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Layout;
