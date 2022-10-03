import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "./../ShareComponents/MainLayout/MainLayout";

const UpdateRoutine = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <h1>Update Routine commng soon{id} </h1>
    </MainLayout>
  );
};

export default UpdateRoutine;
