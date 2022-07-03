import React, { useState } from 'react';
import Image from 'next/image';
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
import Paginacion from '../components/Paginacion.jsx';

const API = data;

const ProductList = () => {
    const products = useGetProducts(API);
    const [openModal, setOpenModal] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const onClickButton = () => {
        if (openModal) {
            setOpenModal(false);
        } else {
            setOpenModal(true);
        }
    };

    const [plato, setPlato] = useState(1);
    const [porPlato] = useState(1);

    const maximo = 4;

    return (
        <>
            <div className={styles.ProductItemHero}>
                {products
                    .filter((product) => product.recomended === true)
                    .slice((plato - 1) * porPlato, (plato - 1) * porPlato + porPlato)
                    .map((filtrado) => {
                        if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                            return <ProductItemHero product={filtrado} key={filtrado.id} />;
                        }
                    })}
            </div>

            {isOpen && <Paginacion selector="#botones" setIsOpen={setIsOpen} isOpen={isOpen} plato={plato} setPlato={setPlato} maximo={maximo} />}

            <section className={styles['main-container']}>
                <h2 className="text-black pt-2 ml-2 mb-2 font-bold dark:text-primary md:text-center md:pt-14 md:pb-4 ">EJEMPLO DE LASAGNAS</h2>
                <div className={styles.ProductList}>
                    {products
                        .filter((product) => product.type === 'Lasagnas')
                        .map((filtrado) => {
                            if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                                return <ProductItem product={filtrado} key={filtrado.id} />;
                            }
                        })}
                </div>
                <h2 className="text-black pt-2 ml-2 mb-2 font-bold dark:text-primary md:text-center md:pt-4 md:pb-4">EJEMPLO DE PASTAS</h2>
                <div className={styles.ProductList}>
                    {products
                        .filter((product) => product.type === 'Pastas')
                        .map((filtrado) => {
                            if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                                return <ProductItem product={filtrado} key={filtrado.id} />;
                            }
                        })}
                </div>
                <h2 className="text-black pt-2 ml-2 mb-2 font-bold dark:text-primary md:text-center md:pt-4 md:pb-4">EJEMPLO DE HAMBURGUESAS</h2>
                <div className={styles.ProductList}>
                    {products
                        .filter((product) => product.type === 'Hamburguesas')
                        .map((filtrado) => {
                            if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                                return <ProductItem product={filtrado} key={filtrado.id} />;
                            }
                        })}
                </div>
                <h2 className="text-black pt-2 ml-2 mb-2 font-bold dark:text-primary md:text-center md:pt-4 md:pb-4">EJEMPLO DE BEBIDAS</h2>
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
                        <button className="ml-4 w-12 mt-36 bg-inherit" onClick={() => onClickButton()}>
                            X
                        </button>
                        <ProductListRandom />
                    </Modal>
                )}
            </section>
        </>
    );
};

export default ProductList;
