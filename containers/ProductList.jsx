import React, { useState } from 'react';
import Image from 'next/image.js';
import dynamic from 'next/dynamic';
const ProductListRandom = dynamic(() => import('./ProductListRandom'), {
    ssr: false,
});
import ProductItem from '../components/ProductItem.jsx';
import ProductItemHero from '../components/ProductItemHero.jsx';
import Modal from '../components/Modal';
//import ModalButton from '../components/ModalButton';
import Random from '../assets/icons/random.png';
import useGetProducts from '../Hooks/useGetProducts';
import styles from '../styles/ProductList.module.css';
import stylos from '../styles/ModalButton.module.css';
import data from '../pages/api/data.js';

const API = data;

const ProductList = () => {
    const products = useGetProducts(API);
    const [openModal, setOpenModal] = useState(false);

    const onClickButton = () => {
        if (openModal) {
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }
    };

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
                <button className={stylos.ModalButton} onClick={() => onClickButton()}>
                    <Image src={Random} width={30} height={30}></Image>
                </button>
                {!!openModal && (
                    <Modal selector="#modal" setOpenModal={setOpenModal} openModal={openModal}>
                        <button className="ml-4 w-12 mt-36 bg-inherit" onClick={() => onClickButton()}>X</button>
                        <ProductListRandom />
                    </Modal>
                )}
            </section>
        </>
    );
};

export default ProductList;
