import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RequestCard = ({ img, message, date, status, adminMessage, _id, setData, routineId }) => {
    const [deleteLoading, setDeleteLoading] = useState(false)
    console.log({ routineId })
    const handleDelete = () => {
        if (window.confirm('are you sure? you want to delete this')) {
            setDeleteLoading(true)
            axios.delete(`https://shielded-dusk-65695.herokuapp.com/requestRoutine?id=${_id}`)
                .then(res => {
                    setDeleteLoading(false)
                    setData(pre => pre.filter(single => single._id !== _id))
                })
                .catch(err => {
                    setDeleteLoading(false)
                    toast.error('Error while deleting routine')
                })
        }
    }
    return (
        <div className='shadow p-4 rounded-xl'>
            <div >
                <img src={img} alt="routineImage" />
            </div>
            <div className='mt-2'>
                <p>Your Message: {message}</p>
            </div>
            <div className='flex justify-between my-3'>
                <div className='flex items-center gap-2 capitalize'>
                    <div className={`w-[10px] h-[10px]  ${status === "pending" ? "bg-dark-purple" : status === "success" ? 'bg-dark-green' : "bg-dark-orange"
                        } rounded-full`}></div>
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
                    Creator Message: {adminMessage}
                </div> : <></>
            }

            {
                status === 'pending' ? <div>
                    {
                        deleteLoading ? <CircularProgress></CircularProgress> : <Button onClick={handleDelete} variant='contained' >Delete</Button>
                    }
                </div> : <div>
                    {
                        routineId && <div className='mt-4'>
                            <Button
                                to={`/checkout/${routineId}`}
                                component={Link}
                                variant='contained'
                            >Checkout</Button>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default RequestCard;