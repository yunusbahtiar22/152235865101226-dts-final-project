import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { search } from "../reducers/soccerDataSlice";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.pathname);
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
      <main className="min-h-screen my-10">
        <section className="w-3/6 bg-[#181818] mx-auto my-2">
          <div className="text-white my-3 flex items-center">
            <img
              src={
                process.env.PUBLIC_URL +
                "/Campeonato_Brasileiro_Serie_A_Logo.webp"
              }
              alt="brasileirao serie A"
              className="w-[60px] h-[60px]"
            />
            <span className="mx-4">Brasileirao Serie A</span>
            &middot;
            <span className="mx-4">Regular Season</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <NavLink
                to="fixture"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <span className="text-white font-semibold mx-5">Fixture</span>
              </NavLink>
              <NavLink
                to="result"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <span className="text-white font-semibold mx-5">Results</span>
              </NavLink>
              <NavLink
                to="standings"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <span className="text-white font-semibold mx-5">
                  League Standings
                </span>
              </NavLink>
            </div>
            <div>
              {location.pathname !== "/standings" && (
                <input
                  className="rounded-md leading-4 p-2 focus:ring-4 focus:ring-orange-500 focus:outline-none"
                  type="text"
                  placeholder="🔎 Search..."
                  onChange={handleSearch}
                />
              )}
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
