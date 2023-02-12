import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import Status from "./enums/StatusEnums";
import Post from "./types/Post";
import ErrorType from "./types/Error";
import { getPosts as apiGetPosts } from "../../api/get";

export type State = {
    posts: Post[];
    status: Status;
    error: ErrorType;
};

const initialState: State = {
    posts: [],
    status: Status.idle,
    error: null,
};

export const getPosts = createAsyncThunk("getPosts", async () => {
    try {
        return await apiGetPosts();
    } catch (err) {
        return Promise.reject(err);
    }
});

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        editPost: (state, action) => {
            const newPosts = state.posts.map((item) => {
                if (item.id == action.payload.id) {
                    return { ...action.payload };
                }
                return item;
            });

            return { ...state, posts: newPosts };
        },
        deletePost: (state, action) => {
            const newPosts = state.posts.filter((item) => item.id != action.payload);

            console.log(action, newPosts.length);

            return { ...state, posts: newPosts };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state) => {
                state.status = Status.loading;
                state.error = null;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.status = Status.idle;
                state.posts = action.payload;
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.status = Status.failed;
                state.error = action.error.message;
            });
    },
});

export const { editPost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;
