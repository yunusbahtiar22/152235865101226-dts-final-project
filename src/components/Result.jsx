import { useGetFinishedMatchesQuery } from "../services/requestFootballAPI";
import InfoCard from "../components/InfoCard";
import { useSelector } from "react-redux";
import { selectTxtFilter } from "../reducers/soccerDataSlice";

const dateFormat = "YYYY-MM-DD";

const Fixture = () => {
  const txtFilter = useSelector(selectTxtFilter);
  const { data: results } = useGetFinishedMatchesQuery();
  return (
    <section className="w-3/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500 h-min">
      <h3 className="text-white font-bold ml-2 text-xl p-2">Result</h3>
      {results?.data
        .filter((result) => result?.status_code === 3)
        .filter((result) => {
          if (!txtFilter) return true;
          return (
            result?.home_team?.name
              ?.toLowerCase()
              .includes(txtFilter.toLowerCase()) ||
            result?.away_team?.name
              ?.toLowerCase()
              .includes(txtFilter.toLowerCase())
          );
        })
        .map((result) => {
          return <InfoCard data={result} key={result?.match_id} />;
        })}
    </section>
  );
};

export default Fixture;
