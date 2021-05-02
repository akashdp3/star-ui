import React from 'react';
import ReactModal from 'react-modal';

/*
    Refer : https://reactcommunity.org/react-modal/
*/

ReactModal.setAppElement('#root');

const Modal = (props) => {
    const { children, styles } = props;
    ReactModal.defaultStyles = styles;

    return <ReactModal {...props}>{children}</ReactModal>;
};

export default Modal;
