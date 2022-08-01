import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Fixture from "../components/Fixture";
import Result from "../components/Result";
import Info from "../components/Info";
import Summary from "../components/Summary";
import Stats from "../components/Stats";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Result />} />
          <Route path="fixture" element={<Fixture />} />
          <Route path="result" element={<Result />} />
        </Route>
        <Route path="/news" element={<Home />} />
        <Route path="/favorite" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:matchId" element={<Detail />}>
          <Route index element={<Info />} />
          <Route path="info" element={<Info />} />
          <Route path="summary" element={<Summary />} />
          <Route path="statistics" element={<Stats />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
