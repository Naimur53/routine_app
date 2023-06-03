import { Typography } from "@mui/material";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import appLogo from "../../../images/logo.png";
import { useSelector } from "react-redux";
import { allData } from "../../../ManageState/DataSlice/dataSlice";
import { motion, AnimatePresence } from 'framer-motion'
import { logGoToTopDuration } from "../../../utilities/framerMotionAnimationsUtilites";
const Logo = () => {
  const { user, loading } = useSelector(allData)

  const MainLogo = () => {
    return <NavLink to="/" className="flex items-center">
      <img className="w-28" src={appLogo} alt="" />
    </NavLink>
  }


  const center = { opacity: [0, 1, 0], zIndex: '1000', y: '-50%', x: '-50%', position: 'absolute', left: '50vw', top: '50vh' }
  const staticPosition = { opacity: [1, 1, 1], zIndex: '1000', y: '0%', x: '0%', position: 'absolute', left: '0vw', top: '0vh' }
  return (
    <div>
      <motion.div
        initial={center}
        animate={loading ? center : staticPosition}
        exit={center}
        transition={{ opacity: { duration: 1, repeat: Infinity }, duration: logGoToTopDuration, ease: "easeOut" }}
      >
        <MainLogo></MainLogo>

      </motion.div>
    </div>
  );
};
export default Logo;
