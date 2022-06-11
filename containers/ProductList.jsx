import React from 'react';
import ProductItem from '../components/ProductItem.jsx';
import ProductItemHero from '../components/ProductItemHero.jsx';
import useGetProducts from '../Hooks/useGetProducts';
import styles from '../styles/ProductList.module.css';
import data from '../pages/api/data.js';

const API = data;

const ProductList = () => {
    const products = useGetProducts(API);
    return (
        <section className={styles['main-container']}>
            <div className={styles.ProductItemHero}>
                {products
                    .filter((product) => product.recomended === true)
                    .map((filtrado) => {
                        if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                            return <ProductItemHero product={filtrado} key={filtrado.id} />;
                        }
                    })}
            </div>
            <h2>LASAGNAS</h2>
            <div className={styles.ProductList}>
                {products
                    .filter((product) => product.type === 'Lasagnas')
                    .map((filtrado) => {
                        if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                            return <ProductItem product={filtrado} key={filtrado.id} />;
                        }
                    })}
            </div>
            <h2>PASTAS</h2>
            <div className={styles.ProductList}>
                {products
                    .filter((product) => product.type === 'Pastas')
                    .map((filtrado) => {
                        if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                            return <ProductItem product={filtrado} key={filtrado.id} />;
                        }
                    })}
            </div>
            <h2>HAMBURGUESAS</h2>
            <div className={styles.ProductList}>
                {products
                    .filter((product) => product.type === 'Hamburguesas')
                    .map((filtrado) => {
                        if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                            return <ProductItem product={filtrado} key={filtrado.id} />;
                        }
                    })}
            </div>
            <h2>BEBIDAS</h2>
            <div className={styles.ProductList}>
                {products
                    .filter((product) => product.type === 'Bebidas')
                    .map((filtrado) => {
                        if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                            return <ProductItem product={filtrado} key={filtrado.id} />;
                        }
                    })}
            </div>
        </section>
    );
};

export default ProductList;
