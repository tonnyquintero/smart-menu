import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import OrderItem from '../components/OrderItem.jsx';
import AppContext from '../context/appContext';
import flechita from '../assets/icons/flechita.svg';
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
            <div className="title-container">
                <Image src={flechita} alt="arrow" />
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map((item, index) => (
                    <OrderItem indexValue={index} key={index} item={item} />
                ))}
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                <Link className={styles['primary-button']} href="/checkout">
                    Checkout
                </Link>
            </div>
        </div>
    );
};

export default MyOrder;
