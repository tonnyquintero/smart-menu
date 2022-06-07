import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
//import MyOrder from '@containers/MyOrder.jsx';
//import menu from '../assets/icons/icon_menu.svg';
//import logo from '../assets/logos/logo_yard_sale.svg';
//import AppContext from '../context/appContext.js';
import inicio from '../assets/icons/icons8-casa.svg';
import moon from '../assets/icons/lunita.svg';
import buscar from '../assets/icons/buscar.svg';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <nav className={styles.Nav}>
            <div className={styles['navbar-left']}>
                <li>
                    <Link href="/">
                        <Image alt="home" src={inicio} />
                    </Link>
                </li>
                <li>
                    <Link href="/finder">
                        <Image alt="buscar" src={buscar} />
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <Image alt="buscar" src={moon} />
                    </Link>
                </li>
                <li>
                    <Image src={shoppingCart} alt="carrito"></Image>
                </li>
            </div>
        </nav>
    );
};

export default Header;
