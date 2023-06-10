import { Avatar, TableCell, TableRow, Tooltip } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const SingleRow = ({ photoURL, displayName, email, _id }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        <NavLink className={"cursor-pointer"} to={`/viewProfile/${_id}`}>
          <Avatar
            src={photoURL}
            className="w-[40px] shadow-xl rounded-md"
            alt="s"
          />
        </NavLink>
      </TableCell>
      <TableCell align="left">
        <Tooltip>
          <div>{displayName}</div>
        </Tooltip>
      </TableCell>
      <TableCell align="left">{email}</TableCell>
      <TableCell align="left">Comming Soon</TableCell>
      <TableCell align="left">Total created</TableCell>
      <TableCell align="left">total usesges routine</TableCell>
    </TableRow>
  );
};

export default SingleRow;
