import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from"./components/SignUp/SignUp"
import Login from "./components/Login/Login";

import ClassRoutines from "./components/ClassRoutines/ClassRoutines";
import CreateRoutine from "./components/CreateRoutine/CreateRoutine";
import SearchRoutine from "./components/SearchRoutine/SearchRoutine";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>

        <Route path="classRoutines" element={<ClassRoutines />}></Route>
        <Route path="/searchRoutine" element={<SearchRoutine />}></Route>

        <Route path="stepper" element={<CreateRoutine />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
