import React, { useState } from 'react';
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
            <h2 className="mb-3 mt-40 text-center text-white text-xl font-bold">PEDIDO ALEATORIO</h2>
            <button onClick={setOpenModal}>R</button>
            <div className="flex pl-7 pt-3">
                <div className={styles.ProductList}>{<ProductItem product={rValueuu} key={rValueuu.id} />}</div>
                <div className={styles.ProductList}>{<ProductItem product={rValue} key={rValue.id} />}</div>
            </div>
        </>
    );
};

export default ProductListRandom;
