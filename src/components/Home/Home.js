import {
  Box,
  Button,
  CircularProgress,
  Container,
  Drawer,
  Grid,
  IconButton,
  Modal,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeClassShow from "./smallCompo/HomeClassShow/HomeClassShow";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import NoteIcon from "@mui/icons-material/Note";
import HomeNoteShow from "../MyNote/HomeNoteShow";
import {
  getAllRoutinesFromLocalDb,
  getRoutineDataFromLocalDbWithIndex,
} from "../../utilities/dataValidation";
import {
  findSelectIndex,
  getDataFromLocalDb,
  saveSelectIndex,
} from "../../utilities/localDb";
import RoutineNotFound from "../ShareComponents/RoutineNotFound/RoutineNotFound";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import textConversion from "../../utilities/textConversion";
import CustomTooltip from "../ShareComponents/CustomTooltip/CustomTooltip";
import { useDispatch, useSelector } from "react-redux";
import {
  accessAllRoutineInLocal,
  allData,
  setSelectIndex,
} from "../../ManageState/DataSlice/dataSlice";
import Chat from "./smallCompo/Chat/Chat";
import CommentIcon from "@mui/icons-material/Comment";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Home = () => {
  const [chatOpen, setChatOpen] = React.useState(false);
  const [data, setData] = useState({ classes: [] });
  // const [allRoutineData, setAllRoutineData] = useState([]);
  const dispatch = useDispatch();
  const { selectIndex, loading } = useSelector(allData);
  const [allRoutineData, setAllRoutineData] = useState([]);
  const [allRoutineLoading, setAllRoutineLoading] = useState(true);
  // const [selectIndex, setSelectIndex] = React.useState(findSelectIndex());
  const navigate = useNavigate();

  const handleChange = (event) => {
    dispatch(setSelectIndex(event.target.value));
  };

  useEffect(() => {
    const fetchData = async () => {
      setAllRoutineLoading(true);
      try {
        const routineData = await getAllRoutinesFromLocalDb();
        setAllRoutineData(routineData);
        if (routineData.length === 0) {
          toast.info(`You don't have any routine saved!`);
          navigate("/searchRoutine");
        }

        setAllRoutineLoading(false);
        // Additional actions with the routine data
      } catch (error) {
        setAllRoutineLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (allRoutineData[selectIndex]?.institute) {
      setData(() => allRoutineData[selectIndex]);
    } else {
      if (allRoutineData.length) {
        dispatch(setSelectIndex(0));
      } else {
        setData({});
      }
    }
  }, [selectIndex, dispatch, allRoutineData]);

  if (loading || allRoutineLoading) {
    return (
      <>
        <div className="custom_height flex justify-center items-center">
          {/* <CircularProgress></CircularProgress> */}
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        {data?.classes?.length ? (
          <Grid container spacing={1}>
            <Grid item xs={12} md={7}>
              <div>
                <div className="flex justify-between items-center pt-3  md:pt-0 pb-2 md:pb-3 mb-3">
                  <div className="min-w-[150px] w-full select-routine pt-2 ">
                    {/* <GrowEffect duration={mainDuration}> */}
                    <div>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Selected Routine
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={selectIndex}
                          defaultValue={selectIndex}
                          label="Selected Routine "
                          size="small"
                          sx={{
                            fontSize: { md: "16px", xs: "13px" },
                            marginLeft: "13px",
                            border: "1px solid transparent",
                            boxShadow: "none",
                          }}
                          onChange={handleChange}
                        >
                          {allRoutineData.map(
                            ({ department, semester, section, shift }, i) => (
                              <MenuItem
                                sx={{ fontSize: { md: "16px", sm: "13px" } }}
                                value={i}
                                key={i}
                              >
                                {shift === "None"
                                  ? `${textConversion(
                                      department,
                                      20
                                    )} sem-${semester}  sec-${section} `
                                  : section === "None"
                                  ? `${department}  sem-${semester} shift-${shift}`
                                  : `${department}  sem-${semester}  sec-${section} shift-${shift}`}
                                {}
                              </MenuItem>
                            )
                          )}
                        </Select>
                      </FormControl>
                    </div>
                    {/* </GrowEffect> */}
                  </div>

                  <div className="flex items-center text-right">
                    <div className="block md:hidden">
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
                    <div className="block md:hidden">
                      <IconButton
                        color="primary"
                        onClick={() => setChatOpen(true)}
                      >
                        <CommentIcon></CommentIcon>
                      </IconButton>
                    </div>
                  </div>
                </div>

                <HomeClassShow data={data}></HomeClassShow>
                {/* </GrowEffect> */}
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="custom_height hidden md:block">
                <Chat allRoutineData={allRoutineData}></Chat>
              </div>
            </Grid>
          </Grid>
        ) : (
          <RoutineNotFound></RoutineNotFound>
        )}
        <Drawer
          anchor={"bottom"}
          open={chatOpen}
          onClose={() => setChatOpen(false)}
        >
          <div className="flex flex-col  justify-between">
            <div className="h-[60px] bg-dark-purple text-white flex justify-between items-center px-2 shadow">
              <div>
                <h2 className="text-xl font-bold">
                  {textConversion(data.department, 20)}
                </h2>
                <div>
                  <p className="text-sm">
                    <span className="font-bold">Semester</span>:{data.semester},
                    <span className="font-bold"> Section</span>: {data.section},
                    <span className="font-bold"> Shift</span>: {data.shift}
                  </p>
                </div>
              </div>
              <div>
                <IconButton color="white" onClick={() => setChatOpen(false)}>
                  <CloseIcon></CloseIcon>
                </IconButton>
              </div>
            </div>
            <div className="mobile_chat_wrap">
              <Chat allRoutineData={allRoutineData}></Chat>
            </div>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Home;
