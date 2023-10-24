import React, { useState } from "react";
import CreateRoutine from "../../../../../CreateRoutine/CreateRoutine";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const RequestRoutineActions = ({ id, setData, data }) => {
  const [status, setStatus] = useState(data.status);
  const [postLoading, setPostLoading] = useState(false);
  const adminMessage = useRef();

  const handleChange = (event) => {
    const value = event.target.value;
    if (!data.requestId && value === "success") {
      toast.error(
        "sorry we did not found response _id so success status cannot update"
      );
      return;
    }
    setStatus(value);
  };
  const handleUploadStatus = () => {
    if (!postLoading) {
      setPostLoading(true);

      axios
        .put(
          `https://routine-app-server-main.onrender.com/requestRoutine?id=${id}`,
          {
            status,
            adminMessage: adminMessage.current.value,
            routineId: data.requestId,
          }
        )
        .then((res) => {
          // setData(res.data)

          setPostLoading(false);
        })
        .catch((err) => {
          setPostLoading(false);
          toast.error("Error while update try again");
        });
    }
  };
  // check data is already exit
  // useEffect(()=>{
  // },[id])

  return (
    <div className="mt-10">
      <div className="mb-10 flex flex-col md:flex-row gap-4  justify-between md:items-center">
        <div className="w-[220px]">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label2">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label2"
              id="demo-simple-select"
              value={status}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="success">Success</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
            </Select>
          </FormControl>
        </div>
        {
          <div className="h-full w-[220px]">
            <TextField
              id="standard-basic"
              sx={{ width: "100%" }}
              label="Add message"
              disabled={postLoading}
              inputRef={adminMessage}
              defaultValue={data.adminMessage}
              variant="filled"
            />
          </div>
        }
        <div>
          {postLoading ? (
            <CircularProgress></CircularProgress>
          ) : (
            <Button
              onClick={handleUploadStatus}
              disabled={data.status === status}
              variant="outlined"
            >
              Update status
            </Button>
          )}
        </div>
      </div>
      <div className="">
        {data.requestId ? (
          <div className="flex justify-center text-center pb-5">
            <div>
              <h2 className="text-xl mb-2">Routine Submitted</h2>
              <p>
                You can update Routine{" "}
                <Link
                  className="text-dark-purple underline"
                  to={`/update/${data.requestId}`}
                >
                  from here
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <CreateRoutine
            request={true}
            setRequestData={setData}
            requestId={data._id}
          ></CreateRoutine>
        )}
      </div>
    </div>
  );
};

export default RequestRoutineActions;
