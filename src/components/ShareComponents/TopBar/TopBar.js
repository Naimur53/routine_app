import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router-dom";
import { Drawer } from "@mui/material";
import Logo from "../Logo/Logo";
import MainLayoutTab from "../MainLayoutTab/MainLayoutTab";
import { useSelector } from "react-redux";
import { allData } from "../../../ManageState/DataSlice/dataSlice";
import useFirebase from "../../../Hook/useFirebase";
import SearchIcon from '@mui/icons-material/Search';
// const pages = ["login"];
const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, loading } = useSelector(allData);
  const { logOut } = useFirebase({ observer: false })
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(true);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    if (!user.displayName) {
      setAnchorElUser(null)
    }
  }, [user])
  return (
    <div className="mb-20">
      <AppBar
        position="fixed"
        sx={{ background: "white", color: "black", boxShadow: "none" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ position: 'relative', justifyContent: 'space-between', alignItems: 'center' }}>
            <Logo></Logo>
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <NavLink to='/searchRoutine'>
                <div className="">
                  <Button >
                    <span className="mr-2 ">Find Routine</span>
                    <SearchIcon sx={{ color: "#5946ad" }}></SearchIcon>
                  </Button>
                </div>
              </NavLink>
            </div>
            <Box
              className="justify-end "
              sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
            >

              <div className="flex">
                {
                  user.email ? <div>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt={user.displayName} src={user.photoURL} />
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >
                      <div className="flex w-[250px] px-3 flex-col items-center" >
                        {/* <img className="w-1/2 rounded-full" src={user.photoURL} alt={user.displayName} /> */}
                        <Avatar
                          alt={user.displayName}
                          src={user.photoURL}
                          sx={{ width: 150, height: 150 }}
                        />
                        <span className="capitalize pt-2 font-medium text-lg text-center ">Sheikh {user.displayName}</span>
                        <span className="">{user.email}</span>
                        <div className="mt-5 w-full flex justify-between">
                          <NavLink to='/myProfile'><button className="bg-dark-purple text-white py-2 px-3 rounded-full" onClick={handleCloseUserMenu}>View Profile</button></NavLink>
                          <button onClick={() => {
                            setAnchorElNav(pre => null);
                            logOut();

                          }} className="bg-dark-purple text-white py-2 px-3 rounded-full" >Logout</button>
                        </div>

                      </div>

                    </Menu>
                  </div> :
                    <div className="flex gap-2">
                      <Button
                        onClick={handleCloseNavMenu}
                        component={NavLink}
                        to={"/signUp"}
                        sx={{ my: 2, color: "Black", display: "block" }}
                      >
                        sign Up
                      </Button>
                      <Button
                        onClick={handleCloseNavMenu}
                        component={NavLink}
                        to={"/login"}
                        sx={{ my: 2, color: "Black", display: "block" }}
                      >
                        login
                      </Button>
                    </div>
                }
              </div>
            </Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              className="justify-between"
            >
              <div></div>
              <div className="md:hidden block">
                <NavLink to='/searchRoutine'>
                  <div className="">
                    <Button >
                      <span className="mr-2 ">Find Routine</span>
                      <SearchIcon sx={{ color: "#5946ad" }}></SearchIcon>
                    </Button>
                  </div>
                </NavLink>
              </div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                {/* <MenuIcon />  */}
                <div className="flex justify-center items-end gap-1 flex-col">
                  <div className="h-[3px] w-[10px] bg-black rounded-md"></div>
                  <div className="h-[3px] w-[20px] bg-black rounded-md"></div>
                  <div className="h-[3px] w-[15px] bg-black rounded-md"></div>
                </div>

              </IconButton>
            </Box>

            <Drawer
              anchor="left"
              open={anchorElNav}
              onClose={handleCloseNavMenu}
              sx={{ width: "85vw", pt: 0, }}
            >
              <div className="hidden md:flex justify-center mt-5 mb-3 ">
                <Logo></Logo>
              </div>
              <MainLayoutTab handleCloseNavMenu={handleCloseNavMenu} ></MainLayoutTab>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar >
    </div >
  );
};

export default TopBar;
