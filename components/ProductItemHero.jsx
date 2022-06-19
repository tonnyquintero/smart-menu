import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/appContext';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import styles from '../styles/ProductItemHero.module.css';

const ProductItemHero = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <div className={styles.ProductItemHero}>
            <Image className={styles.Imagen} layout="fill" priority={true} src={product.images} alt={product.title}></Image>
            <div className={styles.Content}>
                <p>{product.title}</p>
            </div>

            <div className={styles.ContentFigure}>
                <figure onClick={() => handleClick(product)}>
                    <Image src={addToCartImage} width={45} height={45} alt="Add To Cart" />
                </figure>
            </div>
        </div>
    );
};

export default ProductItemHero;
