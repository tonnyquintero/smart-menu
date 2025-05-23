import React, { useState } from 'react';
import { RefreshIcon } from '@heroicons/react/solid';
import ProductItem from '../components/ProductItem.jsx';
//import useGetProducts from '../Hooks/useGetProducts';
import styles from '../styles/ProductList.module.css';
import data from '../pages/api/data.js';

const API = data;

const ProductListRandom = () => {
    //const products = useGetProducts(API);
    // eslint-disable-next-line no-unused-vars
    const [openModal, setOpenModal] = useState(false);

    const comiFilra = API.filter((bebida) => bebida.type === 'Bebidas');
    const rand = Math.floor(Math.random() * comiFilra.length);
    const rValue = comiFilra[rand];

    const bebiFilra = API.filter((bebida) => bebida.recomended === true);
    const randuu = Math.floor(Math.random() * bebiFilra.length);
    const rValueuu = bebiFilra[randuu];

    return (
        <>
            <h2 className="mb-3 mt-8 text-center text-white text-xl font-bold">PEDIDO ALEATORIO</h2>
            <div className="flex justify-center pt-3">
                <div className={styles.ProductList}>{<ProductItem product={rValueuu} key={rValueuu.id} />}</div>
                <div className={styles.ProductList}>{<ProductItem product={rValue} key={rValue.id} />}</div>
            </div>
            <button className="bg-inherit mt-10 ml-4 w-12 bg-lime-400" onClick={setOpenModal}>
                <RefreshIcon className="w-6 h-6 ml-3" />
            </button>
        </>
    );
};

export default ProductListRandom;
