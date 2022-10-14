import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const RequestCard = ({ img, message, date, status, adminMessage, _id, setData }) => {
    const [deleteLoading, setDeleteLoading] = useState(false)
    const handleDelete = () => {
        if (window.confirm('are you sure? you want to delete this')) {
            setDeleteLoading(true)
            axios.delete(`http://localhost:5001/requestRoutine?id=${_id}`)
                .then(res => {
                    setDeleteLoading(false)
                    setData(pre => pre.filter(single => single._id !== _id))
                })
                .catch(err => {
                    setDeleteLoading(false)
                    alert('Error while deleting data')
                })
        }

    }
    return (
        <div className='shadow p-4 rounded-xl'>
            <div >
                <img src={img} alt="routineImage" />
            </div>
            <div className='mt-2'>
                <p>{message}</p>
            </div>
            <div className='flex justify-between my-3'>
                <div className='flex items-center gap-2'>
                    <div className='w-[10px] h-[10px] bg-dark-purple rounded-full'></div>
                    {status}
                </div>
                <div>
                    {
                        new Date(date).toLocaleDateString()
                    }
                </div>
            </div>
            {
                adminMessage.length ? <div className='mt-2 text-red-700'>
                    {adminMessage} dfd
                </div> : <></>
            }
            {
                status === 'pending' ? <div>
                    {
                        deleteLoading ? <CircularProgress></CircularProgress> : <Button onClick={handleDelete} variant='contained' >Delete</Button>
                    }
                </div> : <div>

                </div>
            }
        </div>
    );
};

export default RequestCard;