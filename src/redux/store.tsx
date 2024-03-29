import { configureStore } from "@reduxjs/toolkit";
import { circleSlice, authSlice } from "./reducers";

export const store = configureStore({
  reducer: { circleSlice: circleSlice.reducer, authSlice: authSlice.reducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
