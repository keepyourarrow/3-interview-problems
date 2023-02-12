import api from "./";

export const getPosts = async () => {
    return await api({
        endPoint: "/posts",
    });
};
