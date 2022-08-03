import React from "react";
import { useParams } from "react-router-dom";
import { useGetMatchByIdQuery } from "../services/requestFootballAPI";

const Stats = () => {
  const { matchId: id } = useParams();
  const { data: match } = useGetMatchByIdQuery({ id });
  const tableData = [
    "Fouls",
    "Injuries",
    "Conrners",
    "Offsides",
    "Shoots Total",
    "Shoots on Target",
    "Shoots off Target",
    "Shoots Blocked",
    "Possesion Time",
    "Possesion Percent (%)",
    "Yellow Cards",
    "Yellow Red Cards",
    "Red Cards",
    "Substitutions",
    "Goal Kicks",
    "Goal Attempts",
    "Free Kicks",
    "Throw In",
    "Ball Safe",
    "Goals",
    "Penalties",
    "Attacks",
    "Dangerous Attacks",
  ];
  return (
    <section className="w-5/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500 h-min">
      {match?.data?.match_statistics ? (
        Object.keys(match?.data?.match_statistics[0])
          .slice(2)
          .map((key, index) => {
            return (
              <div
                className={`flex justify-between items-center w-[100%] ${
                  index === tableData.length - 1 ? "" : "border-b"
                } border-b-gray-500 text-white min-h-[3rem] p-3`}>
                <span>{match?.data?.match_statistics[0][key]}</span>
                <span>{tableData[index]}</span>
                <span>{match?.data?.match_statistics[1][key]}</span>
              </div>
            );
          })
      ) : (
        <p className="text-white p-4">
          No data to show ! either because the game has not started yet or there
          was no description available
        </p>
      )}
    </section>
  );
};

export default Stats;
