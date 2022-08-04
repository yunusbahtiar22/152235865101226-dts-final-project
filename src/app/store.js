import { configureStore } from "@reduxjs/toolkit";
import { requestFootballAPI } from "../services/requestFootballAPI";
import soccerDataSlice from "../reducers/soccerDataSlice";
import { requestNewsAPI } from "../services/requestNewsAPI";

export const store = configureStore({
  reducer: {
    soccer: soccerDataSlice,
    [requestFootballAPI.reducerPath]: requestFootballAPI.reducer,
    [requestNewsAPI.reducerPath]: requestNewsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      requestFootballAPI.middleware,
      requestNewsAPI.middleware
    );
  },
});
