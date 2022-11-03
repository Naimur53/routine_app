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
import AddchartIcon from '@mui/icons-material/Addchart';
const MainLayoutTab = ({ handleCloseNavMenu, }) => {
  const { user } = useSelector(allData)
  const { logOut } = useFirebase({ observer: false })
  const location = useLocation()
  const pages = location?.pathname?.includes('/dashboard') ? [
    { name: "Home", path: "/", Icon: HomeIcon },
    { name: "All Request Routine", path: "/dashboard/allRequestRoutines", Icon: AddchartIcon },

  ] : [
    { name: "Dashboard", path: "/dashboard", Icon: AccountCircleIcon },
    { name: "Home", path: "/", Icon: HomeIcon },
    { name: "Saved Routine", path: "/saveRoutine", Icon: AddTaskIcon },
    { name: "My Notes", path: "/myNotes", Icon: TextSnippetIcon },
    { name: "Search Routine", path: "/searchRoutine", Icon: SearchIcon },
    { name: "My Routine", path: "/myRoutine", Icon: FolderSharedIcon },
    {
      name: "Request for routine",
      path: "/requestForRoutine",
      Icon: SendIcon,
    },
    {
      name: "Create Routine",
      path: "/createRoutine",
      Icon: DriveFileRenameOutlineIcon,
    },
    { name: "My Profile", path: "/myProfile", Icon: AccountCircleIcon },
  ];
  return (
    <div>
      <div className="w-[240px]   md:w-full px-2 md:px-8 py-3">
        {
          user?.email ? <div className="flex  md:hidden px-3 flex-col items-center" >
            <img className="w-1/2" src={user.photoURL} alt={user.displayName} />
            <span className="capitalize pt-2 font-medium text-lg text-center ">Sheikh {user.displayName}</span>
            <span className="">{user.email}</span>
            <div className="mt-5 w-full flex justify-between">
              <NavLink onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }} to='/myProfile'><button className="bg-dark-purple text-white py-2 px-3 rounded-full" >View Profile</button></NavLink>
              <button onClick={() => {
                logOut();
                handleCloseNavMenu();

              }} className="bg-dark-purple text-white py-2 px-3 rounded-full" >Logout</button>
            </div>

          </div> : <div className="flex md:hidden  flex-col gap-2">
            <div className="flex flex-col pb-3 items-center w-full">

              <img className="w-2/3" src="./images/cryduck.gif" alt="" />
              <h6 className="mt-2">You are not logged in</h6>
            </div>
            <NavLink onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }} to='/login'><button className="bg-dark-purple text-white py-2 px-3 rounded-full " >Login</button></NavLink>
            <NavLink onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }} to='/signUp'><button className="bg-dark-purple text-white py-2 px-3 rounded-full" >Create Account</button></NavLink>
          </div>
        }
        <div className="flex mt-5 flex-col w-full">
          {pages.map(({ name, path, Icon }, i) => (
            <NavLink
              key={i}
              onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "dashboard_link active_dashboard_link"
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
