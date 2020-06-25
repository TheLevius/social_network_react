import React from 'react';
import {NavLink, Route} from 'react-router-dom';
import Logo from "./Logo/Logo";
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={'Header block'}>
            <div className={styles._wrapper}>
                <div className={styles._container}>
                    <Logo/>

                    <div className={styles._loginBox}>
                        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;