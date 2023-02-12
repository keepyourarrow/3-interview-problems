// src/app/store.ts
import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";

import postsReducer from "../features/posts/postsSlice";

const store = configureStore({
    reducer: {
        posts: postsReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;
