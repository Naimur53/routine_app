import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import DashboardTab from "../DashboardTab/DashboardTab";

const MainLayout = ({ children }) => {
  return (
    <div className="w-[100vw]">
      <Container maxWidth="xxl">
        <div className="block md:flex">
          <div className="w-[340px] hidden md:block">
            <div className="fixed custom_height overflow-y-auto left-0 w-[340px] ">
              <DashboardTab></DashboardTab>
            </div>
          </div>
          <div className="w-full md:w-[calc(100vw-340px)]   ">
            <div>{children}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainLayout;
