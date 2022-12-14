import { CircularProgress } from "@mui/material";
import React from "react";

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import useFirebase from "../../Hook/useFirebase";
import signImg from "../../images/log.png";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import { useNavigate } from "react-router-dom";

import PasswordTextField from "../ShareComponents/PasswordTextField/PasswordTextField";
const SignUp = () => {
  const { handleRegister, authError } = useFirebase({ observer: false });
  const { loading } = useSelector(allData);
  let navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    handleRegister({ ...data, navigate, location });
  };
  return (
    <div>
      <div className="custom_height vc  flex items-center justify-center flex-col ">
        <div className="w-11/12 shadow-md md:w-1/3   px-3  rounded-lg">
          <img className="img-fluid" src={signImg} alt="" />
          <h2 className="font-bold text-xl mb-2 text-gray-500">SignUp </h2>
          <hr className="w-10 border-t-4 rounded-full" />
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="placeholder-gray-500 bg-transparent border border-gray-300 mt-4 px-4 py-2 rounded-full"
              type="text"
              placeholder="Name"
              label="Name"
              variant="standard"
              {...register("name", { required: true })}
            />
            {errors.name && <div>This filed is required</div>}
            <input
              className="placeholder-gray-500 bg-transparent border border-gray-300 mt-4 px-4 py-2 rounded-full"
              type="email"
              placeholder="Enter email"
              {...register("email", { required: true })}
            />
            {errors.email && <div>This filed is required</div>}
            <PasswordTextField
              placeholder="Password"
              register={register}
              name="password"
              watch={watch}
            ></PasswordTextField>
            {errors.password && (
              <div className="text-pink-600 ">password must be 6 length</div>
            )}
            <PasswordTextField
              placeholder=" Retype Password"
              register={register}
              watch={watch}
              name="password2"
            ></PasswordTextField>
            {errors.password2 && (
              <div className="text-pink-600  ">{errors.password2.message}</div>
            )}
            {loading ? (
              <div className="w-full flex justify-center pt-4">
                <CircularProgress color="primary"></CircularProgress>
              </div>
            ) : (
              <input
                className="my-3 bg-blue-500 cursor-pointer transition-all hover:shadow-lg text-lg py-2 font-bold px-6 border-gray-300 text-white border  rounded-full"
                type="submit"
                value="Create Account"
              />
            )}

            <div>
              <p className="text-pink-600  px-2">{authError}</p>
            </div>
            <div className="text-center mt-2 pb-3">
              Already have account?
              <NavLink
                to="/login"
                className="text-center text-dark-purple font-bold  text-primary ml-1 py-2"
              >
                Let's Login
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
