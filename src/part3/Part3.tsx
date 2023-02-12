import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../components/Header";
import Posts from "./features/posts/Posts";

const Part3 = () => {
    return (
        <div className="part part3-container">
            <Header title="Part 3" />
            <Posts />
        </div>
    );
};

export default Part3;
