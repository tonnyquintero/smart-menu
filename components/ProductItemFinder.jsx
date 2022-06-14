import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/appContext';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import styles from '../styles/ProductItemFinder.module.css';

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <div className={styles.ProductItemFinder}>
            <Image src={product.images} width={240} height={240} alt={product.title} />
            <div className={styles['product-infoFinder']}>
                <div className="flex pb-3 pt-1 pr-2 pl-1 mb-3 h-8">
                    <p>$ {product.price}</p>
                    <figure onClick={() => handleClick(product)}>
                        <Image src={addToCartImage} alt="Add To Cart" />
                    </figure>
                </div>
                <div className="text-black dark:text-primary">
                    <p>{product.title}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
