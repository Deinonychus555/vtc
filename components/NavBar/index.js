import React, {useState, useEffect} from 'react';
//import Image from 'next/image';

import './NavBar.module.css';
import styles from './NavBar.module.css';
import {useChoffer} from '../../contexts/ChofferProvider';

const NavBar = () => {

    const [top, setTop] = useState(true);
    const choffer_ = useChoffer();
   
    
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
        if (!choffer_){
            setChoffer_(getChoffer());
        }    
    },[])

    //className={`nav ${top && 'black'}`}
    //<div class={`${styles.nav} ${'top' && styles.black}`}>
    return (
        <div className={`${styles.nav} ${styles.flex} ${top && styles.top}` }>
            <div className={`${styles.flex}`}>
                <div className={`${styles.flex}`}>
                    <a href={`tel:${choffer_?.phone}`} target='_blank' title={`Llamar a ${choffer_?.name}`}>
                        <img className={`${styles.nav__icon}`}  src={'/images/icon_phone.png'} alt="teléfono de contacto vtc"/>
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=${choffer_?.phone}`} target='_blank' title={`Escribir a ${choffer_?.name}`}>
                        <img className={`${styles.nav__icon}`} src={'/images/icon_whatsapp.svg'} alt="whatsapp de contacto vtc"/>
                    </a>
                </div>
            <div className={`${styles.flex}`}>
                <p className={styles.nav__title}>{`Llámanos para pedir tu VTC`}</p>
            </div>
            </div>
            <div>
                <img className={`${styles.nav__logo}`} src={'/images/VTC_Madrid.jpg'} alt="Licencia VTC Madrid"/> 
            </div>
            
        </div>
    )
}

export default NavBar

export const getStaticProps = () => {

    const getChoffer = () => {
        /*
        let i = Math.floor(Math.random() * 2)
        return choffers[keys[i]];
         */
        console.log('Get choffer NavBar')
        const keys = Object.keys(choffers_info);
        let choffers = []
        for (let key of keys){
            choffers.push(choffers_info[key])
        } 
        let date = new Date()
        let UTCHour = date.getUTCHours();
        let hour = UTCHour > 23 & UTCHour == 0 ? 1 : UTCHour + 1;
        let choffer = choffers.filter((choffer) => {
            if (choffer.availability[1] < choffer.availability[0]){ 
              return ((choffer.availability[0] <= hour) && (hour <=24)) || ((hour >=0 ) && (choffer.availability[1] > hour))
            } else{
              return (choffer.availability[0] <= hour) && (choffer.availability[1] > hour)
            }  
        })
        return choffer[0]
    }

    const choffer = getChoffer();
  
    return {
      props: {
        choffer
      },
    }
  }
