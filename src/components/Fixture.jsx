import React from "react";
import { useGetIncomingMatchesQuery } from "../services/requestFootballAPI";
import InfoCard from "../components/InfoCard";
import { selectTxtFilter } from "../reducers/soccerDataSlice";
import { useSelector } from "react-redux";

const Fixture = () => {
  const txtFilter = useSelector(selectTxtFilter);
  const { data: fixtures, isLoading, isError } = useGetIncomingMatchesQuery();

  return (
    <section className="w-3/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500 h-min">
      <h3 className="text-white font-bold ml-2 text-xl p-2">Fixtures</h3>
      {isLoading && (
        <span className="text-white text-lg inline-block mx-auto p-4">
          Loading...
        </span>
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
          return <InfoCard data={fixture} key={fixture?.match_id} />;
        })}
      {isError && (
        <span className="text-white text-lg inline-block mx-auto p-4">
          No record found
        </span>
      )}
    </section>
  );
};

export default Fixture;
