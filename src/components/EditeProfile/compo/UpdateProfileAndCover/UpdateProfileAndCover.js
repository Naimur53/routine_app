import { Avatar, Button, CircularProgress, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allData, setUser } from '../../../../ManageState/DataSlice/dataSlice';
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import { useForm } from 'react-hook-form';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Label } from '@mui/icons-material';
import { useEffect } from 'react';
const UpdateProfileAndCover = ({ edit, setEdit, updatable, setUpdatable }) => {
    const { user } = useSelector(allData)
    const [profileImgLoading, setProfileImgLoading] = useState(false)
    const [coverLoading, setCoverLoading] = useState(false);
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        trigger,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

    };
    const displayName = watch('displayName') || user.displayName
    const bio = watch('bio') || user.bio

    const profileUpdate = e => {
        const data = new FormData()
        data.append('file', e.target.files[0])

        if (e.target?.files?.length) {
            setProfileImgLoading(true)
            axios.post(`https://routineappserver-production-5617.up.railway.app/uploadImage`, data)
                .then(res => {

                    setProfileImgLoading(false)
                    setValue('photoURL', res.data.url)
                    if (watch('displayName')) {
                        setUpdatable(pre => {
                            return { ...pre, disabled: false }
                        })
                    }
                })
                .catch(err => {
                    setProfileImgLoading(false)
                    setValue('photoURL', user.photoURL);
                    toast.error('Something wrong when getting image')
                })
        }
    }
    const coverUpdate = e => {
        const data = new FormData()
        data.append('file', e.target.files[0])

        if (e.target?.files?.length) {
            setCoverLoading(true)
            axios.post(`https://routineappserver-production-5617.up.railway.app/uploadImage`, data)
                .then(res => {

                    setCoverLoading(false)
                    setValue('thumbnail', res.data.url)
                    if (watch('displayName')) {
                        setUpdatable(pre => {
                            return { ...pre, disabled: false }
                        })
                    }
                })
                .catch(err => {
                    setCoverLoading(false)
                    setValue('thumbnail', user.thumbnail);
                    toast.error('Something wrong when getting image')
                })
        }

    }
    const thumbnail = edit.status ? watch('thumbnail') || user.thumbnail : user.thumbnail

    // check and validate if update btn click
    useEffect(() => {
        if (updatable.click) {
            trigger().then(res => {
                if (res) {

                    const data = {
                        displayName: watch("displayName"),
                        bio: watch("bio"),
                        photoURL: watch("photoURL") || user.photoURL,
                        thumbnail: watch("thumbnail") || user.thumbnail,
                        email: user.email,
                    }
                    axios.put('https://routineappserver-production-5617.up.railway.app/user', {
                        ...data
                    })
                        .then(res => {
                            if (res.data.modifiedCount) {

                                setUpdatable({ click: false, disabled: true })
                                setEdit({ loading: false, status: false })
                                dispatch(setUser(data))
                            } else {
                                toast.error('sorry info cannot be modified try again later')
                                setEdit({ loading: false, status: true })
                                setUpdatable({ click: false, disabled: false })
                            }
                        })


                } else {
                    setEdit(pre => {
                        return { ...pre, loading: false }
                    })
                    setUpdatable(pre => {
                        return { click: false, disabled: true }
                    })
                }
            })
        }
    }, [updatable, trigger, setEdit, setUpdatable])

    useEffect(() => {
        if (displayName !== user.displayName || bio !== user.bio) {
            setUpdatable(pre => {
                return { ...pre, disabled: false }
            })

        } else {
            setUpdatable(pre => {
                return { ...pre, disabled: true }
            })
        }
    }, [bio, displayName, setUpdatable, user])
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex-auto lg:w-full">
                <div className="h-32 md:h-[250px] overflow-hidden rounded relative bg-cover bg-center bg-on-repeat" style={{ backgroundImage: `url("${thumbnail}")`, }}>
                    {
                        edit.status && <div className="absolute top-2 right-2 z-30">
                            <input
                                onChange={coverUpdate}
                                className='hidden'
                                accept="image/*"
                                type="file"
                                id='cover'
                                disabled={edit.loading}

                            />
                            {
                                coverLoading ? <CircularProgress></CircularProgress> :

                                    <label disabled={edit.loading} htmlFor="cover">
                                        <Button variant="contained" sx={{ pointerEvents: 'none', background: 'white', color: 'black', display: 'block' }} > Choose Cover photo </Button>
                                    </label>
                            }

                        </div>
                    }
                </div>
                <div className="flex justify-center px-5  -mt-16">


                    <div className="relative p-2 bg-gray-200 rounded-full">
                        {/* <img
                            className="h-32 relative z-10 md:h-[150px] w-32 md:w-[150px] bg-gray-200 p-2 rounded-full  "
                            src={
                               }
                            alt="user"
                        /> */}
                        <Avatar
                            alt={user.displayName}
                            src={edit.status ? watch('photoURL') || user.photoURL : user.photoURL}
                            sx={{ width: 150, height: 150 }}
                        />
                        {
                            edit.status && <div className="absolute bottom-2 right-0 z-20">
                                <input
                                    onChange={profileUpdate}
                                    className='hidden'
                                    accept="image/*"
                                    type="file"
                                    id='profile'
                                    disabled={edit.loading}

                                />
                                {
                                    profileImgLoading ? <CircularProgress></CircularProgress> : <label htmlFor="profile" className='block z-20' disabled={edit.loading}>
                                        <IconButton sx={{ background: '#5946ad', "&:hover": { background: "#887fb8" }, "pointerEvents": 'none' }}>
                                            <AddAPhotoIcon className='text-white'></AddAPhotoIcon>
                                        </IconButton>
                                    </label>
                                }
                            </div>
                        }
                    </div>
                </div>

                <div className="py-5">
                    <div className=" text-center">

                        {
                            edit.status ? <div>
                                <input type="text" autoFocus className="text-gray-800 text-xl font-bold w-full text-center border border-gray-400 py-2 rounded-md"
                                    placeholder='Enter your name' defaultValue={user.displayName} {...register("displayName", { required: true })}
                                />
                            </div> :
                                <h2 className="text-gray-800 text-xl font-bold">
                                    {
                                        user.displayName
                                    }
                                </h2>
                        }

                        <div className="flex justify-center">
                            <MarkEmailReadIcon className="text-gray-400 m-2"></MarkEmailReadIcon>
                            <p className="text-gray-400 text-sm mt-2 ">
                                {user.email}
                            </p>
                        </div>
                        <div className="">
                            {
                                edit.status ? <div>
                                    <textarea
                                        {...register("bio", { required: false })}
                                        className='border border-gray-500 text-center w-full block px-2 py-2 rounded-md' defaultValue={user.bio} placeholder="Enter your bio" rows="5"></textarea>
                                </div> :
                                    <p>{user.bio || "No bio available"}</p>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </form>
    );
};

export default UpdateProfileAndCover;