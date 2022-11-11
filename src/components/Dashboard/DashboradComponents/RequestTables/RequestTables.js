import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSingleRow from '../TableSingleRow/TableSingleRow';
const RequestTables = ({ data }) => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image of routine</TableCell>
                            <TableCell align="left">Message</TableCell>
                            <TableCell align="left">Date</TableCell>
                            <TableCell align="left">Admin Message</TableCell>
                            <TableCell align="left">status</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((single) => (
                            <TableSingleRow {...single}></TableSingleRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default RequestTables;