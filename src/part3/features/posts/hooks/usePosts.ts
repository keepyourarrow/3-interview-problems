import { useEffect } from "react";

import useAppDispatch from "./useAppDispatch";
import useAppSelector from "./useAppSelector";

import { getPosts } from "../postsSlice";

const usePosts = () => {
    const { posts, status, error } = useAppSelector((state) => state.posts);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, []);

    return {
        posts,
        status,
        error,
    };
};

export default usePosts;
