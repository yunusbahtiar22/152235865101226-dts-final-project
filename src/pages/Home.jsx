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
    "border-bottom": "3px solid white",
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">
        <section className="w-3/6 bg-[#181818] mx-auto my-2">
          <div className="flex justify-between items-center">
            <div>
              <NavLink
                to="fixture"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <span className="text-white font-semibold text-xl mx-5">
                  Fixture
                </span>
              </NavLink>
              <NavLink
                to="result"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                <span className="text-white font-semibold text-xl mx-5">
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
          {/* <div className="flex h-full">
          <div className="w-4/6 p-4 flex justify-center items-center relative">
            {date && (
              <>
                <span
                  className="absolute left-0 text-3xl font-semibold text-white hover:bg-orange-500 cursor-pointer"
                  onClick={handlePrevClick}>
                  <FaAngleLeft />
                </span>
                <span className="text-white font-bold uppercase text-xl">
                  {dayjs(date).isToday() ? "TODAY" : dayjs(date).format("LL")}
                </span>
                <span
                  className="absolute right-0 text-3xl font-semibold text-white hover:bg-orange-500 cursor-pointer"
                  onClick={handleNextClick}>
                  <FaAngleRight />
                </span>
              </>
            )}
          </div>
          <div className="w-2/6 p-4 flex justify-end items-center">
            <input
              onChange={(e) => {
                console.log(date);
                setDate(dayjs(e.target.value).format(dateFormat));
              }}
              className="w-max outline-none bg-orange-500 px-2 py-1 rounded-lg text-white font-semibold"
              type="date"
              name="date"
              id="date"
            />
          </div>
        </div> */}
        </section>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Home;
