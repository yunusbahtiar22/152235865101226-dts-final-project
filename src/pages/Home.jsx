import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useGetMatchQuery } from "../services/requestFootballAPI";

const Home = () => {
  const { data: fixtures } = useGetMatchQuery("2022-07-20");
  return (
    <header>
      <Navbar />
      <section>
        {fixtures?.data.map((fixture) => {
          return (
            <div>
              <p>{fixture?.group?.group_name}</p>
              <p>
                <span>{fixture?.home_team?.name}</span>
                <span>{fixture?.stats?.ft_score}</span>
                <span>{fixture?.away_team?.name}</span>
              </p>
            </div>
          );
        })}
      </section>
      <Footer />
    </header>
  );
};

export default Home;
