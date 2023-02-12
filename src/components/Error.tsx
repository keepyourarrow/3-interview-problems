import "./index.scss";

import ErrorType from "../part3/features/posts/types/Error";

type Props = {
    error: ErrorType;
};

const Error = ({ error }: Props) => {
    return (
        <div>
            <span>Error: </span>
            <span className="error">{error}</span>
        </div>
    );
};

export default Error;
