import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Homepage/HomePage";
import About from "../pages/About/About";
import Service from "../pages/Service/Service";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Contact from "../pages/Contact/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
