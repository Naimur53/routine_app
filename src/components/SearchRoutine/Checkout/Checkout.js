import { Button, CircularProgress, Skeleton, Box, Modal } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { saveRoutine } from "../../../utilities/localDb";
import HomeClassShow from "../../Home/smallCompo/HomeClassShow/HomeClassShow";
import MainLayout from "../../ShareComponents/MainLayout/MainLayout";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { format } from "date-fns";
import RoutineNotFound from "../../ShareComponents/RoutineNotFound/RoutineNotFound";
import ShareIcon from "@mui/icons-material/Share";
import { toast } from "react-toastify";
import bg1 from "../../../images/bg5.webp";
import DownloadIcon from "@mui/icons-material/Download";
import { useGetRoutineWithIdQuery } from "../../../ManageState/features/routine/routineApi";
import { useRef } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import IconButton from "@mui/material/IconButton";
import OfflineShareIcon from "@mui/icons-material/OfflineShare";
const Checkout = () => {
  const { id } = useParams();
  // const [data, setData] = useState({ classes: [] });
  const downloadLinkRef = useRef(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [save, setSave] = useState(false);
  const [pepFile, setPepFile] = useState();
  const { isError, isLoading, data } = useGetRoutineWithIdQuery(id);
  const location = useLocation();
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    setSave(true);
    const { response, status } = saveRoutine(data);
    if (status !== 400) {
      toast.success(response);
      navigate("/");

      axios.put(
        `https://routineappserver-production-5617.up.railway.app/routine/increaseUsingValue?id=${data._id}`
      );
    } else {
      toast.error("Routine already exist``");
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
    return (
      <>
        <MainLayout>
          <div className="flex justify-center items-center">
            <div>
              <RoutineNotFound title="Routine not found!"></RoutineNotFound>
            </div>
          </div>
        </MainLayout>
      </>
    );
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
  const handleCopyId = () => {
    navigator.clipboard
      .writeText(data.id)
      .then((res) => {
        toast.success(`The Id ${data.id}  has a copy in your clipboard`);
        handleClose();
      })

      .catch((err) => {
        toast.error("The ID couldn't be copied, so please try again.");
      });
  };
  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then((res) => {
        toast.success(
          `The Link  "${window.location.href}"  has a copy in your clipboard`
        );
        handleClose();
      })
      .catch((err) => {
        toast.error("Sorry try again!");
      });
  };

  const handleDownload = () => {
    axios({
      url: `https://routineappserver-production-5617.up.railway.app/makePdf?routineId=${id}`,
      method: "GET",
      responseType: "blob",
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Set the href and download attributes of the download link
        downloadLinkRef.current.href = url;
        downloadLinkRef.current.download = "routine.pdf";

        // Programmatically trigger the click event of the download link
        downloadLinkRef.current.click();

        URL.revokeObjectURL(url);
      })
      .catch((error) => {});
  };
  return (
    <>
      <div className=" pt-10 md:p-2">
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
                onClick={() => setOpen((pre) => !pre)}
              >
                {/* <AddIcon></AddIcon>  */}
                <ShareIcon></ShareIcon>
                <span className="ml-1">Share</span>
              </Button>
              {/* Hidden download link */}
              <a ref={downloadLinkRef} style={{ display: "none" }}></a>
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="absolute pl-5 pb-5 top-1/2 left-1/2 bg-white -translate-y-1/2 -translate-x-1/2 min-w-[280px] rounded">
          <div className="flex justify-end pt-2 pr-2">
            <IconButton onClick={handleClose} color="primary">
              <CloseIcon></CloseIcon>
            </IconButton>
          </div>
          <h2 className="pr-5 text-center mt-2">
            Choose what you want to share.
          </h2>
          <div className="flex gap-5 mt-5 justify-center pr-5">
            <button
              onClick={handleCopyLink}
              className="flex w-full justify-center flex-col items-center py-3 bg-light-purple px-3 gap-2 rounded-md shadow shadow-light-purple"
            >
              <OfflineShareIcon></OfflineShareIcon>
              <h2>Copy Link</h2>
            </button>
            <button
              onClick={handleCopyId}
              className="flex w-full justify-center flex-col items-center py-3 bg-light-purple px-3 gap-2 rounded-md shadow shadow-light-purple"
            >
              <ContentCopyIcon></ContentCopyIcon>
              <h2>Copy Id</h2>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Checkout;
