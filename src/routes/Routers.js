import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Fixture from "../components/Fixture";
import Result from "../components/Result";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="fixture" element={<Fixture />} />
          <Route path="result" element={<Result />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/details/:matchId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
