import "./index.scss";

import { useState } from "react";
import classNames from "classnames";

import Button from "../part1/Button";

const Dropdown = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="dropdown-container">
            <Button onClick={() => setOpen(!open)}> Dropdown</Button>
            <ul className={classNames("dropdown", { dropdown_open: open })}>
                {Array.from(Array(3)).map((_, index) => (
                    <li className="dropdown__item">{`item${index + 1}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dropdown;
