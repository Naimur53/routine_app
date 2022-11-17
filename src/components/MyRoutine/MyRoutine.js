import { Grid, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import DemoCard from "../SearchRoutine/DemoCard/DemoCard";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";

import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import SkeletonDemoCard from "../ShareComponents/SkeletonDemoCard/SkeletonDemoCard";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const MyRoutine = () => {
  const cardContainer = {
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    initial: {
      opacity: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };
  const [allRoutine, setAllRoutine] = useState([]);
  const [getLoading, setGetLoading] = useState(true);
  const { user } = useSelector(allData);
  useEffect(() => {
    if (user?._id) {
      axios
        .get(
          `https://shielded-dusk-65695.herokuapp.com/routine?userId=${user?._id}`
        )
        .then((res) => {
          setAllRoutine(res.data);
          setGetLoading(false);
        });
    } else {
      toast("User not found");
    }
  }, [user]);
  if (!getLoading && !allRoutine?.length) {
    return (
      <MainLayout>
        <div className="custom_height flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img src="./images/duck-searching.gif" alt="notfound" />
            <h4 className="text-lg font-medium mt-5">
              You don't have any routine{" "}
              <NavLink
                className="underline underline-dark-purple  text-dark-purple"
                to="/createRoutine"
              >
                create one?
              </NavLink>{" "}
            </h4>
          </div>
        </div>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <div className="text-center">
        <h1 className="text-xl font-bold text-ellipsis text-slate-600">
          My Created Routines
        </h1>
      </div>

      <Grid
        container
        spacing={4}
        sx={{
          marginTop: "20px",
          justifyContent: "center",
          display: "flex",
        }}
      >
        {(getLoading ? Array.from(new Array(8)) : allRoutine).map(
          (single, i) => (
            <Grid item lg={3} md={6} xs={12}>
              {single ? (
                <>
                  <motion.div
                    animate="animate"
                    initial="initial"
                    variants={cardContainer}
                    className=""
                  >
                    <DemoCard
                      item={single}
                      updateAble={true}
                      setData={setAllRoutine}
                      i={i}
                    ></DemoCard>
                  </motion.div>
                </>
              ) : (
                <>
                  {" "}
                  <motion.div
                    animate="animate"
                    initial="initial"
                    variants={cardContainer}
                    className=""
                  >
                    <SkeletonDemoCard></SkeletonDemoCard>
                  </motion.div>
                </>
              )}
            </Grid>
          )
        )}
      </Grid>
    </MainLayout>
  );
};

export default MyRoutine;
