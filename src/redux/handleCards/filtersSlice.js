import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filterInitialState,
  reducers: {
    checkFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { checkFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
