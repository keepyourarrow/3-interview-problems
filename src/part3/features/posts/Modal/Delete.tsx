import { ModalBody } from "react-bootstrap";

import useAppDispatch from "../hooks/useAppDispatch";
import { deletePost } from "../postsSlice";

import Post from "../types/Post";
import Footer from "./Footer";

type Props = Omit<Post, "userId" | "body" | "title"> & {
    onHide?: () => void;
};

const Delete = ({ id, onHide = () => {} }: Props) => {
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deletePost(id));
        onHide();
    };

    return (
        <>
            <ModalBody>Вы действительно хотите удалить пост?</ModalBody>
            <Footer actionText="Удалить" type="danger" onAction={handleDelete} onHide={onHide} />
        </>
    );
};

export default Delete;
