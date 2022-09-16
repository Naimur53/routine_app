import { Container } from "@mui/material";
import React from "react";
import HomeClassShow from "./smallCompo/HomeClassShow/HomeClassShow";

const Home = () => {
  return (
    <Container>
      <h1>You have 5 class today</h1>
      <HomeClassShow></HomeClassShow>
    </Container>
  );
};

export default Home;
