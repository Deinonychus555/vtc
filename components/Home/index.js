import React from 'react';
import Meta from '../Meta';
import './Home.module.css';
import styles from './Home.module.css';

const Home = () => {
    
    const icons = "🏅,👉,【,】,▷,◁, 👆, ☎";
    const title = "▷ VTC Madrid - Nunca pedir transporte fue tan sencillo"
    const description = "Choffers amables y profesionales, se realizan traslados al aeropuerto y cualquier zona de Madrid. Contacta con nostros 👆"
    
    return (
        <>
            <Meta title={title} description={description} />
            <div className={`${styles.grid}`}>
                <header className={`${styles.header}`}>
                    <div className={styles.mainImage}>
                    </div>
                    <address className={styles.author}><a rel="author" className="" href="#">Marcelo Sastre</a></address> 
                    <h1 className={styles.title}> 
                        <span>
                            VTC
                        </span>
                        <p className={styles.description}>Ahora puedes pedir tu VTC para traslados dentro de Madrid o recogidas en el aeropuerto.</p>
                    </h1>
                    
                </header>
                <section className={styles.section}>
                    <div className={`${styles.content}`}>
                        <header>
                            <h2>¿Por qué elegirnos a nosotros?</h2>
                        </header>
                        <p>Nuestro principal compromiso es que el viajero se sienta cómodo en todo momento, ¿te apetece poner música? pués conectate al bluetoth</p>
                    </div>
                    <div>
                        <img className={`${styles.image} ${styles.big}`} src="/images/coche.jpg" alt="Vehículo seguro"/>
                    </div>
                </section>
                <section className={`${styles.section} ${styles.reverse}`}>
                    <div className={`${styles.content}`}>
                    <header>
                        <h2>Choffers profesionales</h2>
                    </header>
                    <p>Totalmente cercanos, con nuestro permiso en vigor....</p>
                    </div>
                    <div>
                        <img className={`${styles.image} ${styles.big}`} src="/images/choffers.jpg" alt="Choffers profesionales" />
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={`${styles.content}`}>
                        <header>
                            <h2>Vehículo con las últimas prestaciones</h2>
                        </header>
                        <p>Acomodate en nuetro zzz y disfruta del viaje gracias a todas las comodidades que posee:</p>
                        <ul>
                            <li>
                                Asientos requinables
                            </li>
                            <li>
                                Apoya cabeza
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img className={`${styles.image} ${styles.big}`} src="/images/comodidad.jpg" alt="Vehículo con las mejores prestaciones"/>
                    </div>
                </section>
                <section className={`${styles.section} ${styles.reverse}`}>
                    <div className={`${styles.content}`}>
                    <header>
                        <h2>Medidas Covid</h2>
                    </header>
                    <p>Garantizamos que el vehículo este desinfectado</p>
                    </div>
                    <div>
                        <img className={`${styles.image} ${styles.small}`} src="/images/stop_coronovirus.jpg" alt="Medidas anti-covid"/>
                    </div>
                </section>
                <section className={`${styles.section}`}>
                    <div className={`${styles.content}`}>
                        <header>
                            <h2>Nuestros precios:</h2>
                        </header>
                        <p>Precios competitivos.</p>
                        <ul>
                            <li>{'x€/kilómetro           '}</li>
                            <li>y€/minuto</li>
                        </ul>
                    </div>
                    <div></div>
                </section>
            </div>
        </>
    )
}

export default Home
