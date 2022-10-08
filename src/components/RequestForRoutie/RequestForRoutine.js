import { PhotoCamera } from "@mui/icons-material";
import { Button, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import banner from "../../images/banner.png";

import SendIcon from "@mui/icons-material/Send";
const RequestForRoutine = () => {
  const onSubmit = (data) => console.log(data);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <MainLayout>
      <h1 className="text-center font-bold text-4xl">Request for a routine</h1>
      <div className="lg:flex xs-d-none">
        <div className="border p-3 shadow-lg rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center m-2 font-serif from-neutral-500 text-lg">
              Upload Your Routine
            </h1>
            {/* register your input into the hook by invoking the "register" function */}

            <Button variant="contained" component="label">
              Upload
              <PhotoCamera className="ml-2" />
              <input
                {...register("img", { require: true })}
                hidden
                accept="image/*"
                multiple
                type="file"
              />
            </Button>
            <br />
            <textarea
              {...register("massage")}
              className="border-2 mt-4 mb-5"
              placeholder="Your Massage"
              name="massage"
              id=""
              cols="30"
              rows="2"
            ></textarea>
            <br />
            <Button className="mt-5" variant="outlined" type="submit">
              Send request <SendIcon className="ml-2"></SendIcon>
            </Button>
          </form>
        </div>
        <div className=" ">
          <img className="img-fluid h-50" src={banner} alt="" />
        </div>
      </div>
    </MainLayout>
  );
};

export default RequestForRoutine;
