import React from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../ShareComponents/MainLayout/MainLayout";

const Checkout = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <h1> Routine comming soon {id}</h1>
    </MainLayout>
  );
};

export default Checkout;
