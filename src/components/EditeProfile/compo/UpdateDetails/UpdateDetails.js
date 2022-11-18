

import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SchoolIcon from "@mui/icons-material/School";

import EventSeatIcon from "@mui/icons-material/EventSeat";
import RememberMeIcon from "@mui/icons-material/RememberMe";
import SubjectIcon from "@mui/icons-material/Subject";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import PhoneIcon from "@mui/icons-material/Phone";
import { useDispatch, useSelector } from "react-redux";
import textConversion from "../../../../utilities/textConversion";
import { allData, setUser } from "../../../../ManageState/DataSlice/dataSlice";
import Info from "../../../CreateRoutine/info/Info";
import { useEffect } from "react";
import { useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DetailsInfo from "../DetailsInfo/DetailsInfo";

const UpdateDetails = ({ edit, setEdit, updatable, setUpdatable }) => {
    const { user } = useSelector(allData)
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        trigger,
        formState: { errors },
    } = useForm();

    const keys = useMemo(() => {

        const inputKeys = [
            "institute",
            "department",
            "semester",
            "shift",
            "section"
        ]
        return inputKeys
    }, [])

    const institute = watch('institute')
    const department = watch('department')
    const semester = watch('semester')
    const shift = watch('shift')
    const section = watch('section')

    useEffect(() => {
        keys.forEach(single => {
            setValue(single, user[single] ?? "")
        })
    }, [user, keys, setValue])

    const onSubmit = (data) => {
        console.log(data)
    }
    //  handle input change 
    useEffect(() => {
        const result = keys.map(single => watch(single) !== (user[single] || "")).includes(true)

        if (result) {
            setUpdatable(pre => {
                return {
                    ...pre, disabled: false,
                }
            })
        }
        else {
            setUpdatable(pre => {
                return {
                    ...pre, disabled: true,
                }
            })
        }
    }, [institute, department, semester, shift, section, keys, user, watch, setUpdatable])

    // handle update button click

    useEffect(() => {
        if (updatable.click) {
            trigger().then(res => {
                console.log({ res })
                if (res) {
                    const mainData = watch()
                    console.log(mainData, 'going')
                    axios.put('https://shielded-dusk-65695.herokuapp.com/user', { email: user.email, ...mainData })
                        .then(res => {
                            if (res.data.modifiedCount) {
                                setUpdatable({ click: false, disabled: true })
                                setEdit({ loading: false, status: false })
                                dispatch(setUser(mainData))
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
                }
            })
        }
    }, [updatable])

    return (
        <div className="p-4">
            {
                edit.status ? <form onSubmit={handleSubmit(onSubmit)}>
                    <Info setValue={setValue} disabled={edit.loading} mainData={watch() || {}} watch={watch} register={register} errors={errors}></Info>
                </form> : <div>
                    <DetailsInfo data={user}></DetailsInfo>
                </div>
            }
        </div>
    );
};

export default UpdateDetails;