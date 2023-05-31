import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminTableSingleRow from './compo/AdminTableSingleRow';
import MakeAdmin from './compo/MakeAdmin';

const ManageAdmin = () => {
    const [allAdmin, setAllAdmin] = useState([])
    const [getLoading, setGetLoading] = useState(true)
    useEffect(() => {
        axios.get('http://localhost:5001/admin')
            .then(res => {
                setAllAdmin(res.data)
            })
    }, [])
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Display</TableCell>
                            <TableCell align="left">uid</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allAdmin.map((single) => (
                            <AdminTableSingleRow key={single._id} allUser={allAdmin} setAllUser={setAllAdmin} {...single} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <MakeAdmin setAllAdmin={setAllAdmin}></MakeAdmin>

        </div>
    );
};

export default ManageAdmin;