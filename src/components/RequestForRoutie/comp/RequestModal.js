import { Box, Button, CircularProgress, IconButton, Modal } from '@mui/material';
import { PhotoCamera, } from "@mui/icons-material";
import React, { useState } from 'react';
import SendIcon from "@mui/icons-material/Send";
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { allData } from '../../../ManageState/DataSlice/dataSlice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 4,
    p: 4,
};
const RequestModal = ({ open, setOpen, setData }) => {
    const [imgLoading, setImgLoading] = useState(false)
    const [postLoading, setPostLoading] = useState(false)
    const { user } = useSelector(allData)
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm();
    const handleImgUpload = e => {
        const data = new FormData()
        data.append('file', e.target.files[0])

        if (e.target?.files?.length) {
            setImgLoading(true)
            axios.post(`https://shielded-dusk-65695.herokuapp.com/ uploadImage`, data)
                .then(res => {
                    console.log({ res })
                    setImgLoading(false)
                    setValue('img', res.data.url)
                })
                .catch(err => {
                    setImgLoading(false)
                    setValue('img', '');
                    alert('Something wrong when getting image')
                })
        }
    }
    const onSubmit = (data) => {
        console.log(data)
        if (!data?.img?.length) {
            alert('please add image of your routine')
            return
        }
        if (!user._id) {
            alert('user required')
            return
        }
        setPostLoading(true)
        axios.post(`https://shielded-dusk-65695.herokuapp.com/ requestRoutine`, { ...data, creator: user._id })
            .then(res => {
                console.log({ res })
                setPostLoading(false)
                setData(pre => [...pre, res.data])
                reset();
                setOpen(false);
                alert('successfully request send')

            })
            .catch(err => {
                console.log({ err })
            })
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='w-full md:w-[60vw]'>
                    <div className='flex justify-end'>
                        <IconButton onClick={() => setOpen(false)} sx={{ backgroundColor: '#80808021' }} color='primary'>
                            <CloseIcon ></CloseIcon>
                        </IconButton>
                    </div>
                    <div className="px-3  rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-center mb-2 font-medium from-neutral-500 text-xl">
                                Upload Your Routine
                            </h1>
                            {/* register your input into the hook by invoking the "register" function */}
                            {
                                imgLoading ?
                                    <div className='flex justify-center'>
                                        <CircularProgress></CircularProgress>

                                    </div>
                                    : <div className=' flex flex-col items-center justify-center '>
                                        {
                                            watch('img')?.length ? <img className='max-h-[200px]' src={watch('img')} alt="choose img" /> : <></>
                                        }
                                        <div className='mt-3 '>
                                            <Button variant="contained" component="label">
                                                Upload
                                                <PhotoCamera className="ml-2" />
                                                <input
                                                    onChange={handleImgUpload}
                                                    hidden
                                                    accept="image/*"
                                                    multiple

                                                    type="file"

                                                />
                                            </Button>
                                        </div>
                                    </div>
                            }


                            <br />
                            <textarea
                                {...register("message")}
                                className="w-full resize-none rounded-md p-2 border-2 mt-4 mb-5"
                                placeholder="Your Massage"

                                id=""
                                maxLength={200}
                                cols="30"
                                res
                                rows="3"
                            ></textarea>
                            <br />
                            {
                                postLoading ? <CircularProgress></CircularProgress> : <Button disabled={imgLoading} className="mt-5" variant="outlined" type="submit">
                                    Send request <SendIcon className="ml-2"></SendIcon>
                                </Button>
                            }
                        </form>
                    </div>
                </Box>

            </Modal>
        </div>
    );
};

export default RequestModal;