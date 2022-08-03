import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../app/firebase";

const Navbar = () => {
  const activeStyle = {
    background: "#f97316",
    borderRadius: "50px",
  };

  const [user, loading] = useAuthState(auth);
  return (
    <div className="bg-[#141414] p-3">
      <div className="flex justify-between w-5/6 m-auto text-orange-500">
        <span className="font-bold text-2xl p-2">⚽ Score Master ⚽</span>
        <div className="flex text-white justify-around items-center gap-10">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <span className="text-lg font-bold cursor-pointer p-4">
              Score ⚽
            </span>
          </NavLink>
          <NavLink
            to="/news"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <span className="text-lg font-bold p-4">News 📰</span>
          </NavLink>
          {/* <NavLink
            to="/favorite"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <span className="text-lg font-bold p-4">Favorite ⭐</span>
          </NavLink> */}
        </div>
        {user && (
          <div className="flex p-3 justify-around gap-4">
            <span className="text-white text-xl font-bold">
              {user.displayName}
            </span>
            <button className="bg-white p-3" onClick={logOut}>
              Log Out
            </button>
          </div>
        )}
        {loading && (
          <div className="flex p-3 justify-around gap-4">Loading...</div>
        )}
        {!user && (
          <div className="flex p-3 justify-around gap-4">
            <Link to="/login">
              <span className="text-white font-bold text-lg border-2 border-orange-500 p-3">
                Sign In
              </span>
            </Link>
            <Link to="/register">
              <span className="text-white font-bold text-lg p-3 border-2 bg-orange-500 border-orange-500">
                Sign Up
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
