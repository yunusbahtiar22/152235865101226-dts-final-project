import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { search } from "../reducers/soccerDataSlice";
import { Outlet, NavLink } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(search(e.target.value));
  };

  const activeStyle = {
    borderBottom: "3px solid white",
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <section className="w-3/6 bg-[#181818] mx-auto my-2">
          <div className="text-white my-3">
            <span className="text-lg mx-4">Brasileiro Serie A</span>
            &middot;
            <span className="text-lg mx-4">Regular Season</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <NavLink
                to="fixture"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <span className="text-white font-semibold text-lg mx-5">
                  Fixture
                </span>
              </NavLink>
              <NavLink
                to="result"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <span className="text-white font-semibold text-lg mx-5">
                  Results
                </span>
              </NavLink>
            </div>
            <div>
              <input
                className="rounded-md leading-4 p-2 focus:ring-4 focus:ring-orange-500 focus:outline-none"
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </div>
          </div>
        </section>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Home;
