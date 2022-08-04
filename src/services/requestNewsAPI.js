import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const requestNewsAPI = createApi({
  reducerPath: "requestNewsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsdata.io/api/1/",
  }),
  endpoints: (builder) => ({
    getLatestNews: builder.query({
      query: ({ page }) => ({
        url: `news?category=sports&language=en&page=${page}&apikey=${process.env.REACT_APP_NEWS_API_KEY}`,
      }),
    }),
  }),
});

export const { useGetLatestNewsQuery } = requestNewsAPI;
