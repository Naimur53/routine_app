import { Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDeleteRequestOfRoutineWithIdMutation } from '../../../ManageState/features/requestRoutine/requestRoutineApi';
import { useSelector } from 'react-redux';
import { allData } from '../../../ManageState/DataSlice/dataSlice';

const RequestCard = ({ img, message, date, status, adminMessage, _id, setData, routineId }) => {
    const [deleteRequest, { isLoading, isError, data, isSuccess, error }] = useDeleteRequestOfRoutineWithIdMutation()
    const { user } = useSelector(allData)
    const handleDelete = () => {
        if (window.confirm('Are you sure? you want to delete this')) {
            deleteRequest({ id: _id, userId: user._id }).then(res => {

            })
        }
    }
    useEffect(() => {
        if (!isLoading && isError) {
            toast.error("Failed to delete")
        }
    }, [isLoading, isError])

    return (
        <div className='shadow p-4 rounded-xl'>
            <div className='flex justify-center'>
                <img className='w-auto max-h-[600px]' src={img} alt="routineImage" />
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
                        isLoading ? <CircularProgress></CircularProgress> : <Button onClick={handleDelete} variant='contained' >Delete</Button>
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