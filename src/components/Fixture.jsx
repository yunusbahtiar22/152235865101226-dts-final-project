import React from "react";
import { useGetIncomingMatchesQuery } from "../services/requestFootballAPI";
import InfoCard from "../components/InfoCard";
import { selectTxtFilter } from "../reducers/soccerDataSlice";
import { useSelector } from "react-redux";

const Fixture = () => {
  const txtFilter = useSelector(selectTxtFilter);
  const { data: fixtures } = useGetIncomingMatchesQuery();

  return (
    <section className="w-3/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500 h-min">
      <h3 className="text-white font-bold ml-2 text-xl p-2">Fixtures</h3>
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
    </section>
  );
};

export default Fixture;