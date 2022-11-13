import React from "react";
import MainLayout from "./../ShareComponents/MainLayout/MainLayout";
import aboutUs from "../../images/about2.webp";
import { Button, Grid } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
const About = () => {
  return (
    <MainLayout>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <img className="" src={aboutUs} alt="" />
        </Grid>
        <Grid item lg={6} className="">
          <h1 className="text-xl font-bold">App Name</h1>
          <p className="m-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            molestias corporis possimus quas quaerat doloribus, illo dolorem qui
            non tempora nesciunt ea at dolorum consequatur veniam? Quasi earum
            minus quae! Quasi asperiores mollitia accusantium vero reprehenderit
            odio at perferendis dolorum.
          </p>

          <Button component={NavLink} to={"/contactUs"} variant="contained">
            Contact With Us
          </Button>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default About;
