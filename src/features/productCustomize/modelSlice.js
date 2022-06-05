import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bodyColor: "#ffffff"
};

export const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    itemSelected: (state, action) => {
      state.current = action.payload;
    },
    colorChanged: (state, action) => {
      state.bodyColor = action.payload;
    },
  },
});

export const { itemSelected, colorChanged } = modelSlice.actions;

export const selectModel = (state) => state.model;

export default modelSlice.reducer;
