import { ReactNode, useState } from "react";

import ModalProps from "../types/ModalProps";

const useModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalProps, setModalProps] = useState<ModalProps | null>(null);

    const onOpenModal = (title: string, component: ReactNode) => {
        setIsModalOpen(true);
        setModalProps({ title, component });
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
        setModalProps(null);
    };

    return {
        isModalOpen,
        modalProps,
        onCloseModal,
        onOpenModal,
    };
};

export default useModal;
