import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 1000 },
  reducers: {
    circleRadius: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { circleRadius } = counterSlice.actions;
export default counterSlice.reducer;
