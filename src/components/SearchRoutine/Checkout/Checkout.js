import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HomeClassShow from "../../Home/smallCompo/HomeClassShow/HomeClassShow";
import MainLayout from "../../ShareComponents/MainLayout/MainLayout";

const Checkout = () => {
  const { id } = useParams();
  const [data, setData] = useState({ classes: [] })
  const [getLoading, setGetLoading] = useState(true)

  useEffect(() => {
    setGetLoading(true);
    axios.get(`http://localhost:5001/routine?id=${id}`)
      .then(res => {
        setGetLoading(false);
        setData(res.data)
      })
  }, [id])
  const handleSave = () => {
    console.log(data)
  }
  return (
    <MainLayout>
      <h1> Routine checkout show info and save method to show on home  soon {id}</h1>
      {
        data?._id && <button className="text-lg border  p-2 rounded bg-dark-purple text-light-purple" onClick={handleSave}>Save Routine</button>
      }

      {
        !getLoading ? <HomeClassShow data={data}></HomeClassShow> : <CircularProgress></CircularProgress>
      }

    </MainLayout>
  );
};

export default Checkout;
