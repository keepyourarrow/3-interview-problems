import "./index.scss";

import Table from "react-bootstrap/Table";

import usePosts from "./hooks/usePosts";
import useModal from "./hooks/useModal";
import Status from "./enums/StatusEnums";

import Error from "../../../components/Error";
import Loading from "../../../components/Loading";
import Post from "./Post";
import Modal from "./Modal/Modal";

const Posts = () => {
    const { posts, status, error } = usePosts();
    const { isModalOpen, modalProps, onCloseModal, onOpenModal } = useModal();

    if (status == Status.loading) {
        return <Loading />;
    }

    if (status == Status.failed) {
        return <Error error={error} />;
    }

    return (
        <div className="posts-container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <Post key={post.id} post={post} onOpenModal={onOpenModal} />
                    ))}
                </tbody>
            </Table>

            <Modal show={isModalOpen} modalProps={modalProps} onHide={onCloseModal} />
        </div>
    );
};

export default Posts;
