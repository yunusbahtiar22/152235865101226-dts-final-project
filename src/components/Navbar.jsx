import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logOut } from "../app/firebase";
import { FaSignOutAlt } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const activeStyle = {
    background: "#f97316",
    borderRadius: "50px",
  };

  const [user, loading] = useAuthState(auth);
  return (
    <div className="bg-[#141414] p-3">
      <div className="flex justify-between w-[90%] m-auto text-orange-500">
        <span className="font-bold text-xl p-2" onClick={() => navigate("/")}>
          ⚽ Score Master ⚽
        </span>
        <div className="flex text-white justify-around items-center gap-10">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <span className="font-bold cursor-pointer p-4">Score ⚽</span>
          </NavLink>
          <NavLink
            to="/news"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <span className="font-bold p-4">News 📰</span>
          </NavLink>
          {/* <NavLink
            to="/favorite"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <span className="text-lg font-bold p-4">Favorite ⭐</span>
          </NavLink> */}
        </div>
        {user && (
          <div className="flex p-3 justify-around gap-4">
            <span className="text-white text-sm font-semibold">
              {user.displayName.toUpperCase()}
            </span>
            <span className="mx-3 text-xl text-white" onClick={logOut}>
              <FaSignOutAlt />
            </span>
          </div>
        )}
        {loading && (
          <div className="flex p-3 justify-around gap-4">Loading...</div>
        )}
        {!user && (
          <div className="flex p-3 justify-around gap-4">
            <Link to="/login">
              <span className="text-white font-bold border-2 border-orange-500 p-1 rounded-md">
                Sign In
              </span>
            </Link>
            <Link to="/register">
              <span className="text-white font-bold p-1 border-2 bg-orange-500 border-orange-500 rounded-md">
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
