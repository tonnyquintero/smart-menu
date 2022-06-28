import React from 'react';
import Image from 'next/image';
import styles from '../styles/OrderItem.module.css';

const OrderItemSend = (props) => {
    const { item } = props;


    return (
        <div className={styles.OrderItem}>
            <figure>
                <Image src={item?.images} width={70} height={70} alt={item?.title} />
            </figure>
            <p>{item?.title}</p>
            <p>${item?.price}</p>
        </div>
    );
};

export default OrderItemSend;