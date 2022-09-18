import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import HomeIcon from '@mui/icons-material/Home';
import AddTaskIcon from '@mui/icons-material/AddTask';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SearchIcon from '@mui/icons-material/Search';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
const DashboardTab = ({ handleCloseNavMenu }) => {
    const pages = [
        { name: "Home", path: '/', Icon: HomeIcon },
        { name: "Saved Routine", path: '/saveRoutine', Icon: AddTaskIcon },
        { name: "My Notes", path: '/myNotes', Icon: TextSnippetIcon },
        { name: "Search Routine", path: '/searchRoutine', Icon: SearchIcon },
        { name: "Create Routine", path: '/createRoutine', Icon: DriveFileRenameOutlineIcon },
    ];
    return (
        <div>
            <div className='w-[50vw]  md:w-full px-2 md:px-8 py-3'>

                <div className='flex flex-col w-full'>
                    {pages.map(({ name, path, Icon }, i) => (
                        <NavLink
                            key={i}
                            onClick={handleCloseNavMenu ? handleCloseNavMenu : () => { }}
                            to={path}
                            className={({ isActive }) => (isActive ? 'dashboard_link active_dashboard_link' : 'dashboard_link')}
                        >
                            <div className=' flex gap-3'>
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

export default DashboardTab;