import { Card, CardHeader, Box } from "@mui/material";
import React from "react";
import MainLayout from "../MainLayout/MainLayout";
import Skeleton from "@mui/material/Skeleton";

const SkeletonDemoCard = () => {
  return (
    <MainLayout>
      <Card sx={{ width: "300px", m: 2, p: 1 }}>
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
        <Box>
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
          <Skeleton
            animation="wave"
            height={30}
            width="35%"
            style={{ marginLeft: 2 }}
          />
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
    </MainLayout>
  );
};

export default SkeletonDemoCard;
