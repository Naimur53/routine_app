import { Typography } from "@mui/material";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";

const Logo = () => {
  return (
    <NavLink to="/" className="flex items-center">
      <AdbIcon sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="span"
        href="/"
        sx={{
          mr: 2,
          // display: { xs: 'none', md: 'flex' },
          // fontFamily: "monospace",
          fontWeight: 700,
          // letterSpacing: ".3rem",
          textDecoration: "none",
        }}
      >
        <span className="">R.</span> <span className="text-dark-purple font-mono font-thin">Manager</span>
      </Typography>
    </NavLink>
  );
};
export default Logo;
