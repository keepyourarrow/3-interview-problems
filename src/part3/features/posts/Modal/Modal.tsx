import "./index.scss";

import { cloneElement, ReactElement } from "react";
import BModal from "react-bootstrap/Modal";

import ModalProps from "../types/ModalProps";

type Props = {
    show: boolean;
    modalProps: ModalProps | null;
    onHide: () => void;
};

const Modal = ({ show, modalProps, onHide }: Props) => {
    const { title, component } = modalProps || {};

    return (
        <BModal show={show} onHide={onHide}>
            <BModal.Header closeButton>
                <BModal.Title>{title}</BModal.Title>
            </BModal.Header>
            {component && cloneElement(component as ReactElement<any>, { onHide })}
        </BModal>
    );
};

export default Modal;
