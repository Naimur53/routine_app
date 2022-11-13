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
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AddchartIcon from '@mui/icons-material/Addchart';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Avatar, Button, Paper } from "@mui/material";
const MainLayoutTab = ({ handleCloseNavMenu, }) => {
  const { user } = useSelector(allData)
  const { logOut } = useFirebase({ observer: false })
  const location = useLocation()

  const commonNav = [
    { name: "Home", path: "/", Icon: HomeIcon },
    { name: "Search Routine", path: "/searchRoutine", Icon: SearchIcon },
    { name: "My Created Routine", path: "/myRoutine", Icon: FolderSharedIcon },
    { name: "Saved Routine", path: "/saveRoutine", Icon: AddTaskIcon },
    // { name: "My Notes", path: "/myNotes", Icon: TextSnippetIcon },
    {
      name: "Request for routine",
      path: "/requestForRoutine",
      Icon: SendIcon,
    },
    {
      name: "Create New Routine",
      path: "/createRoutine",
      Icon: DriveFileRenameOutlineIcon,
    },
    { name: "My Profile", path: "/myProfile", Icon: AccountCircleIcon },
  ]
  const pages = location?.pathname?.includes('/dashboard') ? [
    { name: "Home", path: "/", Icon: HomeIcon },
    { name: "overview", path: "/dashboard", Icon: EqualizerIcon },
    { name: "All Request Routine", path: "/dashboard/allRequestRoutines", Icon: AddchartIcon },
    { name: "Manage Routine", path: "/dashboard/manageRoutine", Icon: ManageSearchIcon },
    { name: "Manage Admin", path: "/dashboard/manageAdmin", Icon: AdminPanelSettingsIcon },

  ] : user.isAdmin ? [
    { name: "Dashboard", path: "/dashboard", Icon: AccountCircleIcon },
    ...commonNav
  ] : commonNav
  return (
    <div>
      <div className="w-[240px]  md:w-full pr-2 pl-5  py-3">
        {
          user?.email ? <div className="flex  md:hidden px-3 flex-col items-center  " >
            <Avatar
              alt={user.displayName}
              src={user.photoURL}
              component={Paper}
              elevation={3}
              sx={{ width: 100, height: 100 }}
            />
            <span className="capitalize pt-2 font-medium text-lg text-center ">Sheikh {user.displayName}</span>
            <span className="">{user.email}</span>
            <div className="mt-5 w-full flex justify-center">
              {/* <NavLink onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }} to='/myProfile'><Button size="small" variant="contained" className="bg-dark-purple text-white py-2 px-3 rounded-full" >View Profile</Button></NavLink> */}
              <Button variant="contained" onClick={() => {
                logOut();
                handleCloseNavMenu();

              }} className="bg-dark-purple text-white py-2 px-3 rounded-full" >Logout</Button>
            </div>

          </div> : <div className="flex items-start md:hidden  flex-col gap-2">
            <div className="flex flex-col pb-3 items-center w-full">

              <img className="w-2/3" src="./images/cryduck.gif" alt="" />
              <h6 className="mt-2">You are not logged in</h6>
            </div>
            <Button component={NavLink} to='/login' variant="outlined" className="bg-dark-purple text-white py-2 px-3 rounded-full " >Login</Button>
            <NavLink onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }} to='/signUp'><Button variant="contained" className="bg-dark-purple text-white py-2 px-3 rounded-full" >Create Account</Button></NavLink>
          </div>
        }
        <div className="flex mt-5 flex-col w-full">
          {pages.map(({ name, path, Icon }, i) => (
            <NavLink
              key={i}
              onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }}
              to={path}
              className={({ isActive }) =>
                location?.pathname === path ? "dashboard_link active_dashboard_link"
                  : "dashboard_link"
              }
            >
              <div className=" flex gap-3">
                <Icon></Icon>
                <h6> {name}</h6>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainLayoutTab;
