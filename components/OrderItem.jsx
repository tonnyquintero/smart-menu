import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/appContext';
import iconClose from '../assets/icons/icon_close.png';
import styles from '../styles/OrderItem.module.css';

const OrderItem = (props) => {
    const { item, indexValue } = props;
    const { removeFromCart } = useContext(AppContext);

    const handleRemove = (index) => {
        removeFromCart(index);
    };

    return (
        <div className={styles.OrderItem}>
            <figure>
                <Image src={item?.images} width={70} height={70} alt={item?.title} />
            </figure>
            <p>{item?.title}</p>
            <p>${item?.price}</p>
            <Image src={iconClose} width={25} height={25} alt="close" onClick={() => handleRemove(indexValue)} />
        </div>
    );
};

export default OrderItem;
