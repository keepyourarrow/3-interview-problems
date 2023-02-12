import { useState } from "react";
import { ModalBody } from "react-bootstrap";

import useAppDispatch from "../hooks/useAppDispatch";
import { editPost } from "../postsSlice";

import Post from "../types/Post";
import EditForm from "./EditForm";
import Footer from "./Footer";

type Props = {
    post: Post;
    onHide?: () => void;
};

const Edit = ({ post, onHide = () => {} }: Props) => {
    const [fields, setFields] = useState<Post>({ ...post });

    const dispatch = useAppDispatch();

    const handleEdit = () => {
        dispatch(editPost(fields));
        onHide();
    };

    const onChangeField = (key: string, value: string | number) => {
        setFields({ ...fields, [key]: value });
    };

    return (
        <>
            <ModalBody>
                <EditForm post={post} onChangeField={onChangeField} />
            </ModalBody>
            <Footer actionText="Сохранить" type="success" onAction={handleEdit} onHide={onHide} />
        </>
    );
};

export default Edit;
