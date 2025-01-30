import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { Button } from "./Button";

interface ModalProps {
    isOpen: boolean;
    title?: string;
    okText?: string;
    closeText?: string;
    onOk: () => void;
    onClose: () => void;
    children: React.ReactNode;
}

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
`;

const ModalHeader = styled.h2`
    margin: 0 0 20px;
`;

const ModalFooter = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
`;

export const Modal: FC<ModalProps> = ({
                                          isOpen,
                                          title,
                                          okText = 'OK',
                                          closeText = 'Close',
                                          onOk,
                                          onClose,
                                          children,
                                      }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleEsc);
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <ModalOverlay onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                {title && <ModalHeader>{title}</ModalHeader>}
                <div>{children}</div>
                <ModalFooter>
                    <Button onClick={onOk} height='20px'>{okText}</Button>
                    <Button onClick={onClose} height='20px'>{closeText}</Button>
                </ModalFooter>
            </ModalContent>
        </ModalOverlay>,
        document.body
    );
};
