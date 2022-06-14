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
        <>
            <div className={styles.ProductItemHero}>
                {products
                    .filter((product) => product.recomended === true)
                    .map((filtrado) => {
                        if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                            return <ProductItemHero product={filtrado} key={filtrado.id} />;
                        }
                    })}
            </div>

            <section className={styles['main-container']}>
                <h2 className="text-black pt-2 ml-2 mb-2 font-bold dark:text-primary">LASAGNAS</h2>
                <div className={styles.ProductList}>
                    {products
                        .filter((product) => product.type === 'Lasagnas')
                        .map((filtrado) => {
                            if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                                return <ProductItem product={filtrado} key={filtrado.id} />;
                            }
                        })}
                </div>
                <h2 className="text-black pt-2 ml-2 mb-2 font-bold dark:text-primary">PASTAS</h2>
                <div className={styles.ProductList}>
                    {products
                        .filter((product) => product.type === 'Pastas')
                        .map((filtrado) => {
                            if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                                return <ProductItem product={filtrado} key={filtrado.id} />;
                            }
                        })}
                </div>
                <h2 className="text-black pt-2 ml-2 mb-2 font-bold dark:text-primary">HAMBURGUESAS</h2>
                <div className={styles.ProductList}>
                    {products
                        .filter((product) => product.type === 'Hamburguesas')
                        .map((filtrado) => {
                            if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                                return <ProductItem product={filtrado} key={filtrado.id} />;
                            }
                        })}
                </div>
                <h2 className="text-black pt-2 ml-2 mb-2 font-bold dark:text-primary">BEBIDAS</h2>
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
        </>
    );
};

export default ProductList;
