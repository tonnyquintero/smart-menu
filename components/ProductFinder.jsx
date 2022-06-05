import React from 'react';

import { useState } from 'react';
//import AppContext from '../context/appContext';
//import useGetProducts from '../Hooks/useGetProducts';

import ProductItemFinder from './ProductItemFinder';
import data from '../pages/api/data.js';
//import styles from '../styles/ProductList.module.css';

const API = data;

function ProductFinder() {
    //const products = useGetProducts(API);
    const [busqueda, setBusqueda] = useState('');
    const [tablaUsuarios] = useState(API);
    const [usuarios, setUsuarios] = useState(API);

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    };
    const filtrar = (terminoBusqueda) => {
        var ResultadoBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.type.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                return elemento;
            }
        });
        setUsuarios(ResultadoBusqueda);
    };

    return (
        <div className=" pt-6">
            <div className="grid place-items-center pt-4 pb-2">
                <input className=" p-3 text-center pb-2 rounded-full bg-red-100" placeholder="Busca tu Comida" value={busqueda} onChange={handleChange} />
            </div>
            <h2 className="grid place-items-center text-red-400 pt-4 pb-4">PRODUCTOS</h2>
            <div>
                {usuarios &&
                    usuarios.map((filtrado) => {
                        if (filtrado.images.length > 0 && filtrado.images[0] !== '') {
                            return <ProductItemFinder product={filtrado} key={filtrado.id} />;
                        }
                    })}
            </div>
        </div>
    );
}
export default ProductFinder;
