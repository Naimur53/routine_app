import React from 'react';
import { sections, semesters } from '../../../utilities/formInfo';
import { Button, Grid, IconButton, Select, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
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
const SearchInputs = ({ register, errors, watch, reset }) => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={12} md={6}>

                    <div className="flex w-full justify-center">
                        <div className="flex border  border-gray-300 justify-between pr-4 rounded-lg shadow shadow-light-pink items-center w-full ">
                            <input
                                type="text"
                                id="defasult-search"
                                className="block pl-4  rounded-tl-full rounded-bl-full focus:border-0 focus:outline-none bg-transparent   w-full py-3 placeholder:text-medium-purple  text- sm text-black         "
                                placeholder="Institute Name or id"
                                {...register("institute", { required: true })}
                            />

                            <button
                                // onClick={handleSearch}
                                type="button"
                                className="text-dark-purple  font-medium rounded-full text-sm p-1 "
                            >
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-white-500 dark:text-white-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <TextField
                        {...register("department", { required: true })}
                        id="standard-search"
                        label="Department"
                        type="name"
                        sx={{ width: "100%" }}
                        variant="standard"
                        color="primary"
                    />

                    <div>
                        <span className="text-red-700">
                            {errors.department?.type === "required" &&
                                "*department name is required"}{" "}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                    <FormControl variant="standard" sx={{ width: "100%" }}>
                        <InputLabel id="demo-multiple-name-label">Semester</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-named"
                            value={watch("semester") || ""}
                            {...register("semester", { required: true })}
                            MenuProps={MenuProps}
                        >
                            {semesters.map((semester) => (
                                <MenuItem key={semester} value={semester}>
                                    {semester}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <div>
                        <span className="text-red-700">
                            {errors.semester && <p>*Semester name is required</p>}{" "}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={6} md={6} lg={3}>
                    <FormControl variant="standard" sx={{ width: "100%" }}>
                        <InputLabel id="demo-multiple-name-label">section</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-namesx"
                            value={watch("section") || ""}
                            {...register("section", { required: true })}
                            MenuProps={MenuProps}
                        >
                            {sections.map((section) => (
                                <MenuItem key={section} value={section}>
                                    {section}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <div>
                        <span className="text-red-700">
                            {errors.semester && <p>*Semester name is required</p>}{" "}
                        </span>
                    </div>
                </Grid>
                <Grid item xs={12} md={12} lg={3} >
                    <Button
                        sx={{ width: "100%", mt: "10px" }}
                        variant="contained"
                        type="button"
                        onClick={() => reset()}
                    >
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default SearchInputs;