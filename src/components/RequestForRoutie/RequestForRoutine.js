import { PhotoCamera } from "@mui/icons-material";
import { Button, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}

        <Button variant="contained" component="label">
          Upload
          <PhotoCamera className="m-2" />
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
          className="border-2 mt-3"
          name="massage"
          id=""
          cols="30"
          rows="2"
        ></textarea>
        <br />
        <Button variant="standart" type="submit">
          Request send
        </Button>
      </form>
    </MainLayout>
  );
};

export default RequestForRoutine;
