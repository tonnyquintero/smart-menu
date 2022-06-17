import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/Modal.module.css';

function Modal({ openModal, setOpenModal, children, selector }) {
    useEffect(() => {
        setOpenModal(true);
    }, [selector]);

    if (openModal) {
        return ReactDOM.createPortal(<div className={styles.ModalBackground}>{(openModal, setOpenModal, children)}</div>, document.querySelector(selector));
    } else {
        return null;
    }
}

export default Modal;
