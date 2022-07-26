import { configureStore } from "@reduxjs/toolkit";
import { requestFootballAPI } from "../services/requestFootballAPI";

export const store = configureStore({
  reducer: {
    [requestFootballAPI.reducerPath]: requestFootballAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(requestFootballAPI.middleware);
  },
});
