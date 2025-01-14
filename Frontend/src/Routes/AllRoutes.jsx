import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Dashboard from "../pages/Dashboard";

const AllRoutes = () => {

  return (
    <Routes>
      {["/", "/signin"].map((path) => (
        <Route key={path} path={path} element={<Signin />} />
      ))}
      <Route path="/signUp" element={<Signup />}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>

    </Routes>
  );
};

export default AllRoutes;
