import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '../context/appContext';
import shoppingHeroButton from '../assets/icons/shoppingHeroButton.jpg';
import styles from '../styles/ProductItemHero.module.css';

const ProductItemHero = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    const handleClick = (item) => {
        addToCart(item);
    };

    return (
        <div className={styles.ProductItemHero}>
            <Image className={styles.Imagen} layout='fill' height={250} width={450} src={product.images} alt={product.title}></Image>
            <div className={styles.Content}>
                <p>{product.title}</p>
            </div>

            <div className={styles.ContentFigure}>
                <figure onClick={() => handleClick(product)}>
                    <Image src={shoppingHeroButton} width={40} height={40} alt="Add To Cart" />
                </figure>
            </div>
        </div>
    );
};

export default ProductItemHero;
