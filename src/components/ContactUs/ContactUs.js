import React from "react";

import mehedi from "../../images/profile.png";
import naimur from "../../images/naimur.jpg";
import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
const ContactUs = () => {
  return (
    <MainLayout>
      <h1 className="text-center text-2xl font-bold text-gray-500 lg:mr-52  m-3">
        {" "}
        Contact With Us{" "}
      </h1>
      <Grid
        container
        spacing={2}
        style={{
          margine: "0 auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item lg={6} md={6} xm={12}>
          <div className="    p-4">
            <section className="max-w-xs  hover:rotate-3 hover:shadow-2xl shadow-lg          transform space-y-6 rounded-2xl bg-blue-50 p-6 duration-300 ">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="text-xl font-bold text-gray-700">
                    {" "}
                    Naimur Rahaman
                  </h1>
                </div>
                <div className=" w-28  rounded-full   ">
                  <img className="rounded-full -mt-10" src={naimur} alt="" />
                </div>
              </div>

              <header className="text-center text-xl font-extrabold text-gray-600">
                Full-Stack Web developer
              </header>

              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Numquam, reprehenderit?
                </p>
              </div>
              <div className="flex gap-4 text-gray-500">
                <a href="https://github.com/Naimur53" title="Github">
                  <GitHubIcon></GitHubIcon>
                </a>
                <a href="" title="Facebook">
                  <FacebookIcon></FacebookIcon>
                </a>
                <a href="" title="Email">
                  {" "}
                  <EmailIcon></EmailIcon>
                </a>
                <a href="" title="LinkedIn">
                  {" "}
                  <LinkedInIcon></LinkedInIcon>
                </a>
                <a href="" title="Portfolio">
                  {" "}
                  <LinkIcon></LinkIcon>
                </a>
              </div>
            </section>
          </div>
        </Grid>
        <Grid item lg={6} md={6} xm={12}>
          <div className="   p-4">
            <section className="     max-w-xs  hover:rotate-3 hover:shadow-2xl shadow-lg transform space-y-6 rounded-2xl bg-pink-50 p-6 duration-300 ">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="text-xl font-bold text-gray-700">
                    Mehedi Hasan
                  </h1>
                </div>
                <div className=" w-28  rounded-full   ">
                  <img className="rounded-full -mt-10" src={mehedi} alt="" />
                </div>
              </div>

              <header className="text-center text-xl font-extrabold text-gray-600">
                Frontend Web developer
              </header>

              <div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Assumenda, perferendis!
                </p>
              </div>
              <div className="flex gap-4 text-gray-500">
                <a href="" title="Github">
                  <GitHubIcon></GitHubIcon>
                </a>
                <a href="" title="Facebook">
                  <FacebookIcon></FacebookIcon>
                </a>
                <a href="" title="Email">
                  {" "}
                  <EmailIcon></EmailIcon>
                </a>
                <a href="" title="LinkedIn">
                  {" "}
                  <LinkedInIcon></LinkedInIcon>
                </a>
                <a href="" title="Portfolio">
                  {" "}
                  <LinkIcon></LinkIcon>
                </a>
              </div>
            </section>
          </div>
        </Grid>{" "}
      </Grid>
    </MainLayout>
  );
};

export default ContactUs;
