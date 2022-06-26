import React, { useContext } from 'react';
import Link from 'next/link';
import OrderItem from '../components/OrderItem.jsx';
import { PhoneIcon } from '@heroicons/react/outline';
import AppContext from '../context/appContext';
import styles from '../styles/MyOrder.module.css';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    return (
        <div className={styles.MyOrder}>
            {state.cart.length > 0 ? (
                <>
                    <div className="title-container">
                        <p className={styles.tittle}>Mi Orden</p>
                    </div>

                    <div className="mb-5">
                        {state.cart.map((item, index) => (
                            <OrderItem indexValue={index} key={index} item={item} />
                        ))}
                        <div className={styles.totalSum}>
                            <p className="pb-2">
                                <span className="font-bold text-lg">Total</span>
                            </p>
                            <p className="font-bold text-primary">$ {sumTotal()}</p>
                        </div>
                        <div className="pt-2">
                            <Link href="https://api.whatsapp.com/send?phone=573234257398&text=hola,%20quiero%20enviarte%20esta%20imagen%20con%20mi%20pedido">
                                <button className=" flex pl-2 gap-1 ml-auto mr-auto"><PhoneIcon className=" flex w-4 h-7"/> Enviar</button>
                            </Link>
                        </div>
                    </div>
                </>
            ) : (
                <div className={styles.empty}>
                    Aun no tienes ningun producto, Selecciona uno! <div>🔥🔥🔥</div>
                </div>
            )}
        </div>
    );
};

export default MyOrder;
