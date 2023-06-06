import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";
import TableSingleRow from "../../DashboradComponents/TableSingleRow/TableSingleRow";
import SingleRow from "./SingleRow/SingleRow";

const AllUsers = () => {
  const fetchData = () => {
    return axios
      .get("http://localhost:5001/user")
      .then((response) => setAllUser(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const [allUser, setAllUser] = useState([]);
  return (
    <>
      {" "}
      <h1 className="text-center font-bold text-2xl text-gray-500 m-3">
        All Users
      </h1>
      <div className="flex justify-end">
        <div className="w-32 rounded bg-gray-200  left-0  p-2">
          <p className="text-right ">Total Users : {allUser.length}</p>
        </div>
      </div>
      <Paper sx={{ width: "100%" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead sx={{ minWidth: 650, background: "lightGray" }}>
              <TableRow>
                <TableCell>Profile</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left"> Last SignIn</TableCell>
                <TableCell align="left">Total Created Routine</TableCell>
                <TableCell align="left">Total Useges Routine</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUser.map((single) => (
                <SingleRow {...single}></SingleRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default AllUsers;
