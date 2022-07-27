import React from "react";
import FixtureSection from "../components/FixtureSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useGetMatchQuery } from "../services/requestFootballAPI";

const Home = () => {
  const { data: fixtures } = useGetMatchQuery();
  return (
    <header>
      <Navbar />
      <section className="w-3/6 bg-[#181818] mx-auto my-4 rounded-md border border-gray-500">
        {fixtures?.data.map((fixture) => {
          return (
            <FixtureSection data={fixture} key={fixture?.match_id} />
            // <div
            //   className="bg-gray-600 text-white mb-1"
            //   key={fixture?.match_id}>
            //   <p>{fixture?.group?.group_name}</p>
            //   <div>
            //     <img
            //       width="30px"
            //       height="30px"
            //       src={fixture?.home_team?.logo}
            //       alt={fixture?.home_team?.name}
            //     />
            //     <span>{fixture?.home_team?.name}</span>
            //     <p>{fixture?.stats?.ft_score}</p>
            //     <img
            //       width="30px"
            //       height="30px"
            //       src={fixture?.away_team?.logo}
            //       alt={fixture?.away_team?.name}
            //     />
            //     <span>{fixture?.away_team?.name}</span>
            //   </div>
            // </div>
          );
        })}
      </section>
      <Footer />
    </header>
  );
};

export default Home;
