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
                     
                    <h1 className={styles.title}> 
                        <span>
                            VTC
                        </span>
                        <p className={styles.description}>Ahora puedes pedir tu VTC para traslados dentro de Madrid o recogidas en el aeropuerto. No dudes en contactar con nosotros, estamos disponibles 24 horas.</p>
                    </h1>
                    
                </header>
                <section className={styles.section}>
                    <div className={`${styles.content}`}>
                        <header>
                            <h2>¿Por qué elegirnos a nosotros?</h2>
                        </header>
                        <p>Nuestro principal compromiso es que te sientas cómodo en todo momento y disfrutes del viaje.</p>
                        <p>Relájate en nuestro confortable Lexus ES, ¿te apetece poner música? pués conectate a nuestro bluetooth o también puedes acceder a internet desde tu móvil conectándote a nuestra wifi. Dinos que música te gusta y te la pondremos</p>
                    </div>
                    <div>
                        <img className={`${styles.image} ${styles.big}`} src="/images/lexusesh3002.jpeg" alt="Vehículo seguro"/>
                    </div>
                </section>
                <section className={`${styles.section} ${styles.reverse}`}>
                    <div className={`${styles.content}`}>
                    <header>
                        <h2>Choffers profesionales</h2>
                    </header>
                    <p>Totalmente cercanos y de buen trato. Haremos todo lo posible para hacerte el viaje más ameno.</p>
                    </div>
                </section>
                <section className={styles.section}>
                    <div className={`${styles.content}`}>
                        <header>
                            <h2>Vehículo con las últimas prestaciones</h2>
                        </header>
                        <p>Acomodate en nuetro lexus es h 300 y disfruta del viaje gracias a todas las comodidades que posee:</p>
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
                        <img className={`${styles.image} ${styles.big}`} src="/images/interior_comodo_parte_delantera.png" alt="Vehículo cómodo con las mejores prestaciones"/>
                    </div>
                </section>
                <section className={`${styles.section} ${styles.reverse}`}>
                    <div className={`${styles.content}`}>
                    <header>
                        <h2>Medidas Covid</h2>
                    </header>
                    <p>Contamos con una máquina de ozono para desinfectar el vehículo y proteger del covid.</p>
                    </div>
                    <div>
                        <img className={`${styles.image} ${styles.small}`} src="/images/stop_coronovirus.jpg" alt="Medidas anti-covid"/>
                    </div>
                </section>
                <section className={`${styles.section}`}>
                    <div className={`${styles.content}`}>
                        <header>
                            <h2>Desplazamientos:</h2>
                        </header>
                        <p>Hacemos desplazamientos tanto provinciales, interprovinciales, como dentro de la Comunidad Europea.</p>
                    </div>
                    <div>
                        <img className={`${styles.image} ${styles.small}`} src="/images/union_europea.jpg" alt="Desplazamientos en la unión europea"/>
                    </div>
                </section>
                <section className={`${styles.section}`}>
                    <div className={`${styles.content}`}>
                        <header>
                            <h2>Nuestros precios:</h2>
                        </header>
                        <p>Precios competitivos.</p>
                        <ul>
                            <li>Precio por kilómetro</li>
                            <li>Precio por minuto</li>
                        </ul>
                        <p>Podrás establecer el precio de antemano con nosotros.</p>
                    </div>
                    <div></div>
                </section>
            </div>
        </>
    )
}

export default Home
