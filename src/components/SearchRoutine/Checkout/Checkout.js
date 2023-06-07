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
import DownloadIcon from '@mui/icons-material/Download';
import { useGetRoutineWithIdQuery } from "../../../ManageState/features/routine/routineApi";
import { useRef } from "react";
const Checkout = () => {
  const { id } = useParams();
  // const [data, setData] = useState({ classes: [] }); 
  const downloadLinkRef = useRef(null);

  const [save, setSave] = useState(false);
  const [pepFile, setPepFile] = useState()
  const { isError, isLoading, data, } = useGetRoutineWithIdQuery(id)
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

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex justify-center">
          <CircularProgress></CircularProgress>
        </div>
      </MainLayout>
    );
  }
  if (isError && !isLoading) {
    return <>
      <MainLayout>
        <div className="flex justify-center items-center">
          <div>
            <RoutineNotFound title='Routine not found!'></RoutineNotFound>
          </div>
        </div>

      </MainLayout>
    </>

  }
  if (!isLoading && !data._id && !data.date) {
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
      .writeText(data.id)
      .then((res) => {
        toast.success(`The Id ${data.id}  has a copy to the clipboard`);
      })
      .catch((err) => {
        toast.error("Id can't be copy try again");
      });
  };


  const handleDownload = () => {
    console.log()
    axios(
      {
        url: `https://routineappserver-production-5617.up.railway.app/makePdf?routineId=${id}`,
        method: 'GET',
        responseType: 'blob'
      }
    )
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Set the href and download attributes of the download link
        downloadLinkRef.current.href = url;
        downloadLinkRef.current.download = 'routine.pdf';

        // Programmatically trigger the click event of the download link
        downloadLinkRef.current.click();

        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.log('Error occurred while downloading the PDF.', error);
      });
  }
  return (
    < >
      <div className="  p-2">
        <div className="flex justify-end pb-5">
          {data?._id && (
            <div className="flex flex-wrap gap-4">
              <Button
                variant="contained"
                disabled={save}
                size="small"
                className="text-lg border grow mb-b5 p-2 rounded bg-dark-purple text-light-purple disabled:bg-gray-300"
                onClick={handleSave}
              >
                {/* <AddIcon></AddIcon>  */}
                <span className="ml-1">Use Routine</span>
              </Button>
              <Button
                variant="outlined"
                size="small"
                className="text-lg border grow  mb-b5 p-2 rounded bg-dark-purple text-light-purple disabled:bg-gray-300"
                onClick={() => handleShare()}
              >
                {/* <AddIcon></AddIcon>  */}
                <ShareIcon></ShareIcon>
                <span className="ml-1">Share</span>
              </Button>
              {/* Hidden download link */}
              <a ref={downloadLinkRef} style={{ display: 'none' }}></a>
              <Button
                variant="outlined"
                size="small"
                className="text-lg border grow  mb-b5 p-2 rounded bg-dark-purple text-light-purple disabled:bg-gray-300"
                onClick={() => handleDownload()}
              >
                {/* <AddIcon></AddIcon>  */}
                <DownloadIcon></DownloadIcon>
                <span className="ml-1">Download</span>
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
                  <div className="flex justify-between gap-2">
                    <div className="">
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
    </>
  );
};

export default Checkout;
