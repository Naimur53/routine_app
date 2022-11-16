import { Button, CircularProgress, TableCell, TableRow, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminTableSingleRow = ({ makeAdmin, _id, isAdmin, photoURL, email, displayName, uid, allUser, setAllUser, setAllAdmin }) => {
    const [postLoading, setPostLoading] = useState(false)
    const handleClick = (status) => {

        if (!makeAdmin) {
            if (allUser.length === 1) {
                toast.error('One Admin required ')
                return
            }
        }

        if (!postLoading) {
            setPostLoading(true)
            axios.put(`https://shielded-dusk-65695.herokuapp.com/admin?email=${email}&adminStatus=${status}`)
                .then(res => {
                    setPostLoading(false)
                    if (status) {
                        setAllAdmin(pre => {
                            const updatedData = allUser.find(single => single._id === _id)
                            updatedData.isAdmin = true;
                            return [...pre, updatedData]
                        })
                    }
                    setAllUser(pre => {
                        return pre.filter(single => single.email !== email)
                    })
                })

        }
    }
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                <img src={photoURL} className='w-[40px] shadow-xl rounded-full' alt="s" />
            </TableCell>
            <TableCell align="left">
                <div>
                    {email}
                </div>
            </TableCell>
            <TableCell align="left">{displayName}</TableCell>
            <TableCell align="left">
                <div>

                    {uid}
                </div>
            </TableCell>
            <TableCell component="th" scope="row">
                <div>
                    {
                        postLoading ? <div>
                            <CircularProgress></CircularProgress>
                        </div> : isAdmin ? <Button variant='outlined' onClick={() => handleClick(false)}>Remove Admin</Button> : <Button variant='outlined' onClick={() => handleClick(true)}>Make Admin</Button>
                    }
                </div>
            </TableCell>
        </TableRow>
    );
};

export default AdminTableSingleRow;