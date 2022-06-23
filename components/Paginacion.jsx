import React, { useEffect } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid';
import { ChevronRightIcon } from '@heroicons/react/solid';
import ReactDOM from 'react-dom';
import styles from '../styles/Paginacion.module.css';

const Paginacion = ({ isOpen, setIsOpen, children, plato, setPlato, maximo, selector }) => {
    useEffect(() => {
        setIsOpen(true);
    }, [selector]);

    const nextPage = () => {
        setPlato(plato + 1);
    };

    const prevPage = () => {
        setPlato(plato - 1);
    };

    if (isOpen) {
        return ReactDOM.createPortal(
            <div className={styles.Paginacion}>
                {(isOpen, setIsOpen, children)}
                <button className=" bg-slate-500 mt-10" disabled={plato === 1 || plato < 1} onClick={prevPage}>
                    <ChevronLeftIcon className="w-6 h-6" />
                </button>
                <button className=" bg-slate-500 mt-10 ml-2" disabled={plato === Math.ceil(maximo) || plato > Math.ceil(maximo)} onClick={nextPage}>
                    <ChevronRightIcon className="w-6 h-6" />
                </button>
            </div>,
            document.querySelector(selector)
        );
    } else {
        return null;
    }
};

export default Paginacion;
