import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import NotfFound from "../../pages/NotfFound/NotfFound";
import Register from "../../pages/Register/Register";
import { NavBar } from "../NavBar/NavBar";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotfFound />} />
      </Routes>
    </>
  );
}

export default App;
