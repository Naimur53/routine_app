import React from 'react';
import ChatBox from '../ChatBox/ChatBox';
import { Button, CircularProgress, IconButton, LinearProgress, selectClasses, Stack } from '@mui/material';
import axios from 'axios'
import { Box } from '@mui/system';
import ImageIcon from '@mui/icons-material/Image';
import SendIcon from '@mui/icons-material/Send';
import { get, useForm } from 'react-hook-form';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, allData, getMessageFromDb } from '../../../../ManageState/DataSlice/dataSlice';
import useSocket from '../../../../Hook/useSocket';
import io from 'socket.io-client'
import { useEffect } from 'react';
const ChatRoom = () => {
    const { socket, sendMessage } = useSocket();
    const { register, reset, watch, setValue, handleSubmit, formState: { errors } } = useForm();
    const [imgLoading, setImgLoading] = useState(false)
    const dispatch = useDispatch()
    const { user, allRoutineData, selectIndex, messages } = useSelector(allData);
    const routineId = allRoutineData[selectIndex]?._id;

    // const socket = io.connect('https://shielded-dusk-65695.herokuapp.com/');
    // socket.on('receive_message', data => {
    //     dispatch(addMessage([data]))
    //     console.log('reviece', data.message)
    // })

    //get message from db
    useEffect(() => {
        const selectedRoutineMessage = messages.filter(single => single.routineId === allRoutineData[selectIndex]._id)

        const exits = selectedRoutineMessage.find(single => single.routineId === allRoutineData[selectIndex]._id)

        if (!exits?._id) {
            dispatch(getMessageFromDb(allRoutineData[selectIndex]._id))
        }
    }, [selectIndex, dispatch, allRoutineData])
    // send 732961
    const onSubmit = async data => {
        sendMessage({ user, routineId, img: watch('img'), message: data.message, date: Date().toString() })

        reset()
    }
    const handleImgUpload = e => {
        const data = new FormData()
        data.append('file', e.target.files[0])

        if (e.target?.files?.length) {
            setImgLoading(true)
            axios.post(`https://shielded-dusk-65695.herokuapp.com/uploadImage`, data)
                .then(res => {
                    console.log({ res })
                    setImgLoading(false)
                    setValue('img', res.data.url)
                })
                .catch(err => {
                    setImgLoading(false)
                    setValue('img', '');
                    toast.error('Something wrong when getting image try again')
                })
        }
    }
    return (
        <div className='h-full flex flex-col bg-light-purple px-4 rounded-md '>
            <ChatBox ></ChatBox>
            <Box sx={{ flexGrow: '0' }} className='rows-span    bg-primary  w-full   flex '>
                <form className='flex items-center  w-full mb-5' onSubmit={handleSubmit(onSubmit)}>
                    <div className='relative'>
                        {/* <label htmlFor="files" className="btn bg-white p-2 rounded-full inline-flex justify-center"><ImageIcon  ></ImageIcon></label> */}
                        <IconButton variant="contained" component="label">

                            <ImageIcon  ></ImageIcon>
                            <input
                                onChange={handleImgUpload}
                                hidden
                                accept="image/*"
                                // multiple

                                type="file"

                            />
                        </IconButton>
                        <input
                            onChange={handleImgUpload}
                            hidden
                            accept="image/*"
                            // multiple

                            type="file"

                        />
                        {
                            imgLoading ? <span className=' absolute top-0 right-0 font-semibold'><CircularProgress size={15}></CircularProgress></span> : watch('img')?.length ? <span className='text-red-800  absolute top-0 right-0 font-semibold'>1</span> : ''
                        }
                    </div>
                    <input type='text' className='flex-1 bg-white rounded-lg pl-2 py-1 mx-2 md:mx-4' placeholder=" write some thing" {...register("message", { required: watch('img')?.length ? false : true })} />
                    <div>
                        {
                            imgLoading ? <button disabled={imgLoading} className='bg-gray-100 text-gray-500 opacity-75  rounded-full p-2 inline-flex justify-center' type='submit'><SendIcon></SendIcon></button> : <button className='bg-white rounded-full p-2 inline-flex justify-center' type='submit'><SendIcon></SendIcon></button>
                        }
                    </div>
                </form>
            </Box>
        </div>
    );
};

export default ChatRoom;