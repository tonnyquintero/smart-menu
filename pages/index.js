import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Hero from '../components/Hero.jsx';

import { ClipboardListIcon } from '@heroicons/react/solid';

import ProductList from '../containers/ProductList';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Tu Restaurante</title>
                <meta name="description" content="Aplicacion para tu restaurante" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-white dark:bg-black">
                {loading ? (
                    <>
                        {/* <div className=" flex justify-center h-12 fixed z-10 pt-2 bg-white dark:bg-black w-full">
                            <ClipboardListIcon className=" w-6 h-6" />
                            <h1 className="font-bold text-xl pl-1">Tu Nombre de Restaurante</h1>
                        </div> */}
                        <Hero />
                        <ProductList />
                    </>
                ) : (
                    <>
                        <div className=" flex justify-center h-12 fixed z-10 pt-2 bg-white dark:bg-black w-full">
                            <ClipboardListIcon className=" text-primary w-6 h-6" />
                            <h1 className="text-white text-center font-bold">BIENVENIDOS...</h1>
                        </div>

                        <div className={styles.spinnerContainer}>
                            <div className={styles.loadingSpinner}></div>
                        </div>
                    </>
                )}
            </main>
            <footer className={styles.footer}>
                <a href="https://www.instagram.com/anthonnyy_quintero?igsh=dXgwcWx6N3dzaDF1" target="_blank" rel="noopener noreferrer">
                    Desarrolado por Tonnys LAB{' '} 
                </a>
                <a href="https://www.instagram.com/anthonnyy_quintero?igsh=dXgwcWx6N3dzaDF1" target="_blank" rel="noopener noreferrer">
                    Click aqui para contacto 
                </a>
            </footer>
        </div>
    );
}
