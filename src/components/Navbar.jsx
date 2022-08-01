import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const activeStyle = {
    background: "#f97316",
  };

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
          <NavLink
            to="/favorite"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <span className="text-lg font-bold p-4">Favorite ⭐</span>
          </NavLink>
        </div>
        <div className="flex justify-around gap-4">
          <button className="text-orange-500 p-1 font-bold rounded-sm border-2 border-orange-500">
            Sign Up
          </button>
          <button className="bg-orange-500 text-[#181818] p-1 font-bold rounded-sm border-2 border-orange-500">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
