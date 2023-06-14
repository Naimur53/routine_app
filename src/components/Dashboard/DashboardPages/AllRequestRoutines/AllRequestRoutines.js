import axios from "axios";
import React, { useState, useEffect } from "react";
import RequestTables from "../../DashboradComponents/RequestTables/RequestTables";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { CircularProgress } from "@mui/material";
const AllRequestRoutines = ({ short }) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("pending");
  const [getLoading, setGetLoading] = useState(true);
  useEffect(() => {
    setGetLoading(true);
    axios
      .get(
        `https://routineappserver-production-5617.up.railway.app/requestRoutine?status=${
          status === "all" ? "" : status
        }`
      )
      .then((res) => {
        setData(res.data);
        setGetLoading(false);
      });
  }, [status]);
  const handleChange = (event) => {
    const value = event.target.value;
    setStatus(value);
  };
  return (
    <div>
      {!short && (
        <div className="w-[220px] mb-5">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Filter with status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Filter with status"
              onChange={handleChange}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="success">Success</MenuItem>
              <MenuItem value="rejected">Rejected</MenuItem>
            </Select>
          </FormControl>
        </div>
      )}
      <div
        className={`${
          short ? "h-[370px]" : "custom_height_for_classes"
        } overflow-scroll`}
      >
        {getLoading ? (
          <div className="flex justify-center">
            <CircularProgress></CircularProgress>
          </div>
        ) : (
          <RequestTables data={data}></RequestTables>
        )}
      </div>
    </div>
  );
};

export default AllRequestRoutines;
