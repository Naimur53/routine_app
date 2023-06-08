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
import { NavLink, useLocation } from "react-router-dom";
import { Drawer } from "@mui/material";
import Logo from "../Logo/Logo";
import MainLayoutTab from "../MainLayoutTab/MainLayoutTab";
import { useSelector } from "react-redux";
import { allData } from "../../../ManageState/DataSlice/dataSlice";
import useFirebase from "../../../Hook/useFirebase";
import SearchIcon from "@mui/icons-material/Search";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import { motion } from 'framer-motion'
import GrowEffect from "../../AnimationCompo/GrowEffect/GrowEffect";
import ScaleEffect from "../../AnimationCompo/ScaleEffect/ScaleEffect";
import { avatarDelay, logGoToTopDuration, topBarGrowDuration } from "../../../utilities/framerMotionAnimationsUtilites";
// const pages = ["login"];
const TopBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user, loading } = useSelector(allData);
  const { logOut, loginUserWithGoogleRedirect } = useFirebase({ observer: false });
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
      setAnchorElUser(null);
    }
  }, [user]);
  return (
    <>
      <div
        className=" relative  ">

        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            color: "black",
            backdropFilter: "blur(15px)",
            background: "white",
          }}
        >
          <GrowEffect duration={topBarGrowDuration} firstTime >

            <div className={loading ? '' : 'shadow'}>
              <Container maxWidth="xl">
                <Toolbar
                  disableGutters
                  sx={{
                    position: "relative",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="hidden md:block">
                    <Logo></Logo>
                  </div>

                  <Box
                    className="justify-end "
                    sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
                  >
                    <div className="flex">
                      {user.email ? (
                        <div>
                          <CustomTooltip title="Open settings">
                            <ScaleEffect condition={!loading} delay={avatarDelay}>
                              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={user.displayName} src={user.photoURL} />
                              </IconButton>
                            </ScaleEffect>
                          </CustomTooltip>
                          <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                          >
                            <div className="flex w-[250px] px-3 flex-col items-center">
                              {/* <img className="w-1/2 rounded-full" src={user.photoURL} alt={user.displayName} /> */}

                              <Avatar
                                alt={user.displayName}
                                src={user.photoURL}
                                sx={{ width: 150, height: 150 }}
                              />
                              <span className="capitalize break-words pt-2 font-medium text-lg text-center ">
                                {user.displayName}
                              </span>
                              <span className="break-words">{user.email}</span>
                              <div className="mt-5 w-full flex justify-between">
                                <NavLink to="/myProfile">
                                  <Button
                                    variant="contained"
                                    className="bg-dark-purple text-white py-2 px-3 rounded-full"
                                    onClick={handleCloseUserMenu}
                                  >
                                    View Profile
                                  </Button>
                                </NavLink>
                                <Button
                                  variant="outlined"
                                  onClick={() => {
                                    setAnchorElNav((pre) => null);
                                    logOut();
                                  }}
                                  className="bg-dark-purple text-white py-2 px-3 rounded-full"
                                >
                                  Logout
                                </Button>
                              </div>
                            </div>
                          </Menu>
                        </div>
                      ) : (
                        <div className="flex gap-2">
                          {/* <ScaleEffect  >

                            <Button
                              onClick={handleCloseNavMenu}
                              component={NavLink}
                              to={"/signUp"}
                              sx={{ my: 2, color: "Black", display: "block" }}
                            >
                              sign Up
                            </Button>
                          </ScaleEffect> */}
                          <ScaleEffect  >

                            <Button
                              onClick={() => {
                                handleCloseNavMenu()
                                // loginUserWithGoogleRedirect()
                              }}
                              component={NavLink}
                              variant="contained"
                              to={"/login"}
                              sx={{ my: 2, display: "block" }}
                            >
                              login
                            </Button>
                          </ScaleEffect>
                        </div>
                      )}
                    </div>
                  </Box>
                  <Box
                    sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                    className="justify-between items-center  "
                  >
                    <div>
                      <Logo></Logo>
                    </div>
                    {/* <div className="md:hidden block">
                <NavLink to="/searchRoutine">
                  <div className="">
                    <IconButton component={NavLink} to="/searchRoutine">
                      <SearchIcon sx={{ color: "#5946ad" }}></SearchIcon>
                    </IconButton>
                  </div>
                </NavLink>
              </div> */}
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      sx={{ pr: 0 }}
                      color="inherit"
                    >
                      {/* <MenuIcon />  */}
                      <div className="flex justify-center items-start gap-1 flex-col pr-0">
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
                    sx={{ width: "85vw", pt: 0, background: "transparent" }}
                  >
                    <div className="hidden md:flex justify-center mt-5 mb-3 ">
                      <Logo></Logo>
                    </div>
                    <GrowEffect duration={.4}>
                      <MainLayoutTab
                        handleCloseNavMenu={handleCloseNavMenu}
                      ></MainLayoutTab>
                    </GrowEffect>
                  </Drawer>
                </Toolbar>
              </Container>
            </div>
          </GrowEffect>
        </AppBar>
      </div>
    </>
  );
};

export default TopBar;
