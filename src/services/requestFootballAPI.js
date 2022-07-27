import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const requestFootballAPI = createApi({
  reducerPath: "requestFootballAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://app.sportdataapi.com/api/v1/",
  }),
  endpoints: (builder) => ({
    getMatch: builder.query({
      query: () => ({
        url: `soccer/matches?apikey=${process.env.API_KEY}&season_id=3009`,
      }),
    }),
    getMatchById: builder.query({
      query: ({ id }) => ({
        url: `https://app.sportdataapi.com/api/v1/soccer/matches/${id}?apikey=${process.env.API_KEY}`,
      }),
    }),
  }),
});

export const { useGetMatchQuery, useGetMatchByIdQuery } = requestFootballAPI;
