import React from "react";
import { useNavigate } from "react-router-dom";

const ClassRoutines = () => {
  const navigate = useNavigate();
  const handleCreateRoutine = () => {
    navigate("/stepper");
  };
  return (
    <div>
      <button onClick={handleCreateRoutine}>Create a routine</button>
      <h1 className="text-green-400">ALl Class Routine is here </h1>
    </div>
  );
};

export default ClassRoutines;
