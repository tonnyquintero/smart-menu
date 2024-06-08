import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MyOrder from '../containers/MyOrder';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import AppContext from '../context/appContext';
import inicio from '../assets/icons/icons8-casa.svg';
import buscar from '../assets/icons/buscar.svg';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';
import styles from '../styles/Header.module.css';

const Header = () => {
    const [toggleOrders, setToggleOrders] = useState(false);
    const { state } = useContext(AppContext);

    const { systemTheme, theme, setTheme } = useTheme();

    const renderThemeChanger = () => {
        const currentTheme = theme === 'system' ? systemTheme : theme;

        if (currentTheme === 'dark') {
            return <SunIcon className="w-9 h-9 pb-2 text-yellow-300 " role="button" onClick={() => setTheme('light')} />;
        } else {
            return <MoonIcon className="w-9 h-9 pb-2 text-white" role="button" onClick={() => setTheme('dark')} />;
        }
    };

    return (
        <div className="bg-black dark:bg-gray-700">
            {toggleOrders && (
                <>
                    <div className={styles.CloseButtonContainer}>
                        <button className={styles.CloseOrder} onClick={() => setToggleOrders(!toggleOrders)}>
                            X
                        </button>
                    </div>
                </>
            )}

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
                        {/* Logo */}

                        {renderThemeChanger()}
                    </li>
                    <li onClick={() => setToggleOrders(!toggleOrders)}>
                        <Image src={shoppingCart} alt="carrito"></Image>
                        {state.cart.length > 0 ? <div className="bg-primary rounded-full w-5 h-6 text-black text-center ">{state.cart.length}</div> : null}
                    </li>
                </div>
                {toggleOrders && (
                    <>
                        <MyOrder />
                    </>
                )}
            </nav>
        </div>
    );
};

export default Header;
