import { Button, CircularProgress, Skeleton, Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { saveRoutine } from "../../../utilities/localDb";
import HomeClassShow from "../../Home/smallCompo/HomeClassShow/HomeClassShow";
import MainLayout from "../../ShareComponents/MainLayout/MainLayout";
import AddIcon from "@mui/icons-material/Add";
import { format } from "date-fns";
import RoutineNotFound from "../../ShareComponents/RoutineNotFound/RoutineNotFound";
import ShareIcon from "@mui/icons-material/Share";
import { toast } from "react-toastify";
import bg1 from "../../../images/bg5.webp";
const Checkout = () => {
  const { id } = useParams();
  const [data, setData] = useState({ classes: [] });
  const [getLoading, setGetLoading] = useState(true);
  const [save, setSave] = useState(false);

  useEffect(() => {
    setGetLoading(true);
    axios
      .get(`https://routineappserver-production-5617.up.railway.app/routine?id=${id}`)
      .then((res) => {
        if (res.data?._id) {
          setGetLoading(false);
          setData(res.data);
        } else {
          toast.error("data not found");
        }
      })
      .catch((err) => {
        setGetLoading(false);
      });
  }, [id]);
  console.log(data, "from checkout");
  const handleSave = () => {
    console.log(data);
    setSave(true);
    const { response, status } = saveRoutine(data);
    if (status !== 400) {
      toast.success(response);
      axios.put(
        `https://routineappserver-production-5617.up.railway.app/routine/increaseUsingValue?id=${data._id}`
      );
    } else {
      toast.error("Routine already exist``")
    }
  };
  if (getLoading) {
    return (
      <MainLayout>
        <div className="flex justify-center">
          <CircularProgress></CircularProgress>
        </div>
      </MainLayout>
    );
  }
  if (!getLoading && !data._id && !data.date) {
    return (
      <MainLayout>
        <div>
          <RoutineNotFound title="Sorry routine not Found!"></RoutineNotFound>
        </div>
      </MainLayout>
    );
  }
  const handleShare = () => {
    navigator.clipboard
      .writeText(data._id)
      .then((res) => {
        toast.success("The Id has a copy to the clipboard");
      })
      .catch((err) => {
        toast.error("Id can't be copy try again");
      });
  };
  return (
    <MainLayout>
      <div className="  p-2">
        <div className="flex justify-end pb-5">
          {data?._id && (
            <div className="flex gap-4">
              <Button
                variant="contained"
                disabled={save}
                size="small"
                className="text-lg border  mb-b5 p-2 rounded bg-dark-purple text-light-purple disabled:bg-gray-300"
                onClick={handleSave}
              >
                {/* <AddIcon></AddIcon>  */}
                <span className="ml-1">Save Routine</span>
              </Button>
              <Button
                variant="outlined"
                size="small"
                className="text-lg border  mb-b5 p-2 rounded bg-dark-purple text-light-purple disabled:bg-gray-300"
                onClick={() => handleShare()}
              >
                {/* <AddIcon></AddIcon>  */}
                <ShareIcon></ShareIcon>
                <span className="ml-1">Share</span>
              </Button>
            </div>
          )}
        </div>
        <div
          style={{
            backgroundImage: ` url(${bg1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: " cover",
            backgroundAttachment: "scroll",
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <div className="text-center  w-full md:w-1/2 mb-5    m-2 relative px-2 py-5 rounded-md">
            <h1 className="text-2xl font-bold"> {data.institute}</h1>
            <div className="text-lg">
              <div className="flex justify-center items-center">
                <div>
                  <h1 className="py-3 block break-words">
                    <span className="text-lg  font-bold">Department :</span>{" "}
                    <span className="text-dark-purple">{data.department}</span>
                    <br className=" md:hidden block" />
                  </h1>
                  <div className="flex justify-between">
                    <div className="">
                      {" "}
                      <span className="text-lg font-bold">Semester : </span>
                      <span className="text-dark-purple  ">
                        {data.semester}
                      </span>
                    </div>

                    <h1>
                      <span className="text-lg font-bold"> Shift : </span>
                      <span className="text-dark-purple  ">{data.shift}</span>
                    </h1>
                    <h1>
                      <span className="text-lg font-bold"> Section : </span>
                      <span className="text-dark-purple  ">{data.section}</span>
                    </h1>
                  </div>
                  <p className="mt-5  text-center w-[100%] text-sm text-gray-400">
                    Published on {format(new Date(data.date), "PP")} <br />{" "}
                    Total {data.totalUserUsing} user using this routine{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomeClassShow data={data}></HomeClassShow>
      </div>
    </MainLayout>
  );
};

export default Checkout;
