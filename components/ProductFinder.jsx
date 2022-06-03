import React from 'react';

import { useState } from 'react';
//import AppContext from '../context/appContext';
import useGetProducts from '../Hooks/useGetProducts';

import ProductItem from './ProductItem';
import data from '../pages/api/data.js';
import styles from '../styles/ProductList.module.css';

const API = data;

function ProductFinder() {
    const products = useGetProducts(API);
    const [busqueda, setBusqueda] = useState('');
    const [tablaUsuarios, setTablaUsusarios] = useState(API);
    const [usuarios, setUsuarios] = useState(products);

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    };
    const filtrar = (terminoBusqueda) => {
        var ResultadoBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            || elemento.type.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        setUsuarios(ResultadoBusqueda);
    };

    return (
        <>
            <input placeholder="Busca tu Comida" value={busqueda} onChange={handleChange} className="bg-red-50" />
            <h2>PRODUCTOS</h2>
            <div>
                {usuarios.map((filtrado) => {
                    if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                        return <ProductItem product={filtrado} key={filtrado.id} />;
                    }
                })}
            </div>
        </>
    );
}
export default ProductFinder;
