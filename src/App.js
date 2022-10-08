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
import Edite from "./components/CreateRoutine/PreviewRoutine/Edite/Edite";
import Checkout from "./components/SearchRoutine/Checkout/Checkout";
import MyRoutine from "./components/MyRoutine/MyRoutine";
import MyProfile from "./components/MyProfile/MyProfile";
import RequestForRoutine from "./components/RequestForRoutie/RequestForRoutine";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import useFirebase from "./Hook/useFirebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getUserFromDB,
  setLoading,
  setUser,
} from "./ManageState/DataSlice/dataSlice";
import { getIdToken, onAuthStateChanged } from "firebase/auth";

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
  },
});
function App() {
  const dispatch = useDispatch();

  const { auth } = useFirebase({ observer: true });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar></TopBar>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/edite" element={<Edite />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>

          <Route path="/myNotes" element={<MyNotes />}></Route>
          <Route path="/saveRoutine" element={<SaveRoutine />}></Route>
          <Route
            path="/searchRoutine"
            element={
              <PrivateRoute>
                <SearchRoutine />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/myRoutine"
            element={
              <PrivateRoute>
                <MyRoutine />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/createRoutine"
            element={
              <PrivateRoute>
                <CreateRoutine />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/checkout/:id" element={<Checkout />}></Route>
          <Route path="/myProfile" element={<MyProfile />}></Route>
          <Route
            path="/requestForRoutine"
            element={
              <PrivateRoute>
                <RequestForRoutine />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
