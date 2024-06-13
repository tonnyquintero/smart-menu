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
            <Image src={product.images} width={220} height={220} alt={product.title} />
            <div className={styles['product-info']}>
                <div>
                    <div className="flex pb-0 pt-8 pr-2 pl-1">
                        <p>$ {product.price}</p>
                    </div>
                    <h5>{product.title}</h5>
                        <figure onClick={() => handleClick(product)}>
                            <Image className={styles['carrito']} src={addToCartImage} alt="Add To Cart" />
                        </figure>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
