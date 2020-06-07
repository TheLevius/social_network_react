import React from 'react';
import styles from './Preloader.module.css';
import preloader from './../../../../img/svg/doubleRingPreloader40.svg';

const Preloader = (props) => {
    return <div className={styles._preloaderBox}>
        <img src={preloader} className={styles._preloader} />
    </div>
}

export default Preloader;