import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MainLayoutTab from "../MainLayoutTab/MainLayoutTab";
import { motion } from 'framer-motion'
import { useSelector } from "react-redux";
import { allData } from "../../../ManageState/DataSlice/dataSlice";
import { Outlet } from "react-router-dom";
import { mainCompoDelay } from "../../../utilities/framerMotionAnimationsUtilites";

const MainLayout = ({ children }) => {
  const init = { opacity: 0 }
  const animate = { opacity: 1 }
  // const { loading } = useSelector(allData)
  return (
    <motion.div className=""

    >
      <Container maxWidth="xxl">
        <div className="block md:flex">
          <div className="mainLayoutTabWidth hidden md:block">
            <div className="fixed custom_height overflow-y-auto left-0 mainLayoutTabWidth">
              <MainLayoutTab></MainLayoutTab>
            </div>
          </div>
          <motion.div className="w-full md:w-[calc(100vw-260px)]   "

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <Outlet></Outlet>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default MainLayout;
