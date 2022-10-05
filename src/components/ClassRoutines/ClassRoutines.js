/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useNavigate } from "react-router-dom";

const classNameRoutines = () => {
  const navigate = useNavigate();

  const handleCreateRoutine = () => {
    navigate("/stepper");
  };

  return (
    <div>
      <button onClick={handleCreateRoutine}>Create a routine</button>
      <h1 className="text-green-400">ALl className Routine is here </h1>
    </div>
  );
};

export default classNameRoutines;
