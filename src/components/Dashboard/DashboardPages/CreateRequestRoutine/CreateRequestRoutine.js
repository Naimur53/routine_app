import { CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RequestRoutineActions from './comp/RequestRoutineActions/RequestRoutineActions';

const CreateRequestRoutine = () => {
    const { id } = useParams();
    const [data, setData] = useState({})
    const [getLoading, setGetLoading] = useState(true)
    const [imgSize, setImgSize] = useState(false)

    useEffect(() => {
        setGetLoading(true)
        const url = [
            axios.get(`https://routineappserver-production-5617.up.railway.app/requestRoutine?id=${id}`),
            axios.get(`https://routineappserver-production-5617.up.railway.app/routine?requestId=${id}`)
        ]
        Promise.all(url)
            .then(res => {
                setGetLoading(false)

                setData({ ...res[0].data, requestId: res[1].data._id })

            })
    }, [])
    if (getLoading) {
        return <div className='flex justify-center'>
            <CircularProgress></CircularProgress>
        </div>
    }
    return (
        <div className=''>
            <button onClick={() => setImgSize(!imgSize)} className='text-dark-purple mb-4 px-5 py-2 border rounded border-dark-purple'>Image size {imgSize ? "Large" : 'Normal'}</button>
            <div className='relative'>

                <img className={!imgSize ? "w-auto  " : 'w-full'} src={data.img} alt="routine" />
                <div className='absolute inset-0'
                >

                </div>

            </div>
            <div className=' mt-5 flex justify-center'>

                <div>
                    <div className="mt-3 flex flex-col justify-center ">
                        <img
                            className="rounded-full [w-200px] mr-2 "
                            src={data.creator?.photoURL}
                            alt="creator"
                        />

                        <div className="text-lg text-center">
                            <p >{data.creator.email}</p>
                            <h3 >{data.creator?.displayName}</h3>
                            <div className='text-left mt-3'>
                                <h1>Date: {new Date(data.date)?.toLocaleDateString()}</h1>
                                <p>Message: {data.message || 'No Message'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RequestRoutineActions setData={setData} data={data} id={id}></RequestRoutineActions>
        </div>
    );
};

export default CreateRequestRoutine;