import { ModalFooter } from "react-bootstrap";

import Button from "../../../../part1/Button";
import ButtonType from "../../../../part1/ButtonType";

type Props = {
    actionText: string;
    type: ButtonType;
    onAction: () => void;
    onHide: () => void;
};

const Footer = ({ actionText, type, onAction, onHide }: Props) => {
    return (
        <ModalFooter>
            <Button type={type} onClick={onAction}>
                {actionText}
            </Button>
            <Button outlined text onClick={onHide}>
                Отменить
            </Button>
        </ModalFooter>
    );
};

export default Footer;
