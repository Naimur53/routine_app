import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Modal,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { useSelector } from "react-redux";
import { allData } from "../../../ManageState/DataSlice/dataSlice";
import { toast } from "react-toastify";
import { useAddRequestForRoutineMutation } from "../../../ManageState/features/requestRoutine/requestRoutineApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};
const RequestModal = ({ open, setOpen, setData }) => {
  const [imgLoading, setImgLoading] = useState(false);
  const [addRequest, { isLoading, isError, isSuccess }] =
    useAddRequestForRoutineMutation();

  const { user } = useSelector(allData);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const handleImgUpload = (e) => {
    const data = new FormData();
    data.append("file", e.target.files[0]);

    if (e.target?.files?.length) {
      setImgLoading(true);
      axios
        .post(`https://routine-app-server-main.onrender.com/uploadImage`, data)
        .then((res) => {
          setImgLoading(false);
          setValue("img", res.data.url);
        })
        .catch((err) => {
          setImgLoading(false);
          setValue("img", "");
          toast.error("Something wrong when getting image");
        });
    }
  };
  const onSubmit = (data) => {
    if (!data?.img?.length) {
      toast.error("Please add image of your routine");
      return;
    }
    if (!user._id) {
      toast.error("User not found");
      return;
    }
    addRequest({ ...data, creator: user._id });
  };
  useEffect(() => {
    if (!isLoading) {
      if (isError) {
        toast.error("Failed to make request");
      }
      if (isSuccess) {
        toast.success("Request submitted successfully!");
        setOpen(false);
        reset();
      }
    }
  }, [isLoading, isError, isSuccess]);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-full md:w-[60vw]">
          <div className="flex justify-end">
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ backgroundColor: "#80808021" }}
              color="primary"
            >
              <CloseIcon></CloseIcon>
            </IconButton>
          </div>
          <div className="px-3  rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1 className="text-center mb-2 font-medium from-neutral-500 text-xl">
                Upload Your Routine
              </h1>
              {/* register your input into the hook by invoking the "register" function */}
              {imgLoading ? (
                <div className="flex justify-center">
                  <CircularProgress></CircularProgress>
                </div>
              ) : (
                <div className=" flex flex-col items-center justify-center ">
                  {watch("img")?.length ? (
                    <img
                      className="max-h-[200px]"
                      src={watch("img")}
                      alt="choose img"
                    />
                  ) : (
                    <></>
                  )}
                  <div className="mt-3 ">
                    <Button
                      variant="contained"
                      disabled={isLoading}
                      component="label"
                    >
                      Upload
                      <PhotoCamera className="ml-2" />
                      <input
                        onChange={handleImgUpload}
                        hidden
                        accept="image/*"
                        // multiple

                        type="file"
                      />
                    </Button>
                  </div>
                </div>
              )}

              <br />
              <textarea
                {...register("message")}
                className="w-full resize-none rounded-md p-2 border-2 mt-4 mb-5"
                placeholder="Your Massage"
                id=""
                maxLength={200}
                cols="30"
                res
                rows="3"
              ></textarea>
              <br />
              {isLoading ? (
                <CircularProgress></CircularProgress>
              ) : (
                <Button
                  disabled={imgLoading}
                  className="mt-5"
                  variant="outlined"
                  type="submit"
                >
                  Send request <SendIcon className="ml-2"></SendIcon>
                </Button>
              )}
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default RequestModal;
