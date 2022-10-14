import { PhotoCamera } from "@mui/icons-material";
import { Button, Grid, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import banner from "../../images/banner.png";
import RequestModal from "./comp/RequestModal";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { allData } from "../../ManageState/DataSlice/dataSlice";
import RequestCard from "./comp/RequestCard";

const RequestForRoutine = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [getLoading, setGetLoading] = useState(true);
  const { user } = useSelector(allData);
  useEffect(() => {
    if (user._id) {
      setGetLoading(true)
      axios.get(`http://localhost:5001/requestRoutine?uid=${user?._id}`)
        .then(res => {
          setData(res.data)
          setGetLoading(false)
        })
        .catch(err => {
          setGetLoading(false)
        })
    }
  }, [user])


  return (
    <MainLayout>
      <div>
        <Grid container spacing={4}>
          <Grid item md={5} xs={12}>
            <div>
              <h1 className="text-3xl font-semibold mt-20">Make request for a routine</h1>
              <p className="mt-5 mb-3">If you don't find routine that match your routine just make a request which will have your class routine as image and we will build it for you </p>

              <Button className="mt-5" variant="outlined" type="submit" onClick={() => setOpen(!open)}>
                Make request
              </Button>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <img src={banner} alt="" />
          </Grid>
          {
            data.map((single, i) => <Grid item key={i} xs={12} md={4}>
              <RequestCard {...single} setData={setData}></RequestCard>

            </Grid>)
          }
        </Grid>
        <RequestModal open={open} setData={setData} setOpen={setOpen}></RequestModal>
      </div>
    </MainLayout>

  );
};

export default RequestForRoutine;
