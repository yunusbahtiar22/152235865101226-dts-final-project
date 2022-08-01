import React from "react";
import { useGetMatchByIdQuery } from "../services/requestFootballAPI";
import { Outlet, useParams, NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const Detail = () => {
  const { matchId: id } = useParams();
  const { data: match } = useGetMatchByIdQuery({ id });

  const status = {
    3: "Full Time",
    17: `${dayjs(match?.data?.match_start).format("ll")}`,
  };

  const activeStyle = {
    "border-bottom": "3px solid white",
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="w-3/6 mx-auto border border-gray-500 mt-4 rounded-md">
        <h3 className="text-white text-lg ml-[67px] mb-2">League here</h3>
        <div className="w-[100%] border-b border-b-gray-500 p-3">
          <div className="flex justify-around items-center w-5/6 rounded-md mx-auto bg-[rgba(225,225,225,0.05)] p-3">
            <figure className="flex flex-col justify-center items-center">
              <img
                src={match?.data?.home_team?.logo}
                alt={match?.data?.home_team?.name}
              />
              <figcaption>
                <h3 className="text-2xl font-bold text-white">
                  {match?.data?.home_team?.name}
                </h3>
              </figcaption>
            </figure>
            <div className="text-center">
              <p className="text-white text-3xl font-bold tracking-[10px]">
                {match?.data?.status_code === 11 &&
                  match?.data?.stats?.ht_score}
                {match?.data?.status_code === 3 && match?.data?.stats?.ft_score}
                {match?.data?.status_code === 32 &&
                  match?.data?.stats?.et_score}
                {match?.data?.status_code === 31 &&
                  match?.data?.stats?.ps_score}
                {match?.data?.status_code === 17 && "0-0"}
              </p>
              <p className="text-white">
                {match?.data?.status_code === 3 && "Full Time"}
                {match?.data?.status_code === 11 && "Half Time"}
                {match?.data?.status_code === 17 &&
                  dayjs(match?.data?.match_start).format("ll")}
                {match?.data?.status_code === 32 && "Extra Time"}
                {match?.data?.status_code === 31 && "Penalty"}
              </p>
            </div>
            <figure className="flex flex-col justify-center items-center">
              <img
                src={match?.data?.away_team?.logo}
                alt={match?.data?.away_team?.name}
              />
              <figcaption>
                <h3 className="text-2xl font-bold text-white">
                  {match?.data?.away_team?.name}
                </h3>
              </figcaption>
            </figure>
          </div>
          <div className="flex justify-center w-3/6 mx-auto py-2 gap-3">
            <NavLink
              to="info"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <span className="text-white font-semibold text-lg mx-2">
                Info
              </span>
            </NavLink>
            <NavLink
              to="summary"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <span className="text-white font-semibold text-lg mx-2">
                Summary
              </span>
            </NavLink>
            <NavLink
              to="statistics"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              <span className="text-white font-semibold text-lg mx-2">
                Statistics
              </span>
            </NavLink>
          </div>
        </div>
        <Outlet />
      </main>
    </>
  );
};

export default Detail;
