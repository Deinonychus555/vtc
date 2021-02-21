import React from 'react';
import styles from './Header.module.css';

const Header = () => {

    const condition = true;
    return (
        <div>
            <h1 className={styles.title}> 
                <span>
                    VTC
                </span>
                <p className={styles.description}>Ahora puedes pedir tu VTC para traslados dentro de Madrid o recogidas en el aeropuerto.</p>
            </h1>
            <style jsx>
                {`
                    .title{
                        color: ${condition ? 'blue' : 'red'};
                    }
                `}
            </style>
        </div>
    )
}

export default Header