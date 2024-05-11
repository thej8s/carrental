import React, { Fragment, useState } from "react";
import "./sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <Fragment>
      <div className="sidebar">
        <Link to={"/dashboard"} className="sidebar-link">
          <div
            className={`item ${activeItem === "dashboard" ? "active" : ""}`}
            onClick={() => handleItemClick("dashboard")}
          >
            <DashboardIcon />
            Dashboard
          </div>
        </Link>
        <Link to={"/"} className="sidebar-link">
          <div
            className={`item ${activeItem === "cars" ? "active" : ""}`}
            onClick={() => handleItemClick("cars")}
          >
            <TimeToLeaveIcon />
            Cars
          </div>
        </Link>
        <Link to={"/customers"} className="sidebar-link">
          <div
            className={`item ${activeItem === "customers" ? "active" : ""}`}
            onClick={() => handleItemClick("customers")}
          >
            <RecentActorsIcon />
            Customers
          </div>
        </Link>
        <Link to={"/bookings"} className="sidebar-link">
          <div
            className={`item ${activeItem === "bookings" ? "active" : ""}`}
            onClick={() => handleItemClick("bookings")}
          >
            <LibraryBooksIcon />
            Bookings
          </div>
        </Link>
        <Link to={"/profile"} className="sidebar-link">
          <div
            className={`item ${activeItem === "profile" ? "active" : ""}`}
            onClick={() => handleItemClick("profile")}
          >
            <AccountCircleIcon />
            Profile
          </div>
        </Link>
      </div>
    </Fragment>
  );
}

export default Sidebar;
