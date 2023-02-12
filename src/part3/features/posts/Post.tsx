import { ReactNode } from "react";
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";
import { FiEdit2 } from "@react-icons/all-files/fi/FiEdit2";

import PostType from "./types/Post";
import Button from "./Button";
import Edit from "./Modal/Edit";
import Delete from "./Modal/Delete";

type Props = {
    post: PostType;
    onOpenModal: (title: string, component: ReactNode) => void;
};

const Post = ({ post, onOpenModal }: Props) => {
    const handleDelete = (post: PostType) => {
        onOpenModal(post.title, <Delete id={post.id} />);
    };

    const handleEdit = (post: PostType) => {
        onOpenModal(post.title, <Edit post={post} />);
    };

    return (
        <tr>
            <td>{post.id}</td>
            <td>{post.userId}</td>
            <td>{post.title}</td>
            <td className="post-body__short">{post.body}</td>
            <td>
                <div className="btn-actions">
                    <Button color="red" onClick={() => handleDelete(post)}>
                        <AiFillDelete />
                    </Button>
                    <Button color="#ffab00" onClick={() => handleEdit(post)}>
                        <FiEdit2 />
                    </Button>
                </div>
            </td>
        </tr>
    );
};

export default Post;
