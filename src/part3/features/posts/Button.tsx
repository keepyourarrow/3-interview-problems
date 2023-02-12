import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    color: string;
    onClick: () => void
};

const Button = ({ children, color, onClick }: Props) => {
    return (
        <button className="btn-action" style={{ color }} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
