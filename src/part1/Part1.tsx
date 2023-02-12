import "./index.scss";

import { BsFillAlarmFill } from "@react-icons/all-files/bs/BsFillAlarmFill";

import Header from "../components/Header";
import Button from "./Button";

const Part1 = () => {
    const buttons = [
        { text: "Text with Icon", icon: <BsFillAlarmFill /> },
        { props: { type: "danger" } as const, text: "Type = danger" },
        { props: { loading: true }, text: "Loading" },
        { props: { disabled: true }, text: "Disabled" },
        { props: { min: true }, text: "Min" },
        { props: { large: true }, text: "Large" },
        { props: { block: true }, text: "Block" },
        { props: { text: true }, text: "Text" },
        { props: { outlined: true }, text: "Outlined" },
    ];
    return (
        <div className="part1-container">
            <Header title="Part 1" />
            {buttons.map(({ props, text, icon }) => (
                <div className="part1-item">
                    <Button {...props}>
                        <div className="text-with-icon">
                            {text}
                            {icon}
                        </div>
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default Part1;
