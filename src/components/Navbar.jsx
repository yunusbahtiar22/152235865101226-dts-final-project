import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#141414] p-3">
      <div className="flex justify-between w-5/6 m-auto text-orange-500">
        <span className="font-bold text-2xl p-2">⚽ Score Master ⚽</span>
        <div className="flex text-white justify-around gap-10">
          <a href="#" className="text-lg font-bold hover:bg-orange-500 p-2">
            Score ⚽
          </a>
          <a href="#" className="text-lg font-bold hover:bg-orange-500 p-2">
            News 📰
          </a>
          <a href="#" className="text-lg font-bold hover:bg-orange-500 p-2">
            Favorite ⭐
          </a>
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
