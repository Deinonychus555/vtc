import React from 'react';
import styles from './Layout.module.css';
import NavBar from '../NavBar/index';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({children}) => {
    return (
        <>
            <NavBar/>
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    )
}

export default Layout;