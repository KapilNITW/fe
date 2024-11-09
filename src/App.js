import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainStartPage from "./Pages/MainStartPage";
import Contact from "./Pages/Contact";
import Policy from "./Pages/Policy";
import About from "./Pages/About";
import Login from "./Pages/Auth/Login"
import Register from "./Pages/Auth/Register"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainStartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </>
  );
}

export default App;
