import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import HomeIcon from "@mui/icons-material/Home";
import AddTaskIcon from "@mui/icons-material/AddTask";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import SendIcon from "@mui/icons-material/Send";
import { allData } from "../../../ManageState/DataSlice/dataSlice";
import { useSelector } from "react-redux";
import useFirebase from "../../../Hook/useFirebase";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import AddchartIcon from "@mui/icons-material/Addchart";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Avatar, Button, IconButton, Paper } from "@mui/material";
import textConversion from "../../../utilities/textConversion";
import LogoutIcon from "@mui/icons-material/Logout";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import EditIcon from "@mui/icons-material/Edit";
import { motion } from "framer-motion";
const MainLayoutTab = ({ handleCloseNavMenu }) => {
  const { user } = useSelector(allData);
  const { logOut } = useFirebase({ observer: false });
  const location = useLocation();
  const horizontalNav = [
    { name: "Home", path: "/", Icon: HomeIcon },
    { name: "Search", path: "/searchRoutine", Icon: SearchIcon },
    { name: "Saved", path: "/saveRoutine", Icon: AddTaskIcon },
  ]
  const commonNav = [
    // { name: "My Profile", path: "/myProfile", Icon: AccountCircleIcon },
    // { name: "Notes", path: "/myNotes", Icon: TextSnippetIcon },
    {
      name: "Create Routine",
      path: "/createRoutine",
      Icon: DriveFileRenameOutlineIcon,
    },
    {
      name: "Make Request",
      path: "/requestForRoutine",
      Icon: SendIcon,
    },
    { name: "My Created Routine", path: "/myRoutine", Icon: FolderSharedIcon },
  ]
  const dashboardNav = [
    { name: "overview", path: "/dashboard", Icon: EqualizerIcon },
    { name: "All Request Routine", path: "/dashboard/allRequestRoutines", Icon: AddchartIcon },
    { name: "Manage Routine", path: "/dashboard/manageRoutine", Icon: ManageSearchIcon },
    { name: "Manage Admin", path: "/dashboard/manageAdmin", Icon: AdminPanelSettingsIcon },
  ]
  const pages = location?.pathname?.includes('/dashboard') ? window.innerWidth > 900 ? [
    { name: "Home", path: "/", Icon: HomeIcon },
    ...dashboardNav

  ] : [
    ...dashboardNav
  ] : user.isAdmin ? window.innerWidth > 900 ? [
    { name: "Dashboard", path: "/dashboard", Icon: LeaderboardIcon },
    ...horizontalNav,
    ...commonNav,
  ] : [
    { name: "Dashboard", path: "/dashboard", Icon: LeaderboardIcon },
    ...commonNav
  ] : window.innerWidth > 900 ? [...horizontalNav, ...commonNav] : commonNav
  const menuContainer = {
    animate: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    initial: {
      opacity: 0,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };
  const menuItem = {
    animate: {
      // x: 0,
      opacity: 1,
      // transition: { type: 'easeOut' }
    },
    initial: {
      opacity: 0,
      // x: -250,
    },
  };
  return (
    <div className="h-full md:h-full border-r border-gray-100 ">
      <div className="w-[85vw]  md:w-full h-full md:h-auto">
        <div className="">
          {user?.email ? (
            <div
              style={{
                backgroundImage:
                  "url(https://img.pikbest.com/backgrounds/20200615/ui-dot-line-purple-vector-background_2847590.jpg!c1024wm0)",
              }}
              className=" pb-4 bg-cover bg-center gap-2 fle x-col text- white pt-10 text-white shadow md:hidden px-3 items-center  "
            >
              <div
                to="/myProfile"
                className="p-1 mb-2 bg-transparent backdrop-blur-md rounded-full"
              >
                <Avatar
                  component={NavLink}
                  onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }}
                  to="/myProfile"
                  alt={user.displayName}
                  src={user.photoURL}
                  sx={{ width: 65, height: 65 }}
                />
              </div>
              <div className="flex justify-between items-center w-full backdrop-blur-md rounded-xl ">
                <div className="bg-black/[.1] w-full  py-2 rounded-xl text-left pl-3 pr-1">
                  <span className="block   capitalize font-medium ">
                    {textConversion(user.displayName, 100)}
                  </span>
                  <span className="text-gray-300 block text-sm">
                    {user.email}
                  </span>
                </div>
                <IconButton
                  component={NavLink}
                  to="/editProfile"
                  onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }}
                  color="white"
                  variant="outline"
                >
                  <EditIcon></EditIcon>
                </IconButton>
              </div>
              <div className="mt-0 w-full gap-2 flex justify-center">
                {/* <NavLink onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }} to='/myProfile'><Button size="small" variant="contained" className="bg-dark-purple text-white py-2 px-3 rounded-full" >View Profile</Button></NavLink> */}
                {/* <Button variant="outlined" onClick={() => {
                  logOut();
                  handleCloseNavMenu();

                }} className="bg-dark-purple text-white py-2 px-3 rounded-full" >Profile</Button>
                <Button variant="contained" onClick={() => {
                  logOut();
                  handleCloseNavMenu();

                }} className="bg-dark-purple text-white py-2 px-3 rounded-full" >Logout</Button> */}
              </div>
            </div>
          ) : (
            <div
              style={{
                backgroundImage:
                  "url(https://img.pikbest.com/backgrounds/20200615/ui-dot-line-purple-vector-background_2847590.jpg!c1024wm0)",
              }}
              className=" md:w-full pr-2 pl-5 bg-center bg-cover py-3 flex items-center  md:hidden  flex-col gap-2"
            >
              <div className="flex flex-col pb-0 items-center w-full">
                <img className="w-[100px]" src="./images/cryduck.gif" alt="" />
                <h6 className="mt-2 mb-1 text-white text-sm">
                  You are not logged in
                </h6>
              </div>
              <div className="flex  justify-between gap-2 items-start">
                <Button
                  sx={{ backdropFilter: "blur(5px)" }}
                  color="white"
                  onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }}
                  component={NavLink}
                  to="/login"
                  variant="outlined"
                  className="bg-dark-purple text-white py-2 px-3 rounded-full "
                >
                  Login
                </Button>
                <NavLink
                  onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }}
                  to="/signUp"
                >
                  <Button
                    color="white"
                    variant="contained"
                    className="bg-dark-purple text-white py-2 px-3 rounded-full"
                  >
                    Register
                  </Button>
                </NavLink>
              </div>
            </div>
          )}
        </div>

        {/* mobile */}
        <motion.div animate="animate"
          initial="initial"
          variants={menuContainer} className="pt-5 flex md:hidden justify-between gap-2 pr-5 pl-3 pb-0">
          {horizontalNav.slice(0, 3).map(({ name, path, Icon }, i) => (
            <motion.div variants={menuItem} className="w-full">
              <NavLink
                key={i}
                onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }}
                to={path}
                className={({ isActive }) =>
                  location?.pathname === path
                    ? "dashboard_link_horizontal active_dashboard_link_horizontal"
                    : "dashboard_link_horizontal"
                }
              >
                <div className="flex flex-col items-center gap-1">
                  <Icon></Icon>
                  <h6>{name}</h6>
                </div>
              </NavLink>
            </motion.div>

          ))}
        </motion.div>
        <hr className="md:hidden mt-3" />
        {/* large device */}
        <motion.div
          animate="animate"
          initial="initial"
          variants={menuContainer}
          className="flex md:mt-5 flex-col   md:w-full pr-5 pl-3  pb-3 w-full"
        >
          {pages.map(({ name, path, Icon }, i) => (
            <motion.div variants={menuItem} className="">
              <NavLink
                key={i}
                onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }}
                to={path}
                className={({ isActive }) =>
                  location?.pathname === path
                    ? "dashboard_link active_dashboard_link"
                    : "dashboard_link"
                }
              >
                <div className=" flex gap-3">
                  <Icon></Icon>
                  <h6>{name}</h6>
                </div>
              </NavLink>
            </motion.div>
          ))}
          {user.email && (
            <div
              onClick={() => {
                logOut();
                handleCloseNavMenu();
              }}
              className="dashboard_link "
            >
              <div className=" flex gap-3">
                <LogoutIcon></LogoutIcon>
                <h6>Logout</h6>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default MainLayoutTab;
