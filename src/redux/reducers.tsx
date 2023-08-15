import { createSlice } from "@reduxjs/toolkit";

export const circleSlice = createSlice({
  name: "circle",
  initialState: { value: 1000 },
  reducers: {
    circleRadius: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { circleRadius } = circleSlice.actions;
export default circleSlice.reducer;
