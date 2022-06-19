import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/appContext';
import { TrashIcon } from '@heroicons/react/outline';
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
            <button className=" w-6 bg-inherit content-center justify-center" onClick={() => handleRemove(indexValue)}>
                <TrashIcon className="h-8 w-8" />
            </button>
        </div>
    );
};

export default OrderItem;
