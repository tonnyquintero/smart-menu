import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
//import menu from '../assets/icons/icon_menu.svg';
//import logo from '../assets/logos/logo_yard_sale.svg';
import AppContext from '../context/appContext';
import inicio from '../assets/icons/icons8-casa.svg';
import moon from '../assets/icons/lunita.svg';
import buscar from '../assets/icons/buscar.svg';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';
import styles from '../styles/Header.module.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    };
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
                <li onClick={() => setToggleOrders(!toggleOrders)}>
                    <Image src={shoppingCart} alt="carrito"></Image>
                    {state.cart.length > 0 ? <div className="bg-red-300 rounded-full w-5 h-6 text-white text-center ">{state.cart.length}</div> : null}
                </li>
            </div>
            {toggle ? <Menu /> : ''}
            {toggleOrders && <MyOrder />}
        </nav>
    );
};

export default Header;
