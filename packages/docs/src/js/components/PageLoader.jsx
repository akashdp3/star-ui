import React from 'react';
import ReactModal from 'react-modal';

import Modal from './Modal';

const styles = {
    ...ReactModal.defaultStyles,
    overlay: {
        ...ReactModal.defaultStyles.overlay,
        zIndex: '3'
    },
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none'
    }
};

const PageLoader = ({ isLoading }) => {
    return (
        <div>
            <Modal styles={styles} isOpen={isLoading} contentLabel="Modal">
                <span>Loading......</span>
            </Modal>
        </div>
    );
};

export default PageLoader;
