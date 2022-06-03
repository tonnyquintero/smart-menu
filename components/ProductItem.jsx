import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/appContext';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import styles from '../styles/ProductItem.module.css';

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <div className={styles.ProductItem}>
            <Image src={product.images} width={240} height={240} alt={product.title} />
            <div className={styles['product-info']}>
                <div>
                    <p>$ {product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <Image src={addToCartImage} alt="Add To Cart" />
                </figure>
            </div>
        </div>
    );
};

export default ProductItem;
