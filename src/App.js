import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp"
import Login from "./components/Login/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CreateRoutine from "./components/CreateRoutine/CreateRoutine";
import TopBar from "./components/ShareComponents/TopBar/TopBar";
import SearchRoutine from "./components/SearchRoutine/SearchRoutine";



const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#5946ad ',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar></TopBar>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>

          <Route path="/searchRoutine" element={<SearchRoutine />}></Route>
          <Route path="/createRoutine" element={<CreateRoutine />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
