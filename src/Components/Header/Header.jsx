import React from 'react';
import Logo from "./Logo/Logo";
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={'Header block'}>
            <div className={styles._wrapper}>
                <div className={styles._container}>
                    <Logo/>
                </div>
            </div>
        </header>

    );
}

export default Header;