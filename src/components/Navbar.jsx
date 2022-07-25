import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#141414] p-3">
      <div className="flex justify-between w-5/6 m-auto">
        <span className="text-white text-xl">Score Master</span>
        <div className="flex text-white justify-around gap-10">
          <a href="#" className="text-lg">
            Score
          </a>
          <a href="#" className="text-lg">
            News
          </a>
          <a href="#" className="text-lg">
            Favorite
          </a>
        </div>
        <div className="flex justify-around gap-4">
          <button className="text-white p-1 font bold rounded-sm border-2 border-white">
            Sign Up
          </button>
          <button className="bg-white p-1 font bold rounded-sm border-2 border-white">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
