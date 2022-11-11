import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { Tooltip } from '@mui/material';
import { NavLink } from 'react-router-dom';

const TableSingleRow = ({ _id, img, message, date, creator, status, adminMessage }) => {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <img src={img} className='w-[80px]' alt="s" />
            </TableCell>
            <TableCell align="left">
                <Tooltip title={message || 'No Message'}>
                    <div>

                        {message ? message?.slice(0, 10) : 'No Message'}
                    </div>
                </Tooltip>
            </TableCell>
            <TableCell align="left">{new Date(date).toLocaleDateString()}</TableCell>
            <TableCell align="left">
                <Tooltip title={adminMessage || 'No Message'}>
                    <div>

                        {adminMessage ? adminMessage?.slice(0, 10) : 'No Message'}
                    </div>
                </Tooltip>
            </TableCell>
            <TableCell align="left">{status}</TableCell>
            <TableCell component="th" scope="row">
                <div>
                    <NavLink to={`/dashboard/createRequestRoutine/${_id}`} className="border text-dark-purple rounded border-dark-purple px-5  inline-block py-2">Create Routine</NavLink>
                </div>
            </TableCell>
        </TableRow>
    );
};

export default TableSingleRow;