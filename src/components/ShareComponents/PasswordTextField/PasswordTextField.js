import React from "react";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordTextField = ({ register, name }) => {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(false);
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setIcon(true);
    }
    if (type === "text") {
      setType("password");
      setIcon(false);
    }
  };

  return (
    <div>
      <div className="flex justify-content-around relative">
        <input
          className="placeholder-gray-500 w-full bg-transparent border border-gray-300 mt-4 px-4 py-2 rounded-full"
          placeholder="Password"
          type={type}
          label="Password"
          name="password"
          variant="standard"
          {...register(name, { required: true, minLength: 6 })}
        />

        <div className="absolute right-3 top-6">
          {icon ? (
            <VisibilityOff className="w-4" onClick={handleToggle} />
          ) : (
            <Visibility onClick={handleToggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordTextField;
