import { Typography } from "@mui/material";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import appLogo from "../../../images/logo.png";
const Logo = () => {
  return (
    <NavLink to="/" className="flex items-center">
      <img className="w-28" src={appLogo} alt="" />
    </NavLink>
  );
};
export default Logo;
