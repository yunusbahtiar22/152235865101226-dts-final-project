import { useGetFinishedMatchesQuery } from "../services/requestFootballAPI";
import TeamItem from "./TeamItem";
import { useSelector } from "react-redux";
import { selectTxtFilter } from "../reducers/soccerDataSlice";

const Fixture = () => {
  const txtFilter = useSelector(selectTxtFilter);
  const { data: results, isLoading, isError } = useGetFinishedMatchesQuery();
  return (
    <section className="w-3/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500 h-min">
      <h4 className="text-white font-bold ml-2 p-2">Results</h4>
      {isLoading && <p className="text-white text-center p-4">Loading...</p>}
      {results?.data
        .filter(
          (result) =>
            result.status_code === 3 ||
            result.status_code === 31 ||
            result.status_code === 32
        )
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
          return <TeamItem data={result} key={result?.match_id} />;
        })}
      {isError && <p className="text-white text-center p-4">No record found</p>}
    </section>
  );
};

export default Fixture;
