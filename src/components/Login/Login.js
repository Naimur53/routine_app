import React from "react";
import loginimg from "../../images/login.png";
import { NavLink, useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";

import PasswordTextField from "../ShareComponents/PasswordTextField/PasswordTextField";
import useFirebase from "../../Hook/useFirebase";
import { useSelector } from "react-redux";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import { CircularProgress } from "@mui/material";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loading, user } = useSelector(allData);
  const { loginUser, logOut, authError } = useFirebase({ observer: false });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    loginUser({ ...data, location, navigate });
  };
  return (
    <div className="custom_height flex items-center justify-center flex-col ">
      <div className="w-11/12	shadow-md md:w-1/3  px-3 py-8 rounded-lg">
        <img className="img-fluid" src={loginimg} alt="" />
        <h2 className="font-bold text-xl mb-2">Login</h2>
        <hr className="w-10   border-t-4 rounded-full" />
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            className="placeholder-gray-500 bg-transparent border border-gray-300 mt-4 px-4 py-2 rounded-full"
            placeholder="Email"
            label="Email"
            variant="standard"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && <div>This filed is required</div>}
          <PasswordTextField
            register={register}
            name="password"
          ></PasswordTextField>

          {errors.password && <div>password must be 6 length</div>}
          <div>
            {loading ? (
              <div className="w-full flex justify-center">
                <CircularProgress></CircularProgress>
              </div>
            ) : (
              user?.email ? <div className="text-center mt-5">
                <p className="font-medium text-lg">You are already logged in want to <span className="text-dark-purple font-semibold underline cursor-pointer underline-dark-purple" onClick={logOut}>logout</span> ?</p>
              </div> :
                <input
                  className="my-3 text-lg py-2 font-bold px-6 border border-gary-300 text-black rounded-full cursor-pointer transition-all hover:shadow-md"
                  type="submit"
                  value="Login"
                />
            )}
          </div>
          <div>
            <p className="text-red-900">{authError}</p>
          </div>
        </form>
        <div className="  flex align-center justify-center ">
          <NavLink to="/signUp" className="text-center text-primary py-2 ">
            Don't have Account? <span className="text-dark-purple font-bold">Let's Create account.</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
