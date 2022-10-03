import { PhotoCamera } from "@mui/icons-material";
import { Button, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import send from "../../images/send.jpg";
import complate from "../../images/complate.webp";
import right from "../../images/right.jpg";
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
      <div className="flex xs-d-none">
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
              Request send
            </Button>
          </form>
        </div>
        <div className="flex">
          <img className="img-fluid h-50" src={send} alt="" />
          <img className="img-fluid h-40 items-center" src={right} alt="" />
          <img className="img-fluid h-50 " src={complate} alt="" />
        </div>
      </div>
    </MainLayout>
  );
};

export default RequestForRoutine;
