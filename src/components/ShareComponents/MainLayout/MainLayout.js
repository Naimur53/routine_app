import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MainLayoutTab from "../MainLayoutTab/MainLayoutTab";
import { AnimatePresence, motion } from 'framer-motion'
import { useSelector } from "react-redux";
import { allData } from "../../../ManageState/DataSlice/dataSlice";
import { Outlet } from "react-router-dom";
import { mainCompoDelay, mainDuration, pageTranAni, pageTranInit } from "../../../utilities/framerMotionAnimationsUtilites";
import GrowEffect from "../../AnimationCompo/GrowEffect/GrowEffect";

const MainLayout = ({ children }) => {
  const init = { opacity: 1 }
  const animate = { opacity: 1 }
  // const { loading } = useSelector(allData)
  return (
    <motion.div className="pt-[40px] md:pt-[57pt]"
      initial={init}
      animate={animate}
      exit={init}
    >
      <Container maxWidth="xxl">
        <div className="block md:flex">
          <div className="mainLayoutTabWidth hidden md:block relative z-40">
            <div className="fixed   custom_height overflow-y-auto left-0 mainLayoutTabWidth">
              <MainLayoutTab></MainLayoutTab>
            </div>
          </div>
          <div className="w-full md:w-[calc(100vw-260px)] mt-3 md:mt-0">
            <AnimatePresence>

              <Outlet></Outlet>
            </AnimatePresence>

          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default MainLayout;
