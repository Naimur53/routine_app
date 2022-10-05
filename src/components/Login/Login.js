import React from "react";
import loginimg from "../../images/login.png";
import { NavLink, useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

import { useForm } from "react-hook-form";

import PasswordTextField from "../ShareComponents/PasswordTextField/PasswordTextField";
import useFirebase from "../../Hook/useFirebase";
const Login = () => {
  const location = useLocation();
  const { handleRegister } = useFirebase();

  const {
    register,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

  };
  return (
    <div className="custom_height flex items-center justify-center flex-col ">
      <div className="w-11/12	shadow-md md:w-1/3  px-3 py-8 rounded-lg">
        <img className="img-fluid" src={loginimg} alt="" />
        <h2 className="font-bold text-xl mb-2">Login</h2>
        <hr className="w-10   border-t-4 rounded-full" />
        <form className="flex flex-col">
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
            <input
              className="my-3 text-lg py-2 font-bold px-6 border border-gary-300 text-black rounded-full cursor-pointer transition-all hover:shadow-md"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div className="  flex align-center justify-center ">
          <NavLink to="/signUp" className="text-center text-primary py-2 ">
            Don't have Account? <span className="">Let's Create account</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
