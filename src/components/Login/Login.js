import React, { useEffect } from "react";
import loginimg from "../../images/login.png";
import { NavLink, useNavigate } from "react-router-dom";
import googleLogo from "../../images/googleicon.png";
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
  const { loginUser, logOut, authError, loginUserWithGoogleRedirect } = useFirebase({
    observer: false,
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser({ ...data, location, navigate });
  };
  const handleLoginWithGoogle = () => {
    loginUserWithGoogleRedirect();
  };
  useEffect(() => {
    if (user?._id) {
      navigate('/')
    }
  }, [user])
  return (
    <div className="custom_height flex items-center justify-center flex-col ">
      <div className="w-11/12	shadow-md md:w-1/3  px-3 py-8 rounded-lg ">
        {/* <img className="img-fluid" src={loginimg} alt="" /> */}
        <h2 className="font-bold text-xl text-gray-500 mb-2">Login</h2>
        <hr className="w-10   border-t-4 rounded-full" />
        {/* <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            className="placeholder-gray-500 bg-transparent border border-gray-300 mt-4 px-4 py-2 rounded-full"
            placeholder="Email"
            label="Email"
            variant="standard"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <div className="text-pink-600 ">This filed is required</div>
          )}
          <PasswordTextField
            placeholder="Password"
            register={register}
            name="password"
          ></PasswordTextField>

          {errors.password && (
            <div className="text-pink-600 ">password must be 6 length</div>
          )}
          <div>
            {loading ? (
              <div className="w-full flex justify-center">
                <CircularProgress></CircularProgress>
              </div>
            ) : user?.email ? (
              <div className="text-center mt-5">
                <p className="font-medium text-lg">
                  You are already logged in want to{" "}
                  <span
                    className="text-dark-purple font-semibold underline cursor-pointer underline-dark-purple"
                    onClick={logOut}
                  >
                    logout
                  </span>{" "}
                  ?
                </p>
              </div>
            ) : (
              <input
                className="w-full text-white  my-3 text-lg py-2 font-bold px-6 border border-gary-300 bg-blue-500  rounded-full cursor-pointer transition-all hover:shadow-md"
                type="submit"
                value="Login"
              />
            )}
          </div>
          <div>
            <p className="text-red-900">{authError}</p>
          </div>
        </form> */}
        <div
          onClick={handleLoginWithGoogle}
          className=" shadow shadow-dark-blue/40 mt-5 p-2 rounded-md flex   items-center lg:w-2/3  mx-auto cursor-pointer "
        >
          <img className="w-8 mr-3" src={googleLogo} alt="" />
          <button className="font-bold text-gray-600  text-center">
            Login With Google <span className="hidden sm:inline-block">Account</span>
          </button>
        </div>
        <div className="  flex align-center justify-center  mt-4">
          <NavLink to="/contactUs" className="text-center text-primary py-2 ">
            Something went wrong?
            <span className="text-dark-purple ml-2 font-bold">
              Contact us.
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
