import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import dayjs from "dayjs";

export const requestFootballAPI = createApi({
  reducerPath: "requestFootballAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app.sportdataapi.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getIncomingMatches: builder.query({
      query: () => ({
        url: `soccer/matches?season_id=3009&apikey=${
          process.env.REACT_APP_SPORT_API_KEY
        }&date_from=${dayjs().format("YYYY-MM-DD")}`,
      }),
    }),
    getFinishedMatches: builder.query({
      query: () => ({
        url: `soccer/matches?season_id=3009&apikey=${
          process.env.REACT_APP_SPORT_API_KEY
        }&date_to=${dayjs().format("YYYY-MM-DD")}`,
      }),
    }),
    getMatchesByDate: builder.query({
      query: ({ date }) => ({
        url: `soccer/matches?season_id=3009&apikey=${
          process.env.REACT_APP_SPORT_API_KEY
        }&date_from=${date}&date_to=${dayjs(date)
          .add(1, "day")
          .format("YYYY-MM-DD")}`,
      }),
    }),
    getMatchById: builder.query({
      query: ({ id }) => ({
        url: `https://app.sportdataapi.com/api/v1/soccer/matches/${id}?apikey=${process.env.REACT_APP_SPORT_API_KEY}`,
      }),
    }),
    getRefereeById: builder.query({
      query: ({ id }) => ({
        url: `https://app.sportdataapi.com/api/v1/soccer/referees/${id}?apikey=${process.env.REACT_APP_SPORT_API_KEY}`,
      }),
    }),
  }),
});

export const {
  useGetIncomingMatchesQuery,
  useGetFinishedMatchesQuery,
  useGetMatchesByDateQuery,
  useGetMatchByIdQuery,
  useGetRefereeByIdQuery,
} = requestFootballAPI;
