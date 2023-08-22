import { createSlice } from "@reduxjs/toolkit";

export const circleRadiusSlice = createSlice({
  name: "circleRadius",
  initialState: { value: 1000 },
  reducers: {
    circleRadius: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { circleRadius } = circleRadiusSlice.actions;
export default circleRadiusSlice.reducer;
