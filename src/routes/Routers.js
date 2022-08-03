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
import Register from "../pages/Register";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../app/firebase";
import { Navigate } from "react-router-dom";
import ResetPassword from "../pages/ResetPassword";
import Standings from "../components/Standings";

const Protected = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  return loading ? null : !user ? children : <Navigate to="/" />;
};

const Private = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  return loading ? null : user ? children : <Navigate to="/login" />;
};

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Result />} />
          <Route path="fixture" element={<Fixture />} />
          <Route path="result" element={<Result />} />
          <Route path="standings" element={<Standings />} />
        </Route>
        <Route path="/news" element={<Home />} />
        <Route path="/favorite" element={<Home />} />
        <Route
          path="/login"
          element={
            <Protected>
              <Login />
            </Protected>
          }
        />
        <Route
          path="/register"
          element={
            <Protected>
              <Register />
            </Protected>
          }
        />
        <Route
          path="/reset-password"
          element={
            <Protected>
              <ResetPassword />
            </Protected>
          }
        />
        <Route
          path="/details/:matchId"
          element={
            <Private>
              <Detail />
            </Private>
          }>
          <Route index element={<Info />} />
          <Route path="info" element={<Info />} />
          <Route path="summary" element={<Summary />} />
          <Route path="statistics" element={<Stats />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
