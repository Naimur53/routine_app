import React from "react";

import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import signImg from "../../images/log.png";

import PasswordTextField from "../ShareComponents/PasswordTextField/PasswordTextField";
const SignUp = () => {
  const {
    register,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="h-screen  flex items-center justify-center flex-col ">
        <div className="w-11/12 shadow-md md:w-1/3   px-3  rounded-lg">
          <img className="img-fluid" src={signImg} alt="" />
          <h2 className="font-bold text-xl mb-2">SignUp </h2>
          <hr className="w-10 border-t-4 rounded-full" />
          <form className="flex flex-col" onSubmit={onSubmit}>
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
              register={register}
              name="password"
            ></PasswordTextField>
            {errors.password && <div>password must be 6 length</div>}
            <PasswordTextField
              register={register}
              name="password2"
            ></PasswordTextField>
            {errors.password2 && <div>{errors.password2.message}</div>}
            <input
              className="my-3 cursor-pointer transition-all hover:shadow-lg text-lg py-2 font-bold px-6 border-gray-300 text-black border  rounded-full"
              type="submit"
              value="Create Account"
            />
            <NavLink to="/login" className="text-center text-primary py-2">
              Already have account?
            </NavLink>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
