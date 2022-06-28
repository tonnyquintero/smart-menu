import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/Modal.module.css';

function ModalOrder({ openModalOrder, setOpenModalOrder, children, selector }) {
    useEffect(() => {
        setOpenModalOrder(true);
    }, [selector]);

    if (openModalOrder) {
        return ReactDOM.createPortal(<div className={styles.ModalOrderBackground}>{(openModalOrder, setOpenModalOrder, children)}</div>, document.querySelector(selector));
    } else {
        return null;
    }
}

export default ModalOrder;
