import React from 'react';
import styles from './Logo.module.css';
import Logosvg from '../../../img/svg/logotype.svg';

const Logo = () => {
    return (
        <div className="Logo block block_inline">
            <a className={styles._homelink} href="#homelink" id="homelink">
                <img src={Logosvg} alt="homelink"/>
                <span>Petfans</span>
            </a>
        </div>
    );
}

export default Logo;
