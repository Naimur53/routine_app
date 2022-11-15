import { Box, Button, Container, Grid, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashboardTab from "../ShareComponents/MainLayoutTab/MainLayoutTab";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import ModalProvider from "../ShareComponents/Modal/ModalProvider";
import HomeClassShow from "./smallCompo/HomeClassShow/HomeClassShow";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteIcon from "@mui/icons-material/Note";
import HomeNoteShow from "../MyNote/HomeNoteShow";
import { getAllRoutinesFromLocalDb, getRoutineDataFromLocalDbWithIndex } from "../../utilities/dataValidation";
import { findSelectIndex, getDataFromLocalDb, saveSelectIndex } from "../../utilities/localDb";
import { NavLink } from "react-router-dom";
import RoutineNotFound from "../ShareComponents/RoutineNotFound/RoutineNotFound";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import textConversion from '../../utilities/textConversion'
import { toast } from "react-toastify";
import CustomTooltip from "../ShareComponents/CustomTooltip/CustomTooltip";
const Home = () => {
  const [list, setList] = useState(getDataFromLocalDb("lists"));
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({ classes: [] })
  const [allRoutineData, setAllRoutineData] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [selectIndex, setSelectIndex] = React.useState(findSelectIndex());

  const handleChange = (event) => {
    console.log(event.target.value)
    setSelectIndex(event.target.value);
    saveSelectIndex(event.target.value)
  };
  useEffect(() => {
    getAllRoutinesFromLocalDb()
      .then(res => {
        setAllRoutineData(res)
      })

  }, [])
  // useEffect(() => {
  //   getRoutineDataFromLocalDbWithIndex(selectIndex).then(res => {
  //     setData(res)

  //   })
  //     .catch(err => {

  //     })
  // }, [selectIndex])
  useEffect(() => {
    if (allRoutineData[selectIndex]?.institute) {
      setData(() => allRoutineData[selectIndex])
    } else {
      if (allRoutineData.length) {
        setSelectIndex(0)
        // setData(allRoutineData[0])
      }
      else {
        setData({})
      }
    }
  }, [selectIndex, allRoutineData])
  console.log(data)
  return (
    <MainLayout>
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>

          {
            data?.classes?.length ?
              <div>
                <div className="flex justify-between">
                  <div className="w-[230px] md:w-[300px] mb-3">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Routine </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectIndex}
                        label="Selected Routine "
                        size="small"
                        sx={{ fontSize: { md: '16px', xs: '13px' } }}
                        onChange={handleChange}
                      >
                        {
                          allRoutineData.map(({ department, semester, section, shift }, i) => <MenuItem sx={{ fontSize: { md: '16px', sm: '13px' } }}
                            value={i}>
                            {shift === 'None' ? `${textConversion(department, 20)} sem-${semester}  sec-${section} ` : section === 'None' ? `${department}  sem-${semester} shift-${shift}` : `${department}  sem-${semester}  sec-${section} shift-${shift}`}
                            { }
                          </MenuItem>)
                        }
                      </Select>
                    </FormControl>
                  </div>
                  <div >
                    <CustomTooltip
                      title={`
                        institute: ${data.institute}, 
                        department: ${data.department},
                       ${data.semester} semester,
                        section ${data.section}, ${data.shift} shift
                      
                      `}
                    >
                      <IconButton>
                        <HelpOutlineIcon />
                      </IconButton>
                    </CustomTooltip>
                  </div>
                </div>
                <HomeClassShow data={data}></HomeClassShow>
              </div> :
              <RoutineNotFound></RoutineNotFound>
          }
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="custom_height hidden md:block">
            <Grid container>
              <Grid item md={6}>
                <h6 className="text-s hidden md:block dashboard_link active_dashboard_link p-2 ">
                  <NoteIcon sx={{ mr: 1, ml: 1 }} /> My Notes
                </h6>
              </Grid>
              <Grid item md={5}>
                <div>
                  <Button onClick={handleOpen}>
                    Add Note
                    <NoteAddIcon sx={{ ml: 1 }} />
                  </Button>
                  <ModalProvider open={open} setList={setList} onClose={handleClose} />
                </div>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={12} xs={12}>
                <HomeNoteShow list={list} />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;