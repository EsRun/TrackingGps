import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 1000 },
  reducers: {
    circleRadiusSlice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { circleRadiusSlice } = counterSlice.actions;
export default counterSlice.reducer;
