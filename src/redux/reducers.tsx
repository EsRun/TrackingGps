import { createSlice } from "@reduxjs/toolkit";

export const circleSlice = createSlice({
  name: "counter",
  initialState: { value: 1000 },
  reducers: {
    circleRadius: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const authSlice = createSlice({
  name: "auth",
  initialState: false,
  reducers: {
    authenticated: (state, action) => {
      state = action.payload;
    },
  },
});

export const { circleRadius } = circleSlice.actions;
export const { authenticated } = authSlice.actions;
