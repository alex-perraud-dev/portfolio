import PropTypes from 'prop-types';
import {
    Button,
    Modal as ChakraModal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react';
import React from 'react';

const Modal = ({ title, description, isOpen, onClose }) => {
    const Overlay = () => (
        <ModalOverlay
            bg='none'
            backdropFilter='auto'
            backdropInvert='10%'
            backdropBlur='2px'
        />
    );
    const [overlay, setOverlay] = React.useState(<Overlay />);

    return (
        <ChakraModal isCentered size={'xl'} isOpen={isOpen} onClose={onClose} motionPreset={'slideInBottom'}>
            {overlay}
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text>{description}</Text>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Fermer</Button>
                </ModalFooter>
            </ModalContent>
        </ChakraModal>
    );
};

Modal.propTypes = {
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
