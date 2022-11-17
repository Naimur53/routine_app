import { Box, Button, CircularProgress, Container, Drawer, Grid, IconButton, Modal, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DashboardTab from "../ShareComponents/MainLayoutTab/MainLayoutTab";
import MainLayout from "../ShareComponents/MainLayout/MainLayout";
import ModalProvider from "../ShareComponents/Modal/ModalProvider";
import HomeClassShow from "./smallCompo/HomeClassShow/HomeClassShow";
import CloseIcon from '@mui/icons-material/Close';
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
import { useDispatch, useSelector } from "react-redux";
import { accessAllRoutineInLocal, allData, setSelectIndex } from "../../ManageState/DataSlice/dataSlice";
import Chat from "./smallCompo/Chat/Chat";
import CommentIcon from '@mui/icons-material/Comment';
const Home = () => {
  const [list, setList] = useState(getDataFromLocalDb("lists"));
  const [open, setOpen] = React.useState(false);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [data, setData] = useState({ classes: [] })
  // const [allRoutineData, setAllRoutineData] = useState([]);
  const dispatch = useDispatch()
  const { allRoutineData, selectIndex, loading } = useSelector(allData)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [selectIndex, setSelectIndex] = React.useState(findSelectIndex());

  const handleChange = (event) => {
    dispatch(setSelectIndex(event.target.value))

  };
  useEffect(() => {
    dispatch(accessAllRoutineInLocal())

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
        dispatch(setSelectIndex(0))
      }
      else {
        setData({})
      }
    }
  }, [selectIndex, dispatch, allRoutineData])
  if (loading) {
    return <MainLayout>
      <div className="custom_height flex justify-center items-center">
        <CircularProgress></CircularProgress>
      </div>
    </MainLayout>

  }
  return (
    <MainLayout>
      {
        data?.classes?.length ?
          <Grid container spacing={1}>
            <Grid item xs={12} md={7}>
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="w-[230px] md:w-[300px]  ">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select Routine </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectIndex}
                        defaultValue={selectIndex}
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
                  <div className="flex items-center">
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
                    <IconButton color="primary" onClick={() => setChatOpen(true)}><CommentIcon></CommentIcon></IconButton>
                  </div>
                </div>
                <HomeClassShow data={data}></HomeClassShow>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="custom_height hidden md:block">
                <Chat></Chat>
                {/* <Grid container>
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
            </Grid> */}
              </div>
            </Grid>
          </Grid>
          :
          <RoutineNotFound></RoutineNotFound>
      }
      <Drawer
        anchor={'bottom'}
        open={chatOpen}
        onClose={() => setChatOpen(false)}
      >
        <div className="flex flex-col  justify-between">
          <div className="h-[60px] bg-dark-purple text-white flex justify-between items-center px-2 shadow">
            <div>
              <h2 className="text-xl font-bold">{textConversion(data.department, 20)}</h2>
              <div>
                <p className="text-sm">
                  <span className="font-bold">Semester</span>:{data.semester},
                  <span className="font-bold"> Section</span>: {data.section},
                  <span className="font-bold"> Shift</span>: {data.shift}
                </p>
              </div>
            </div>
            <div>
              <IconButton color='white' onClick={() => setChatOpen(false)}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </div>
          </div>
          <div className="h-[calc(100vh-60px)]">
            <Chat></Chat>
          </div>
        </div>
      </Drawer>
    </MainLayout>
  );
};

export default Home;
