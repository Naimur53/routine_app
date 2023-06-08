import logo from "./logo.svg";
import React, { Component, useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CreateRoutine from "./components/CreateRoutine/CreateRoutine";
import TopBar from "./components/ShareComponents/TopBar/TopBar";
import SearchRoutine from "./components/SearchRoutine/SearchRoutine";
import MyNotes from "./components/MyNote/MyNotes";
import SaveRoutine from "./components/SaveRoutine/SaveRoutine";
import Checkout from "./components/SearchRoutine/Checkout/Checkout";
import MyRoutine from "./components/MyRoutine/MyRoutine";
import MyProfile from "./components/MyProfile/MyProfile";
import RequestForRoutine from "./components/RequestForRoutie/RequestForRoutine";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import useFirebase from "./Hook/useFirebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  allData,
  getUserFromDB,
  setLoading,
  setUser,
} from "./ManageState/DataSlice/dataSlice";
import { getIdToken, onAuthStateChanged } from "firebase/auth";
import UpdateRoutine from "./components/UpdateRoutine/UpdateRoutine";
import AllRequestRoutines from "./components/Dashboard/DashboardPages/AllRequestRoutines/AllRequestRoutines";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateRequestRoutine from "./components/Dashboard/DashboardPages/CreateRequestRoutine/CreateRequestRoutine";
import MainLayout from "./components/ShareComponents/MainLayout/MainLayout";
import ContactUs from "./components/ContactUs/ContactUs";
import Overview from "./components/Dashboard/DashboardPages/Overview/Overview";
import ManageRoutine from "./components/Dashboard/DashboardPages/ManageRoutine/ManageRoutine";
import OnlineRoute from "./components/ShareComponents/OnlineRoute/OnlineRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageAdmin from "./components/Dashboard/DashboardPages/ManageAdmin/ManageAdmin";
import EditeProfile from "./components/EditeProfile/EditeProfile";
import useSocket from "./Hook/useSocket";
import AllUsers from "./components/Dashboard/DashboardPages/AllUsers/AllUsers";
import ViewProfile from "./components/ViewProfile/ViewProfile";
import { getMessaging, onMessage } from "firebase/messaging";
import './messaging_init_in_sw'
import Notification from "./components/Dashboard/Notification/Notification";
import { AnimatePresence, motion } from "framer-motion";
import AppRoutes from "./components/AppRoutes/AppRoutes";
import Logo from "./components/ShareComponents/Logo/Logo";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#5946ad ",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#103d7b",
    },
    white: {
      // This is green.A700 as hex.
      main: "#fff",
    },
  },
});
function App() {
  const dispatch = useDispatch();
  // const { } = useSocket({ observer: true });
  // const location = useLocation();

  const { auth } = useFirebase({ observer: true });
  const { user, loading } = useSelector(allData);
  const [iniLoading, setInitLoading] = useState(true);
  useEffect(() => {

  }, [user]);

  useEffect(() => {
    const a = setTimeout(() => {
      setInitLoading(false)
    }, 800)
    return () => {
      clearInterval(a)
    }
  }, [loading])



  // const messaging = getMessaging();
  // onMessage(messaging, (payload) => {
  //   
  //   // ...
  // });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {
          loading ?
            <BrowserRouter>

              <Logo></Logo>
            </BrowserRouter>


            : <BrowserRouter>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="light"
              />

              <TopBar></TopBar>
              {
                iniLoading ? <></> :
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                    <AppRoutes></AppRoutes>
                  </motion.div>
              }
            </BrowserRouter>
        }


      </ThemeProvider>
    </div>
  );
}

export default App;


// <ThemeProvider theme={theme}>
//         {
//           loading ?
//             <BrowserRouter>

//               <Logo></Logo>
//             </BrowserRouter>


//             : <BrowserRouter>
//               <ToastContainer
//                 position="bottom-right"
//                 autoClose={5000}
//                 hideProgressBar={true}
//                 newestOnTop={true}
//                 closeOnClick
//                 rtl={false}
//                 pauseOnFocusLoss
//                 draggable
//                 theme="light"
//               />

//               <TopBar></TopBar>
//               {
//                 iniLoading ? <></> :
//                   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

//                     <AppRoutes></AppRoutes>
//                   </motion.div>
//               }
//             </BrowserRouter>
//         }


//       </ThemeProvider>