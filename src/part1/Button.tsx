import { MouseEvent, ReactNode } from "react";
import classNames from "classnames";
import { TailSpin } from "react-loading-icons";

import ButtonType from "./ButtonType";

type Props = {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    type?: ButtonType;
    min?: boolean;
    large?: boolean;
    block?: boolean;
    outlined?: boolean;
    text?: boolean;
    onClick?: (event: MouseEvent) => void;
};

const Button = ({
    children,
    disabled,
    loading,
    type = "primary",
    min,
    large,
    block,
    outlined,
    text,
    onClick,
}: Props) => {
    const buttonClassName = classNames("button", `${type}`, {
        button_text: text,
        button_outlined: outlined,
        button_min: min,
        button_large: large,
        button_block: block,
    });

    return (
        <button disabled={disabled} className={buttonClassName} onClick={(e) => onClick?.(e)}>
            {loading ? <TailSpin stroke="currentColor" height="1.25em" /> : children}
        </button>
    );
};

export default Button;
