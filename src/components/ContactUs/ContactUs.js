import React from "react";

import mehedi from "../../images/profile.png";
import naimur from "../../images/naimur.jpg";
import { Avatar, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
const ContactUs = () => {
  return (
    < >
      <h1 className="text-center text-2xl mt-10  font-bold text-gray-500  pb-5  ml-0 mr-0">
        Contact With Us
      </h1>
      <div className="flex justify-center flex-wrap
      ">

        <div

        >
          <div className="  p-4">
            <section className="max-w-xs  hover:rotate-3 hover:shadow-2xl shadow-lg          transform space-y-6 rounded-2xl bg-blue-50 p-6 duration-300 ">
              <div className="flex justify-between">
                <div className="">
                  <h1 className="text-xl font-bold text-gray-700">
                    {" "}
                    Naimur Rahaman
                  </h1>
                </div>
                <div className=" w-28  rounded-full   ">
                  {/* <img className="rounded-full -mt-10 w-28 h-28" src={naimur} alt="" /> */}
                  <Avatar sx={{ width: 110, height: 110, mt: -5 }} src={naimur}></Avatar>
                </div>
              </div>

              <header className="text-center text-xl font-extrabold text-gray-600">
                Full-Stack Web developer
              </header>

              <div>
                <p>
                  If you have any questions, need assistance, or have something you'd like to discuss, feel free to let me know.
                </p>
              </div>
              <div className="flex gap-4 text-gray-500">
                <a href="https://github.com/Naimur53" title="Github">
                  <GitHubIcon></GitHubIcon>
                </a>
                <a href="https://web.facebook.com/naimur.rahman.39501789" title="Facebook">
                  <FacebookIcon></FacebookIcon>
                </a>
                <a href="mailto:naimurrhman53@gmail.com">
                  {" "}
                  <EmailIcon></EmailIcon>
                </a>
                <a href="https://www.linkedin.com/in/naimurrhman/" title="LinkedIn">
                  {" "}
                  <LinkedInIcon></LinkedInIcon>
                </a>
                <a href="https://www.naimurrhman.com/" title="Portfolio">
                  {" "}
                  <LinkIcon></LinkIcon>
                </a>
              </div>
            </section>
          </div>
        </div>
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
                Hello! How can I assist you today? Feel free to ask any questions or share any concerns you have, and I'll do my best to help you.
              </p>
            </div>
            <div className="flex gap-4 text-gray-500">
              <a href="https://github.com/Mehedi287" title="Github">
                <GitHubIcon></GitHubIcon>
              </a>
              <a href="https://web.facebook.com/mdmehedi.hassna.35" title="Facebook">
                <FacebookIcon></FacebookIcon>
              </a>
              <a href="mailto:mehedihasan23159287@gmail.com" title="Email">
                {" "}
                <EmailIcon></EmailIcon>
              </a>
              <a href="https://www.linkedin.com/in/mehedi-hasan-824382227 " title="LinkedIn">
                {" "}
                <LinkedInIcon></LinkedInIcon>
              </a>
              <a href="https://elegant-panini-7cfcd4.netlify.app/" title="Portfolio">
                {" "}
                <LinkIcon></LinkIcon>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
