import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

  const { auth } = useFirebase({ observer: true });
  const { user, loading } = useSelector(allData)
  useEffect(() => {
    console.log(user);
  }, [user]);

  const messaging = getMessaging();
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    // ...
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
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
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/editProfile" element={<EditeProfile />}></Route>

          <Route path="/contactUs" element={<ContactUs />}></Route>

          <Route
            path="/login"
            element={
              <OnlineRoute>
                <Login />
              </OnlineRoute>
            }
          ></Route>

          <Route
            path="/signUp"
            element={
              <OnlineRoute>
                <SignUp />
              </OnlineRoute>
            }
          ></Route>

          {/* not working on this */}

          <Route
            path="/editProfile"
            element={
              <PrivateRoute>
                <MainLayout>
                  <EditeProfile />
                </MainLayout>
              </PrivateRoute>
            }
          ></Route>

          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="/myNotes" element={<MyNotes />}></Route>
          <Route path="/saveRoutine" element={<SaveRoutine />}></Route>
          <Route
            path="/searchRoutine"
            element={
              <OnlineRoute>
                <SearchRoutine />
              </OnlineRoute>
            }
          ></Route>
          <Route
            path="/myRoutine"
            element={
              <OnlineRoute>
                <PrivateRoute>
                  <MyRoutine />
                </PrivateRoute>
              </OnlineRoute>
            }
          ></Route>
          <Route
            path="/createRoutine"
            element={
              <OnlineRoute>
                <PrivateRoute>
                  <MainLayout>
                    <CreateRoutine />
                  </MainLayout>
                </PrivateRoute>
              </OnlineRoute>
            }
          ></Route>
          <Route
            path="/checkout/:id"
            element={
              <OnlineRoute>
                <Checkout />
              </OnlineRoute>
            }
          ></Route>
          <Route
            path="/myProfile"
            element={
              <OnlineRoute>
                <PrivateRoute>
                  <MyProfile />
                </PrivateRoute>
              </OnlineRoute>
            }
          ></Route>
          <Route
            path="/update/:id"
            element={
              <OnlineRoute>
                <PrivateRoute>
                  <MainLayout>
                    <UpdateRoutine />
                  </MainLayout>
                </PrivateRoute>
              </OnlineRoute>
            }
          ></Route>
          <Route
            path="/requestForRoutine"
            element={
              <OnlineRoute>
                <PrivateRoute>
                  <RequestForRoutine />
                </PrivateRoute>
              </OnlineRoute>
            }
          ></Route>
          <Route path="viewProfile/:id" element={<ViewProfile />}></Route>
          {/* ---------------------dashboard routes -------------------------- */}

          <Route
            path="/dashboard"
            element={
              <OnlineRoute>
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              </OnlineRoute>
            }
          >
            <Route index element={<Overview />}></Route>
            <Route
              path="allRequestRoutines"
              element={<AllRequestRoutines />}
            ></Route>
            <Route path="allUsers" element={<AllUsers />}></Route>

            <Route
              path="createRequestRoutine/:id"
              element={<CreateRequestRoutine />}
            ></Route>

            <Route path="manageRoutine" element={<ManageRoutine />}></Route>
            <Route
              path="manageRoutine/update/:id"
              element={<UpdateRoutine admin={true} />}
            ></Route>
            <Route path="manageAdmin" element={<ManageAdmin />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
