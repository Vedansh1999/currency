import React from "react";
import "../CSS/Nav.css";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
const Nav = ({ name, email }) => {
  return (
    <div className="nav">
      <img
        src="https://media.giphy.com/media/HxjK4tTPFMafVCPu8o/giphy.gif"
        className="nav_img"
        alt="img"
      />
      <div className="nav_userDetails">
        <AccountBoxIcon fontSize="large" />
        <small className="nav_userContainer">
          <div>{name}</div>
          <div>{email}</div>
        </small>
      </div>
    </div>
  );
};

export default Nav;
