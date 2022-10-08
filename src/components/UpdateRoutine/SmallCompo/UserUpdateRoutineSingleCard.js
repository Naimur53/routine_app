
import { Box, Button, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, Modal, Select, TextField, Tooltip } from '@mui/material';
import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import DeleteIcon from '@mui/icons-material/Delete';
import { LocalizationProvider } from '@mui/x-date-pickers';
import MuiDateTimePicker from '../../CreateRoutine/Class/MuiDateTimePicker';
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    px: 4,
    pb: 4,
    pt: 2
};

const UserUpdateRoutineSingleCard = ({ children, classes, index, setData }) => {

    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        trigger,
        formState: { errors },
    } = useForm();
    // handle Day input
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const names = [
        "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
    ];
    const onSubmit = (data) => {
        setData(before => {
            const lastClasses = [...before.classes,]
            lastClasses[index] = data
            return {
                ...before,
                classes: lastClasses,
            };
        })
        setOpen(false)

    }
    const handleDelete = () => {
        setData(before => {
            const lastClasses = before.classes.filter((single, k) => k !== index)
            return {
                ...before,
                classes: lastClasses,
            };
        })
    }
    return (

        <div className='relative'>
            {children}
            <div className='absolute inset-0 flex justify-center items-center md:opacity-0 hover:opacity-100  bg-black/10 rounded-md transition-all'>
                <Tooltip title='Edit this class'>
                    <IconButton onClick={() => setOpen(true)}>
                        <EditIcon sx={{ color: '#5946ad' }}></EditIcon>
                    </IconButton>
                </Tooltip>
                <Tooltip title='Delete this class'>
                    <IconButton onClick={() => handleDelete()}>
                        <DeleteIcon sx={{ color: '#5946ad' }}></DeleteIcon>
                    </IconButton>
                </Tooltip>

            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-titled"
                aria-describedby="modal-modal-descriptidon"
            >
                <div>


                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="hidden">
                            <button className='' id={'submit' + index}>submit</button>
                        </div>

                        {
                            classes[index]?.subjectName ? <Box sx={style} className='w-full md:w-[60vw]'>
                                <div className='flex justify-end'>
                                    <IconButton onClick={() => setOpen(false)} sx={{ backgroundColor: '#80808021' }} color='primary'>
                                        <CloseIcon ></CloseIcon>
                                    </IconButton>
                                </div>
                                <Grid container spacing={2}>
                                    <Grid item md={6} xs={12}>
                                        <TextField
                                            {...register("subjectName", {
                                                required: true,
                                            })}
                                            defaultValue={classes[index]?.subjectName}
                                            id="standard-search"
                                            label="Subject Name"
                                            type="name"
                                            variant="standard"
                                            sx={{ width: "100%" }}
                                            color="primary"
                                        />
                                        <div>
                                            <span className="text-red-700">
                                                {errors.subjectName?.type === "required" &&
                                                    "*subjectName name is required"}{" "}
                                            </span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            {...register("subjectCode", { required: true })}
                                            defaultValue={classes[index]?.subjectCode}
                                            label="Subject Code"
                                            type="text"
                                            variant="standard"
                                            color="primary"
                                            sx={{ width: "100%" }}
                                        />

                                        <div>
                                            <span className="text-red-700">
                                                {errors.subjectCode?.type === "required" &&
                                                    "*subjectCode name is required"}{" "}
                                            </span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            {...register("teacherName", { required: true })}
                                            defaultValue={classes[index]?.teacherName}
                                            label="Teacher Name"
                                            type="name"
                                            variant="standard"
                                            color="primary"
                                            sx={{ width: "100%" }}
                                        />

                                        <div>
                                            <span className="text-red-700">
                                                {errors.teacherName && <p>*Teacher name is required</p>}{" "}
                                            </span>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            {...register("roomNumber", { required: true })}
                                            defaultValue={classes[index]?.roomNumber}
                                            label="Room Number"
                                            type="name"
                                            variant="standard"
                                            color="primary"
                                            sx={{ width: "100%" }}
                                        />

                                        <div>
                                            <span className="text-red-700">
                                                {errors.roomNumber && <p>*Room Number is required</p>}{" "}
                                            </span>
                                        </div>
                                    </Grid>

                                    <Grid item xs={12} md={6}>
                                        <FormControl variant="standard" sx={{ width: '100%' }}>
                                            <InputLabel id="demo-simple-select-filled-label">Select day</InputLabel>
                                            <Select
                                                labelId="demo-multiple-name-labels"
                                                id="demo-multiple-name"
                                                sx={{ p: 0 }}
                                                label="Select Day"
                                                color="primary"
                                                {...register("day", {
                                                    required: true,
                                                })}
                                                defaultChecked={classes[index].day}
                                                value={watch('day') ? watch('day') : classes[index]?.day}
                                                MenuProps={MenuProps}
                                            >
                                                {names.map((name) => (
                                                    <MenuItem
                                                        key={name}
                                                        value={name}
                                                    >
                                                        {name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <div>
                                            <span className="text-red-700">
                                                {errors.day && <p>*day is required</p>}{" "}
                                            </span>
                                        </div>

                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <MuiDateTimePicker defaultValue={classes[index]?.startTime} register={register} errors={errors} label="Start Time" watch={watch} setValue={setValue} name='startTime' />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <MuiDateTimePicker defaultValue={classes[index]?.endTime} label='End Time' register={register} errors={errors} watch={watch} setValue={setValue} name='endTime' />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <div className="flex gap-4 md:flex-row flex-col">

                                            <label htmlFor={'submit' + index}>
                                                <Button type="submit" variant="outlined" >Update Class</Button>

                                            </label>
                                        </div>
                                    </Grid>

                                </Grid>
                            </Box> : <CircularProgress></CircularProgress>
                        }
                    </form>
                </div>
            </Modal>
        </div>

    );
};

export default UserUpdateRoutineSingleCard;