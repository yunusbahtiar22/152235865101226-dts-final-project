import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  txtFilter: "",
};

const soccerDataSlice = createSlice({
  name: "soccer",
  initialState,
  reducers: {
    search: (state, action) => {
      state.txtFilter = action.payload;
    },
  },
});

export const { search } = soccerDataSlice.actions;
export const selectTxtFilter = (state) => state.soccer.txtFilter;
export default soccerDataSlice.reducer;
