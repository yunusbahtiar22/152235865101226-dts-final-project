import React from "react";
import { useGetTeamByIdQuery } from "../services/requestFootballAPI";

const StandingsRow = ({ team }) => {
  const { data: teamDetail } = useGetTeamByIdQuery({ id: team?.team_id });
  return (
    <>
      <tr
        className={`bg-[rgba(225,225,225,0.05)] ${
          team?.result === "Copa Libertadores"
            ? "border-l-4 border-l-blue-500"
            : team?.result === "Copa Libertadores Qualification"
            ? "border-l-4 border-l-green-500"
            : team?.result === "Copa Sudamericana"
            ? "border-l-4 border-l-orange-500"
            : team?.result === "Relegation"
            ? "border-l-4 border-l-red-600"
            : ""
        }`}>
        <td className="text-center p-2">
          <span className="text-md">{team?.position}</span>
        </td>
        <td className="text-center p-2">
          <div className="flex">
            <img
              src={teamDetail?.data?.logo}
              alt=""
              width="30px"
              height="30px"
            />
            <span className="text-md">{teamDetail?.data?.name}</span>
          </div>
        </td>
        <td className="text-center p-2">
          <span className="text-md">{team?.overall?.games_played}</span>
        </td>
        <td className="text-center p-2">
          <span className="text-md">{team?.overall?.won}</span>
        </td>
        <td className="text-center p-2">
          <span className="text-md">{team?.overall?.draw}</span>
        </td>
        <td className="text-center p-2">
          <span className="text-md">{team?.overall?.lost}</span>
        </td>
        <td className="text-center p-2">
          <span className="text-md">{team?.overall?.goals_scored}</span>
        </td>
        <td className="text-center p-2">
          <span className="text-md">{team?.overall?.goals_against}</span>
        </td>
        <td className="text-center p-2">
          <span className="text-md">{team?.overall?.goals_diff}</span>
        </td>
      </tr>
    </>
  );
};

export default StandingsRow;
