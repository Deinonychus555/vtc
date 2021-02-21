import React, {useState, useEffect} from 'react';
import Image from 'next/image';

import './NavBar.module.css';
import styles from './NavBar.module.css';
import choffers_info from '../../shared/choffers.json';

const NavBar = () => {

    const [top, setTop] = useState(true);
    const [test, setTest] = useState('zzz');
    const [choffer, setChoffer] = useState(null);
    var choffers = []

    const getChoffer = () => {
        /*
        let i = Math.floor(Math.random() * 2)
        return choffers[keys[i]];
         */
        console.log('Get choffer')
        const keys = Object.keys(choffers_info);
        for (let key of keys){
            choffers.push(choffers_info[key])
        } 
        let date = new Date()
        let UTCHour = date.getUTCHours();
        let hour = UTCHour > 23 & UTCHour == 0 ? 1 : UTCHour + 1;
        console.log(choffers)
        console.log('hour:', hour)
        let choffer = choffers.filter((choffer) => {
            console.log(choffer.availability)
            console.log(choffer.availability[0] <= hour)
            console.log(choffer.availability[1] > hour || choffer.availability[1] < choffer.availability[0])
            console.log(choffer.availability[0] <= hour) && (choffer.availability[1] > hour || choffer.availability[1] < choffer.availability[0])
            return (choffer.availability[0] <= hour) && (choffer.availability[1] > hour || choffer.availability[1] < choffer.availability[0])
        })
        return choffer[0]
    }
    
    useEffect(() => {
        const scroll = () => {
            setTop(window.scrollY > 100? false : true);
        };
        window.addEventListener('scroll', scroll);
        return () => {
            window.removeEventListener('scroll', scroll);
        }
    },[])

    useEffect(() => {
       setTest('555');
    },[])

    useEffect(() => {
        
        setChoffer(getChoffer());
    },[])

    //className={`nav ${top && 'black'}`}
    //<div class={`${styles.nav} ${'top' && styles.black}`}>
    return (
        <div className={`${styles.nav} ${styles.flex} ${top && styles.top}` }>
            <div className={`${styles.flex}`}>
                <div className={`${styles.flex}`}>
                    <a href={`tel:+${choffer?.phone}`} target='_blank' title={`Llamar a ${choffer?.name}`}>
                        <img className={`${styles.nav__icon}`}  src={'/images/icon_phone.png'} alt="teléfono de contacto vtc"/>
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=${choffer?.phone}`} target='_blank' title={`Escribir a ${choffer?.name}`}>
                        <img className={`${styles.nav__icon}`} src={'/images/icon_whatsapp.svg'} alt="whatsapp de contacto vtc"/>
                    </a>
                </div>
            <div className={`${styles.flex}`}>
                <p className={styles.nav__title}>{`Llámanos para pedir tu VTC ${test}`}</p>
            </div>
            </div>
            <div>
                <img className={`${styles.nav__logo}`} src={'/images/VTC_Madrid.jpg'} alt="Licencia VTC Madrid"/> 
            </div>
            
        </div>
    )
}

export default NavBar
