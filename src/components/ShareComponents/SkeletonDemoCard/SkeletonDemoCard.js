import { Card, CardHeader, Box } from "@mui/material";
import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import Skeleton from "@mui/material/Skeleton";
import { motion } from "framer-motion";
const SkeletonDemoCard = () => {
  const skeletonDemoCard = {
    animate: {
      opacity: 1,
    },
    initial: {
      opacity: 0,
    },
  };
  return (
    <>
      <motion.div variants={skeletonDemoCard} className="">
        <Card sx={{ width: "100%", p: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Skeleton
                animation="wave"
                variant="circular"
                width={60}
                height={60}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Skeleton
                animation="wave"
                height={40}
                width="100%"
                style={{ marginLeft: 2 }}
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Skeleton
                  animation="wave"
                  height={30}
                  width="35%"
                  style={{ marginLeft: 2 }}
                />
                <Skeleton
                  animation="wave"
                  height={30}
                  width="35%"
                  style={{ marginLeft: 2 }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              justifyContent: "space-between",
            }}
          >
            <Skeleton
              animation="wave"
              height={30}
              width="35%"
              style={{ marginLeft: 2 }}
            />
            <Skeleton
              animation="wave"
              height={30}
              width="35%"
              style={{ marginLeft: 2 }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              {" "}
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
            </Box>
            <Box sx={{ width: "100%" }}>
              {" "}
              <Skeleton
                animation="wave"
                height={15}
                width="35%"
                style={{ marginLeft: 2 }}
              />
              <Skeleton
                animation="wave"
                height={15}
                width="35%"
                style={{ marginLeft: 2 }}
              />
            </Box>
          </Box>
          <Box>
            <Skeleton
              animation="wave"
              height={60}
              width="100%"
              style={{ marginLeft: 2 }}
            />
          </Box>
        </Card>
      </motion.div>
    </>
  );
};

export default SkeletonDemoCard;
