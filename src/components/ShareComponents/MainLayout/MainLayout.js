import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import MainLayoutTab from "../MainLayoutTab/MainLayoutTab";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Container maxWidth="xxl">
        <div className="block md:flex">
          <div className="mainLayoutTabWidth hidden md:block">
            <div className="fixed custom_height overflow-y-auto left-0 mainLayoutTabWidth">
              <MainLayoutTab></MainLayoutTab>
            </div>
          </div>
          <div className="w-full md:w-[calc(100vw-260px)]   ">

            <div>{children}</div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainLayout;
