import React from 'react';
import Link from 'next/link';
import styles from '../styles/Menu.module.css';

const Menu = () => {
    return (
        <div className={styles.Menu}>
            <ul>
                <li>
                    <Link href="/" className="title">
                        My orders
                    </Link>
                </li>
                <li>
                    <Link href="/">My account</Link>
                </li>
                <li>
                    <Link href="/">Sign out</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;
