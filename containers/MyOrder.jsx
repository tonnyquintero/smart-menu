import React, { useContext, useState } from 'react';
import Link from 'next/link';
import OrderItem from '../components/OrderItem.jsx';
import OrderItemSend from '../components/OrderItemSend.jsx';
import { PhoneIcon } from '@heroicons/react/outline';
import AppContext from '../context/appContext';
import ModalOrder from '../components/ModalOrder.jsx';
import styles from '../styles/MyOrder.module.css';

const MyOrder = () => {
    const { state } = useContext(AppContext);
    const [openModalOrder, setOpenModalOrder] = useState(false);

    const sumTotal = () => {
        const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    };

    const onClickButton = () => {
        if (openModalOrder) {
            setOpenModalOrder(false);
        } else {
            setOpenModalOrder(true);
        }
    };

    const saludo = 'Hola';


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
                                <button className=" flex pl-2 gap-1 ml-auto mr-auto" onClick={() => onClickButton()}><PhoneIcon className=" flex w-4 h-7"/> Enviar</button>
                        </div>
                    </div>
                    {!!openModalOrder && (
                    <ModalOrder selector="#modalOrder" setOpenModalOrder={setOpenModalOrder} openModalOrder={openModalOrder}>
                       <div className="ml-6 mr-6 mt-28 bg-inherit">
                        <h1 className="mb-3 mt-8 text-center text-primary text-xl font-bold">Debes Tomar una Captura de Pantalla Primero</h1>
                       <div>
                       {state.cart.map((item, index) => (
                            <OrderItemSend indexValue={index} key={index} item={item} />
                        ))}
                    </div>
                        <Link href={`https://api.whatsapp.com/send?phone=573054364206&text=${saludo},%20quiero%20enviarte%20esta%20imagen%20con%20mi%20pedido`}>
                            <button className=" flex pl-2 gap-1 ml-auto mr-auto"><PhoneIcon className=" flex w-4 h-7"/> Listo</button>
                        </Link>
                       </div>
                    </ModalOrder>
                )}
                </>
            ) : (
                <div className={styles.empty}>
                    <h2 className="pl-3 pr-3">Aun no tienes ningun producto, Selecciona uno!</h2> <div>🔥🔥🔥</div>
                </div>
            )}
        </div>
    );
};

export default MyOrder;
