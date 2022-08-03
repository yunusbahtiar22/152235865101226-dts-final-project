import React from "react";
import { useGetIncomingMatchesQuery } from "../services/requestFootballAPI";
import TeamItem from "./TeamItem";
import { selectTxtFilter } from "../reducers/soccerDataSlice";
import { useSelector } from "react-redux";

const Fixture = () => {
  const txtFilter = useSelector(selectTxtFilter);
  const { data: fixtures, isLoading, isError } = useGetIncomingMatchesQuery();
  return (
    <section className="w-3/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500 h-min">
      <h4 className="text-white font-bold ml-2 p-2">Fixtures</h4>
      {isLoading && (
        <p className="text-white text-xl text-center p-4">Loading...</p>
      )}
      {fixtures?.data
        ?.filter((fixture) => {
          if (!txtFilter) return true;
          return (
            fixture?.home_team?.name
              ?.toLowerCase()
              .includes(txtFilter.toLowerCase()) ||
            fixture?.away_team?.name
              ?.toLowerCase()
              .includes(txtFilter.toLowerCase())
          );
        })
        .map((fixture) => {
          return <TeamItem data={fixture} key={fixture?.match_id} />;
        })}
      {isError && (
        <p className="text-white text-xl text-center p-4">No record found</p>
      )}
    </section>
  );
};

export default Fixture;
