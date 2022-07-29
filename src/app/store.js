import { configureStore } from "@reduxjs/toolkit";
import { requestFootballAPI } from "../services/requestFootballAPI";
import soccerDataSlice from "../reducers/soccerDataSlice";

export const store = configureStore({
  reducer: {
    soccer: soccerDataSlice,
    [requestFootballAPI.reducerPath]: requestFootballAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(requestFootballAPI.middleware);
  },
});
