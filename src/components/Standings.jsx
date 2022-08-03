import React from "react";
import { useGetStandingsQuery } from "../services/requestFootballAPI";
import StandingsRow from "./StandingsRow";

const Standings = () => {
  const { data: teams, isLoading, isError } = useGetStandingsQuery();
  return (
    <section className="w-3/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500 h-min">
      {isLoading && (
        <p className="text-white text-xl text-center p-4">Loading...</p>
      )}
      {
        <>
          <table className="w-[99%] table-auto text-white mx-auto my-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Team</th>
                <th>P</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>F</th>
                <th>A</th>
                <th>GD</th>
              </tr>
            </thead>
            <tbody>
              {teams?.data?.standings?.map((team) => (
                <StandingsRow team={team} key={team?.team_id} />
              ))}
            </tbody>
          </table>
          <div className="w-[99%] mx-auto my-4 text-white">
            <p className="p-2 text-sm">
              <span className="w-[10px] h-[10px] inline-block mr-4 rounded-full bg-blue-500"></span>
              Copa Libertadores
            </p>
            <p className="p-2 text-sm">
              <span className="w-[10px] h-[10px] inline-block mr-4 rounded-full bg-green-500"></span>
              Copa Libertadores Qualification
            </p>
            <p className="p-2 text-sm">
              <span className="w-[10px] h-[10px] inline-block mr-4 rounded-full bg-orange-500"></span>
              Copa Sudamericana
            </p>
            <p className="p-2 text-sm">
              <span className="w-[10px] h-[10px] inline-block mr-4 rounded-full bg-red-600"></span>
              Relegation
            </p>
          </div>
        </>
      }
      {isError && (
        <p className="text-white text-xl text-center p-4">No record found</p>
      )}
    </section>
  );
};

export default Standings;
